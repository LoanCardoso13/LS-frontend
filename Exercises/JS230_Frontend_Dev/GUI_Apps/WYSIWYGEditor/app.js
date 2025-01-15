/*

Create a Rich Text editor that lets users edit text in a WYSIWYG (What You See Is What You Get) manner.

Specifications
Controls

The WYSIWYG editor should let users:

* Enter text.
* Make text bold.
* Italicize text.
* Underline text.
* Strike-through text.
* Create a link from some text.
* Create an unordered list.
* Create an ordered list.
* Align text to the right, left, center, and fully-justified.

*/

const commands = [
  "bold",
  "italic",
  "underline",
  "strikeThrough",
  "createLink",
  "insertUnorderedList",
  "insertOrderedList",
  "justifyLeft",
  "justifyRight",
  "justifyCenter",
  "justifyFull"
]

$(function() {
  const buttonsArr = [].slice.call($('div.buttons button'));
  $('div.buttons button').toArray().forEach((button, idx) => {
    $button = $(button);
    $button.attr("data-cmd", commands[idx]);
  });

  $('div.buttons button').on('click', e => {
    const cmd = $(e.target).attr("data-cmd");

    if (cmd === "createLink") {
      if (window.getSelection().toString().length > 0) {
        const url = prompt('Enter the URL to link to:');
        document.execCommand(cmd, false, url);
        return;
      } else {
        return;
      }
    }

    document.execCommand(cmd, false, null);

    commands.forEach((command, idx) => {
      if (document.queryCommandState(command)) {
        buttonsArr[idx].classList.add('pushed');
      } else {
        buttonsArr[idx].classList.remove('pushed');
      }
    })
  })
})
