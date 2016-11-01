$(window).scroll(function(){ //anytime the window is scrolled, what is put inside here will activate

  var wScroll = $(this).scrollTop(); //created a var called "wScroll". "this" = the window and "scrollTop" tells you where it is in relation to the top
  
  $('.logo').css({  //we are selecting the .logo and telling it belongs to css by adding .css
    'transform' : 'translate(0px, '+ wScroll /2 + '%)' //we are manipulating the translate body of the transform property. The "/2" is halving the speed

  });


  $('.back-bird').css({  //we are selecting the .logo and telling it belongs to css by adding .css
    'transform' : 'translate(0px, '+ wScroll /4 + '%)' //we are manipulating the translate body of the transform property. The "/4" is halving the speed by 4

  });

  $('.fore-bird').css({  //we are selecting the .logo and telling it belongs to css by adding .css
    'transform' : 'translate(0px, -'+ wScroll /40 + '%)' //added a minus symbol to change to a negative integar which makes the bird scroll up. Changed to /40 to make it slower

  });

});


// When the ID of "go-to-top" is pressed, the website slowly scrolls to the top

$('#go-to-top').each(function(){
    $(this).click(function(){ 
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false; 
    });
});