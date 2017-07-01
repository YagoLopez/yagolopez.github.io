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
}(window.jQuery);

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
});

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
}

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
}

/* ---------------------------------------------------
	Panel Slide
-------------------------------------------------- */

gfx(document).ready(function(){
	gfx(".slide-panel-btn").click(function(){
		gfx("#slide-panel").slideToggle(250);
		gfx(this).toggleClass("active"); return false;
	});
});