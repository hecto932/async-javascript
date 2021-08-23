const EventEmitter = require('events');
const events = new EventEmitter();

events.on('ping', function onPing() {
  console.log('Recibi un ping');
});

setInterval(() => {
  events.emit('ping');
}, 3000);