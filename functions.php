<?php
/**
 * MelloBase functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package MelloBase
 */

namespace MelloBase;

/**
 * Load theme setup.
 */
require_once get_template_directory() . '/inc/setup.php';

/**
 * Enqueue general scripts and styles.
 */
require_once get_template_directory() . '/inc/enqueue.php';

/**
 * Enqueue blocks related scripts, styles, and functionality.
 */
require_once get_template_directory() . '/inc/enqueue-block-styles.php';

/**
 * Enqueue pattern related scripts, styles, and functionality.
 */
require_once get_template_directory() . '/inc/enqueue-pattern-styles.php';

/**
 * Enqueue pattern related scripts, styles, and functionality.
 */
require_once get_template_directory() . '/inc/enqueue-template-styles.php';

/**
 * Sync acf fields, cpts to theme
 */
require_once get_template_directory() . '/inc/sync-acf.php';

/**
 * Remove Comment System
 */
require_once get_template_directory() . '/inc/disable-comments.php';

/**
 * Register Block Pattern Categories and remove core patterns
 */
require_once get_template_directory() . '/inc/register-block-patterns.php';

/**
 * Show WP native custom fields when SCF plugin is active and register
 */
// require_once get_template_directory() . '/inc/native-custom-fields.php';

/**
 * Register Block binding sources
 */
// require_once get_template_directory() . '/inc/binding-sources.php';

/**
 * Register shortcodes
 */
// require_once get_template_directory() . '/inc/shortcodes.php';

/**
 * Redirect taxonomies to CPT pages
 */
// require_once get_template_directory() . '/inc/taxonomy-redirects.php';

/**
 * Required plugins
 */
require_once get_template_directory() . '/inc/required-plugins.php';

/**
 * Setup post formats
 */
// require_once get_template_directory() . '/inc/post-formats.php';

/**
 * Print block attributes
 */
// require_once get_template_directory() . '/inc/print-block-array.php';