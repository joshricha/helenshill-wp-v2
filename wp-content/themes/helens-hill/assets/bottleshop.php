<?php

  /* Template Name: Bottle Shop */

  get_header();

  // custom fields
  $link = get_field('link');

?>

<?php

  get_template_part( 'partials/content', 'imagegrid' );
  get_template_part( 'partials/content', 'socialbar' );

?>




<?php get_footer(); ?>
