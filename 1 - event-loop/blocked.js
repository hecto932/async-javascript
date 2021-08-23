const start = Date.now();

setTimeout(function B() {
  console.log(`paso: ${Date.now() - start} ms`);
}, 105);

setTimeout(function A() {
  let count = 0;
  while (++count < 1e9) {
    Math.random();
  }
}, 100);

