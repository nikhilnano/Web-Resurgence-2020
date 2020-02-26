var pages = ['sliding-content-home', 'sliding-content-events',
    'sliding-content-gallery', 'sliding-content-about',
    'sliding-content-contact'];
var pageHit = 1;
var currentPage = 1;

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
  pageHit = 1;
  pageTransition();
}

function events()
{
  pageHit = 2;
  pageTransition();
}

function gallery()
{
  pageHit = 3;
  pageTransition();
}

function about()
{
  pageHit = 4;
  pageTransition();
}

function contact()
{
  pageHit = 5;
  pageTransition();
}

function pageTransition(){
  console.log("Teri Maa ka bhosra", currentPage, pageHit);
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
    (function () {
      setTimeout(function() {
        console.log("hi");
        presentPage.classList.add("invisible");
        console.log("HI sss", goToPage);
        goToPage.classList.remove("invisible");
        console.log("Maa ki chuu", goToPage);
        goToPage.classList.add("animated");
        console.log("Madharcho", goToPage);
        goToPage.classList.add(inAnimation);
        console.log("Hatt bancho", goToPage);
        goToPage.addEventListener('animationend', function(){
          currentPage = pageHit;
          console.log("bye");
          stopAnimation(presentPage, goToPage, outAnimation, inAnimation);
          console.log("bye2");
        });
      }, 1400);
    }());
  }
}

function stopAnimation(a, b, c, d)
{
  console.log(a,b,c,d);
  a.classList.remove(c);
  b.classList.remove(d);
}

// var animation = bodymovin.loadAnimation({
//   container: document.getElementById('loader'),
//   rederer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: 'loader.json'
// });
