const fetch = require('isomorphic-fetch');

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'sadsda'
];

// map every url to the promise of the fetch
let requests = urls.map(url => fetch(url));

// Promise.all waits until all jobs are resolved
Promise.all(requests)
  .then(responses => responses.forEach(
    response => console.log(`${response.url}: ${response.status}`)
  ));