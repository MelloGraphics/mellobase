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
add_action('wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_pattern_styles');

/**
 * Enqueue pattern styles only for core/group blocks that have pattern--* classes.
 */
function enqueue_pattern_styles()
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
	$pattern_stylesheets = get_pattern_stylesheets();
	$pattern_classes = find_pattern_classes_in_content($post->post_content);

	// Only enqueue stylesheets for patterns actually used on the page
	foreach ($pattern_classes as $pattern_class) {
		if (isset($pattern_stylesheets[$pattern_class])) {
			$stylesheet_info = $pattern_stylesheets[$pattern_class];
			
			wp_enqueue_style(
				sanitize_title($pattern_class),
				$stylesheet_info['src'],
				array(),
				$theme_version . '.' . filemtime($stylesheet_info['path'])
			);
		}
	}
}

/**
 * Find all pattern--* classes used in core/group blocks.
 *
 * @param string $content Post content to parse.
 * @return array Array of pattern class names found (e.g., ['pattern--hero', 'pattern--cta']).
 */
function find_pattern_classes_in_content($content)
{
	$pattern_classes = array();
	$blocks = parse_blocks($content);

	$pattern_classes = extract_pattern_classes_from_blocks($blocks);

	return array_unique($pattern_classes);
}

/**
 * Recursively extract pattern classes from blocks, including reusable blocks.
 *
 * @param array $blocks Array of parsed blocks.
 * @param int $depth Current recursion depth.
 * @return array Array of pattern class names.
 */
function extract_pattern_classes_from_blocks($blocks, $depth = 0)
{
	$pattern_classes = array();

	foreach ($blocks as $block) {
		// Handle reusable blocks (core/block)
		if ('core/block' === $block['blockName'] && !empty($block['attrs']['ref'])) {
			// Get the reusable block content
			$reusable_block = get_post($block['attrs']['ref']);
			if ($reusable_block && $reusable_block->post_content) {
				$inner_blocks = parse_blocks($reusable_block->post_content);
				$inner_patterns = extract_pattern_classes_from_blocks($inner_blocks, $depth + 1);
				$pattern_classes = array_merge($pattern_classes, $inner_patterns);
			}
		}
		
		// Check if this is a core/group block with pattern classes
		if ('core/group' === $block['blockName'] && !empty($block['attrs']['className'])) {
			$class_names = explode(' ', $block['attrs']['className']);
			
			foreach ($class_names as $class_name) {
				if (strpos($class_name, 'pattern--') === 0) {
					// Extract base pattern name for variants
					// e.g., 'pattern--cards--articles' becomes 'pattern--cards'
					// e.g., 'pattern--cards__article' becomes 'pattern--cards'
					$base_pattern = extract_base_pattern_name($class_name);
					$pattern_classes[] = $base_pattern;
				}
			}
		}
		
		// Check inner blocks
		if (!empty($block['innerBlocks'])) {
			$inner_patterns = extract_pattern_classes_from_blocks($block['innerBlocks'], $depth + 1);
			$pattern_classes = array_merge($pattern_classes, $inner_patterns);
		}
	}

	return $pattern_classes;
}

/**
 * Extract base pattern name from a pattern class.
 * Handles both '--' and '__' as delimiters for variants.
 * 
 * Examples:
 * - 'pattern--cards--articles' → 'pattern--cards'
 * - 'pattern--cards__article' → 'pattern--cards'
 * - 'pattern--cards' → 'pattern--cards'
 *
 * @param string $class_name The full class name.
 * @return string The base pattern name.
 */
function extract_base_pattern_name($class_name)
{
	// First, check if there's a '__' (double underscore) - this indicates a variant
	if (strpos($class_name, '__') !== false) {
		// Split at the first '__' and take everything before it
		$parts = explode('__', $class_name, 2);
		return $parts[0];
	}
	
	// Otherwise, split by '--' to get parts
	$parts = explode('--', $class_name);
	
	// If we have more than 2 parts (e.g., 'pattern', 'cards', 'articles')
	// return just the first two parts (e.g., 'pattern--cards')
	if (count($parts) > 2) {
		return $parts[0] . '--' . $parts[1];
	}
	
	// Otherwise return the original (e.g., 'pattern--cards')
	return $class_name;
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