function sayHello(callback) {
  setTimeout(() => {
    callback('Hello!');
  }, 3000);
}

sayHello(function (result) {
  console.log(result);
})

console.log('YO ME EJECUTO PRIMERO!');