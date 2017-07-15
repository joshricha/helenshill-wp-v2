<?php
/**
 * Single Product Image
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/product-image.php.
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
 * @version 3.1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $post, $product;
$columns           = apply_filters( 'woocommerce_product_thumbnails_columns', 4 );
$thumbnail_size    = apply_filters( 'woocommerce_product_thumbnails_large_size', 'full' );
$post_thumbnail_id = get_post_thumbnail_id( $post->ID );
$full_size_image   = wp_get_attachment_image_src( $post_thumbnail_id, $thumbnail_size );
$placeholder       = has_post_thumbnail() ? 'with-images' : 'without-images';
$wrapper_classes   = apply_filters( 'woocommerce_single_product_image_gallery_classes', array(
	'woocommerce-product-gallery',
	'woocommerce-product-gallery--' . $placeholder,
	'woocommerce-product-gallery--columns-' . absint( $columns ),
	'images',
) );

$thumbnail_url = get_the_post_thumbnail_url();
?>
<div class="product-images">
	<div class="col-sm-4 col-sm-12">
		<a href="http://localhost:8888/helenshillwp/wp-content/uploads/2017/07/760x400-1.png" data-lightbox="image-1"><img class="wide-square" src="http://localhost:8888/helenshillwp/wp-content/uploads/2017/07/760x400-1.png" alt=""></a>
		<a href="http://localhost:8888/helenshillwp/wp-content/uploads/2017/07/760x400-1.png" data-lightbox="image-1"><img class="thin-square margin-rght" src="http://localhost:8888/helenshillwp/wp-content/uploads/2017/07/760x400-1.png" alt=""></a>
		<a href="http://localhost:8888/helenshillwp/wp-content/uploads/2017/07/760x400-1.png" data-lightbox="image-1"><img class="thin-square" src="http://localhost:8888/helenshillwp/wp-content/uploads/2017/07/760x400-1.png" alt=""></a>
	</div><!-- col 4 -->
</div><!-- product images -->
