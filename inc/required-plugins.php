<?php

add_action('admin_init', 'mello_check_required_plugins');
add_action('admin_notices', 'mello_display_plugin_admin_notice');

function mello_check_required_plugins() {
    $missing_plugins = [];

    // Check for the private Mello Block Extensions plugin.
    if (!is_plugin_active('mello-block-extensions/mello-block-extensions.php')) {
        $missing_plugins[] = 'mello-block-extensions/mello-block-extensions.php';
    }

    // Check for the SVG Support plugin.
    if (!is_plugin_active('svg-support/svg-support.php')) {
        $missing_plugins[] = 'svg-support/svg-support.php';
    }

    // For ACF, require either the free version or ACF Pro.
    // The free version typically uses 'advanced-custom-fields/acf.php'
    // while ACF Pro uses 'advanced-custom-fields-pro/acf.php'.
    if (!( is_plugin_active('advanced-custom-fields/acf.php') || is_plugin_active('advanced-custom-fields-pro/acf.php') )) {
        $missing_plugins[] = 'advanced-custom-fields (free or pro)';
    }

    // Set or delete the transient based on whether plugins are missing.
    if (!empty($missing_plugins)) {
        set_transient('mello_missing_plugins', $missing_plugins, 60);
    } else {
        delete_transient('mello_missing_plugins');
    }
}

function mello_display_plugin_admin_notice() {
    if ($missing = get_transient('mello_missing_plugins')) {
        echo '<div class="notice notice-error"><p><strong>MelloBase Theme:</strong> The following required plugin(s) are not active:</p><ul>';
        foreach ($missing as $plugin) {
            // Display a custom message for ACF (either free or pro).
            if ($plugin === 'advanced-custom-fields (free or pro)') {
                echo '<li><a href="https://wordpress.org/plugins/advanced-custom-fields/" target="_blank">ACF (Advanced Custom Fields) Free or ACF Pro</a></li>';
            } elseif ($plugin === 'svg-support/svg-support.php') {
                echo '<li><a href="https://wordpress.org/plugins/svg-support/" target="_blank">SVG Support</a></li>';
            } elseif ($plugin === 'mello-block-extensions/mello-block-extensions.php') {
                echo '<li>Mello Block Extensions (private plugin)</li>';
            } else {
                echo '<li>' . esc_html($plugin) . '</li>';
            }
        }
        echo '</ul><p>Please install and activate the missing plugin(s) for full functionality.</p></div>';
    }
}