//scroll down animation

 $(".scroll").click(function(event){
         event.preventDefault();
         //calculate destination place
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height();
         }else{
              dest=$(this.hash).offset().top;
         }
         //go to destination
         $('html,body').animate({scrollTop:dest}, 1000,'swing');
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
    $(this).delay(1000 * i).fadeIn(600);
});

var button1 = $('#btn-anim');
button1.hide();
button1.delay(8000).fadeIn(600);

});