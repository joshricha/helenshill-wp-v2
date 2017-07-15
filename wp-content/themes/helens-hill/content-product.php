<?php
/**
 * The template for displaying product content within loops
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 3.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $product;

// Ensure visibility
if ( empty( $product ) || ! $product->is_visible() ) {
	return;
}
?>


	<?php
	/**
	 * woocommerce_before_shop_loop_item hook.
	 *
	 * @hooked woocommerce_template_loop_product_link_open - 10
	 */
	// do_action( 'woocommerce_before_shop_loop_item' );

	/**
	 * woocommerce_before_shop_loop_item_title hook.
	 *
	 * @hooked woocommerce_show_product_loop_sale_flash - 10
	 * @hooked woocommerce_template_loop_product_thumbnail - 10
	 */
	// do_action( 'woocommerce_before_shop_loop_item_title' );

	/**
	 * woocommerce_shop_loop_item_title hook.
	 *
	 * @hooked woocommerce_template_loop_product_title - 10
	 */
	// do_action( 'woocommerce_shop_loop_item_title' );

	/**
	 * woocommerce_after_shop_loop_item_title hook.
	 *
	 * @hooked woocommerce_template_loop_rating - 5
	 * @hooked woocommerce_template_loop_price - 10
	 */
	// do_action( 'woocommerce_after_shop_loop_item_title' );

	/**
	 * woocommerce_after_shop_loop_item hook.
	 *
	 * @hooked woocommerce_template_loop_product_link_close - 5
	 * @hooked woocommerce_template_loop_add_to_cart - 10
	 */
	// do_action( 'woocommerce_after_shop_loop_item' );

	$image = wp_get_attachment_image_src( get_post_thumbnail_id( $loop->post->ID ), 'single-post-thumbnail' );

	// use this in image src echo $image[0];

	?>

<div <?php post_class("product product-list-full"); ?>>
  <a class="product-img" href="<?php the_permalink(); ?>"><img src="http://localhost:8888/helenshillwp/wp-content/uploads/2017/07/760x400-1.png" alt=""></a>
  <div class="product-info">
    <?php do_action( 'woocommerce_shop_loop_item_title' ); ?>
    <p class="price-home"><?php do_action( 'woocommerce_after_shop_loop_item_title' ); ?></p>
    <a href="<?php the_permalink(); ?>">The Story Behind the Wine &#62;</a><br>
    <a href="<?php the_permalink(); ?>">Tasting Notes &#62;</a><br>
    <a href="<?php the_permalink(); ?>">Wine Making &#62;</a><br>
    <a href="<?php the_permalink(); ?>">Technical Information &#62;</a>
    <p class="center">
      <a class="bold" href="">More Info &#62;</a> |
      <a id="buy-btn" class="bold" href="">Buy &#62;</a>
    </p>
  </div><!-- product info -->
  <div class="buy-form buy-display">
    <div class="input-group">
        <form class="cart-num" action="index.html" method="post">
					<input type="text" name="quantity" class="form-control input-number quantity" value="1" min="1" max="100">
	        <span class="input-group-btn">
	            <button type="button" class="quantity-left-minus quantity-increment btn btn-number"  data-type="minus" data-field="">
	              <span class="glyphicon glyphicon-minus"></span>
	            </button>
	        </span>
	        <span class="input-group-btn">
	            <button type="button" class="quantity-right-plus quantity-increment btn btn-number" data-type="plus" data-field="">
	                <span class="glyphicon glyphicon-plus"></span>
	            </button>
	        </span>
        </form>
    </div><!-- input group -->

		<a rel="nofollow" data-toggle="modal" data-target="#myModal1" href="<?php echo $product->add_to_cart_url() ?>" data-quantity="1" data-product_id="<?php echo $product->get_id() ?>" data-product_sku="<?php echo $product->get_sku() ?>" class="button product_type_simple add_to_cart_button ajax_add_to_cart add_to_cart_variable">Add to cart</a>

		<a rel="nofollow" data-toggle="modal" data-target="#myModal1" href="<?php echo $product->add_to_cart_url() ?>" data-quantity="6" data-product_id="<?php echo $product->get_id() ?>" data-product_sku="<?php echo $product->get_sku() ?>" class="button product_type_simple add_to_cart_button ajax_add_to_cart add_to_cart_variable_6">ADD A CASE (6)</a>

		<!-- do_action( 'woocommerce_after_shop_loop_item' ); -->
    <!-- <input data-toggle="modal" data-target="#myModal1" class="add-to-cart" type="submit" value="ADD TO CART">
    <input data-toggle="modal" data-target="#myModal1" class="add-case" type="submit" value="ADD A CASE (6)"> -->

  </div><!-- buy btn -->
  <div class="cart cart-display">
    <div class="table">

    </div><!-- table -->
    <div class="fine-print">
      <p>Add Cupons &amp; Promotional codes at checkou</p>
    </div>
    <div class="buttons">

    </div><!-- buttons -->
    <div class="secondary-buttons">

    </div><!-- secondary buttons -->
  </div><!-- cart -->
</div>

<div class="square-individual">
	<a class="product-list-squares" href="<?php the_permalink(); ?>">
		<div class="square-product col-xs-6 col-sm-2" style="background-image: url(http://localhost:8888/helenshillwp/wp-content/uploads/2017/07/760x400-1.png);">
			<?php do_action( 'woocommerce_shop_loop_item_title' ); ?>
		</div><!-- product -->
	</a><!-- square product -->
</div><!-- sq indiiv -->
