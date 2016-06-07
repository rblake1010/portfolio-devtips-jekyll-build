$(document).ready(function(){ 

 // Device
  function responsive(){		
		
        var winWidth = $(window).width();
        if(winWidth >= 1024) { //tablet
		$('body').removeClass('iphone'); 
		$('body').removeClass('ipad'); 
		
        } 
        else if(winWidth <= 568){  //mobile
        $('body').addClass('iphone'); 
		$('body').removeClass('ipad');   
        }
		 else if(winWidth >= 768 && winWidth <= 1024){  //mobile

        $('body').addClass('ipad');   
		$('body').removeClass('iphone');
		
		
        }
		
        else{  //desktop
		/*$('body').removeClass('iphone');*/   

        }
    }

    responsive();

$( window ).resize(function() {
	responsive();

});

  $('.mobileIcon').click( function(){
 		$('.navigationwrap').toggleClass('activeNav');   		
	});


if($('body').hasClass('iphone')) {
$('.pageDown').hide();
}
 
  $('.pageDown').click(function() {
 $("html, body").animate({ scrollTop: $('.report').offset().top }, 1000);	
   
});  



$('.moon').addClass('animated zoomInLeft').css('visibility', 'visible');
$('.earth').addClass('animated zoomInRight').css('visibility', 'visible');
$('.planet').addClass('animated zoomInRight').css('visibility', 'visible');



 // Social Icons
$('.social img').mouseover(function() {
var currentHover = $(this).attr('class');
var newImage = currentHover + 'Hover.png';
$(this).attr('src', 'assets/img/' + newImage )
	
	}).mouseleave(function() {
	var leavingHover = $(this).attr('class');
	$(this).attr('src', 'assets/img/' + leavingHover + '.png');
});



  $('.report').waypoint(function() {

 	if($('body').hasClass('iphone')) {
 	 $('.sickMobile').addClass('animated fadeIn').css('visibility', 'visible');

  }else if ($('body').hasClass('ipad')) {
  	$('.sickMobile').addClass('animated fadeIn').css('visibility', 'visible');

  }else {

 	$('.rocketship').fadeIn(300);
	$('.blastoff').fadeIn(300).addClass('play');
	$('.sickBlurb').fadeIn(300);
     


 	$('.leftCloud').addClass('animated fadeInLeft').css('visibility', 'visible');
 	$('.leftCloud1').addClass('animated fadeInLeft').css('visibility', 'visible');
 	$('.leftCloud2').addClass('animated fadeInLeft').css('visibility', 'visible');
 	$('.rightCloud').addClass('animated fadeInRight').css('visibility', 'visible');
 	$('.rightCloud1').addClass('animated fadeInRight').css('visibility', 'visible');  	
	$('.rightCloud2').addClass('animated fadeInRight').css('visibility', 'visible');

 }


 },
 {
 	offset:150
 });




$('.track').waypoint(function() {


if($('body').hasClass('iphone')) {

$('.trackMobile').addClass('animated fadeIn').css('visibility', 'visible');


} else if($('body').hasClass('ipad'))  {

$('.trackTablet').addClass('animated fadeIn').css('visibility', 'visible');


}else {

 $('.lg-pin').addClass('animated bounceIn').css('visibility', 'visible').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
$('.lgBlurb').addClass('animated fadeInUp').css('visibility', 'visible');

 });

$('.small-pin').addClass('animated bounceIn').css('visibility', 'visible').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
$('.smallBlurb').addClass('animated fadeInUp').css('visibility', 'visible');

 });

$('.streplg-pin').addClass('animated bounceIn').css('visibility', 'visible').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
$('.strepBlurb').addClass('animated fadeInUp').css('visibility', 'visible');


 });
}

 },
 {
 	offset:100
 });



 $('.learn').waypoint(function() {

if($('body').hasClass('iphone')) {

}else if ($('body').hasClass('ipad')){
	$('.lightbulb').addClass('active');

}else{

 $('.lightbulb').addClass('active');
  $('#park').delay(2100).fadeIn(400);

}

 },
 {
 	offset:400
 });




 // Form Validation
   $('.submit').click(function() { 
 
   var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;	
	 
 var errors = false;
 
 $('.errors, .errors1').remove();
 
 
 if($('#woozyEmail').val() == $('.email').attr('value')) {
    $('#woozyEmail').after('<span class="errors">Please add your email!</span>');	
	errors = true; 
 }else if(!emailReg.test($('.email').val())){
 $('#woozyEmail').after('<span class="errors">Not a valid email!</span>');	
	errors = true;  
	 
 }
 
   if($('textarea').val() === 'Message') {
	    $('#woozyMessage').after('<span class="errors1">Please add your message!</span>');	
	errors = true; 
 }
 
 
 if(errors == true){
	return false; 
 } else {
	return true; 
 }
 
 
 });
 
 /* clear form field out..for IE*/
 
 
 
 
 
 $('input').not('.submit').each(function() {	 
	 
	var Input = $(this);
    var default_value = Input.val();

    $(Input).focus(function() {
		
        if($(this).val() == default_value)
        {
             $(this).val("");
			  
			 }
		
    }).blur(function(){
		
        if($(this).val().length == 0) 
        {
            $(this).val(default_value);
        }
    }); 
	
  });
  
      
   $('textarea').focus(function() {
	   
	   if($('textarea').val() === 'Message')        {
			
             $('textarea').val('');
			 			  
		}
	 
	}).blur(function(){
		
		if($('textarea').val() === '') 
		
        {   
            $('textarea').val('Message');
        }
		
	});


	 // grab url
	 var url = self.document.location.hash.substring(1); 	 
	 if(url === 'thanks'){
	 $('form').hide();
	 $('thanks').show();
	 $("html, body").animate({ scrollTop: $('.contact').offset().top }, 1000);	 
	 }
	else  { }
    









});

 


