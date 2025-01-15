/*

Create a page that displays a grid of animal images and shows a tooltip for each animal that contains more information about the animal.

Requirements
* Choose any animals that you want.
* Create markup that includes an image and caption for each animal.
* Hide the captions initially.
* Display the caption as a tooltip when the user hovers the mouse cursor over the image for more than two seconds. Close the tooltip when the user moves the mouse off the image.
* Don't display the caption tooltip when the user moves the cursor off the image before the two second time delay elapses.

*/

$(function() {
  let timeout;

  $('img').on('mouseout', e => {
    clearTimeout(timeout);
    $('img').next().css("display", "none");
  });

  $('img').on('mouseover', e => {
    timeout = setTimeout(() => {
      $( e.target ).next().css({
        display: "block",
        position: "absolute",
      });
    }, 2000);
  });
});
