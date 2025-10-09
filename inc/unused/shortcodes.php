<?php

function display_acf_seo_title() {
    if (is_tax() || is_category() || is_tag()) {
        $term = get_queried_object();

        if ($term && isset($term->term_id)) {
            $seo_title = get_field('seo_title', $term);

            if ($seo_title) {
                return esc_html($seo_title);
            }
        }
    }

    return ''; // Return nothing if no title is found
}

add_shortcode('acf_seo_title', 'display_acf_seo_title');