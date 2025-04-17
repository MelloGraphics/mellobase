<?php
/**
 * Title: Example Title
 * Slug: mellobase/video-testimonial
 * Description: Show case a large client testimonial
 * Categories: testimonials
 * Keywords: where to next, user journey
 * Block Types: core/cover, core/button, core/heading, core/video
 */
?>

<!-- wp:group {"metadata":{"name":"Video testimonials"},"align":"full","style":{"spacing":{"margin":{"top":"var:preset|spacing|80","bottom":"0"},"padding":{"top":"var:preset|spacing|80","bottom":"var:preset|spacing|80"}}},"className":"is-pattern-video-testimonial","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-pattern-video-testimonial" style="margin-top:var(--wp--preset--spacing--80);margin-bottom:0;padding-top:var(--wp--preset--spacing--80);padding-bottom:var(--wp--preset--spacing--80)"><!-- wp:group {"style":{"spacing":{"blockGap":"0","margin":{"top":"var:preset|spacing|80","bottom":"var:preset|spacing|80"}}},"layout":{"type":"flex","orientation":"vertical","justifyContent":"center","verticalAlignment":"center"}} -->
<div class="wp-block-group" style="margin-top:var(--wp--preset--spacing--80);margin-bottom:var(--wp--preset--spacing--80)"><!-- wp:heading {"textAlign":"center","fontSize":"xx-large"} -->
<h2 class="wp-block-heading has-text-align-center has-xx-large-font-size">What our clients are saying</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","fontSize":"small"} -->
<p class="has-text-align-center has-small-font-size">Our clients <strong>rate us 5/5</strong> here's why</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:cover {"url":"/wp-content/themes/mellobase/build/images/pattern-holding-image.png","dimRatio":70,"overlayColor":"contrast","isUserOverlayColor":true,"minHeight":60,"minHeightUnit":"vh","contentPosition":"center center","align":"wide","style":{"color":{"duotone":["#21203c","#b0d29d"]},"spacing":{"padding":{"top":"var:preset|spacing|80","bottom":"var:preset|spacing|80"},"margin":{"top":"var:preset|spacing|80","bottom":"var:preset|spacing|80"}}},"className":"agl agl-wipeCSS agl-in-distance-1","layout":{"type":"default"}} -->
<div class="wp-block-cover alignwide agl agl-wipeCSS agl-in-distance-1" style="margin-top:var(--wp--preset--spacing--80);margin-bottom:var(--wp--preset--spacing--80);padding-top:var(--wp--preset--spacing--80);padding-bottom:var(--wp--preset--spacing--80);min-height:60vh"><span aria-hidden="true" class="wp-block-cover__background has-contrast-background-color has-background-dim-70 has-background-dim"></span><img class="wp-block-cover__image-background" alt="" src="/wp-content/themes/mellobase/build/images/pattern-holding-image.png" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:columns {"verticalAlignment":"center","className":"agl agl-fadeCSS agl-in-delay-500 agl-in-distance-1"} -->
<div class="wp-block-columns are-vertically-aligned-center agl agl-fadeCSS agl-in-delay-500 agl-in-distance-1"><!-- wp:column {"verticalAlignment":"center","width":"50%"} -->
<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:50%"></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"50%","layout":{"type":"constrained","contentSize":"350px","justifyContent":"center"}} -->
<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:50%"><!-- wp:quote {"style":{"elements":{"link":{"color":{"text":"var:preset|color|base"}}},"layout":{"selfStretch":"fixed","flexSize":"650px"}},"textColor":"base"} -->
<blockquote class="wp-block-quote has-base-color has-text-color has-link-color"><!-- wp:paragraph {"fontSize":"medium"} -->
<p class="has-medium-font-size"><strong><em>“BJM are a truly fantastic partner. Having worked with the team on a few projects now, every time the deliver an amazing outcome, on time, and with little fuss.”</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"}} -->
<div class="wp-block-buttons"><!-- wp:button {"textColor":"contrast","style":{"elements":{"link":{"color":{"text":"var:preset|color|contrast"}}}},"className":"      link-type-lightboxvideo","lightbox":"lightboxvideo"} -->
<div class="wp-block-button link-type-lightboxvideo"><a class="wp-block-button__link has-contrast-color has-text-color has-link-color wp-element-button" href="https://vimeo.com/878085604"><img class="wp-image-254" style="width: 12px;" src="http://blokkidemo.local/wp-content/uploads/2023/11/icon-play-small.svg" alt="">  Watch video (1min)</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></blockquote>
<!-- /wp:quote --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div></div>
<!-- /wp:cover --></div>
<!-- /wp:group -->