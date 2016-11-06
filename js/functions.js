$(window).scroll(function(){ //anytime the window is scrolled, what is put inside here will activate

  var wScroll = $(this).scrollTop(); //created a var called "wScroll". "this" = the window and "scrollTop" tells you where it is in relation to the top

// header DO NOT TOUCH //
  
  $('.headert').css({  //we are selecting the .logo and telling it belongs to css by adding .css
    'transform' : 'translate(0px, '+ wScroll /2 + '%)' //we are manipulating the translate body of the transform property. The "/2" is halving the speed

  });


  $('.back-bird').css({  
    'transform' : 'translate(0px, '+ wScroll /4 + '%)' 

  });

  $('.fore-bird').css({  
    'transform' : 'translate(0px, -'+ wScroll /40 + '%)' 

  });

});

// end of header // 






