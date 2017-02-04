<?php

// Add Stylesheet - Scripts - Fonts
// require 'inc/enqueue-styles-scripts-fonts.php';

// Custom <head>
// require 'inc/custom-head.php';

// Add After </head> Tag
// require 'inc/after-head.php';

// Custom Storefront Template Hook
// require 'inc/custom-template-hook.php';

// Custom Storefront Template Functions
// require 'inc/custom-template-functions.php';

// Custom Admin
// require 'inc/custom-admin.php';

// Custom Storefront Theme
// require 'inc/custom-storefront.php';

// WP Optimization
// require 'inc/wp-optimization.php';

// SWP Security
// require 'inc/wp-security.php';

remove_action( 'storefront_sidebar', 'storefront_get_sidebar', 10 );
remove_action( 'storefront_before_content', 'storefront_header_widget_region', 10 );




 ?>
