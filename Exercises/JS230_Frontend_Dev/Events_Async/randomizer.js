/*

Write a randomizer function that accepts n callbacks and calls each callback at some random point in time between now and 2 * n seconds from now. For instance, if the caller provides 5 callbacks, the function should run them all sometime within 10 seconds.

While running, randomizer should log the elapsed time every second: 1, 2, 3, ..., 2 * n.

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(// your parameters here //) {
  // Your code here.
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6

Expect the output to change with each run due to the random execution times.

*/

function randomizer(...callbacks) {
  let n = callbacks.length;
  let count = 0;
  let id = setInterval(() => {
    count++;
    console.log(count);
    if (count === (2 * n)) clearInterval(id);
  }, 1000);

  callbacks.forEach(callback => {
    let randomTime = (Math.random() * (n * 2));
    setTimeout(callback, randomTime * 1000);
  });
  
}

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6

