var io = require('socket.io')();
var Twit = require('twit');
var users = require('./accounts.js');

var T = new Twit({
  consumer_key: 'L35rcQdiFJ8huitpOBJeaFLX8',
  consumer_secret: 'enhYwSBjXJgoImadXNGkGDLjkrERf3a9uRDUqZYe9Z6xw86IRw',
  access_token: '1178786151169175552-8IZew99ndzB4MouIS5jXxtoe9CBnPK',
  access_token_secret: '47itybeJ9xlc407dvn5Uncj5rspH3gj1oCS2xMuTDr5l5',
});

let id_list = users.map(user => user.id);
let id_string = id_list.join();

var stream = T.stream('statuses/filter', { follow: id_string });

/*T.get('search/tweets', { q: 'neuroscience since:2010-11-01', count: 50 }, function(
  err,
  data,
  response,
) {
  let arr = [];
  Object.keys(data['statuses']).map(item => {
    let obj = {
      text: data['statuses'][item].text,
      username: data['statuses'][item].user.name,
      img: data['statuses'][item].user.profile_image_url_https,
    };
    arr.push(obj);
  });
  console.log(arr);
}); */

io.on('connection', client => {
  client.on('subscribeToTweet', value => {
    console.log('client on');
    stream.on('tweet', function(tweet) {
      client.emit('tweet', tweet);
    });
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
