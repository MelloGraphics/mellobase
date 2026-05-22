<?php
/**
 * Enqueue pattern-specific styles based on block classnames `pattern--[name]`.
 *
 * Hooks into render_block to scan every block's className attribute for pattern-- classes.
 * Matched stylesheets are injected in wp_footer, covering all block types, templates,
 * and template parts (header, footer etc.) without output buffering.
 * Matches them to CSS files in the theme's /css/ directory using a progressive lookup
 * e.g. pattern--header__notification-bar → pattern--header.css.
 *
 * To debug, uncomment debug_pattern_styles() in output_pattern_styles().
 *
 * @package MelloBase
 */

namespace MelloBase\Enqueue\Blocks;

$collected_patterns = array();

add_filter('render_block', __NAMESPACE__ . '\collect_pattern_classes', 10, 2);
add_action('wp_footer', __NAMESPACE__ . '\output_pattern_styles', 1);

function collect_pattern_classes($block_content, $block)
{
    global $collected_patterns;

    if (empty($block['attrs']['className'])) {
        return $block_content;
    }

    $classes = $block['attrs']['className'];

    if (strpos($classes, 'pattern--') === false) {
        return $block_content;
    }

    preg_match_all('/\bpattern--([a-z0-9_-]+)\b/', $classes, $matches);

    $css_dir = get_stylesheet_directory() . '/css/';

    foreach (array_unique($matches[1] ?? array()) as $slug) {
        $parts = preg_split('/--|__/', $slug);

        while (!empty($parts)) {
            $candidate = 'pattern--' . $parts[0];
            if (file_exists($css_dir . $candidate . '.css')) {
                $collected_patterns[$candidate] = true;
                break;
            }
            array_pop($parts);
        }
    }

    return $block_content;
}

function output_pattern_styles()
{
    global $collected_patterns;

    $css_dir = get_stylesheet_directory() . '/css/';
    $css_uri = get_stylesheet_directory_uri() . '/css/';
    $version = wp_get_theme()->get('Version');

    // debug_pattern_styles($collected_patterns);

    foreach (array_keys($collected_patterns) as $base_pattern) {
        $file_path = $css_dir . $base_pattern . '.css';

        if (!file_exists($file_path)) {
            continue;
        }

        $src = $css_uri . $base_pattern . '.css';
        $ver = $version . '.' . filemtime($file_path);
        echo '<link rel="stylesheet" href="' . esc_url($src) . '?ver=' . esc_attr($ver) . '">' . "\n";
    }
}

function debug_pattern_styles($collected_patterns)
{
    echo '<pre style="background:#000;color:#0f0;padding:20px;position:fixed;bottom:0;left:0;z-index:99999;">';
    echo 'Collected patterns:' . "\n";
    print_r(array_keys($collected_patterns));
    echo '</pre>';
}