<?php
/**
 * Server-side render for LDTR Shop block.
 * 
 * Note: The public TidyHQ shop page requires authentication, so this scraping
 * approach will likely not work. Consider using TidyHQ's API instead.
 */

if (!function_exists('mellobase_ldtr_shop_render_callback')):
	function mellobase_ldtr_shop_render_callback($attributes, $content)
	{

		// Configuration
		$url = 'https://ldtr-mtb.tidyhq.com/public/shop/products';

		// Fetch data from TidyHQ
		$response = wp_remote_get($url, array(
			'timeout' => 15,
			'headers' => array(
				'User-Agent' => 'WordPress/LDTR-Shop-Block',
			),
		));

		// Check for errors
		if (is_wp_error($response)) {
			return sprintf(
				'<div class="ldtr-shop-error"><p>Unable to fetch shop data: %s</p></div>',
				esc_html($response->get_error_message())
			);
		}

		$body = wp_remote_retrieve_body($response);
		$status_code = wp_remote_retrieve_response_code($response);

		// Check HTTP status
		if ($status_code !== 200) {
			return sprintf(
				'<div class="ldtr-shop-error"><p>Shop data unavailable (HTTP %d). The page may require authentication.</p></div>',
				absint($status_code)
			);
		}

		if (empty($body)) {
			return '<div class="ldtr-shop-error"><p>No data returned from TidyHQ.</p></div>';
		}

		// Parse HTML
		libxml_use_internal_errors(true);
		$dom = new DOMDocument();
		@$dom->loadHTML($body, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
		$xpath = new DOMXPath($dom);
		libxml_clear_errors();

		// Try to find product items
		$items = $xpath->query("//div[contains(@class, 'product-item')]");

		if ($items->length === 0) {
			// Maybe it's a login page? Check for common indicators
			$login_check = $xpath->query("//input[@type='password']");
			if ($login_check->length > 0) {
				return '<div class="ldtr-shop-error"><p>TidyHQ shop requires authentication. Consider using the TidyHQ API instead of web scraping.</p></div>';
			}

			return '<div class="ldtr-shop-error"><p>No products found. The page structure may have changed.</p></div>';
		}

		$products = array();

		foreach ($items as $item) {
			// Extract link
			$linkNodes = $xpath->query(".//a", $item);
			$link = '';
			if ($linkNodes->length > 0) {
				$link = $linkNodes->item(0)->getAttribute('href');
				if ($link && strpos($link, '/') === 0) {
					$link = 'https://ldtr-mtb.tidyhq.com' . $link;
				}
			}

			// Extract image
			$imgNodes = $xpath->query(".//img", $item);
			$img = '';
			if ($imgNodes->length > 0) {
				$img = $imgNodes->item(0)->getAttribute('src');
			}

			// Extract title
			$titleNodes = $xpath->query(".//div[contains(@class,'bold')]/a", $item);
			$title = '';
			if ($titleNodes->length > 0) {
				$title = trim($titleNodes->item(0)->textContent);
			}

			// Extract price
			$priceNodes = $xpath->query(".//div[contains(@class,'row')]//div[1]", $item);
			$price = '';
			if ($priceNodes->length > 0) {
				$price = trim($priceNodes->item(0)->textContent);
			}

			// Only add if we have at least a title
			if (!empty($title)) {
				$products[] = array(
					'title' => $title,
					'link' => $link,
					'image' => $img,
					'price' => $price,
				);
			}
		}

		if (empty($products)) {
			return '<div class="ldtr-shop-error"><p>No valid products found.</p></div>';
		}

		// Render products as a grid
		ob_start();
		?>
		<div class="ldtr-shop-grid">
			<?php foreach ($products as $product): ?>
				<div class="ldtr-shop-item">
					<?php if (!empty($product['image'])): ?>
						<div class="ldtr-shop-item__image">
							<?php if (!empty($product['link'])): ?>
								<a href="<?php echo esc_url($product['link']); ?>" target="_blank" rel="noopener">
									<img src="<?php echo esc_url($product['image']); ?>" alt="<?php echo esc_attr($product['title']); ?>"
										loading="lazy">
								</a>
							<?php else: ?>
								<img src="<?php echo esc_url($product['image']); ?>" alt="<?php echo esc_attr($product['title']); ?>"
									loading="lazy">
							<?php endif; ?>
						</div>
					<?php endif; ?>

					<div class="ldtr-shop-item__content">
						<h3 class="ldtr-shop-item__title">
							<?php if (!empty($product['link'])): ?>
								<a href="<?php echo esc_url($product['link']); ?>" target="_blank" rel="noopener">
									<?php echo esc_html($product['title']); ?>
								</a>
							<?php else: ?>
								<?php echo esc_html($product['title']); ?>
							<?php endif; ?>
						</h3>

						<?php if (!empty($product['price'])): ?>
							<p class="ldtr-shop-item__price">
								<?php echo esc_html($product['price']); ?>
							</p>
						<?php endif; ?>
					</div>
				</div>
			<?php endforeach; ?>
		</div>
		<?php

		return ob_get_clean();
	}
endif;