/*

Given the following markup, implement distinct context menus for the main and the sub areas of the web page. You can represent a context menu as an alert box that displays the name of the respective area (i.e., alert("sub")). Only one context menu should appear when the event occurs.

HTML:

<main>
  Main Area
  <section id="sub">
    Sub Area
  </section>
</main>

*/

document.addEventListener('DOMContentLoaded', () => {
  let sub = document.querySelector('#sub');
  let main = document.querySelector('main');

  sub.addEventListener('contextmenu', event => {
    alert("sub");
    event.stopPropagation();
  });

  main.addEventListener('contextmenu', () => {
    alert("main");
  });
});

