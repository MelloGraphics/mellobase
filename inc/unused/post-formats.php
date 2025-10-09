<?php

function mellobase_setup_post_formats() {
    add_theme_support( 'post-formats', array( 'video', 'gallery' ) );
}
add_action( 'after_setup_theme', 'mellobase_setup_post_formats' );