/* -------------------------------------------------------------------------------- /
	
	SmartOn jQuery
	Created by 4grafx and ws-theme
	v1.1 - 28.11.2013
	All rights reserved.

	+----------------------------------------------------+
		TABLE OF CONTENTS
	+----------------------------------------------------+
	
	[1]		Bootstrap
	[2]		Navigation
	[3]		Toggle
	[4]		Carousel
	[5]		ScrollToTop
	[6]		Animate
	[7]		GoogleMap
	[8]		Revolution Slider
	[9]		Lightbox
	[10]	Preloader
	[11]	Parallex
	[12]	Sticky Header
	[13]	Animation in Viewport
	[14]	Isotope Portfolio
	
/ -------------------------------------------------------------------------------- */

var gfx=jQuery;
gfx.noConflict();


/* ---------------------------------------------------
	Default Bootstrap
-------------------------------------------------- */


!function (gfx) {

  gfx(function(){
    // Bootstrap Tooltip
    gfx("[data-toggle=tooltip-boot]").tooltip()

    // Bootstrap Popover
    gfx("[data-toggle=popover]")
      .popover()
		}
	)
}(window.jQuery)


/* ---------------------------------------------------
	Main Menu
-------------------------------------------------- */


gfx(function() {
	gfx('#main-menu').smartmenus({
		subMenusSubOffsetX: 0,
		subMenusSubOffsetY: 0,
		markCurrentItem:	true,
		subIndicatorsPos: 	'append',	// position of the SPAN relative to the menu item content ('prepend', 'append')
		showTimeout:		50,		// timeout before showing the sub menus
		hideTimeout:		50		// timeout before hiding the sub menus
	});
});


gfx(function() {
  gfx('#menu-button').click(function() {
    var $this = gfx(this),
        $menu = gfx('#main-menu');
    if (!$this.hasClass('collapsed')) {
      $menu.addClass('collapsed');
      $this.addClass('collapsed');
    } else {
      $menu.removeClass('collapsed');
      $this.removeClass('collapsed');
    }
    return false;
  }).click();
});


/* ---------------------------------------------------
	click/tap to toggle the sub menus in collapsible mode
-------------------------------------------------- */


gfx('#main-menu').bind('show.smapi', function(e, menu) {
	gfx(menu).dataSM('parent-a').children('span.sub-arrow').text('-');
});

gfx('#main-menu').bind('hide.smapi', function(e, menu) {
	gfx(menu).dataSM('parent-a').children('span.sub-arrow').text('+');
});


/* ---------------------------------------------------
	Toggle Divs
-------------------------------------------------- */


gfx(document).ready(function(){

  gfx('div.toggle-container').each(function() {
    var $dropdown = gfx(this);
    gfx("a.toggle-link", $dropdown).click(function(e) {
      e.preventDefault();
      $div = gfx("div.togglebox", $dropdown);
	  gfx(this).toggleClass('close-link');
      $div.fadeToggle(150).animate({'margin-top': '0px', "opacity":"1"}, 300) ;
      gfx("div.togglebox").not($div).fadeOut(150).animate({'margin-top': '20px', "opacity":"0"}, 300);
      return false;
    });
	});
    
  gfx('html').click(function(){
    gfx("div.togglebox").fadeOut(150).animate({'margin-top': '20px', "opacity":"0"}, 300);
  });
  gfx("div.togglebox").click(function(e) {
		e.stopPropagation();
  });
     
});


/* ---------------------------------------------------
	Team Toggle
-------------------------------------------------- */


gfx(document).ready(function(){
  gfx(".toggle-staff").click(function(){    
    var target = gfx(this).parent().children(".staff-info");
    gfx(target).slideToggle();
	gfx(this).toggleClass('toggle-close');
  });
});


/* ---------------------------------------------------
	Carousel
-------------------------------------------------- */


/*
gfx(function() {

	gfx('.latest-work').carouFredSel({
		circular	: true,
		infinite	: true,
		auto: false,
		responsive: true,
		width: '100%',
		scroll: 1,
		prev : {
			button: "#carou-prev",
			key: "left",
			items: 1,
			duration: 750
			},
		next : {
			button: "#carou-next",
			key: "right",
			items: 1,
			duration: 750
		},
		mousewheel: false,
		swipe: {
			onMouse: true,
			onTouch: true
		},
		items: {
			visible: {
				min: 1,
				max: 6
			}
		}
	});
	
	gfx('.testimonials').carouFredSel({
		circular	: true,
		infinite	: true,
		auto: true,
		responsive: true,
		width: '100%',
	pagination	: {
		container	: function() {
			return gfx(this).parents(".list_carousel").find(".pagination-carousel");
		}
		},
		mousewheel: false,
		swipe: {
			onMouse: true,
			onTouch: true
		},
		scroll      : {
	        duration        : 800,
	        pauseOnHover    : true,
			fx : "fade",
	    },
		items: {
			visible: {
				min: 1,
				max: 1
			}
		}
	});

	gfx('.simple-carou').carouFredSel({
		circular	: true,
		infinite	: true,
		auto: true,
		responsive: true,
		width: '100%',
	pagination	: {
		container	: function() {
			return gfx(this).parents(".list_carousel").find(".pagination-carousel");
		}
		},
		mousewheel: false,
		swipe: {
			onMouse: true,
			onTouch: true
		},
		scroll      : {
	        duration        : 1200,
	        pauseOnHover    : true,
			fx : "slide",
	    },
		items: {
			visible: {
				min: 1,
				max: 1
			}
		}
	});
});
*/


/* ---------------------------------------------------
	Back to Top
-------------------------------------------------- */


gfx(document).ready(function(){
 
	gfx(window).scroll(function(){
	    if (gfx(this).scrollTop() > 100) {
	        gfx('.scrollup').fadeIn();
	    } else {
	        gfx('.scrollup').fadeOut();
	    }
	});

/*
	gfx('.scrollup').click(function(){
	    gfx("html, body").animate({ scrollTop: 0 }, 800);
	    return false;
	});
*/

});


/* ---------------------------------------------------
	Google Map
-------------------------------------------------- */

/*

var map;
var newyork = new google.maps.LatLng(40.79680, -73.94859);
var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

  var featureOpts = [ { "elementType": "geometry", "stylers": [ { "gamma": 1 }, { "lightness": -2 }, { "saturation": -90 }, { "weight": 1 }, { "visibility": "simplified" } ] } ];

  var mapOptions = {
        scroll:{x:gfx(window).scrollLeft(),y:gfx(window).scrollTop()},
        zoom: 17,
		center: new google.maps.LatLng(40.79740, -73.94859),
    panControl: true,
    panControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER
    },

    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.LEFT_CENTER
    },

		scaleControl: false,
		scrollwheel: false,
		streetViewControl: false,
    	mapTypeControlOptions: {
      		mapTypeIds: [MY_MAPTYPE_ID]
    			},
    	mapTypeId: MY_MAPTYPE_ID,
  		};
  
	  
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  

  var contentString = 
		'<div id="content-marker">'+
	  '<div id="siteNotice">'+
	  '</div>'+
	  '<h3 id="firstHeading" class="firstHeading">Contact Us</h3>'+
	  '<div id="bodyContent">'+
	  '<p>United States of America.<br/> New York. 123 Fifth Avenue.</p>'+
	  '</div>'+
	  '</div>';
 
  var infowindow = new google.maps.InfoWindow({
	    content: contentString
	});
	  
	var companyLogo = new google.maps.MarkerImage('img/theme/google-marker.png',
		new google.maps.Size(40,57),
		new google.maps.Point(0,0),
		new google.maps.Point(20,50)
	);
	
	var companyPos = new google.maps.LatLng(40.79680, -73.94859);
	var companyMarker = new google.maps.Marker({
		position: companyPos,
		map: map,
		icon: companyLogo,
		title:"SmartOn"
	});
    
    var offset=gfx(map.getDiv()).offset();
        map.panBy(((mapOptions.scroll.x-offset.left)/3),((mapOptions.scroll.y-offset.top)/8));
      google.maps.event.addDomListener(window, 'scroll', function(){
      var scrollY=gfx(window).scrollTop(),
          scrollX=gfx(window).scrollLeft(),
          scroll=map.get('scroll');
      if(scroll){
        map.panBy(-((scroll.x-scrollX)/3),-((scroll.y-scrollY)/8));
      }
      map.set('scroll',{x:scrollX,y:scrollY})
      
      });

    
  var styledMapOptions = {
    name: 'SmartON'
  };
  
  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions)
  ;
  
  
   map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
  
  google.maps.event.addListener(companyMarker, 'click', function() {
  infowindow.open(map,companyMarker);
  
});

}

				
google.maps.event.addDomListener(window, 'load', initialize);var map;var map;
*/


/* ---------------------------------------------------
	Revolution Slider
-------------------------------------------------- */

/*
   jQuery(document).ready(function() {
      jQuery('.fullwidthbanner').revolution({
         delay:9000,
         startwidth:1170,
         startheight:700,
         autoHeight:"on",
         fullScreenAlignForce:"off",
 
         onHoverStop:"on",
 
         thumbWidth:100,
         thumbHeight:50,
         thumbAmount:3,
 
         hideThumbsOnMobile:"off",
         hideBulletsOnMobile:"off",
         hideArrowsOnMobile:"off",
         hideThumbsUnderResoluition:0,
 
         hideThumbs:200,
 
         navigationType:"none",
         navigationArrows:"solo",
         navigationStyle:"round",
 
         navigationHAlign:"center",
         navigationVAlign:"bottom",
         navigationHOffset:30,
         navigationVOffset:30,
 
         soloArrowLeftHalign:"left",
         soloArrowLeftValign:"center",
         soloArrowLeftHOffset:20,
         soloArrowLeftVOffset:0,
 
         soloArrowRightHalign:"right",
         soloArrowRightValign:"center",
         soloArrowRightHOffset:20,
         soloArrowRightVOffset:0,
 
 
         touchenabled:"on",
 
         stopAtSlide:-1,
         stopAfterLoops:-1,
         hideCaptionAtLimit:0,
         hideAllCaptionAtLilmit:0,
         hideSliderAtLimit:0,
 
         dottedOverlay:"twoxtwo",
 
         fullWidth:"off",
         forceFullWidth:"off",
         fullScreen:"off",
         fullScreenOffsetContainer:"#topheader-to-offset",
 
         shadow:0,
		 videoJsPath:"js/themejs/videojs/",
		 lazyLoad:"off"
 
      });
 
   });

   jQuery(document).ready(function() {
      jQuery('.service-slider').revolution({
         delay:9000,
         startwidth:1170,
         startheight:350,
         autoHeight:"on",
         fullScreenAlignForce:"off",
 
         onHoverStop:"on",
 
         thumbWidth:100,
         thumbHeight:50,
         thumbAmount:3,
 
         hideThumbsOnMobile:"off",
         hideBulletsOnMobile:"off",
         hideArrowsOnMobile:"off",
         hideThumbsUnderResoluition:0,
 
         hideThumbs:200,
 
         navigationType:"none",
         navigationArrows:"solo",
         navigationStyle:"round",
 
         navigationHAlign:"center",
         navigationVAlign:"bottom",
         navigationHOffset:30,
         navigationVOffset:30,
 
         soloArrowLeftHalign:"left",
         soloArrowLeftValign:"center",
         soloArrowLeftHOffset:20,
         soloArrowLeftVOffset:0,
 
         soloArrowRightHalign:"right",
         soloArrowRightValign:"center",
         soloArrowRightHOffset:20,
         soloArrowRightVOffset:0,
 
 
         touchenabled:"on",
 
         stopAtSlide:-1,
         stopAfterLoops:-1,
         hideCaptionAtLimit:0,
         hideAllCaptionAtLilmit:0,
         hideSliderAtLimit:0,
 
         dottedOverlay:"none",
 
         fullWidth:"off",
         forceFullWidth:"off",
         fullScreen:"off",
         fullScreenOffsetContainer:"#topheader-to-offset",
 
         shadow:0,
		 videoJsPath:"js/themejs/videojs/",
		 lazyLoad:"off"
 
      });
 
   });
*/


/* ---------------------------------------------------
	Lightbox
-------------------------------------------------- */


if (gfx().magnificPopup) {
	gfx('[data-lightbox=image], .lightbox').each(function(index, element) {
		gfx(this).magnificPopup({
			type:'image',
			mainClass: 'mfp-fade',
			removalDelay: 300,
			closeOnContentClick: true
		});		
	});
	
	gfx('[data-lightbox=video], [data-lightbox=map], [data-lightbox=iframe], .lightbox-video, .lightbox-map, .lightbox-iframe').each(function(index, element) {
		gfx(this).magnificPopup({
			mainClass: 'mfp-fade',
			removalDelay: 300,
		  type: 'iframe',
		  fixedContentPos: false
		});
	});
	
	gfx('[data-lightbox=gallery], .lightbox-gallery').each(function(index, element) {
		gfx(this).magnificPopup({
			mainClass: 'mfp-fade',
			removalDelay: 300,
		  type: 'image',
		  delegate: 'a',
			gallery: {
				enabled: true
			}
		});
	});
};


/* ---------------------------------------------------
	Page Preloader
-------------------------------------------------- */
/*


gfx(window).load(function(){ var pageLoading = gfx("#page-preloader"); setTimeout(function() { pageLoading.fadeOut();}, 1200); });


//Parallax

		gfx(function(){
			gfx.stellar({
				horizontalScrolling: false,
				verticalOffset: 0,
			});
		});

*/

/* ---------------------------------------------------
	Navigation Stuck
-------------------------------------------------- */

gfx(function(){
gfx(window).scroll(function(e){ 
  //console.log('called');
      $el = gfx('.header-bottom'); 
      if (gfx(this).scrollTop() > 400 && $el.css('position') != 'fixed'){ 
        gfx('.header-bottom').css({'position': 'fixed', 'top': '0px', 'opacity':'0'}).animate({opacity:1},600).addClass('visible');;
      }
      if (gfx(this).scrollTop() < 200 && $el.css('position') == 'fixed'){
        gfx('.header-bottom').css({'position': 'relative', 'top': '0px'}).removeClass('visible');
      }
      });
});

/* ---------------------------------------------------
	Animation on Scroll
-------------------------------------------------- */
		
gfx('.animation').waypoint(function(direction) {
  gfx(this).addClass('animation-active');
}, { offset: '100%' });

/* ---------------------------------------------------
	Tooltipster
-------------------------------------------------- */


/*
		gfx(document).ready(function() {
			 gfx('.tooltip-on').tooltipster({
   animation: 'grow',
   arrow: true,
   arrowColor: '',
   content: '',
   delay: 100,
   fixedWidth: 0,
   maxWidth: 0,
   functionBefore: function(origin, continueTooltip) {
      continueTooltip();
   },
   functionReady: function(origin, tooltip) {},
   functionAfter: function(origin) {},
   icon: '(?)',
   iconDesktop: false,
   iconTouch: false,
   iconTheme: '.tooltipster-icon',
   interactive: true,
   interactiveTolerance: 150,
   offsetX: 0,
   offsetY: 5,
   onlyOne: true,
   speed: 150,
   timer: 0,
   theme: '.tooltipster-default',
   touchDevices: false,
   trigger: 'hover',
   updateAnimation: true
});
		});
*/


/* ---------------------------------------------------
	Montage Images
-------------------------------------------------- */


/*
gfx(function() {
				
				var $container 	= gfx('#gallery-container'),
					$imgs		= $container.find('img').hide(),
					totalImgs	= $imgs.length,
					cnt			= 0;
				
				$imgs.each(function(i) {
					var $img	= gfx(this);
					gfx('<img alt=""/>').load(function() {
						++cnt;
						if( cnt === totalImgs ) {
							$imgs.show();
							$container.montage({
								minw : 100,
								alternateHeight : true,
								alternateHeightRange : {
									min	: 100,
									max	: 350,
									},
								margin : 0,
								fillLastRow : true
							});

						}
					}).attr('src',$img.attr('src'));
				});	
			});
*/


/* ---------------------------------------------------
	Knob
-------------------------------------------------- */


/*
gfx(function() {

    gfx('.chart-1').easyPieChart({
		barColor: "#20A5E8",
		trackColor: "#f2f2f2",
		scaleLength: 0,
		scaleColor: false,
		lineCap: "round",
		lineWidth: 10,
		size:190,
		rotate: 0,
		animate:2000,
        
    });

    gfx('.chart-2').easyPieChart({
		barColor: "#fff",
		trackColor: false,
		scaleLength: 0,
		scaleColor: false,
		lineCap: "square",
		lineWidth: 6,
		size:190,
		rotate: 0,
		animate:2000,
        
    });

    gfx('.chart-3').easyPieChart({
		barColor: "#20A5E8",
		trackColor: false,
		scaleLength: 0,
		scaleColor: false,
		lineCap: "square",
		lineWidth: 20,
		size:190,
		rotate: 0,
		animate:2000,
        
    });

    gfx('.chart-4').easyPieChart({
		barColor: "#20A5E8",
		trackColor: "#f9f9f9",
		scaleLength: 0,
		scaleColor: false,
		lineCap: "square",
		lineWidth: 20,
		size:200,
		rotate: 0,
		animate:2000,
        
    });

});
*/


/* ---------------------------------------------------
	Flexslider
-------------------------------------------------- */


/*
//default
gfx(window).load(function() {
  
  // Portfolio Slider
	gfx('.simple-slider-portfolio').flexslider({
		animation: "slide",
		slideshow: false,
		smoothHeight: false,
		
		// Primary Controls
		controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
		directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
				
		// Secondary Navigation
		keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
		multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
		mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
		pausePlay: false,               //Boolean: Create pause/play dynamic element
		pauseText: 'Pause',             //String: Set the text for the "pause" pausePlay item
		playText: 'Play',               //String: Set the text for the "play" pausePlay item 

		
		// Usability features
		pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
		pauseOnHover: true,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
		useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
		touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
		video: true,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
		
		start: function(slider){
			gfx('body').removeClass('loading');
			gfx('#portfolio-container-inner').isotope('reLayout'); // after loading we check the height and reLoad OM
		},
		
		after: function(slider) {
			gfx('#portfolio-container-inner').isotope('reLayout');
		}
  
	});
	
	// Regular Slider
	gfx('.simple-slider').flexslider({
		animation: "slide",
		slideshow: false,
		smoothHeight: true,
		
		// Primary Controls
		controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
		directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
				
		// Secondary Navigation
		keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
		multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
		mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
		pausePlay: false,               //Boolean: Create pause/play dynamic element
		pauseText: 'Pause',             //String: Set the text for the "pause" pausePlay item
		playText: 'Play',               //String: Set the text for the "play" pausePlay item 

		
		// Usability features
		pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
		pauseOnHover: true,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
		useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
		touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
		video: true,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
		
		start: function(slider){
			gfx('body').removeClass('loading');
		}
		  
	});

	// Thumb Slider
	gfx('.thumb-slider').flexslider({
		animation: "fade",
		slideshow: true,
				
		// Primary Controls
		controlNav: "thumbnails",               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
		directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
				
		// Secondary Navigation
		keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
		multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
		mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
		pausePlay: false,               //Boolean: Create pause/play dynamic element
		pauseText: 'Pause',             //String: Set the text for the "pause" pausePlay item
		playText: 'Play',               //String: Set the text for the "play" pausePlay item 
		
		// Usability features
		pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
		pauseOnHover: true,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
		useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
		touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
		video: true,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
 
		start: function(slider){
			gfx('body').removeClass('loading');
		}
	});
	
	// Main Slider
	gfx('.main-slider').flexslider({
		animation: "fade",
		slideshow: true,
		smoothHeight: true,
				
		// Primary Controls
		controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
		directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
				
		// Secondary Navigation
		keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
		multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
		mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
		pausePlay: false,               //Boolean: Create pause/play dynamic element
		pauseText: 'Pause',             //String: Set the text for the "pause" pausePlay item
		playText: 'Play',               //String: Set the text for the "play" pausePlay item 
		
		// Usability features
		pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
		pauseOnHover: true,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
		useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
		touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
		video: true,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
 
		start: function(slider){
			gfx('body').removeClass('loading');
		}
	});
    
});
*/


/* ---------------------------------------------------
	Isotope Portfolio and Blog
-------------------------------------------------- */


if ( gfx('.portfolio-container').hasClass('portfolio-active') ) {

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	results = regex.exec(location.search);
	return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

gfx(function() {
		var $container = gfx('#portfolio-container-inner');
		gfx('#shuffle').click(function(){
			$container.isotope('shuffle');
		});
					
		$select = gfx('#options select');	
		$container.imagesLoaded( function(){
		$container.isotope({
			animationEngine:'best-available',
			animationOptions: {
				duration: 800,
				easing: 'linear',
				queue: false
			},
		  resizable: false,
		  sortBy: 'original-order', // can be also set to random for default random order
      sortAscending: true,
		  masonry: { columnWidth: $container.width() / 12 }
		});
		gfx(window).smartresize(function(){
		  $container.isotope({
			masonry: { columnWidth: $container.width() / 12 }
		  });
		});		
		
		gfx(function(){
			gfx('.with-toggle .element .portfolio-info-toggle').click(function() {
				gfx(this)
				.closest('.element')
				.toggleClass('wsp-z-index ')
				.find('h3 > span').toggleClass('fa-plus-square fa-minus-square')
				.closest('.element')
				.find('.portfolio-toggle')
				.slideToggle(200, function() {
					$container.isotope('reLayout');
				})
			})
		});
			
	  $container.isotope({
			itemSelector : '.element'
	  });
	  	  
		$select.change(function() {
			var filters = gfx(this).val();	
			$container.isotope({
				filter: filters
			});
		});
		
		if (getParameterByName('filter')!='') {
			 $container.isotope({ filter: '.'+getParameterByName('filter') });
			 gfx('a[href="#filter"][data-option-value="*"]').removeClass('btn-primary');
			 gfx('a[href="#filter"][data-option-value=".'+getParameterByName('filter')+'"]').addClass('btn-primary');
		}
	
		$container.isotope('reLayout');	
	
	  var $optionSets = gfx('#options .option-set'),
		  $optionLinks = $optionSets.find('a');
	  $optionLinks.click(function(){
		var $this = gfx(this);
		if ( $this.hasClass('btn-primary') ) {
		  return false;
		}
		var $optionSet = $this.parents('.option-set');
		$optionSet.find('.btn-primary').removeClass('btn-primary');
		$this.addClass('btn-primary');
		var options = {},
			key = $optionSet.attr('data-option-key'),
			value = $this.attr('data-option-value');
		value = value === 'false' ? false : value;
		options[ key ] = value;
		if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
		  changeLayoutMode( $this, options )
		} else {
		  $container.isotope( options );
		}		
		return false;
	  });
	});
});

};


/* ---------------------------------------------------
	Panel Slide
-------------------------------------------------- */


gfx(document).ready(function(){

	gfx(".slide-panel-btn").click(function(){
		gfx("#slide-panel").slideToggle(250);
		gfx(this).toggleClass("active"); return false;
	});
	
	 
});


/* ---------------------------------------------------
	Twitter
-------------------------------------------------- */

/*
       gfx('.tweet').twittie({
            dateFormat: '%b. %d, %Y',
            template: '{{tweet}} <div class="date">{{date}}</div>',
            count: 2
        });

*/

/* ---------------------------------------------------
	Countdown
-------------------------------------------------- */

/*
gfx(".countdown").TimeCircles({
		start: true, // determines whether or not TimeCircles should start immediately.
		refresh_interval: 0.1, // determines how frequently TimeCircles is updated.
		count_past_zero: true, // This option is only really useful for when counting down. What it does is either give you the option to stop the timer, or start counting up after you've hit the predefined date (or your stopwatch hits zero).
		circle_bg_color: "#fff", // determines the color of the background circle.
		use_background: true, // sets whether any background circle should be drawn at all.
		fg_width: 0.05, //  sets the width of the foreground circle.
		bg_width: 0.1, // sets the width of the backgroundground circle.
		time: { //  a group of options that allows you to control the options of each time unit independently.
			Days: {
				show: true,
				text: "Days",
				color: "#20a5e8"
			},
			Hours: {
				show: true,
				text: "Hours",
				color: "#20a5e8"
			},
			Minutes: {
				show: true,
				text: "Minutes",
				color: "#20a5e8"
			},
			Seconds: {
				show: true,
				text: "Seconds",
				color: "#20a5e8"
			}
		}	
	})*/


/* ---------------------------------------------------
	Shop
-------------------------------------------------- */
/*
gfx(function() {
       gfx(".product-group").hover(function() {
          gfx(this).find(".product-actions").slideToggle("fast");
       });
});

/!* ----- Shop Mode View Switch ---- *!/
gfx('.options-view a').click(function(){
    gfx('.options-view a').removeClass('active')
    gfx(this).addClass('active');
});

gfx('#list').click(function(){gfx('#products .item').addClass('list-group-item');});
gfx('#grid').click(function(){gfx('#products .item').removeClass('list-group-item');});

/!* ----- Range Selection ---- *!/


var slider = gfx('.select-range');

slider.noUiSlider({
  range: [0,400]
  ,start: [20,250]
  ,connect: true
  ,behaviour: 'extend-tap'
  ,serialization: {
    resolution: 0.1,
    to: [
      [ gfx('#min-euro'), 'html' ],
      [ gfx('#max-euro'),'html']
    ]
  }
});

/!* item increment *!/
jQuery(document).ready(function(){
    // This button will increment the value
    gfx('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = gfx(this).attr('field');
        // Get its current value
        var currentVal = parseInt(gfx('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            gfx('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            gfx('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    gfx(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = gfx(this).attr('field');
        // Get its current value
        var currentVal = parseInt(gfx('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            gfx('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            gfx('input[name='+fieldName+']').val(0);
        }
    });
});


/!* Animate on Click Demo *!/

  function testAnim(x) {
    gfx('#animationSandbox').removeClass().addClass(x + ' animation animation-active').one('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function(){
      gfx(this).removeClass();
    });
  };

  gfx(document).ready(function(){
    gfx('.js--triggerAnimation').click(function(){
      var anim = gfx('.js--animations').val();
      testAnim(anim);
    });
  });
  
/!*Inline List Split after 2 items *!/
gfx('.contact-info ul li:nth-child(2n)').next().css({'clear': 'both'});
*/


/* ---------------------------------------------------
	Smooth Scrool
-------------------------------------------------- */
