<?php
/**
 * Enqueue pattern-specific styles based on core/group classnames `pattern--[name]`.
 *
 * @package MelloBase
 */

namespace MelloBase\Enqueue\Blocks;

/**
 * Enqueue pattern styles for core/group blocks with pattern classes.
 */
add_action('after_setup_theme', __NAMESPACE__ . '\enqueue_pattern_styles');

/**
 * Register pattern styles that will be automatically enqueued when core/group blocks are present.
 *
 * This approach lets WordPress handle the conditional loading - styles are only loaded
 * when core/group blocks are actually used on the page.
 */
function enqueue_pattern_styles()
{
	$theme_version = wp_get_theme()->get('Version');
	$pattern_stylesheets = get_pattern_stylesheets();

	foreach ($pattern_stylesheets as $pattern_class => $stylesheet_info) {
		$args = array(
			'handle' => sanitize_title($pattern_class),
			'path' => $stylesheet_info['path'],
			'src' => $stylesheet_info['src'],
			'ver' => $theme_version . '.' . filemtime($stylesheet_info['path']),
		);

		// Register this stylesheet with the core/group block
		// WordPress will automatically enqueue it when core/group blocks are present
		wp_enqueue_block_style('core/group', $args);
	}
}

/**
 * Get all available pattern stylesheets.
 *
 * @return array Array of pattern stylesheets with class name as key and file info as value.
 */
function get_pattern_stylesheets()
{
	$pattern_files = glob(get_stylesheet_directory() . '/css/pattern--*.css');

	if (false === $pattern_files) {
		return array();
	}

	$stylesheets = array();
	$pattern_url = get_stylesheet_directory_uri() . '/css/';
	$prefer_rtl = is_rtl();

	foreach ($pattern_files as $file_path) {
		$filename = basename($file_path);

		// Skip RTL files if we're processing them separately
		if ($prefer_rtl && strpos($filename, '-rtl.css') !== false) {
			continue;
		}

		// Check if this is a base file (not RTL)
		if (strpos($filename, '-rtl.css') !== false) {
			continue;
		}

		$class_name = str_replace('.css', '', $filename); // e.g. 'pattern--hero'

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
			'src' => $pattern_url . $final_filename,
		);
	}

	return $stylesheets;
}