/*

In the previous exercise, you create a todo list application that uses a confirmation dialog when deleting a todo. Make the following changes to your solution.

Specifications
The program should function in the same way as the previous version except as follows:

When the user right clicks a todo item, display a context menu.
* The context menu has three items:
** Show Details
** Edit Todo
** Delete Todo

* You don't need to add functionality for Show details and Edit Todo.
* When the user clicks the Delete Todo option, display the confirmation dialog.

*/

const todos = [
  {title: "Homework", id:"1"},
  {title: "Shopping", id:"2"},
  {title: "Calling Mom", id:"3"},
  {title: "Coffe with John", id:"4"},
]
const todosTemplate = Handlebars.compile($('#todos_template').html());
const confirmTemplate = Handlebars.compile($('#confirm_template').html());
const contextMenuTemplate = Handlebars.compile($('#context_menu_template').html());

function confirmationListeners() {
  $('a.confirm_yes').add('a.confirm_no').on('click', e => {
    const choice = e.target.textContent;
    const id = $(e.target).closest('div.confirm_wrapper').attr("data-id");
    if (choice === "Yes") {
      $('#todos li').filter(`[data-id=${id}]`).remove();
    }
    $('.overlay').css('display', 'none');
    $('.confirm_prompt').css('display', 'none');
  })
}

$(function() {
  $('#todos').append(todosTemplate({todos}));

  $('#todos li').on('contextmenu', e => {
    e.preventDefault();
    const id = $(e.target).attr("data-id");
    $('div.context_menu').empty();

    const $contextMenu = $( contextMenuTemplate({id}) );
    $('div.context_menu').css({
      "display": "block",
      "position": "relative",
    }).offset({
      left: e.clientX,
      top: e.clientY,
    }).append($contextMenu);

    addDelete()
  });

  function addDelete() {
    $('li.remove').on('click', e => {
      const promptData = {id: $(e.target).attr("data-id")};
      $('div.confirm_prompt').empty();
      $('div.context_menu').empty();
      $('div.confirm_prompt').append(confirmTemplate(promptData));
      $('.overlay').css('display', 'block');
      $('.confirm_prompt').css('display', 'block');
      confirmationListeners();
    });
  }

  // $('span.remove').on('click', e => {
  //   const promptData = {id: $(e.target).parent().attr("data-id")};
  //   $('div.confirm_prompt').empty();
  //   $('div.confirm_prompt').append(confirmTemplate(promptData));
  //   $('.overlay').css('display', 'block');
  //   $('.confirm_prompt').css('display', 'block');
  //   confirmationListeners();
  // });
});
