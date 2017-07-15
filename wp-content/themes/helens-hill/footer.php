<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package storefront
 */

?>

		</div><!-- .col-full -->
	</div><!-- #content -->

	<?php do_action( 'storefront_before_footer' ); ?>


</div><!-- #page -->

<?php wp_footer(); ?>

<footer>
  <div class="container">
    <div class="col-md-3">
      <a href="">The Cellar Door</a><br>
      <a href="">The Bottleshop</a><br>
      <a href="">The Wine Club</a>
    </div><!-- col3 -->
    <div class="col-md-3">
      <a href="">Stockists</a><br>
      <a href="">News From The Hill </a><br>
      <a href="">The Helen’s Hill Story Contact</a><br>
      <a href="">The Restaurant</a>
    </div>
    <div class="col-md-3">
      <a href="">Shopping Cart</a><br>
      <a href="">Login</a>
    </div><!-- col3 -->
    <div class="col-md-3">
      <h3>CONTACT</h3>
      <a href="tel:+61 3 9739 1573">+61 3 9739 1573</a><br>
      <a href="mailto:info@helenshill.com.au">info@helenshill.com.au</a><br>
      <address class="">
        16 Ingram Road, Coldstream, Victoria 3770 Australia
      </address><br>
      <h3>STAY CONNECTED</h3>
      <a href=""><img src="<?php bloginfo(stylesheet_directory); ?>/assets/img/facebook.png" alt=""></a>
      <a href=""><img src="<?php bloginfo(stylesheet_directory); ?>/assets/img/twitter.png" alt=""></a>
      <a href=""><img src="<?php bloginfo(stylesheet_directory); ?>/assets/img/youtube.png" alt=""></a>
      <a href=""><img src="<?php bloginfo(stylesheet_directory); ?>/assets/img/email.png" alt=""></a>
    </div><!-- col3 -->
    <div class="col-md-3">

    </div><!-- col3 -->
  </div><!-- container -->
</footer>


<script
  src="<?php bloginfo(stylesheet_directory); ?>/assets/js/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/x-editable/1.4.6/bootstrap-editable/js/bootstrap-editable.min.js"></script>
<script src="<?php bloginfo(stylesheet_directory); ?>/assets/js/scripts.js"></script>
<script src="<?php bloginfo(stylesheet_directory); ?>/assets/js/lightbox-plus-jquery.min.js"></script>
</body>
</html>
