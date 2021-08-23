const request = Promise.allSettled([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(4), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(5), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(6), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(7), 2000)), // 2
]);

async function main() {
  try {
    const result = await request;
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

main();