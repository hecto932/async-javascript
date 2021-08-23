function hello(name, callback) {
  setTimeout(() => {
    console.log(`Hola ${name}`);
    callback(name);
  }, 1500);
}

function speak(callback) {
  setTimeout(function () {
    console.log('bla bla bla');
    callback();
  }, 1000);
}

hello('hector', function (nombre) {
  speak(function () {
    console.log(`Adios ${nombre}`);
    speak(function () {
      console.log(`Mas blabla ${nombre}`);
      speak(function () {
        console.log(`Mas blabla 2 ${nombre}`);
      });
    });
  })
});