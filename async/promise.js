const fs = require('fs');

function customReadFile() {
  return new Promise((resolve, rejected) => {
    fs.readFile(__filename + '.asdas', 'utf-8', function (err, data) {
      if (err) {
        rejected(err);
      }

      resolve(data);
    });
  });
}

customReadFile()
  .then(result => console.log(result))
// .catch(err => console.log(err));

// fs.readFile(__filename, 'utf-8', function (err, data) {
//   if (err) {
//     return console.error(err.message);
//   }

//   console.log(data);
// })

console.log('Yo voy primero!');

process.on('unhandledRejection', (err) => {
  console.log(err);
})