// (function () {
//   setTimeout(function() {
//       console.log('Hi');
//       const a = document.getElementById('main');
//       const c = document.getElementById('main1');
//       const b = document.getElementById('LandingVideo');
//       console.log(a, c);
//       a.classList.add("animated");
//       a.classList.add("fadeOut");
//       console.log("Entering the animation");
//       a.addEventListener('animationend', function() {
//         console.log("Animation ended");
//         a.classList.add("invisible");
//         c.classList.remove("invisible");
//         c.classList.add("animated");
//         c.classList.add("zoomIn");
//         c.classList.add("slow");
//         c.addEventListener('animationend', function()	{
//           b.autoplay = true;
//           b.muted = true;
//           b.load();
//         });
//         (function () {
//           setTimeout(function() {
//               console.log('End');
//               var d = document.getElementById('LoopVideo');
//               b.classList.add('invisible');
//               d.classList.remove('invisible');
//           }, 5500);
//         }());
//       });
//   }, 4100);
// }());

document.addEventListener("DOMContentLoaded", function(event){
  alert("It's loaded!");
  setTimeout(function() {
      const a = document.getElementById('loader');
      const c = document.getElementById('sliding-content');
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
        c.classList.add("animated");
        c.classList.add("zoomIn");
        c.classList.add("slow");
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
          }, 5500);
        }());
      });
  }, 4100);
});
