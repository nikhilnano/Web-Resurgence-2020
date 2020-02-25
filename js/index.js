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

function events()
{
  var homePage = document.getElementById("sliding-content-home");
  var eventPage = document.getElementById("sliding-content-events");
  homePage.classList.add("animated");
  homePage.classList.add("fadeOutLeft");
  homePage.classList.add("faster");
  homePage.addEventListener('animationend', function(){
    homePage.classList.add("invisible");
    eventPage.classList.remove("invisible");
    eventPage.classList.add("animated");
    eventPage.classList.add("fadeInRight");
    eventPage.classList.add("fast");
  })
}

var animation = bodymovin.loadAnimation({
  container: document.getElementById('loader'),
  rederer: 'svg',
  loop: true,
  autoplay: true,
  path: 'loader.json'
});
