<?php
/**
* The template for displaying checkbox filters
*
* Override this template by copying it to yourtheme/woocommerce-filters/checkbox.php
*
* @author     BeRocket
* @package     WooCommerce-Filters/Templates
* @version  1.0.1
*/
?>
<?php
$random_name = rand();
$hiden_value = false;
if( empty($child_parent) ) {
    $child_parent = '';
}
$is_child_parent = @ $child_parent == 'child';
$is_child_parent_or = ( @ $child_parent == 'child' || @ $child_parent == 'parent' );
if ( empty($child_parent_depth) || @ $child_parent == 'parent' ) {
    $child_parent_depth = 0;
}
$is_first = true;
$added_categories = array();
if ( ! empty($terms) ):
    foreach( $terms as $term ):
        $parent_count = 0;
        if ( $is_child_parent && $is_first ) {
            ?><li class="berocket_child_parent_sample"><ul><?php
        } elseif(isset($term->parent) && $term->parent != 0) {
            $parent_count = get_ancestors( $term->term_id, $term->taxonomy );
            $parent_count = count($parent_count);
        } elseif( isset($term->depth) ) {
            $parent_count = $term->depth;
        }
        $added_categories[] = @ $term->term_id;
        ?>
        <li class="berocket_term_parent_<?php echo ( property_exists($term, 'parent') ? $term->parent : '' ); ?> berocket_term_depth_<?php echo $parent_count; ?> <?php if ( $is_child_parent ) echo 'R__class__R '; ?>
        <?php if( @ $hide_o_value && isset($term->count) && $term->count == 0 && ( !$is_child_parent || !$is_first ) ) {
            echo 'berocket_hide_o_value '; $hiden_value = true; 
        }
        if( @ $hide_sel_value && @ br_is_term_selected( $term, true, $is_child_parent_or, $child_parent_depth ) != '' ) {
            echo 'berocket_hide_sel_value'; $hiden_value = true;
        }
        if( @ $hide_child_attributes && @ $term->parent && in_array(@ $term->parent, $added_categories) ) {
            echo ' berocket_hide_child_attributes ';
        } ?>">
            <span>
                <input id='checkbox_<?php echo @ str_replace ( '*' , '-' , $term->term_id), @ str_replace ( '*' , '-' , $term->taxonomy) ?>_<?php echo @ $random_name ?>' 
                       class="<?php echo ( empty($uo['class']['checkbox_radio']) ? '' : $uo['class']['checkbox_radio'] ) ?> checkbox_<?php echo @ str_replace ( '*' , '-' , $term->term_id), @ str_replace ( '*' , '-' , $term->taxonomy) ?>" 
                       type='checkbox' 
                       autocomplete="off" 
                       style="<?php echo ( empty($uo['style']['checkbox_radio']) ? '' : $uo['style']['checkbox_radio'] )?>" data-term_slug='<?php echo @ urldecode($term->slug) ?>' 
                       data-term_name='<?php echo ( ( @ $icon_before_value ) ? ( ( substr( $icon_before_value, 0, 3) == 'fa-' ) ? '<i class="fa '.$icon_before_value.'"></i>' : '<i class="fa"><img class="berocket_widget_icon" src="'.$icon_before_value.'" alt=""></i>' ) : '' ) . @ $term->name . ( ( @ $icon_after_value ) ? ( ( substr( $icon_after_value, 0, 3) == 'fa-' ) ? '<i class="fa '.$icon_after_value.'"></i>' : '<i class="fa"><img class="berocket_widget_icon" src="'.$icon_after_value.'" alt=""></i>' ) : '' )?>' 
                       data-filter_type='<?php echo @ $filter_type ?>' <?php if( @ $term->term_id) { ?>data-term_id='<?php echo @ $term->term_id ?>'<?php } ?> data-operator='<?php echo @ $operator ?>' 
                       data-term_ranges='<?php echo @ str_replace ( '*' , '-' , $term->term_id) ?>' 
                       data-taxonomy='<?php echo @ $term->taxonomy ?>' 
                       data-term_count='<?php echo @ $term->count ?>' 
                       <?php echo @ br_is_term_selected( $term, true, $is_child_parent_or, $child_parent_depth ); ?> />
                <label data-for='checkbox_<?php echo @ str_replace ( '*' , '-' , $term->term_id), @ str_replace ( '*' , '-' , $term->taxonomy) ?>' style="<?php echo ( empty($uo['style']['label']) ? '' : $uo['style']['label'] )?>" 
                       class="berocket_label_widgets<?php if( br_is_term_selected( $term, true, $is_child_parent_or, $child_parent_depth ) != '') echo ' berocket_checked'; ?>">
                    <?php echo ( ( @ $icon_before_value ) ? ( ( substr( $icon_before_value, 0, 3) == 'fa-' ) ? '<i class="fa '.$icon_before_value.'"></i>' : '<i class="fa"><img class="berocket_widget_icon" src="'.$icon_before_value.'" alt=""></i>' ) : '' ) . @ $term->name . ( ( @ $show_product_count_per_attr ) ? ' <span class="berocket_aapf_count">' . @ $term->count . '</span>' : '' ) . ( ( @ $icon_after_value ) ? ( ( substr( $icon_after_value, 0, 3) == 'fa-' ) ? '<i class="fa '.$icon_after_value.'"></i>' : '<i class="fa"><img class="berocket_widget_icon" src="'.$icon_after_value.'" alt=""></i>' ) : '' )?>
                </label>
                <?php if( @ $hide_child_attributes ) { ?>
                <span data-term_id='<?php echo @ str_replace ( '*' , '-' , $term->term_id) ?>' class="br_child_toggle br_child_toggle_<?php echo @ str_replace ( '*' , '-' , $term->term_id); ?>"><i class="fa fa-plus" aria-hidden="true"></i></span>
                <?php } ?>
            </span>
        </li>
        <?php
        if( @ $hide_child_attributes && @ $term->parent && in_array(@ $term->parent, $added_categories) ) {
            ?>
            <style>
            .br_child_toggle.br_child_toggle_<?php echo @ str_replace ( '*' , '-' , $term->parent); ?> {
                display: inline-block;
            }
            </style>
            <?php
        }
        if ( $is_child_parent && $is_first ) {
            ?></ul></li><?php
            $is_first = false;
        }
    endforeach;?>
    <?php if( $is_child_parent && @ count($terms) == 1 ) {
        if( BeRocket_AAPF_Widget::is_parent_selected($attribute, $child_parent_depth - 1) ) {
            echo '<li>'.$child_parent_no_values.'</li>';
        } else {
            echo '<li>'.$child_parent_previous.'</li>';
        }
    } else {
    if( $child_parent_no_values ) {?>
        <script>
        if ( typeof(child_parent_depth) == 'undefined' || child_parent_depth < <?php echo $child_parent_depth; ?> ) {
            child_parent_depth = <?php echo $child_parent_depth; ?>;
        }
        jQuery(document).ready(function() {
            if( child_parent_depth == <?php echo $child_parent_depth; ?> ) {
                jQuery('.woocommerce-info').text('<?php echo $child_parent_no_values; ?>');
            }
        });
        </script>
    <?php }
    } 
    if( ! @ $hide_button_value ) { ?>
        <li class="berocket_widget_show_values"<?php if( !$hiden_value ) echo 'style="display: none;"' ?>><?php _e('Show value(s)', 'BeRocket_AJAX_domain') ?><span class="show_button"></span></li>
<?php } endif; ?>
