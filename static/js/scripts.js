$.magicCanvas.draw({
     type: "random-move",
     rgb: function (circlePos) {
          var px = circlePos.x;
          var py = circlePos.y;
          // do some computation....
          return {
               r: parseInt(px % 255),
               g: parseInt(py % 255),
               b: 203
          };
     }
})

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function () {
     var ga = document.createElement('script');
     ga.type = 'text/javascript';
     ga.async = true;
     ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') +
          '.google-analytics.com/ga.js';
     var s = document.getElementsByTagName('script')[0];
     s.parentNode.insertBefore(ga, s);
})();



$("#typer").typer({
     strings: [
         "Social Media Marketing Specialist",
         "Search Engine Optimization (SEO)",
         "Social Media Advertising"
     ],
     typeSpeed: 120,
     backspaceSpeed: 40,
 });





