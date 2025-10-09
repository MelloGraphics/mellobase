<?php

function redirect_taxonomy_to_cpt() {
    $taxonomy_cpt_map = [
        'solutions-category' => 'solutions',
        'services-categories' => 'services',
    ];

    foreach ($taxonomy_cpt_map as $taxonomy => $post_type) {
        if (is_tax($taxonomy)) {
            $term = get_queried_object();

            if ($term && !is_wp_error($term)) {
                // Check if a CPT post exists with the same slug as the taxonomy term
                $cpt_query = new WP_Query([
                    'post_type'      => $post_type,
                    'name'           => $term->slug,
                    'posts_per_page' => 1,
                    'fields'         => 'ids' // Get only the post ID for performance
                ]);

                if (!empty($cpt_query->posts)) {
                    $post_id = $cpt_query->posts[0]; // Get first matching CPT post
                    $redirect_url = get_permalink($post_id);
                } else {
                    // If no matching CPT post, fallback to the CPT archive
                    $redirect_url = home_url("/$post_type/");
                }

                // Redirect to the determined URL
                if ($redirect_url) {
                    wp_redirect($redirect_url, 301);
                    exit;
                }
            }
        }
    }
}

add_action('template_redirect', 'redirect_taxonomy_to_cpt');