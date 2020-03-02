var pages = ['sliding-content-home', 'sliding-content-events',
    'sliding-content-team', 'sliding-content-about',
    'sliding-content-contact'];
var navItems = ['homeNav','eventsNav','teamNav','aboutNav','contactNav'];
var pageHit = 1;
var currentPage = 1;
var transition = 0;
var body = document.getElementById("theBody");

// //cursor animation starts
// Create empty
// var bubbletrail= {};
//
//
//
// // Add public parameters with default values
// bubbletrail.size= 10;
// bubbletrail.jitter= 50;
// bubbletrail.zindex= 5;
// bubbletrail.life= 1000;
//
//
//
// // Create after the page is loaded
// window.onload= function() {
// 	window.addEventListener('mousemove', function(e) {
// 		// Animate one dot
// 		var animate= function(i) {
// 			var j= (1-i)*bubbletrail.jitter;
// 			var bubble= document.createElement('div');
// 			var size= Math.ceil(Math.random()*bubbletrail.size*i);
// 			var sizepx= size+'px';
// 			bubble.style.position= 'fixed';
// 			bubble.style.top=  e.pageY +
// 				Math.round((Math.random()-0.5)*j - size/2) + 'px';
// 			bubble.style.left= e.pageX +
// 				Math.round((Math.random()-0.5)*j - size/2) + 'px';
// 			bubble.style.width= sizepx;
// 			bubble.style.height= sizepx;
// 			bubble.style.background= 'hsla(' +
// 				Math.round(Math.random()*360) + ', ' +
// 				'100%, ' +
// 				'50%, ' +
// 				i + ')';
// 			bubble.style.borderRadius= sizepx;
// 			bubble.style.pointerEvents= 'none';
// 			bubble.style.zIndex= bubbletrail.zindex +
// 				Math.round(5*(Math.random()-0.5));
// 			document.body.appendChild(bubble);
// 			window.setTimeout(function() {
// 				document.body.removeChild(bubble);
// 			}, Math.round(Math.random()*i*bubbletrail.life));
// 		};
// 		// Create a bunch of dots
// 		for (var i= 0.2; i <= 1.0; i+= 0.2) {
// 			animate(i);
// 		}
// 	});
// };

//cursor animation ends



window.addEventListener('mousewheel', function(e){
    wDelta = e.wheelDelta < 0 ? 'down' : 'up';
    console.log(wDelta);
    if(wDelta == 'down')
    {
      if(currentPage==1)
        events();
      else if(currentPage==2)
        team();
      else if(currentPage==3)
        about();
      else if(currentPage==4)
        contact();
      else if(currentPage==5)
        home();
    }
    else {
          if(currentPage==1)
            contact();
          else if(currentPage==2)
            home();
          else if(currentPage==3)
            events();
          else if(currentPage==4)
            team();
          else if(currentPage==5)
            about();
    }
});

function afterLoad()
{
  const a = document.getElementById('loader');
  const c = document.getElementById('sliding-content-home');
  const b = document.getElementById('LandingVideo');
  const d = document.getElementById('main-content');
  console.log(a, c);
  a.classList.add("animated");
  a.classList.add("fadeOut");
  console.log("Entering the animation");
  a.addEventListener('animationend', function() {
    console.log("Animation ended");
    a.classList.add("invisible");
    d.classList.remove("invisible");
    c.classList.remove("invisible");
    c.classList.add("animated");
    c.classList.add("fadeIn");
    // c.classList.add("slower");
    c.addEventListener('animationend', function()	{
      c.classList.remove("fadeIn");
      // c.classList.remove("slower");
      b.autoplay = true;
      b.muted = true;
      b.load();
    });
    (function () {
      document.getElementById("LandingVideo").addEventListener('ended',function() {
          console.log('End');
          var e = document.getElementById('LoopVideo');
          b.classList.add('invisible');
          e.classList.remove('invisible');
      });
    }());
  });
}

document.addEventListener("DOMContentLoaded", function(event){
  document.getElementById("loadingVideo").addEventListener('ended',function() {
    console.log("Hi");
    $(window).on("load", afterLoad());

  });
});

function home()
{
  if(transition == 0){
    theBody.classList.remove("eventBody");
    theBody.classList.add("pageBody");
    theBody.classList.remove("cardBody");
    pageHit = 1;
    pageTransition();
  }
}

function events()
{
  document.getElementById("sliding-content-events-no-click").classList.remove("animated");
  document.getElementById("sliding-content-events-no-click").classList.remove("zoomOut");
  document.getElementById("sliding-content-events-no-click").classList.remove("invisible");
  document.getElementById("sliding-content-events-click").classList.remove("animated");
  document.getElementById("sliding-content-events-click").classList.remove("zoomIn");
  document.getElementById("sliding-content-events-click").classList.add("invisible");
  document.getElementById("blurs").classList.add("invisible");
  document.getElementById("textbox").classList.add("invisible");
  if(transition == 0){
    theBody.classList.remove("pageBody");
    theBody.classList.add("eventBody");
    theBody.classList.remove("cardBody");
    pageHit = 2;
    pageTransition();
  }
}

function team()
{
  theBody.classList.remove("eventBody");
  theBody.classList.add("pageBody");
  theBody.classList.remove("cardBody");
  if(transition == 0){
    pageHit = 3;
    pageTransition();
  }
}

function about()
{
  theBody.classList.remove("eventBody");
  theBody.classList.remove("pageBody");
  theBody.classList.add("cardBody");
  if(transition == 0){
    pageHit = 4;
    pageTransition();
  }
}

function contact()
{
  theBody.classList.remove("eventBody");
  theBody.classList.add("pageBody");
  theBody.classList.remove("cardBody");
  if(transition == 0){
    pageHit = 5;
    pageTransition();
  }
}

function pageTransition(){
  var Nav = document.getElementById("navbar");
  if(pageHit != currentPage){
    Nav.classList.add("animated");
    Nav.classList.add("fadeOut");
    Nav.classList.add("faster");
    console.log("PageHit = ",pageHit);

    setTimeout(function(){
      if(pageHit == 1)
      {
        var i=0;
        for(i=0; i<navItems.length; i++){
          document.getElementById(navItems[i]).classList.add('navitems');
          if(currentPage==2)
          {
            document.getElementById(navItems[i]).classList.remove("navitemsEvent");
          }
          else {
            document.getElementById(navItems[i]).classList.remove("navitems1");
          }
        }
      }

      else{
        var i=0;
        for(i=0; i<navItems.length; i++){
          console.log("Done");
          document.getElementById(navItems[i]).classList.remove('navitems');
          if(pageHit==2)
          {
            document.getElementById(navItems[i]).classList.add("navitemsEvent");
            console.log(document.getElementById(navItems[i]));
          }
          else {
            document.getElementById(navItems[i]).classList.remove("navitemsEvent");
            document.getElementById(navItems[i]).classList.add("navitems1");
          }
        }
      }
      Nav.classList.remove("fadeOut");
    }, 200);
  }
  transition = 1;
  var goToPage = document.getElementById(pages[pageHit-1]);
  var presentPage = document.getElementById(pages[currentPage-1]);
  console.log(goToPage, presentPage);
  var outAnimation;
  var inAnimation;
  if(currentPage < pageHit)
  {
    outAnimation = 'slideOutLeft';
    inAnimation = 'slideInRight';
  }
  else if (currentPage > pageHit) {
    outAnimation = 'slideOutRight';
    inAnimation = 'slideInLeft';
  }
  if(currentPage != pageHit)
  {

    if(currentPage==4 && pageHit!=4)
    {
      document.getElementById("cardsMain").classList.add("invisible");
    }
    // if(currentPage==2 && pageHit!=2)
    // {
    //   document.getElementById("pBack").classList.add("invisible");
    //   document.getElementById("background-wrap").classList.add("invisible");
    // }
    presentPage.classList.add("animated");
    presentPage.classList.add(outAnimation);
    presentPage.classList.add("faster");
    goToPage.classList.add("animated");
    goToPage.classList.add(inAnimation);
    (function () {
      setTimeout(function() {
        Nav.classList.add("fadeIn");
        console.log("hi");
        presentPage.classList.add("invisible");
        goToPage.classList.remove("invisible");
        //goToPage.classList.add("animated");
        //goToPage.classList.add(inAnimation);
        goToPage.addEventListener('animationend', function(){
          transition = 0;
          currentPage = pageHit;
          if(currentPage==4){
            document.getElementById("cardsMain").classList.remove("invisible");
          }
          // if(currentPage==2){
          //   document.getElementById("pBack").classList.remove("invisible");
          //   document.getElementById("background-wrap").classList.remove("invisible");
          // }
          console.log("bye");
          stopAnimation(presentPage, goToPage, outAnimation, inAnimation);
          console.log("bye2");
        });
      }, 500);
    }());
  }
  else {
    transition = 0;
  }
}

function stopAnimation(a, b, c, d)
{
  console.log(a,b,c,d);
  a.classList.remove(c);
  b.classList.remove(d);
}

function burst1()
{
  var bubble = document.getElementById("x1");
  bubble.classList.add("invisible");
  setTimeout(function() {
    bubble.classList.remove("invisible");
  }, 500);
}

function burst2()
{
  var bubble = document.getElementById("x2");
  bubble.classList.add("invisible");
  setTimeout(function() {
    bubble.classList.remove("invisible");
  }, 500);
}

function burst3()
{
  var bubble = document.getElementById("x3");
  bubble.classList.add("invisible");
  setTimeout(function() {
    bubble.classList.remove("invisible");
  }, 500);
}

function burst4()
{
  var bubble = document.getElementById("x4");
  bubble.classList.add("invisible");
  setTimeout(function() {
    bubble.classList.remove("invisible");
  }, 500);
}

function burst5()
{
  var bubble = document.getElementById("x5");
  bubble.classList.add("invisible");
  setTimeout(function() {
    bubble.classList.remove("invisible");
  }, 500);
}

function burst6()
{
  var bubble = document.getElementById("x6");
  bubble.classList.add("invisible");
  setTimeout(function() {
    bubble.classList.remove("invisible");
  }, 500);
}

function burst7()
{
  var bubble = document.getElementById("x7");
  bubble.classList.add("invisible");
  setTimeout(function() {
    bubble.classList.remove("invisible");
  }, 500);
}

function burst8()
{
  var bubble = document.getElementById("x8");
  bubble.classList.add("invisible");
  setTimeout(function() {
    bubble.classList.remove("invisible");
  }, 500);
}

function burst9()
{
  var bubble = document.getElementById("x9");
  bubble.classList.add("invisible");
  setTimeout(function() {
    bubble.classList.remove("invisible");
  }, 500);
}

function burst10()
{
  var bubble = document.getElementById("x10");
  bubble.classList.add("invisible");
  setTimeout(function() {
    bubble.classList.remove("invisible");
  }, 500);
}

function burst11()
{
  var bubble = document.getElementById("x11");
  bubble.classList.add("invisible");
  setTimeout(function() {
    bubble.classList.remove("invisible");
  }, 500);
}

function burst12()
{
  var bubble = document.getElementById("x12");
  bubble.classList.add("invisible");
  setTimeout(function() {
    bubble.classList.remove("invisible");
  }, 500);
}

function burst13()
{
  var bubble = document.getElementById("x13");
  bubble.classList.add("invisible");
  setTimeout(function() {
    bubble.classList.remove("invisible");
  }, 500);
}

function burst14()
{
  var bubble = document.getElementById("x14");
  bubble.classList.add("invisible");
  setTimeout(function() {
    bubble.classList.remove("invisible");
  }, 500);
}

function burst15()
{
  var bubble = document.getElementById("x15");
  bubble.classList.add("invisible");
  setTimeout(function() {
    bubble.classList.remove("invisible");
  }, 500);
}

//Event Page On click Starts
var subcontent = document.getElementById("subcontent");
var subcontent1 = document.getElementById("subcontent1");
var subcontent2 = document.getElementById("subcontent2");
var subcontent3 = document.getElementById("subcontent3");
var textbox = document.getElementById("textbox");
var body= document.getElementById('blurs');

console.log(body);
subcontent.addEventListener("click", function(){
console.log("hello");
textbox.classList.remove("invisible");
    body.classList.remove("invisible");

});


console.log(subcontent);
subcontent1.addEventListener("click", function(){
console.log("hello");
    textbox.classList.remove("invisible");
    body.classList.remove("invisible");
});


console.log(subcontent);
subcontent2.addEventListener("click", function(){
console.log("hello");
    textbox.classList.remove("invisible");
    body.classList.remove("invisible");
});


console.log(subcontent);
subcontent3.addEventListener("click", function(){
console.log("hello");
    textbox.classList.remove("invisible");
    body.classList.remove("invisible");
});

body.addEventListener("click", function(){
console.log("hello body");
textbox.classList.add("invisible");
    body.classList.add("invisible");

});

//Event Page On Click Ends

//Event Page Click Functions starts
function danceEvent()
{
  var img = document.getElementById("danceImage").getAttribute("src");
  console.log(img);
  eventTransition(img, "danceImage");
}

function theatreEvent()
{
  var img = document.getElementById("theatreImage").getAttribute("src");
  console.log(img);
  eventTransition(img, "danceImage");
}

function musicEvent()
{
  var img = document.getElementById("musicImage").getAttribute("src");
  console.log(img);
  eventTransition(img, "danceImage");
}

function artEvent()
{
  var img = document.getElementById("artImage").getAttribute("src");
  console.log(img);
  eventTransition(img, "danceImage");
}

function literatureEvent()
{
  var img = document.getElementById("literatureImage").getAttribute("src");
  console.log(img);
  eventTransition(img, "danceImage");
}

function eventTransition(imgSrc, reqId)
{
  var out = document.getElementById("sliding-content-events-no-click");
  var inc = document.getElementById("sliding-content-events-click");
  document.getElementById("eventImg").src = imgSrc;

  out.classList.add("animated");
  out.classList.add("zoomOut");
  out.classList.add("faster");
  out.addEventListener('animationend', function(){
    out.classList.add("invisible");
    inc.classList.remove("invisible");
    inc.classList.add('animated');
    inc.classList.add('zoomIn');
    inc.classList.add('faster');
  });
}
