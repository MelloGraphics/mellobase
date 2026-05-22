<?php
/**
 * Render the Term Display Title block
 *
 * @package MelloBase
 */

$queried_object = get_queried_object();

if ( ! $queried_object || ! ($queried_object instanceof WP_Term) ) {
	return;
}

if ( ! function_exists( 'get_field' ) ) {
	return;
}

$term_display_title = get_field( 'term_display_title', $queried_object );

if ( ! $term_display_title ) {
	return;
}

$tag_name = 'h' . ( isset( $attributes['level'] ) ? (int) $attributes['level'] : 2 );

$align_class_name = empty( $attributes['textAlign'] ) ? '' : "has-text-align-{$attributes['textAlign']}";

$wrapper_attributes = get_block_wrapper_attributes(
	array(
		'class' => $align_class_name,
	)
);

printf(
	'<%1$s %2$s>%3$s</%1$s>',
	$tag_name,
	$wrapper_attributes,
	$term_display_title
);