var pages = ['sliding-content-home', 'sliding-content-events',
    'sliding-content-gallery', 'sliding-content-about',
    'sliding-content-contact'];
var navItems = ['homeNav','eventsNav','galleryNav','aboutNav','contactNav'];
var pageHit = 1;
var currentPage = 1;
var transition = 0;
var body = document.getElementById("theBody");

document.addEventListener("DOMContentLoaded", function(event){
  setTimeout(function() {
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
        c.classList.add("slower");
        c.addEventListener('animationend', function()	{
          c.classList.remove("fadeIn");
          c.classList.remove("slower");
          b.autoplay = true;
          b.muted = true;
          b.load();
        });
        (function () {
          setTimeout(function() {
              console.log('End');
              var d = document.getElementById('LoopVideo');
              b.classList.add('invisible');
              d.classList.remove('invisible');
          }, 6000);
        }());
      });
  }, 4100);
});

function home()
{
  if(transition == 0){
    theBody.classList.remove("eventBody");
    theBody.classList.add("pageBody");
    pageHit = 1;
    pageTransition();
  }
}

function events()
{
  if(transition == 0){
    theBody.classList.remove("pageBody");
    theBody.classList.add("eventBody");
    pageHit = 2;
    pageTransition();
  }
}

function gallery()
{
  theBody.classList.remove("eventBody");
  theBody.classList.add("pageBody");
  if(transition == 0){
    pageHit = 3;
    pageTransition();
  }
}

function about()
{
  theBody.classList.remove("eventBody");
  theBody.classList.add("pageBody");
  if(transition == 0){
    pageHit = 4;
    pageTransition();
  }
}

function contact()
{
  theBody.classList.remove("eventBody");
  theBody.classList.add("pageBody");
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
    outAnimation = 'fadeOutLeft';
    inAnimation = 'fadeInRight';
  }
  else if (currentPage > pageHit) {
    outAnimation = 'fadeOutRight';
    inAnimation = 'fadeInLeft';
  }
  if(currentPage != pageHit)
  {
    presentPage.classList.add("animated");
    presentPage.classList.add(outAnimation);
    presentPage.classList.add("fast");
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
// var animation = bodymovin.loadAnimation({
//   container: document.getElementById('loader'),
//   rederer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: 'loader.json'
// });
