$(document).ready(function () {
  $("#tweet-text").keyup(function () {
    let chars = $(this).val().length;
    let counter = 140 - chars;
    $(this).parent().find(".counter").val(counter);
  });
});
