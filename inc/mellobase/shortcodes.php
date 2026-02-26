<?php

function mello_current_year_shortcode() {
    return date('Y');
}
add_shortcode('year', 'mello_current_year_shortcode');