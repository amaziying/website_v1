//scroll down animation

var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
    return false;
});


//Fade in letters	 
	 
$(document).ready(function(){	
 
	 var section1 = $('.fadein');

section1.hide().contents().each(function() {
    var words;
    if (this.nodeType === 3) {
        words = '<span> ' + this.data.split(/\s+/).join(' </span><span> ') + ' </span>';
        $(this).replaceWith(words);
    } else if (this.nodeType === 1) {
        this.innerHTML = '<span> ' + this.innerHTML.split(/\s+/).join(' </span><span> ') + ' </span>';
    }
});

section1.find('span').hide().each(function() {
    if( !$.trim(this.innerHTML) ) {
        $(this).remove();
    }
});

section1.show().find('span').each(function(i) {
    $(this).delay(600 * i).fadeIn(600);
});

var button1 = $('#btn-anim');
button1.hide();
button1.delay(4800).fadeIn(600);

});