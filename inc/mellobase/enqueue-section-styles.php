<?php
/**
 * Enqueue section-specific styles based on core/group classnames `section--[name]`.
 *
 * @package MelloBase
 */

namespace MelloBase\Enqueue\Blocks;

/**
 * Enqueue section styles for core/group blocks with section classes.
 */
add_action('wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_section_styles');

/**
 * Enqueue section styles only for core/group blocks that have section--* classes.
 */
function enqueue_section_styles()
{
	// Only run on singular pages with content
	if (!is_singular()) {
		return;
	}

	global $post;
	if (!$post || !has_blocks($post->post_content)) {
		return;
	}

	$theme_version = wp_get_theme()->get('Version');
	$section_stylesheets = get_section_stylesheets();
	$section_classes = find_section_classes_in_content($post->post_content);

	// Only enqueue stylesheets for sections actually used on the page
	foreach ($section_classes as $section_class) {
		if (isset($section_stylesheets[$section_class])) {
			$stylesheet_info = $section_stylesheets[$section_class];
			
			wp_enqueue_style(
				sanitize_title($section_class),
				$stylesheet_info['src'],
				array(),
				$theme_version . '.' . filemtime($stylesheet_info['path'])
			);
		}
	}
}

/**
 * Find all section--* classes used in core/group blocks.
 *
 * @param string $content Post content to parse.
 * @return array Array of section class names found (e.g., ['section--hero', 'section--cta']).
 */
function find_section_classes_in_content($content)
{
	$section_classes = array();
	$blocks = parse_blocks($content);

	$section_classes = extract_section_classes_from_blocks($blocks);

	return array_unique($section_classes);
}

/**
 * Recursively extract section classes from blocks, including reusable blocks.
 *
 * @param array $blocks Array of parsed blocks.
 * @param int $depth Current recursion depth.
 * @return array Array of section class names.
 */
function extract_section_classes_from_blocks($blocks, $depth = 0)
{
	$section_classes = array();

	foreach ($blocks as $block) {
		// Handle reusable blocks (core/block)
		if ('core/block' === $block['blockName'] && !empty($block['attrs']['ref'])) {
			// Get the reusable block content
			$reusable_block = get_post($block['attrs']['ref']);
			if ($reusable_block && $reusable_block->post_content) {
				$inner_blocks = parse_blocks($reusable_block->post_content);
				$inner_patterns = extract_section_classes_from_blocks($inner_blocks, $depth + 1);
				$section_classes = array_merge($section_classes, $inner_patterns);
			}
		}
		
		// Check if this is a core/group block with section classes
		if ('core/group' === $block['blockName'] && !empty($block['attrs']['className'])) {
			$class_names = explode(' ', $block['attrs']['className']);
			
			foreach ($class_names as $class_name) {
				if (strpos($class_name, 'section--') === 0) {
					// Extract base section name for variants
					// e.g., 'section--hero--centered' becomes 'section--hero'
					$base_section = extract_base_section_name($class_name);
					$section_classes[] = $base_section;
				}
			}
		}
		
		// Check inner blocks
		if (!empty($block['innerBlocks'])) {
			$inner_patterns = extract_section_classes_from_blocks($block['innerBlocks'], $depth + 1);
			$section_classes = array_merge($section_classes, $inner_patterns);
		}
	}

	return $section_classes;
}

/**
 * Extract base section name from a section class.
 * Handles both '--' and '__' as delimiters for variants.
 * 
 * Examples:
 * - 'section--hero--centered' → 'section--hero'
 * - 'section--hero__large-centered' → 'section--hero'
 * - 'section--hero' → 'section--hero'
 *
 * @param string $class_name The full class name.
 * @return string The base section name.
 */
function extract_base_section_name($class_name)
{
	// First, check if there's a '__' (double underscore) - this indicates a variant
	if (strpos($class_name, '__') !== false) {
		// Split at the first '__' and take everything before it
		$parts = explode('__', $class_name, 2);
		return $parts[0];
	}
	
	// Otherwise, split by '--' to get parts
	$parts = explode('--', $class_name);
	
	// If we have more than 2 parts (e.g., 'section', 'hero', 'centered')
	// return just the first two parts (e.g., 'section--hero')
	if (count($parts) > 2) {
		return $parts[0] . '--' . $parts[1];
	}
	
	// Otherwise return the original (e.g., 'section--hero')
	return $class_name;
}

/**
 * Get all available section stylesheets.
 *
 * @return array Array of section stylesheets with class name as key and file info as value.
 */
function get_section_stylesheets()
{
	$section_files = glob(get_stylesheet_directory() . '/css/section--*.css');

	if (false === $section_files) {
		return array();
	}

	$stylesheets = array();
	$section_url = get_stylesheet_directory_uri() . '/css/';
	$prefer_rtl = is_rtl();

	foreach ($section_files as $file_path) {
		$filename = basename($file_path);

		// Skip RTL files if we're processing them separately
		if ($prefer_rtl && strpos($filename, '-rtl.css') !== false) {
			continue;
		}

		// Check if this is a base file (not RTL)
		if (strpos($filename, '-rtl.css') !== false) {
			continue;
		}

		$class_name = str_replace('.css', '', $filename); // e.g. 'section--hero'

		// Choose RTL version if available and preferred
		$final_filename = $filename;
		$final_path = $file_path;

		if ($prefer_rtl) {
			$rtl_filename = str_replace('.css', '-rtl.css', $filename);
			$rtl_path = get_stylesheet_directory() . '/css/' . $rtl_filename;

			if (file_exists($rtl_path)) {
				$final_filename = $rtl_filename;
				$final_path = $rtl_path;
			}
		}

		$stylesheets[$class_name] = array(
			'path' => $final_path,
			'src' => $section_url . $final_filename,
		);
	}

	return $stylesheets;
}