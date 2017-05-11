$(function() {

$('.inline').colorbox({
    //added to remove initial flickering
    opacity : 0,
    //use the onOpen event...
    onOpen: function() {
        // prevent Overlay from being displayed...
        $('#cboxOverlay,#colorbox').css('visibility', 'hidden');
        // make the overlay visible and
        // re-add all it's original properties!
        $('#cboxOverlay').css({
            'visibility': 'visible',
            'opacity': 0.1,
            'cursor': 'pointer'
            // execute our original animation on the overlay!
            // animate it you can use here all the
            // possible animate combination or plugin...
        }).animate({
            height: ['fade', 'swing'],
            opacity: 0.7
        }, 50 , function() {
            
			$('#colorbox').css({
            'visibility': 'visible'
        }).fadeIn(200);
        });
    
}
});

$('.iframe').colorbox({
    //added to remove initial flickering
    opacity : 0,
    //use the onOpen event...
    onOpen: function() {
        // prevent Overlay from being displayed...
        $('#cboxOverlay,#colorbox').css('visibility', 'hidden');
        // make the overlay visible and
        // re-add all it's original properties!
        $('#cboxOverlay').css({
            'visibility': 'visible',
            'opacity': 0.1,
            'cursor': 'pointer'
            // execute our original animation on the overlay!
            // animate it you can use here all the
            // possible animate combination or plugin...
        }).animate({
            height: ['fade', 'swing'],
            opacity: 0.7
        }, 50 , function() {
            
			$('#colorbox').css({
            'visibility': 'visible'
        }).fadeIn(200);
        });
    
}
});

});