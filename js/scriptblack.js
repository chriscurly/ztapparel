/* --------------------------------------------------
	PrettyPhoto
-------------------------------------------------- */
(function($) { // Hide scope, no $ conflict

function generate_lightbox(){
	/* Initialize */
	$("a[rel^='prettyPhoto']").prettyPhoto({
		theme:'dark_rounded',
		 allow_resize: true,
		 default_width: 800,
         default_height: 404
	});
	
}

$(document).ready(function(){

	generate_lightbox();
	
	$("a[rel^='prettyPhoto']:not(.portfolio-popup-info-zoom, .display-none), a.lightbox-none, a.lightbox-none-blog, a.lightbox-none-half").live('mouseenter', function(){
		$(this).find('.overlay').fadeIn(300);
	}).live('mouseleave', function(){
		$(this).find('.overlay').fadeOut(300);
	});
	
	
});

/* --------------------------------------------------
	Portfolio hover
-------------------------------------------------- */
$(function() {
	$(".img-post").css("opacity","0.7");
	$(".img-post").hover(function () {
		$(this).stop().animate({
			opacity: 1
		}, 250);
	},
	function () {
		$(this).stop().animate({
			opacity: 0.7
		}, 300);
	});
});

 
 /* --------------------------------------------------
	PanelSliding
-------------------------------------------------- */
 
$(document).ready(function(){

    $("div.panel_button").toggle(function(){
	$("div#panel").animate({
			left: "0px"
		}, "fast");
		$(".panel_button").animate({
			left: "301px"
		}, "fast");
		$("div.panel_button").toggle();
	});	
    
	$("div.panel_button").click(function(){
	$("div#panel").animate({ opacity:1,
			left: "0px"
		}, "fast");
		$(".panel_button").animate({
			left: "301px"
		}, "fast");
		$("div.panel_button").toggle();
	});	
    
	$("div.panel_button").click(function(){
	$("div#panel ul").animate({ opacity:1,
			left: "0px"
		}, "fast");
	
	});	
	
	$("div.hide_button").click(function(){
		$("div#panel").animate({ opacity:0.4,
			left: "-301px"
		}, "fast");
		$(".panel_button").animate({
			left: "0px"
		}, "fast");
    });
	
		$("div.hide_button").click(function(){
		$("div#panel ul").animate({ opacity:0,
			left: "-301px"
		}, "fast");

    });	 
	});
	
$(function() {
    $('.social-icons ul li img').hover(function(){
	$(this).animate({ opacity: 1 }, 700);
	},
	function()
	{
		$(this).animate({ opacity: 0.7 }, 400);

     });
	 });
	 
/* --------------------------------------------------
	Social icons fading - Tipsy
-------------------------------------------------- */
	 
$(function() {	$('.social-icons li a').tipsy({fade: true, delayIn: 500, delayOut: 1000, gravity: 's'});  });
	
/* --------------------------------------------------
	Coundown start date
-------------------------------------------------- */
$(document).ready(function(){	
	var launch = new Date(2014, 4 - 1, 09, 08, 10);
	
	$('#Countdown').countdown({until: launch, format: 'DHMS', layout: '<div class="time"><div class="days">{dn}<br><span class="duration">days</span></div></div><div class="time"><div class="hours">{hn}<br><span class="duration">hours</span></div></div><div class="time"><div class="minutes">{mn}<br><span class="duration">minutes</span></div></div><div class="time"><div class="seconds">{sn}<br><span class="duration">seconds</span></div></div>'});
});
	
$(function() {
	 	$("div.panel2_button2").click(function(){
		$("div#panel2").animate({
			left: "10px"
		}, "fast");
		$(".panel2_button2").animate({
			left: "0px"
		}, "fast");
		$("div.panel2_button2").toggle();
	    });	
   $("div.hide_button2").click(function(){
		$("div#panel2").animate({
			left: "-100px"
		}, "fast");
		$(".panel2_button2").animate({
			left: "0px"
		}, "fast");
        });
});
	
})(jQuery);