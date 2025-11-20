<?php
/**
 * Dynamic renderer for the LDTR Events block.
 */

$keywords = $attributes['keywords'] ?? '';
$limit = $attributes['limit'] ?? 6;
$show_all = $attributes['showAll'] ?? false;
$view_type = $attributes['viewType'] ?? 'grid';
$slides_only = $attributes['slidesOnly'] ?? false;
$show_images = $attributes['showImages'] ?? true;
$show_description = $attributes['showDescription'] ?? false;
$show_past = $attributes['showPast'] ?? false;
$show_view_more_button = $attributes['showViewMoreButton'] ?? true;
$show_register_button = $attributes['showRegisterButton'] ?? true;

$transient_key = 'ldtr_events_cache_v5';

// Try cached version first
$events = get_transient($transient_key);

if (false === $events) {

	$response = wp_remote_get('https://ldtr-mtb.tidyhq.com/public/events.json');

	if (is_wp_error($response)) {
		return '<p>Error fetching events from TidyHQ.</p>';
	}

	$body = wp_remote_retrieve_body($response);
	$events = json_decode($body);

	if (!is_array($events)) {
		return '<p>No events found.</p>';
	}

	/* Normalise TidyHQ fields */
	foreach ($events as $event) {

		// Build public event URL if missing
		if (empty($event->public_url) && isset($event->id, $event->code)) {
			$event->public_url = 'https://ldtr-mtb.tidyhq.com/public/events/' . $event->id . '-' . $event->code;
		}

		// Build direct cart URL for registration
		if (isset($event->id, $event->name)) {
			// Create slug from event name
			$slug = strtolower($event->name);
			$slug = preg_replace('/[^a-z0-9\s-]/', '', $slug); // Remove special chars
			$slug = preg_replace('/\s+/', '-', $slug); // Replace spaces with hyphens
			$slug = trim($slug, '-'); // Remove leading/trailing hyphens
			
			$event->cart_url = 'https://ldtr-mtb.tidyhq.com/public/schedule/events/' 
				. $event->id . '-' . $slug . '/carts/new';
		}

		// Build correct TidyHQ S3 image URL
		if (isset($event->id, $event->image_file_name) && !empty($event->image_file_name)) {

			// TidyHQ uses a hash-based structure, not the simple ID
			// We need to construct the hash from the available data
			// Format: https://s3.tidyhq.com/orgs/{org_hash}/event/image/{image_hash}/show_lg/{filename}
			
			// For now, we'll try to use a direct API call or construct if we can find the pattern
			// The org_hash appears to be: 9b8a74f6b954
			// But the image hash is unique per image and not derivable from the event ID
			
			// Placeholder - this won't work without the proper hash
			// You may need to get this from a different TidyHQ API endpoint
			$event->image_url = null; // Will be handled below with fallback
		}

		// Map TidyHQ "body" into "description" if needed
		if (empty($event->description) && !empty($event->body)) {
			$event->description = $event->body;
		}

		// Map account_id to category name for display
		$category_map = [
			'865466' => 'Social Rides',
			'865521' => 'Girls of Gravity',
			'538869' => 'Skills Sessions',
			'441023' => 'Lysty Juniors',
			'442456' => 'Trail Building',
			'372176' => 'Administration'
		];

		if (!empty($event->account_id)) {
			$account_id_str = (string) $event->account_id;
			$event->category_name = $category_map[$account_id_str] ?? null;
		}
	}

	// Only cache non-empty successful responses
	if (!empty($events)) {
		set_transient($transient_key, $events, 15 * 60);
	}
}

$now = time();

/* Remove malformed events (missing start_at date) */
$events = array_filter($events, function ($event) {
	return isset($event->start_at) && !empty($event->start_at);
});

// Reset array keys after filtering
$events = array_values($events);

// Filter by upcoming / past
$events = array_filter($events, function ($event) use ($show_past, $now) {
	// Handle timezone-aware dates from TidyHQ
	// TidyHQ returns dates with timezone like: 2025-11-15T08:45:00.000+11:00
	
	try {
		$start_date = new DateTime($event->start_at);
		$start = $start_date->getTimestamp();
		
		if (isset($event->end_at)) {
			$end_date = new DateTime($event->end_at);
			$end = $end_date->getTimestamp();
		} else {
			// If no end time, consider event as lasting 4 hours
			$end = $start + (4 * 3600);
		}
	} catch (Exception $e) {
		// Fallback to strtotime if DateTime fails
		$start = strtotime($event->start_at);
		$end = isset($event->end_at) ? strtotime($event->end_at) : $start + (4 * 3600);
	}

	if ($show_past) {
		return $end < $now;
	}

	// Show event if it hasn't ended yet (so "current" events still show)
	return $end >= $now;
});

// Reset array keys after filtering
$events = array_values($events);

// Filter by keywords (searches event title)
if (!empty($keywords) && trim($keywords) !== '') {
	
	$events = array_filter($events, function ($event) use ($keywords) {

		// Skip if event has no name
		if (empty($event->name)) {
			return false;
		}

		// Split keywords by comma and trim whitespace
		$keyword_array = array_map('trim', explode(',', $keywords));
		$event_name = strtolower($event->name);
		
		// Check if ANY keyword appears in the event name
		foreach ($keyword_array as $keyword) {
			if (!empty($keyword) && stripos($event_name, strtolower($keyword)) !== false) {
				return true;
			}
		}

		return false;
	});
	
	// Reset array keys after filtering
	$events = array_values($events);
}

// Apply limit (unless showAll is true)
if (!$show_all) {
	$events = array_slice($events, 0, $limit);
}

if (empty($events)) {
	if ($slides_only) {
		return; // No slides, exit silently
	}
	
	// Display friendly no events message with social links
	echo '<div class="ldtr-events-no-results">';
	echo '<p class="ldtr-events-no-results__message">There are currently no events scheduled.</p>';
	echo '<p class="ldtr-events-no-results__sub">Follow us on social media for the latest updates:</p>';
	echo '<div class="ldtr-events-social-links">';
	
	// Social media links - Update these URLs with your actual social media profiles
	$social_links = [
		'facebook' => [
			'url' => 'https://facebook.com/yourpage', // UPDATE THIS
			'label' => 'Facebook',
			'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>'
		],
		'instagram' => [
			'url' => 'https://instagram.com/yourpage', // UPDATE THIS
			'label' => 'Instagram',
			'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>'
		],
		'twitter' => [
			'url' => 'https://twitter.com/yourpage', // UPDATE THIS
			'label' => 'Twitter',
			'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>'
		]
	];
	
	foreach ($social_links as $platform => $data) {
		echo '<a href="' . esc_url($data['url']) . '" class="ldtr-events-social-link ldtr-events-social-link--' . esc_attr($platform) . '" target="_blank" rel="noopener" aria-label="' . esc_attr($data['label']) . '">';
		echo $data['icon'];
		echo '<span class="ldtr-events-social-link__label">' . esc_html($data['label']) . '</span>';
		echo '</a>';
	}
	
	echo '</div>';
	echo '</div>';
	
	return; // Exit after showing no results message
}

// Rendering helpers
if (!function_exists('ldtr_event_card')):
	function ldtr_event_card($event, $slides_only, $show_images, $show_description, $show_view_more_button, $show_register_button)
	{

		// Ensure required fields exist
		if (empty($event->start_at) || empty($event->name)) {
			return '';
		}

		// Format date in the event's timezone (Melbourne +11:00)
		try {
			$start_date = new DateTime($event->start_at);
			$start_fmt = $start_date->format('j M Y - g:ia');
		} catch (Exception $e) {
			$start_fmt = date('j M Y - g:ia', strtotime($event->start_at));
		}
		
		$output = '';

		if ($slides_only) {
			$output .= '<div class="swiper-slide ldtr-event-slide">';
		} else {
			$output .= '<div class="ldtr-event-card">';
		}

		if ($show_images && !empty($event->image_url)) {
			$output .= '<div class="ldtr-event-card__image">';
			$output .= '<img src="' . esc_url($event->image_url) . '" alt="">';
			$output .= '</div>';
		}

		$output .= '<div class="ldtr-event-card__content">';
		$output .= '<h3 class="ldtr-event-card__title">' . esc_html($event->name) . '</h3>';
		
		// Display category tag if available
		if (!empty($event->category_name)) {
			$output .= '<span class="ldtr-event-card__category">' . esc_html($event->category_name) . '</span>';
		}
		
		$output .= '<p class="ldtr-event-card__date">' . esc_html($start_fmt) . '</p>';

		if ($show_description && !empty($event->description)) {
			$output .= '<div class="ldtr-event-card__desc">' . wp_kses_post($event->description) . '</div>';
		}

		// Button container
		if ($show_view_more_button || $show_register_button) {
			$output .= '<div class="ldtr-event-card__buttons">';
			
			if ($show_view_more_button && !empty($event->public_url)) {
				$output .= '<a class="ldtr-event-card__button ldtr-event-card__button--view-more" href="' .
					esc_url($event->public_url) .
					'" target="_blank" rel="noopener">View More</a>';
			}
			
			if ($show_register_button && !empty($event->cart_url)) {
				$output .= '<a class="ldtr-event-card__button ldtr-event-card__button--register" href="' .
					esc_url($event->cart_url) .
					'" target="_blank" rel="noopener">Register</a>';
			}
			
			$output .= '</div>';
		}

		$output .= '</div></div>';

		return $output;
	}
endif;

// Output wrapper unless slidesOnly is true
if (!$slides_only) {
	$wrapper_classes = 'ldtr-events ldtr-events--' . esc_attr($view_type);
	echo '<div ' . get_block_wrapper_attributes(['class' => $wrapper_classes]) . '>';
}

foreach ($events as $event) {
	echo ldtr_event_card($event, $slides_only, $show_images, $show_description, $show_view_more_button, $show_register_button);
}

if (!$slides_only) {
	echo '</div>';
}