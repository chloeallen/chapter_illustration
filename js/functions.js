$(window).scroll(function(){ //anytime the window is scrolled, what is put inside here will activate

  var wScroll = $(this).scrollTop(); //created a var called "wScroll". "this" = the window and "scrollTop" tells you where it is in relation to the top


  
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



var marginY = 0;
  var destination = 0;
  var speed = 5;
  var scroller = null



function initscroll(elementId){ 
  destination = document.getElementById(elementId).offsetTop;

  scroller= setTimeout(function(){ 

    initscroll(elementId);   

  }, 1);

marginY = marginY + speed;

if(marginY >= desintation){
clearTimeout(scroller);

}


window.scroll(0, marginY);



}

function toTop(){         // as soon as this function is called it will take back to top

  scroller= setTimeout(function(){ 

    toTop()  

  }, 1);

marginY = marginY - speed;

if(marginY <= 0){
clearTimeout(scroller);

}

window.scroll(0,marginY);
}










