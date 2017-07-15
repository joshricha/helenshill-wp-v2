var Wpfc_Lazyload = {
	j: jQuery,
	init: function(){
		var self = this;

		jQuery(window).scroll(function(){
			self.load_images();
		});

		jQuery(window).resize(function(){
			self.load_images();
		});

		jQuery(window).load(function(){
			self.load_images();
		});
	},
	load_images: function(){
		var self = this;
		var winH = jQuery( window ).height();

		jQuery("img[data-wpfclazy-src]").each(function(i, e){
			var elemRect = e.getBoundingClientRect();

			if(winH - elemRect.top + 200 > 0){
				var src = jQuery(e).attr("data-wpfclazy-src");
				var srcset = jQuery(e).attr("data-wpfclazy-srcset");

				jQuery(e).attr("src", src);
				jQuery(e).attr("srcset", srcset);

				jQuery(e).removeAttr("data-wpfclazy-src");
				jQuery(e).removeAttr("data-wpfclazy-srcset");
			}
		});
	}
};
Wpfc_Lazyload.init();