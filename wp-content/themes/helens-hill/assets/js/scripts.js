$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
  $(".logo-menu").toggleClass("logo-collapsed");
  $(".menu-text").toggleClass("menu-text-collapsed");
});

$("a.search-btn").click(function(e) {
  e.preventDefault();
  $(".search-bar-hidden").toggleClass("search-bar-expanded");
  $(".search-bar-hidden").removeClass("search-bar-hidden");
});

$("a.close-btn").click(function(e) {
  e.preventDefault();
  $(".search-bar-expanded").toggleClass("search-bar-hidden");
  $(".search-bar-expanded").removeClass("search-bar-expanded");
});

$("a#buy-btn").click(function(e) {
  e.preventDefault();
  $(".buy-form").toggleClass("buy-display");
});

$(".display-prod-full").click(function(e) {
  e.preventDefault();
  $('.display-prod-split').css('background-image', 'url(http://localhost:8888/helenshillwp/wp-content/uploads/2017/07/TOGGLE-ICONS-1B.png)');
  $('.display-prod-full').css('background-image', 'url(http://localhost:8888/helenshillwp/wp-content/uploads/2017/07/TOGGLE-ICONS-2A.png)');
  $(".product-list-squares").hide();
  $(".product-list-full").show();
});

$(".display-prod-split").click(function(e) {
  e.preventDefault();
  $('.display-prod-split').css('background-image', 'url(http://localhost:8888/helenshillwp/wp-content/uploads/2017/07/TOGGLE-ICONS-1A.png)');
  $('.display-prod-full').css('background-image', 'url(http://localhost:8888/helenshillwp/wp-content/uploads/2017/07/TOGGLE-ICONS-2B.png)');
  $(".product-list-full").hide();
  $(".product-list-squares").show();
});


// adjustHeight is the function that makes the objects squares
// (by setting each one's height equal to its width)
function adjustHeight() {
	var myWidth = jQuery('.square-product').width();
	var myString = myWidth + 'px';
	jQuery('.square-product').css('height', myString);
	return myHeight;
}



$(function(){
    $('button.quantity-increment').on('click', function(){
        var $form = $(this).closest('form');
        var $input = $('input.quantity', $form);
        var prevValue = +$input.val();
        if($(this).hasClass('quantity-left-minus')){
            --prevValue;
        } else {
            ++prevValue;
        }
        $input.val(prevValue).change(); // this will trigger the change
    });

    // change and input is better than keyup because people don't always use keys
    $('input.quantity').on('change input', function(){
      // amazing!!! Is there anyway to prevent us being able to go into the minus....?
      if (+this.value < 0) {
        this.value = "0";
      }

        $('a.add_to_cart_variable', $(this).closest(".product")).attr('data-quantity', this.value);
        logDataQuantityAttribute();
    });
});

$( document ).ready(function() {
    $(".woocommerce-pagination:first").remove();
    $(".woocommerce-ordering:last").remove();
});

function logDataQuantityAttribute(){
	console.log('data-quantity Attribute: ' + $('a.add_to_cart_variable').attr('data-quantity'));
}

$('cart-num').click(function () {
    $('#form1 .editable').editable('toggleDisabled');
    var $this = $(this);
    $this.toggleClass('edit-mode');
    if($this.hasClass('edit-mode')){
        $this.html('<i class="fa fa-close"></i> Close Editing');
    } else {
        $this.html('<i class="fa fa-pencil-square-o"></i> edit');
    }
});
