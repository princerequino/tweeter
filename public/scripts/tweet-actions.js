$(document).ready(function () {

  const initData = {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1628546254537
};
  //Function to create HTML code for new tweet
  const createTweetElement = (tweet) => {
    const user = tweet.user.name;
    const avatar = tweet.user.avatars;
    const handle = tweet.user.handle;
    const tweetText = tweet.content.text;
    const date = timeago.format(tweet.created_at);

    const $tweetHTML = `
    <section class="posted-tweet">
    <div class="tweet-header">
    <div class="photo-user">
      <img src="${avatar}">
      <h4> ${user}</h4>
      </div>
      <span>${handle}</span>
      </div>
      <div class="tweet-body" name="tweet">${escape(tweetText)}
      </div>
    <div class="tweet-footer">
      <span id="time">${date}</span>
      <div class="icons">
  <i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i>
    </div>
    </div>
  </section>`;

    return $tweetHTML;
  }

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


  

  const $newTweet = createTweetElement(initData);

  $('.posts').append($newTweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});