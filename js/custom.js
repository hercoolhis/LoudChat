
( function () {

    const socket = io();

    const tweetButton = document.getElementById('sendTweet');
    tweetButton.addEventListener('submit', () => {
        const tweetBox = document.getElementById('tweet');
        const content = tweetBox.value;
        socket.emit('tweet', {content : content});
        tweetBox.value = '';
        return false;
    });

    socket.on('incomingTweets', function(data) {
        
        var html = '';
    
        html += '<div class="media">';
        html += '<div class="media-left">';
        html += '<a href="/user/' + data.user._id + '"><img class="media-object" src="' + data.user.photo + '" /></a>';
        html += '</div>';
        html += '<div class="media-body">';
        html += '<h4 class="media-heading">' + data.user.name + '</h4>';
        html += '<p>' + data.data.content + '</p>';
        html += '</div></div>';
    
        $('#tweets').prepend(html);
      });
    

})();