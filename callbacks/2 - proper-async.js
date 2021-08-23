let bar

function doSomething(callback) {
  setTimeout(() => {
    callback();
  }, 1000) // Change for setImmediate
}

doSomething(function () {
  console.log('bar', bar);
});

bar = 1;