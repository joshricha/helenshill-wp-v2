<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package storefront
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<link rel="stylesheet" type="text/css" href="<?php bloginfo(stylesheet_directory); ?>/assets/css/MyFontsWebfontsKit.css">

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link rel="stylesheet" href="<?php bloginfo(stylesheet_directory); ?>/assets/css/style.css">

<!--[if lt IE 9]>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
<![endif]-->

<?php wp_head(); ?>
</head>


<body <?php body_class(); ?>>

<header>
  <div class="logo">
    <img class="full-logo" src="<?php bloginfo(stylesheet_directory); ?>/assets/img/logo.png" alt="Helen's Hill logo">
  <img class="responisve-logo" src="<?php bloginfo(stylesheet_directory); ?>/assets/img/logo-short.png" alt="Helen's Hill logo">
  </div><!-- logo -->
  <div class="menu-collapsed">
     <div class="bar-bg">
       <div class="bar">
         <p class="menu-text">MENU</p>
       </div><!-- menu collapsed -->
     </div><!-- bar bg -->
     <nav>
        <ul>
          <li><img class="logo-menu" src="<?php bloginfo(stylesheet_directory); ?>/assets/img/shield.png" alt="Logo"></li>
           <li><a href="#">Home</a></li>
           <li><a href="#">About</a></li>
           <li><a href="#">Clients</a></li>
           <li><p class="seperator">-</p></li>
           <li><a href="#">Contact Us</a></li>
        </ul>
     </nav>
  </div><!-- meny collapsed -->
</header>

<div id="page" class="hfeed site">
	<?php
	do_action( 'storefront_before_header' ); ?>

	<header id="masthead" class="site-header" role="banner" style="<?php storefront_header_styles(); ?>">
		<div class="col-full">

			<?php
			/**
			 * Functions hooked into storefront_header action
			 *
			 * @hooked storefront_skip_links                       - 0
			 * @hooked storefront_social_icons                     - 10
			 * @hooked storefront_site_branding                    - 20
			 * @hooked storefront_secondary_navigation             - 30
			 * @hooked storefront_product_search                   - 40
			 * @hooked storefront_primary_navigation_wrapper       - 42
			 * @hooked storefront_primary_navigation               - 50
			 * @hooked storefront_header_cart                      - 60
			 * @hooked storefront_primary_navigation_wrapper_close - 68
			 */
			do_action( 'storefront_header' ); ?>

		</div>
	</header><!-- #masthead -->

	<?php
	/**
	 * Functions hooked in to storefront_before_content
	 *
	 * @hooked storefront_header_widget_region - 10
	 */
	do_action( 'storefront_before_content' ); ?>


	<div id="content" class="site-content" tabindex="-1">
		<div class="container">

		<?php
		/**
		 * Functions hooked in to storefront_content_top
		 *
		 * @hooked woocommerce_breadcrumb - 10
		 */
		do_action( 'storefront_content_top' );
