
// Timer
setTimeout(function () {
  console.log('Timeout');
})

// Check
setImmediate(function () {
  console.log('Immediate')
})

process.nextTick(function () {
  console.log('Tick');
});

