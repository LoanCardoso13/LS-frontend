/*

Create a stopwatch application.

Specifications
The Timer

The stopwatch timer should have four 2-digit counters:

* hours (00-99)
* minutes (00-59)
* seconds (00-59)
* centiseconds (00-99)

All counters should use a leading zero when the corresponding time value is less than 10.

Note that 1 centisecond is 1/100th of a second or 10 milliseconds.

The Controls

The stopwatch should have the following controls:

* a Start/Stop button
* a Reset button

Functionality

When the user clicks the Start button:

* The text on the button changes to Stop.
* The timer starts running the centiseconds counter.
* When the centiseconds counter reaches 100, it resets to zero and the seconds counter starts incrementing.
* When the seconds counter reaches 60, it resets to zero and the minutes counter starts incrementing.
* When the minutes counter reaches 60, it resets to zero and the hour counter starts incrementing.

When the user clicks the Stop button:

* The timer stops.
* The button text changes to Start.

When the user clicks the Reset button:

* The timer stops running if it is already running.
* The timer resets all counters to 00.

*/

const $hours = $('span.hours');
let hoursCounter = 0;
function increaseHour() {
  hoursCounter++;
  if (hoursCounter === 100) {
    hoursCounter = 0;
  }
  if (hoursCounter < 10) hoursCounter = `0${hoursCounter}`;
  $hours.text(hoursCounter);
}
const $mins = $('span.mins');
let minsCounter = 0;
function increaseMin() {
  minsCounter++;
  if (minsCounter === 60) {
    increaseHour();
    minsCounter = 0;
  }
  if (minsCounter < 10) minsCounter = `0${minsCounter}`;
  $mins.text(minsCounter);
}
const $secs = $('span.secs');
let secsCounter = 0;
function increaseSec() {
  secsCounter++;
  if (secsCounter === 60) {
    increaseMin();
    secsCounter = 0;
  }
  if (secsCounter < 10) secsCounter = `0${secsCounter}`;
  $secs.text(secsCounter);
}
const $centisecs = $('span.centisecs');
let centisecsId;
let centisecsCounter = 0;
function increaseCentisec() {
  centisecsCounter++;
  if (centisecsCounter === 100) {
    increaseSec();
    centisecsCounter = 0;
  }
  if (centisecsCounter < 10) centisecsCounter = `0${centisecsCounter}`;
  $centisecs.text(centisecsCounter);
}

$(function() {
  $('button.toggle').on('click', e => {
    if (e.target.textContent === "Start") {
      centisecsId = setInterval(() => {
        increaseCentisec();
      }, 10);
      e.target.textContent = "Stop";
    } else if (e.target.textContent === "Stop") {
      clearInterval(centisecsId);
      e.target.textContent = "Start";
    }
  });
  $('button.reset').on('click', e => {
    clearInterval(centisecsId);
    $centisecs.text('00');
    centisecsCounter = 0;
    $secs.text('00');
    secsCounter = 0;
    $mins.text('00');
    minsCounter = 0;
    $hours.text('00');
    hoursCounter = 0;
    $('button.toggle').text('Start');
  })
});
