<?php
/**
 * The sidebar containing the main widget area.
 *
 * @package storefront
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>

<div class="col-md-4 col-sm-12">
	<div class="filters">
		<?php dynamic_sidebar( 'sidebar-1' ); ?>
    <div class="panel-group" id="accordion">
			<!-- <div class="panel panel-default sort-by">
			  <div class="panel-heading">
			    <h4 class="panel-title">
			      <a class="accordion-toggle bold" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
			        SORT BY
			      </a>
			    </h4>
			  </div>
			  <div id="collapseFour" class="panel-collapse collapse">
			    <div class="panel-body">
			      Lorem
			    </div>
			  </div>
			</div><!-- acc panel -->
      <a class="display-prod-split" href="">
        <div>
        </div><!-- display-prod-split -->
      </a>
      <a class="display-prod-full" href="">
        <div>
        </div><!-- display-prod-full -->
      </a>
    </div><!-- accordin -->
	</div><!-- filters -->
