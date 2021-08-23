

function* generador() {
  let id = 1;
  while (true) {
    yield id;
    id++;
  }
}

// ++i i++

const gen = generador();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
