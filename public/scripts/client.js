//Iterates through the array of data
const renderTweets = (tweetData) => {
  for (const obj of tweetData) {
    let newTweet = createTweetElement(obj);
    $(".posts").prepend(newTweet);
  }
}

//Receives an obj and renders HTML
const createTweetElement = (tweet) => {
  const user = tweet.user.name;
  const avatar = tweet.user.avatars;

    
        
          
    

        
    
const createTweetElement = (tweet) => {
  
  const handle = tweet.user.handle;
  const tweetText = tweet.content.text;
  const date = timeago.format(tweet.created_at);
  const $tweetHTML = `
  <div class="posted-tweet">
  <header>
    <img src="${avatar}">
    <h4> ${user} <span>${handle}</span></h4>
    <article name="tweet">${tweetText}</article>
  </header>
  <footer>
    <span id="time">${date}</span>
    <span><i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i></span>
  </footer>
</div>`;
return $tweetHTML;
}

  $(".posted-tweet").append($tweetHTML);
};

//Function for loading all the tweets from database
const loadtweets = function () {
  $.ajax(`/tweets`, { method: 'GET' }).then(function (tweets) {
    renderTweets(tweets);
  })
}

$(document).ready(function () {
  loadtweets();
});