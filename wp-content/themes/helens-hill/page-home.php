<?php

/* Template Name: Home grid menu */
/**
 * The template for the home page.
 *
 * @package storefront
 */

get_header();

?>


<div class="half-content half-content-border">
  <div class="half-box">
    <a href="<?php echo the_field('grid_link_1'); ?>">
      <div class="half-text" style="background:linear-gradient(rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.6)),url(<?php echo the_field('grid_image_1'); ?>) center center; background-size:cover;">
        <div class="half-text-content">
          <h2><?php echo the_field('grid_title_1'); ?></h2>
          <p><?php echo the_field('grid_para_1'); ?></p>
        </div>
      </div><!-- half text content -->
    </a>
    <a href="<?php echo the_field('grid_link_2'); ?>">
      <div class="half-text1 border-left minus-margin" style="background:linear-gradient(rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.6)),url(<?php echo the_field('grid_image_2'); ?>) center center; background-size:cover;">
        <div class="half-text-content">
          <h2><?php echo the_field('grid_title_2'); ?></h2>
          <p><?php echo the_field('grid_para_2'); ?></p>
        </div>
      </div><!-- half text content -->
    </a>
  </div><!-- half box -->
</div><!-- half content -->

<div class="half-content half-content-border">
  <div class="half-box">
    <a href="<?php echo the_field('grid_link_3'); ?>">
      <div class="half-text" style="background:linear-gradient(rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.6)),url(<?php echo the_field('grid_image_3'); ?>) center center; background-size:cover;">
        <div class="half-text-content">
          <h2><?php echo the_field('grid_title_3'); ?></h2>
          <p><?php echo the_field('grid_para_3'); ?></p>
        </div>
      </div><!-- half text content -->
    </a>
    <a href="<?php echo the_field('grid_link_4'); ?>">
      <div class="half-text1 half-text-short border-left" style="background:linear-gradient(rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.6)),url(<?php echo the_field('grid_image_4'); ?>) center center; background-size:cover;">
        <div class="half-text-content">
          <h2 class="no-padd"><?php echo the_field('grid_title_4'); ?></h2>
        </div>
      </div><!-- half text content -->
    </a>
    <a href="<?php echo the_field('grid_link_5'); ?>">
      <div class="half-text half-text-short quarter-width border-left" style="background:linear-gradient(rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.6)),url(<?php echo the_field('grid_image_5'); ?>) center center; background-size:cover;">
        <div class="half-text-content">
          <h2 class="no-padd"><?php echo the_field('grid_title_5'); ?></h2>
        </div>
      </div><!-- half text content -->
    </a>
    <a href="<?php echo the_field('grid_link_6'); ?>">
      <div class="half-text1 half-text-short quarter-width border-left" style="background:linear-gradient(rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.6)),url(<?php echo the_field('grid_image_6'); ?>) center center; background-size:cover;">
        <div class="half-text-content">
          <h2 class="no-padd"><?php echo the_field('grid_title_6'); ?></h2>
        </div>
      </div><!-- half text content -->
    </a>
  </div><!-- half box -->
</div><!-- half content -->

<?php get_footer(); ?>
