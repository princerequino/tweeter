$(document).ready(function () {
  const $tweetbox = $('#tweet-text');

  $tweetbox.on('keyup', function() {
    let $counter = $(this).parent().find('output');
    $counter.val(140 - this.value.length);
    console.log($counter.val(140 - this.value.length));

    let maxTweet = $counter.val() < 0;
    if (maxTweet) {
      $counter.addClass('max-tweet');
    } else {
      $counter.removeClass('max-tweet');
    }

  });
});
