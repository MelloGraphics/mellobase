<?php
/**
 * Title: Hero - Image Right
 * Slug: mellobase/hero-image-right
 * Description: Hero section with image on the right.
 * Categories: heros
 * Keywords: Section, Hero, Image Right
 * Block Types: core/group, core/heading, core/paragraph, core/button, core/image
 */
?>

<!-- wp:group {"tagName":"section","metadata":{"name":"Section - Hero With Image Right","categories":["heros"],"patternName":"mellobase/hero-image-right"},"align":"full","className":"pattern\u002d\u002dhero pattern\u002d\u002dhero\u002d\u002dimage-right is-style-default","backgroundColor":"pattern","layout":{"type":"constrained"}} -->
<section class="wp-block-group alignfull pattern--hero pattern--hero--image-right is-style-default has-pattern-background-color has-background"><!-- wp:columns {"verticalAlignment":"center","metadata":{"name":"Image Wrapper"},"align":"wide","className":"pattern\u002d\u002dhero\u002d\u002dimage-right__content-wrapper","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|large"}}}} -->
<div class="wp-block-columns alignwide are-vertically-aligned-center pattern--hero--image-right__content-wrapper"><!-- wp:column {"verticalAlignment":"center","width":"60%","className":"pattern\u002d\u002dhero__content-wrapper","layout":{"type":"default"}} -->
<div class="wp-block-column is-vertically-aligned-center pattern--hero__content-wrapper" style="flex-basis:60%"><!-- wp:heading {"textAlign":"left","level":1,"metadata":{"name":"H1 title","bindings":{"__default":{"source":"core/pattern-overrides"}}},"fontSize":"medium","animationType":"slide-up","animateSelf":true} -->
<h1 class="wp-block-heading has-text-align-left has-medium-font-size" data-animation="true" data-animation-type="slide-up" data-animation-trigger="section" data-animation-duration="500" data-animation-delay="0" data-animation-trigger-point="-25">H1 SEO heading goes here lorem ipsum dolor</h1>
<!-- /wp:heading -->

<!-- wp:heading {"metadata":{"name":"H2 Title","bindings":{"__default":{"source":"core/pattern-overrides"}}},"fontSize":"xx-large"} -->
<h2 class="wp-block-heading has-xx-large-font-size">H2 display headline goes here</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"left","metadata":{"name":"Para","bindings":{"__default":{"source":"core/pattern-overrides"}}},"fontSize":"large","animateSelf":true} -->
<p class="has-text-align-left has-large-font-size" data-animation="true" data-animation-type="fade-in" data-animation-trigger="section" data-animation-duration="500" data-animation-delay="0" data-animation-trigger-point="-25">Paragraph Introduction paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu lectus odio. Aenean eleifend eu lorem eu interdum. Nunc non luctus nisi. Quisque in erat ullamcorper, pulvinar tortor eget</p>
<!-- /wp:paragraph -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button">Call to action</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","className":"pattern\u002d\u002dhero pattern\u002d\u002dhero\u002d\u002dimage-right__image-wrapper","layout":{"type":"constrained"}} -->
<div class="wp-block-column is-vertically-aligned-center pattern--hero pattern--hero--image-right__image-wrapper"><!-- wp:image {"id":98,"aspectRatio":"1","scale":"cover","sizeSlug":"full","linkDestination":"none","metadata":{"name":"Image","bindings":{"__default":{"source":"core/pattern-overrides"}}},"align":"center","className":"is-style-crop-two","scrollSpeed":-1,"animationType":"slide-down","animateSelf":true} -->
<figure class="wp-block-image aligncenter size-full is-style-crop-two" data-scroll-speed="-1" data-animation="true" data-animation-type="slide-down" data-animation-trigger="section" data-animation-duration="500" data-animation-delay="0" data-animation-trigger-point="-25"><img src="/wp-content/uploads/placeholder-image.png" alt="" class="wp-image-98" style="aspect-ratio:1;object-fit:cover"/></figure>
<!-- /wp:image --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></section>
<!-- /wp:group -->