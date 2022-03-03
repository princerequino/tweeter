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



//Iterates through the array of data
const renderTweets = (tweetData) => {
  for (const obj of tweetData) {
    let newTweet = createTweetElement(obj);
    $(".posts").prepend(newTweet);
  }
}

//Function for loading all the tweets from database
const loadtweets = function () {
  $.ajax(`/tweets`, { method: 'GET' }).then(function (tweets) {
    renderTweets(tweets);
  })
}

$(document).ready(function () {
  loadtweets();
});


// ESCAPE FUNCTION TO PREVENT XSS
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};