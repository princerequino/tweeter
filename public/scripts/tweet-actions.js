$(document).ready(function () {
  //Listening to submit requests
  $(`#tweet-form`).submit(function (ev) {
    ev.preventDefault();
    const serial = $(this).serialize();
  
    const tweet = $('#tweet-text').val().trim()

    if (tweet.length < 1) {
      alert("Please type a tweet!")
    }else {
      if (tweet.length > 140) { //will return error if characters exceed 140
        alert("Too many characters my friend!");
        return;
      } else { //will add new tweet to database and prepend to page
        $.post(`/tweets/`, serial, null).then(function () {
          $.ajax(`/tweets`, { method: 'GET' }).then(function (tweet) {
  
            let $newHTML = createTweetElement(tweet[tweet.length - 1]);
            $(`${$newHTML}`).prependTo($('.posts')).hide().slideDown("slow");
          })
        })
      }
  
    }
    
  });


});