<?php
/**
 * One-time: generate alt text for images missing it.
 * Safe to delete after first admin load.
 */

function mello_bulk_generate_missing_alt_text() {

    if ( ! is_admin() || ! current_user_can( 'manage_options' ) ) {
        return;
    }

    // Prevent re-running
    if ( get_option( 'mello_alt_text_generated' ) ) {
        return;
    }

    $images = get_posts( [
        'post_type'      => 'attachment',
        'post_mime_type' => 'image',
        'post_status'    => 'inherit',
        'posts_per_page' => -1,
        'fields'         => 'ids',
    ] );

    foreach ( $images as $image_id ) {

        $existing_alt = get_post_meta( $image_id, '_wp_attachment_image_alt', true );
        if ( ! empty( $existing_alt ) ) {
            continue;
        }

        $file = get_attached_file( $image_id );
        $alt  = '';

        if ( $file ) {
            $filename = pathinfo( $file, PATHINFO_FILENAME );

            // Strip trailing dimensions (e.g. -780x1040)
            $filename = preg_replace( '/-\d+x\d+$/', '', $filename );

            // Replace separators with spaces
            $filename = str_replace( [ '-', '_' ], ' ', $filename );

            // Normalise whitespace
            $filename = preg_replace( '/\s+/', ' ', $filename );

            $alt = trim( $filename );
        }

        if ( empty( $alt ) ) {
            $alt = get_the_title( $image_id );
        }

        // Accessibility-friendly casing
        $alt = wp_strip_all_tags( $alt );
        $alt = strtolower( $alt );
        $alt = ucfirst( $alt );

        if ( $alt ) {
            update_post_meta( $image_id, '_wp_attachment_image_alt', $alt );
        }
    }

    // Mark as completed
    update_option( 'mello_alt_text_generated', time() );
}

// Run once on admin load
add_action( 'admin_init', 'mello_bulk_generate_missing_alt_text' );