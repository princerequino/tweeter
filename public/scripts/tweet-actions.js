$(document).ready(function() {
  $(".posted-tweet .tweet-footer span").text(timeago.format(new Date()));


  $(".fas").hover(function() {
    $(this).css("color", "green");
  }, function(){
    $(this).css("color", "black")
  })

  $(".posted-tweet").hover(function() {
    $(this).css("box-shadow", "3px 3px");
  }, function(){
    $(this).css("box-shadow", "0px 0px");
  })

});