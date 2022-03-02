//Iterates through the array of data
const renderTweets = (tweetData) => {
  for (const obj of tweetData) {
    let newTweet = createTweetElement(obj);
    $(".posts").prepend(newTweet);
  }
}

//Receives an obj and renders HTML  
const createTweetElement = (tweet) => {
  
  const handle = tweet.user.handle;
  const tweetText = tweet.content.text;
  const date = timeago.format(tweet.created_at);
  const $tweetHTML = `
  <article name="tweet">
  <div class="posted-tweet">
  <header>
    <img src="${avatar}">
    <h4> ${user} <span>${handle}</span></h4>
    ${tweetText}
  </header>
  <footer>
    <span id="time">${date}</span>
    <span><i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i></span>
  </footer>
</div>
</article>`;

return $tweetHTML;
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