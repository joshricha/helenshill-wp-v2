<?php
/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     3.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

?>

<?php
	/**
	 * woocommerce_before_single_product hook.
	 *
	 * @hooked wc_print_notices - 10
	 */
	 do_action( 'woocommerce_before_single_product' );

	 if ( post_password_required() ) {
	 	echo get_the_password_form();
	 	return;
	 }
?>

<div id="product-<?php the_ID(); ?>" <?php post_class(); ?>>

	<?php
		/**
		 * woocommerce_before_single_product_summary hook.
		 *
		 * @hooked woocommerce_show_product_sale_flash - 10
		 * @hooked woocommerce_show_product_images - 20
		 */
		do_action( 'woocommerce_before_single_product_summary' );
	?>

	<div class="col-md-8">
		<!-- summary entry-summary -->

		<?php
			/**
			 * woocommerce_single_product_summary hook.
			 *
			 * @hooked woocommerce_template_single_title - 5
			 * @hooked woocommerce_template_single_rating - 10
			 * @hooked woocommerce_template_single_price - 10
			 * @hooked woocommerce_template_single_excerpt - 20
			 * @hooked woocommerce_template_single_add_to_cart - 30
			 * @hooked woocommerce_template_single_meta - 40
			 * @hooked woocommerce_template_single_sharing - 50
			 * @hooked WC_Structured_Data::generate_product_data() - 60
			 */
			do_action( 'woocommerce_single_product_summary' );
		?>

		<div class="panel-group product-indo" id="accordion">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">
						<a class="accordion-toggle bold" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
								PRICING
						</a>
					</h4>
				</div>
				<div id="collapseOne" class="panel-collapse collapse">
					<div class="panel-body white">
						<div class="price">
							<h3>PRICE</h3>

							<table>
								<tr>
									<td>
										<b>1 Bottle (min. order 2)</b>
									</td>
									<td>
										<span class="align-right">$20.00</span>
									</td>
								</tr>
								<tr>
									<td>
										<b>6 Bottles</b> 10% Discount
									</td>
									<td>
										 $96.00
									</td>
								</tr>
								<tr>
									<td>
										<b>12 Bottles 20%</b> Discount
									</td>
									<td>
										 <span class="align-right">$192.00</span>
									</td>
								</tr>
								<tr>
									<td colspan="2">
										<b>Wine Club 25% Discount</b>
									</td>
								</tr>
							</table>
						</div><!-- price -->
						<div class="shipping-offers">
							<div class="shipping">
								<h3>FREE SHIPPING</h3>
								<p>Shipping is FREE on all orders from Helen’s Hill, it’s our way of saying thanks for buying direct from the winemaker!</p>
							</div><!-- shipping -->

							<div class="offers">
								<h3>SPECIAL OFFERS</h3>
								<p>Sign up to our newsletter here to be the first to find out about any special o ers!</p>
							</div><!-- offers -->
						</div><!-- shipping offers -->
					</div>
				</div>
			</div><!-- acc panel -->
			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">
						<a class="accordion-toggle bold" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
							THE NERDY WINE INFO
						</a>
					</h4>
				</div>
				<div id="collapseTwo" class="panel-collapse collapse">
					<div class="panel-body white">
						<div class="vintage-intro bottom-border">
							<h3>VINTAGE REPORT</h3>
							<p>Nam conse peribusant laut quas estion pa nient et, consequae nobis utem verrorrum ressum derchil iditiorerum rerum faccum volestis dus as as explit utatis et aut o cti animill entium, cuptatem as doluptat ist rem ullacea rcipsum que si nus.</p>
						</div><!-- vintage intro -->

						<div class="bottom-border">
							<h3>VITICULTURE</h3>
							<table>
								<tr>
									<td>
										Varietal
									</td>
									<td class="align-right">
										Shiraz Viognier
									</td>
								</tr>
								<tr>
									<td>
										Vintage

									</td>
									<td class="align-right">
										 2015
									</td>
								</tr>
								<tr>
									<td>
										Size

									</td>
									<td class="align-right">
										 750 Ml
									</td>
								</tr>
								<tr>
									<td>
										Region
									</td>
									<td class="align-right">
										 Yarra Valley
									</td>
								</tr>
								<tr>
									<td>
										Date Of Harvest Vine Age
									</td>
									<td class="align-right">
										 5-15 March
									</td>
								</tr>
								<tr>
									<td>
										Vine Age
									</td>
									<td class="align-right">
										 12-21 years
									</td>
								</tr>
							</table>
						</div><!-- border bottom -->
						<div class="tasting-notes bottom-border">
							<h3>TASTING NOTES</h3>
							<p>This bold Shiraz hits the palate with power and presence. Lashings of dark fruit with notes of incense and aromatic spices, floral hints add layers and complexity. The wine rolls across the palate coating every corner of your mouth. Dense and chewy tannins compliment the fruit nicely, which tighten through the finish adding a savoury graphite note. Incredibly long and complex through the finish, this is quintessential Barossa Valley.</p>

							<table>
								<tr>
									<td>
										Color
									</td>
									<td class="align-right">
										Deep Ruby
									</td>
								</tr>
								<tr>
									<td>
										Aroma

									</td>
									<td class="align-right">
										 Black Cherry and Spices
									</td>
								</tr>
								<tr>
									<td>
										Palete

									</td>
									<td class="align-right">
										 intense citrus + stone-fruit, long finish, piercing acidity
									</td>
								</tr>
							</table>
						</div><!-- tasting notes -->
						<div class="winemaking">
							<h3>WINEMAKING</h3>
							<p>De-stemmed, crushed and fermented in three to ten tonne open top fermenters, with regular pump overs (three daily over peak fermentation) to extract colour, flavour and tannins. Some parcels had 20% whole bunch ferment and punchdowns.</p>

							<table>
								<tr>
									<td>
										Alcohol
									</td>
									<td class="align-right">
										14.5%
									</td>
								</tr>
								<tr>
									<td>
										Bottle Size
									</td>
									<td class="align-right">
										 750 Ml
									</td>
								</tr>
								<tr>
									<td>
										Fermentation Method
									</td>
									<td class="align-right">
										 80% Open, 20% Rotary
									</td>
								</tr>
								<tr>
									<td>
										Time In Barrel
									</td>
									<td class="align-right">
										 11 Months
									</td>
								</tr>
								<tr>
									<td>
										Yeast Type
									</td>
									<td class="align-right">
										 Wet Cultured
									</td>
								</tr>
								<tr>
									<td>
										Barrel Origin &amp; Size
									</td>
									<td class="align-right">
										 French 225L
									</td>
								</tr>
								<tr>
									<td>
										Skin Contact Time
									</td>
									<td class="align-right">
										 14 Days
									</td>
								</tr>
								<tr>
									<td>
										Fermentation Time
									</td>
									<td class="align-right">
										 14 days
									</td>
								</tr>
								<tr>
									<td>
										MLF
									</td>
									<td class="align-right">
										 100%
									</td>
								</tr>
							</table>
							<a class="border-btn" href="">DOWNLOAD WINE NOTES <span class="float-right">></span></a>
						</div><!-- winemaking -->
					</div>
				</div>
			</div><!-- acc panel -->
			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">
						<a class="accordion-toggle bold" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
							WINE CLUB
						</a>
					</h4>
				</div>
				<div id="collapseThree" class="panel-collapse collapse">
					<div class="panel-body white">
						Lorem
					</div>
				</div>
			</div><!-- acc panel -->
			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">
						<a class="accordion-toggle bold" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
							REVIEWS
						</a>
					</h4>
				</div>
				<div id="collapseFour" class="panel-collapse collapse">
					<div class="panel-body white">
						<div class="review bottom-border">
							<h3>TITLE</h3>
							<p>James Halliday – October 2016 <br>
							Deep purple-crimson; destemmed and crushed to small open top stainless steel pots for co- fermentation with 1.24% [...]</p>
							<a href=""><b>Read More</b></a>
						</div>
						<div class="review bottom-border">
							<h3>TITLE</h3>
							<p>James Halliday – October 2016 <br>
							Deep purple-crimson; destemmed and crushed to small open top stainless steel pots for co- fermentation with 1.24% [...]</p>
							<a href=""><b>Read More</b></a>
						</div>
						<div class="review">
							<h3>TITLE</h3>
							<p>James Halliday – October 2016 <br>
							Deep purple-crimson; destemmed and crushed to small open top stainless steel pots for co- fermentation with 1.24% [...]</p>
							<a href=""><b>Read More</b></a>
						</div>
					</div>
				</div>
			</div><!-- acc panel -->
			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">
						<a class="accordion-toggle last bold" data-toggle="collapse" data-parent="#accordion" href="#collapseFiv">
							DOWNLOAD NOW
						</a>
					</h4>
				</div>
				<div id="collapseFive" class="panel-collapse collapse">
					<div class="panel-body white">
						Lorem
					</div>
				</div>
			</div><!-- acc panel -->

			<?php

			  $custom_fields = get_post_custom($post->ID);
			  $my_custom_field = $custom_fields["total_sales"];
			  foreach ( $my_custom_field as $key => $value ) {
			      echo "<strong>$key: </strong> $value <br />";
			  }

			?>

		</div><!-- accordin -->

	</div><!-- .summary -->

	<?php
		/**
		 * woocommerce_after_single_product_summary hook.
		 *
		 * @hooked woocommerce_output_product_data_tabs - 10
		 * @hooked woocommerce_upsell_display - 15
		 * @hooked woocommerce_output_related_products - 20
		 */
		do_action( 'woocommerce_after_single_product_summary' );
	?>

</div><!-- #product-<?php the_ID(); ?> -->

<?php do_action( 'woocommerce_after_single_product' ); ?>
