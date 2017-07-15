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


<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="<?php bloginfo(stylesheet_directory); ?>/assets/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link rel="stylesheet" href="<?php bloginfo(stylesheet_directory); ?>/assets/css/style.css">

<?php wp_head(); ?>
</head>

<body <?php body_class('secondary homepage'); ?>>

	<header>
    <div class="logo">
      <img src="<?php bloginfo(stylesheet_directory); ?>/assets/img/logo.png" alt="Helen's Hill logo">
    </div><!-- logo -->
    <div class="menu-collapsed">
       <div class="bar-bg">
         <div class="bar">
           <p class="menu-text">MENU</p>
         </div><!-- menu collapsed -->
       </div><!-- bar bg -->
       <nav>

         <div class="">
           <img class="logo-menu logo-collapsed" src="<?php bloginfo(stylesheet_directory); ?>/assets/img/shield.png" alt="Logo">
         </div>

          <?php
            wp_nav_menu( array(
              'theme_location'        => 'primary',
              'container'   => 'ul',

            ) );
           ?>

       </nav>
    </div><!-- meny collapsed -->
  </header>
	<div class="header-wrap" id="full-height-bg" style="background-image: url(<?php the_post_thumbnail_url(); ?>);">
	</div><!-- header wrap -->
	<div class="stay-updated">
    <?php if ( is_active_sidebar( 'stay_updated' ) ) : ?>
    	<?php dynamic_sidebar( 'stay_updated' ); ?>
    <?php endif; ?>
  </div><!-- stay updated -->
  <!-- Modal -->
  <div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-body">
          <p>Sign up form</p>
        </div>
      </div>
    </div><!-- modal -->
  </div>
  <div class="scroll-down">
    <a href="#main" class="smoothScroll"><img src="<?php bloginfo(stylesheet_directory); ?>/assets/img/scroll.png" alt="Scroll"></a>
  </div><!-- scroll down -->
  <div class="social">
    <?php if ( is_active_sidebar( 'social_icons' ) ) : ?>
    	<?php dynamic_sidebar( 'social_icons' ); ?>
    <?php endif; ?>
  </div><!-- social -->
	<div class="search-bar-hidden">
		<div class="search-contaienr">
			<a class="close-btn" href=""><img src="img/menu-close.png" alt=""></a>
			<div class="container">
				<div class="col-md-2 col-md-offset-5">
					<img class="logo-menu" src="img/shield.png" alt="Logo">
				</div>
			</div>
			<div class="container">
				<div class="col-md-10 col-md-offset-1">
					<form action="/action_page.php" id="search-box">
						<input type="text" name="fname">
					</form>
				</div>
			</div>
		</div><!-- search container -->
	</div><!-- search bar -->

	<?php
	/**
	 * Functions hooked in to storefront_before_content
	 *
	 * @hooked storefront_header_widget_region - 10
	 */
	// do_action( 'storefront_before_content' ); ?>

		<?php
		/**
		 * Functions hooked in to storefront_content_top
		 *
		 * @hooked woocommerce_breadcrumb - 10
		 */
		// do_action( 'storefront_content_top' );
