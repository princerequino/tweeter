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

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};