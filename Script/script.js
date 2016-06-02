
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
  jQuery('#the-final-countdown p').html(hours+':'+min+':'+sec+' Uhr');
  jQuery('#becher-bis-jetzt p').html(amount+' Becher');
}, 1000);

/*fade in bubble*/

$(".recycling_bubble").hide();

$('.graphics_flamme').on('inview', function(event, isInView) {
  if (isInView) {
        setTimeout('$(".recycling_bubble").fadeIn(500);', 1000);
  } else {
          $(".recycling_bubble").fadeOut();
  }
});
