<?php
/**
 * Title: Submenu with grid
 * Slug: mellobase/submenu-grid
 * Description: Initial layout for a submenu with grid
 * Categories: Navigation, Columns
 * Keywords: Navigation, Columns, Submenu
 * Block Types: core/navigation-link, core/group, core/columns
 */
?>

<!-- wp:navigation-submenu {"label":"Primary Link","description":"","url":"#","kind":"custom","style":{"layout":{"selfStretch":"fit","flexSize":null}}} -->
<!-- wp:group {"tagName":"li","lock":{"move":true,"remove":true},"metadata":{"name":"Sub Content Wrapper"},"className":"submenu__content-wrapper","style":{"spacing":{"blockGap":"var:preset|spacing|medium"}},"layout":{"type":"constrained","contentSize":"100%"}} -->
<li class="wp-block-group submenu__content-wrapper"><!-- wp:group {"tagName":"ul","className":"submenu__columns","layout":{"type":"grid","columnCount":3,"minimumColumnWidth":null}} -->
<ul class="wp-block-group submenu__columns"><!-- wp:navigation-link {"label":"Default link","type":"service","description":"","id":1186,"url":"#","kind":"post-type","className":"is-style-link-box"} /-->

<!-- wp:navigation-link {"label":"Default link","type":"service","description":"","id":1186,"url":"#","kind":"post-type","className":"is-style-link-box"} /-->

<!-- wp:navigation-link {"label":"Default link","type":"service","description":"","id":1186,"url":"#","kind":"post-type","className":"is-style-link-box"} /-->

<!-- wp:navigation-link {"label":"Default link","type":"service","description":"","id":1186,"url":"#","kind":"post-type","className":"is-style-link-box"} /-->

<!-- wp:navigation-link {"label":"Default link","type":"service","description":"","id":1186,"url":"#","kind":"post-type","className":"is-style-link-box"} /-->

<!-- wp:navigation-link {"label":"Default link","type":"service","description":"","id":1186,"url":"#","kind":"post-type","className":"is-style-link-box"} /--></ul>
<!-- /wp:group --></li>
<!-- /wp:group -->
<!-- /wp:navigation-submenu -->