<?php

/* Template Name: Full scr head w text/image split */
/**
 * The template for the home page.
 *
 * @package storefront
 */

get_header();

?>

<?php

// check if the repeater field has rows of data
if( have_rows('image__text_repeater') ):

  $counter = 1;

  ?>

  <?php

   	  // loop through the rows of data
      while ( have_rows('image__text_repeater') ) : the_row();

      ?>

          <?php if ($counter == 1): ?>

            <div class="half-content half-content-border">
              <div class="half-box">
                <div class="half-text" style="background-size:cover;">
                  <div class="half-text-content">
                    <h2><?php echo the_sub_field('title'); ?></h2>
                    <?php echo the_sub_field('information'); ?>
                    <?php if ( get_sub_field('button_1_label') ) : ?>
                      <a class="border-btn" href="<?php echo the_sub_field('button_1_link'); ?>"><?php echo the_sub_field('button_1_label'); ?></a>
                    <?php endif; ?>
                    <?php if ( get_sub_field('button_2_label') ) : ?>
                      <a class="border-btn" href="<?php echo the_sub_field('button_2_link'); ?>"><?php echo the_sub_field('button_2_label'); ?></a>
                    <?php endif; ?>
                  </div>
                </div><!-- half text content -->
                <div class="half-text1 minus-margin" style="background:linear-gradient(rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.6)),url(<?php echo the_sub_field('image'); ?>) center center; background-size:cover;">
                  <div class="half-text-content">
                  </div>
                </div><!-- half text content -->
              </div><!-- half box -->
            </div><!-- half content -->

          <?php else: ?>

            <div class="half-content half-content-border">
              <div class="half-box">
                <div class="half-text" style="background:linear-gradient(rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.6)),url(<?php echo the_sub_field('image'); ?>) center center; background-size:cover;">
                  <div class="half-text-content">
                  </div>
                </div><!-- half text content -->
                <div class="half-text1 minus-margin" >
                  <div class="half-text-content">
                    <h2><?php echo the_sub_field('title'); ?></h2>
                    <?php echo the_sub_field('information'); ?>
                    <?php if ( get_sub_field('button_1_label') ) : ?>
                      <a class="border-btn" href="<?php echo the_sub_field('button_1_link'); ?>"><?php echo the_sub_field('button_1_label'); ?></a>
                    <?php endif; ?>
                    <?php if ( get_sub_field('button_2_label') ) : ?>
                      <a class="border-btn" href="<?php echo the_sub_field('button_2_link'); ?>"><?php echo the_sub_field('button_2_label'); ?></a>
                    <?php endif; ?>
                  </div>
                </div><!-- half text content -->
              </div><!-- half box -->
            </div><!-- half content -->

          <?php endif; ?>



    <?php
        if ($counter == 2) {
          $counter = 1;
        } else {
          $counter++;
        }

    endwhile;

else :

    // no rows found

endif;

?>

<?php get_footer(); ?>
