<?php
namespace MelloBase;

/**
 * Automatically include all PHP files in selected subfolders under /inc.
 */
$autoload_dirs = [
	get_template_directory() . '/inc/mellobase',
	get_template_directory() . '/inc/site-specific',
	// Uncomment if you want to load unused or experimental files too
	// get_template_directory() . '/inc/unused',
];

foreach ( $autoload_dirs as $dir ) {
	if ( is_dir( $dir ) ) {
		foreach ( glob( $dir . '/*.php' ) as $file ) {
			require_once $file;
		}
	}
}