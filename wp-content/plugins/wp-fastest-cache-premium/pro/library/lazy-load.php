<?php
	class WpFastestCacheLazyLoad{
		public function __construct(){}

		public function mark_content_images($content){
			preg_match_all( '/<img[^\>]+>/i', $content, $matches);

			if(count($matches[0]) > 0){
				foreach ( $matches[0] as $img ) {
					$tmp_img = preg_replace("/<img\s/", "<img wpfc-lazyload-content-image ", $img);

					$content = str_replace($img, $tmp_img, $content );
				}
			}

			return $content;
		}

		public function images_to_lazyload($content, $type = "all") {
			$placeholder = 'data:image/gif;base64,R0lGODdhAQABAPAAAP///wAAACwAAAAAAQABAEACAkQBADs=';

			preg_match_all( '/<img[^\>]+>/i', $content, $matches);

			if(count($matches[0]) > 0){
				foreach ( $matches[0] as $img ) {
					// don't to the replacement if the image is a data-uri
					if (!preg_match("/src\=[\'\"]data\:image/i", $img)){
						$replace = false;

						if(preg_match("/wpfc-lazyload-content-image/", $img)){
							if($type == "all"){
								$replace = true;
							}else{
								$replace = false;
							}
						}else{
							$replace = true;
						}

						$tmp_img = preg_replace("/\swpfc-lazyload-content-image\s/", " ", $img);

						if($replace){
							// replace the src with data-src attribute
							$tmp_img = preg_replace("/src\=[\'\"]/i", 'data-wpfclazy-$0', $img);
							
							// replace the srcset with data-srcset attribute
							$tmp_img = preg_replace("/srcset\=[\'\"]/i", 'data-wpfclazy-$0', $tmp_img);

							//to add placeholder
							$tmp_img = preg_replace("/<img\s/", "<img src=\"".$placeholder."\" ", $tmp_img);
						}

						$content = str_replace($img, $tmp_img, $content);
					}
				}
			}

			return WpFastestCacheLazyLoad::add_js_source($content);
		}

		public function add_js_source($content){
			$search = "</body>";
			$js = "<script>".file_get_contents(WPFC_WP_PLUGIN_DIR."/wp-fastest-cache-premium/pro/js/lazy-load.js")."</script>";
			
			$js = preg_replace("/var\sself/", "var s", $js);
			$js = preg_replace("/self\./", "s.", $js);
			$js = preg_replace("/jQuery\(/", "s.j(", $js);
			$js = preg_replace("/Wpfc_Lazyload/", "Wpfcll", $js);
			$js = preg_replace("/(\.?)init(\:?)/", "$1i$2", $js);
			$js = preg_replace("/(\.?)load_images(\:?)/", "$1li$2", $js);
			$js = preg_replace("/\s*(\=|\:|\;|\{|\}|\,)\s*/", "$1", $js);

			$content = substr_replace($content, $js."\n".$search, strripos($content, $search), strlen($search));

			return $content;
		}
	}
?>