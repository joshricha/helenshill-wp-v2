<?php
/**
 * Storefront engine room
 *
 * @package storefront
 */


  function updated_widgets_init() {

  	register_sidebar( array(
  		'name'          => 'Stay Updated',
  		'id'            => 'stay_updated',
  		'before_widget' => '',
  		'after_widget'  => ''
  	) );

  }
  add_action( 'widgets_init', 'updated_widgets_init' );

  function social_widgets_init() {

    register_sidebar( array(
      'name'          => 'Social Icons',
      'id'            => 'social_icons',
      'before_widget' => '',
      'after_widget'  => ''
    ) );

  }
  add_action( 'widgets_init', 'social_widgets_init' );

  // Add the filter to manage the p tags
  add_filter( 'the_content', 'wti_remove_autop_for_image', 0 );

  function wti_remove_autop_for_image( $content )
  {
       global $post;

       // Check for single page and image post type and remove
       if ( is_single() && $post->post_type == 'home_grid' )
            remove_filter('the_content', 'wpautop');

       return $content;
  }

  function php_execute($html){
    if(strpos($html,"<"."?php")!==false){ ob_start(); eval("?".">".$html);
    $html=ob_get_contents();
    ob_end_clean();
    }
    return $html;
    }
  add_filter('widget_text','php_execute',100);


  // Enable shortcodes in text widgets
  add_filter('widget_text','do_shortcode');
