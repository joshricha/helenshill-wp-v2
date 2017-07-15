<?php

  // custom fields
  $url1     = get_field('url1');
  $image1   = get_field('image1');
  $url2     = get_field('url2');
  $image2   = get_field('image2');
  $url3     = get_field('url3');
  $image3   = get_field('image3');
  $url4     = get_field('url4');
  $image4   = get_field('image4');
  $url5     = get_field('url5');
  $image5   = get_field('image5');
  $url6     = get_field('url6');
  $image6   = get_field('image6');

?>

<a href="<?php echo $url1 ?>">
  <div class="full-screen-bg bg-img-1" style="background: url(<?php echo $image1['url'] ?>) center center;">
  </div>
</a>
<a href="<?php echo $url2 ?>">
  <div class="full-screen-bg bg-img-2" style="background: url(<?php echo $image2['url'] ?>) center center;">
  </div>
</a>
<a href="<?php echo $url3 ?>">
  <div class="full-screen-bg bg-img-3" style="background: url(<?php echo $image3['url'] ?>) center center;">
  </div>
</a>
<a href="<?php echo $url4 ?>">
  <div class="full-screen-bg bg-img-4" style="background: url(<?php echo $image4['url'] ?>) center center;">
  </div>
</a>
<a href="<?php echo $url5 ?>">
  <div class="full-screen-bg bg-img-5" style="background: url(<?php echo $image5['url'] ?>) center center;">
  </div>
</a>
<a href="<?php echo $url6 ?>">
  <div class="full-screen-bg bg-img-6" style="background: url(<?php echo $image6['url'] ?>) center center;">
  </div>
</a><!-- full screen bg -->
