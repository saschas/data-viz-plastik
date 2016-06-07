
setInterval(function time(){
  var d = new Date();
  var hours = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();

  var percentage = (hours*60*60 + min*60 + sec) / (24*60*60);
  var amount = Math.round(320000*24 * percentage);

  if((min + '').length == 1){
    min = '0' + min;
  }

  if((sec + '').length == 1){
        sec = '0' + sec;
  }
  jQuery('#the-final-countdown p').html(' Zeit: '+ hours+':'+min+':'+sec);
  jQuery('#becher-bis-jetzt p').html(' Becher: '+ amount);
}, 1000);




/*fade in bubble recycling*/

$(".recycling_bubble").hide();

$('.graphics_flamme').on('inview', function(event, isInView) {
  if (isInView) {
        setTimeout('$(".recycling_bubble").fadeIn(300);', 800);
  } else {
          $(".recycling_bubble").fadeOut();
  }
});


/*fade in bubble zerfall*/

$(".zerfall_bubble").hide();

$('.graphics_Stammbaum').on('inview', function(event, isInView) {
  if (isInView) {
        setTimeout('$(".zerfall_bubble").fadeIn(300);', 800);
  } else {
          $(".zerfall_bubble").fadeOut();
  }
});

/*fade in bubble alternativen links*/

$(".alternativen_beschreibung").hide();
$(".alternativen_beschreibung02").hide();

$('.container-alternativen01').on('inview', function(event, isInView) {
  if (isInView) {
        setTimeout('$(".alternativen_beschreibung").fadeIn(300);', 800);
        setTimeout('$(".alternativen_beschreibung02").fadeIn(300);', 1700);
  } else {
          $(".alternativen_beschreibung").fadeOut();
            $(".alternativen_beschreibung02").fadeOut();
  }
});



/*fade in bubble alternativen rechts



$('.container_alternativen_l').on('inview', function(event, isInView) {
  if (isInView) {
        setTimeout('$(".alternativen_bubble02").fadeIn(500);', 1500);
  } else {
          $(".alternativen_bubble02").fadeOut();
  }
});*/

$('.toggle').click(function(){
 $('.toggle_content').slideToggle();

} );
