$(document).ready(function() {
    $('.single-skill-img-1').circleProgress({
      value: 0.9,
      size: 150,
      startAngle: -Math.PI,
      reverse: false,
      thickness: 10,
      lineCap: "butt",
      fill: {
        color: "#30bae7",
      }
      }).on('circle-animation-progress', function(event, progress) {
          $(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
    });

    $('.single-skill-img-2').circleProgress({
      value: 0.75,
      size: 150,
      startAngle: -Math.PI,
      reverse: false,
      thickness: 10,
      lineCap: "butt",
      fill: {
        color: "#d74680",
      }
      }).on('circle-animation-progress', function(event, progress) {
          $(this).find('strong').html(parseInt(75 * progress) + '<i>%</i>');
    });

    $('.single-skill-img-3').circleProgress({
      value: 0.7,
      size: 150,
      startAngle: -Math.PI,
      reverse: false,
      thickness: 10,
      lineCap: "butt",
      fill: {
        color: "#15c7a8",
      }
      }).on('circle-animation-progress', function(event, progress) {
          $(this).find('strong').html(parseInt(70 * progress) + '<i>%</i>');
    });

    $('.single-skill-img-4').circleProgress({
      value: 0.85,
      size: 150,
      startAngle: -Math.PI,
      reverse: false,
      thickness: 10,
      lineCap: "butt",
      fill: {
        color: "#eb7d4b",
      }
      }).on('circle-animation-progress', function(event, progress) {
          $(this).find('strong').html(parseInt(85 * progress) + '<i>%</i>');
    });

    // Activate isotope in container

   $(".portfolio_items").isotope({
       itemSelector: '.single_item',
       layoutMode: 'fitRows',
   });

   // Add isotope click function

   $('.portfolio_filter button').click(function(){
       $(".portfolio_filter button").removeClass("active");
       $(this).addClass("active");

       var selector = $(this).attr('data-filter');
       $(".portfolio_items").isotope({
           filter: selector,
           animationOptions: {
               duration: 750,
               easing: 'linear',
               queue: false,
           }
       });
       return false;
   });




});
