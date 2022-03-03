$(document).ready(function () {
  //Listening to submit requests
  $(`#tweet-form`).submit(function (ev) {
    ev.preventDefault();
    const serial = $(this).serialize();
    const text = $('#tweet-text').val();
    const safeText = $('#tweet-text').text(text).html();
    $(`#tweet-text`).val(safeText);

    const tweet = $("#tweet-text").val().trim();

    if (tweet.length < 1) {
      $(`#errors`).html("say something!").hide().slideDown();
      return;
    } else {
      if (tweet.length > 140) {
        //will return error if characters exceed 140
        $(`#errors`).html("Too many characters!").hide().slideDown();
        return;
      } else {
        $(`#errors`).slideUp();
        //will add new tweet to database and prepend to page
        $.post(`/tweets/`, serial, null).then(function () {
          $.ajax(`/tweets`, { method: "GET" }).then(function (tweet) {
            let $newHTML = createTweetElement(tweet[tweet.length - 1]);
            $(`${$newHTML}`).prependTo($(".posts")).hide().slideDown("slow");
          });
        });
      }
    }
  });
});
