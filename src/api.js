import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function subscribeToTweet(cb) {
  socket.on('tweet', tweet => cb(null, tweet));
  socket.emit('subscribeToTweet', 1);
}

export { subscribeToTweet };
