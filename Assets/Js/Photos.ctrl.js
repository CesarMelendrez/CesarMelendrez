(function(){
	angular
		.module('CesarMelendrez')
		.controller('PhotoCtrl',PhotoCtrl);

		function PhotoCtrl(){
			
  			init();

  			function init(){
  				// console.log('here');
  				!function(e){skel.breakpoints({xlarge:"(max-width: 1680px)",large:"(max-width: 1280px)",medium:"(max-width: 980px)",small:"(max-width: 736px)",xsmall:"(max-width: 480px)"}),e(function(){var o=e(window),n=e("#Photos");e("#wrapper");if(skel.vars.IEVersion<12&&n.addClass("ie"),skel.vars.mobile&&n.addClass("touch"),skel.canUse("transition")){n.addClass("loading"),o.on("load",function(){console.log('loading done');window.setTimeout(function(){n.removeClass("loading")},100)});var i;o.on("resize",function(){window.clearTimeout(i),n.addClass("resizing"),i=window.setTimeout(function(){n.removeClass("resizing")},100)})}o.scrollTop(0),e("form").placeholder();var a=e(".panel");a.each(function(){var o=e(this),i=e('[href="#'+o.attr("id")+'"]'),t=e('<div class="closer" />').appendTo(o);t.on("click",function(e){o.trigger("---hide")}),o.on("click",function(e){e.stopPropagation()}).on("---toggle",function(){o.hasClass("active")?o.triggerHandler("---hide"):o.triggerHandler("---show")}).on("---show",function(){n.hasClass("contentActive")&&a.trigger("---hide"),o.addClass("active"),i.addClass("active"),n.addClass("contentActive")}).on("---hide",function(){o.removeClass("active"),i.removeClass("active"),n.removeClass("contentActive")}),i.removeAttr("href").css("cursor","pointer").on("click",function(e){e.preventDefault(),e.stopPropagation(),o.trigger("---toggle")})}),n.on("click",function(e){n.hasClass("contentActive")&&(e.preventDefault(),e.stopPropagation(),a.trigger("---hide"))}),o.on("keyup",function(e){27==e.keyCode&&n.hasClass("contentActive")&&(e.preventDefault(),e.stopPropagation(),a.trigger("---hide"))});var t=e("#main");t.children(".thumb").each(function(){var o,n=e(this),i=n.find(".image"),a=i.children("img");0!=i.length&&(i.css("background-image","url("+a.attr("src")+")"),(o=a.data("position"))&&i.css("background-position",o),a.hide(),skel.vars.IEVersion<11&&n.css("cursor","pointer").on("click",function(){i.trigger("click")}))}),
            
            t.poptrox({baseZIndex:2e4,
              caption:function(e){var o="";
              return e.nextAll().each(function(){o+=this.outerHTML}),o},
              fadeSpeed:300,
              onPopupClose:function(){n.removeClass("modalActive")},
              onPopupOpen:function(){n.addClass("modalActive")},
              overlayOpacity:0,
              popupCloserText:"",
              // popupHeight:150,
              popupLoaderText:"",
              popupSpeed:0,
              popupWidth:150,
              selector:".thumb > a.image",
              usePopupCaption:!0,
              usePopupCloser:!0,
              usePopupDefaultStyling:!1,
              usePopupEasyClose:!1,
              usePopupForceClose:!0,
              usePopupLoader:!0,
              usePopupNav:!0,
              preload:!0,
              windowMargin:210}),



            skel.on("-xsmall",function(){t[0]._poptrox.windowMargin=50}).on("+xsmall",function(){t[0]._poptrox.windowMargin=0})})}(jQuery);
  				

          setTimeout(function() {
  					jQuery('#Photos').removeClass('loading');
  				}, 300);
  				}
		};
})();