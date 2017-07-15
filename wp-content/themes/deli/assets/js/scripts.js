$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
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

// $("a#buy-btn").click(function(e) {
//   e.preventDefault();
//   $(".cart").toggleClass("cart-display");
// });


$(".display-prod-full").click(function(e) {
  e.preventDefault();
  $('.display-prod-split').css('background-image', 'url(img/TOGGLE-ICONS-1B.png)');
  $('.display-prod-full').css('background-image', 'url(img/TOGGLE-ICONS-2A.png)');
  $(".product-list-squares").hide();
  $(".product-list-full").show();
});

$(".display-prod-split").click(function(e) {
  e.preventDefault();
  $('.display-prod-split').css('background-image', 'url(img/TOGGLE-ICONS-1A.png)');
  $('.display-prod-full').css('background-image', 'url(img/TOGGLE-ICONS-2B.png)');
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





  $(document).ready(function(){

var quantitiy=0;
   $('.quantity-right-plus').click(function(e){

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());

        // If is not undefined

            $('#quantity').val(quantity + 1);


            // Increment

    });

     $('.quantity-left-minus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());

        // If is not undefined

            // Increment
            if(quantity>0){
            $('#quantity').val(quantity - 1);
            }
    });

});
