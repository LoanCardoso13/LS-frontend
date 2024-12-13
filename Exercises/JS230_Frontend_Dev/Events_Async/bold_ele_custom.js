/*

Implement a function that makes an element bold and allows the user of the function to optionally do something else with it.

<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <title>Bold Element + Custom</title>
  </head>
  <body>
    <section>Hello World</section>
    <p>Greetings!</p>
  </body>
</html>

> let sectionElement = document.querySelector('section');
> makeBold(sectionElement, function(elem) {
    elem.classList.add('highlight');
  });

> sectionElement.classList.contains('highlight');
= true
> sectionElement.style.fontWeight;
= "bold"

*/

document.addEventListener('DOMContentLoaded', () => {
  function makeBold(ele, func) {
    func(ele);
  }

  let sectionElement = document.querySelector('section');

  makeBold(sectionElement, function(elem) {
    elem.classList.add('highlight');
    elem.style.fontWeight = 'bold';
  });

  console.log(sectionElement.classList.contains('highlight'));
  // true
  console.log(sectionElement.style.fontWeight);
  // "bold"
})

