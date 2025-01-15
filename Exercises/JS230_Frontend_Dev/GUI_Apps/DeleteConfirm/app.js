/*

Create an application that displays a list of todos. When the user wants to delete a todo, the application should show a custom confirmation dialog.

Specifications
* Create a list of todos in the DOM from a JavaScript collection (array) of todos.
* Add a delete button for each todo.
* When the user clicks the delete button, a dialog appears asking the user to confirm the deletion.
** Use CSS to display the dialog.
The dialog has Yes and No buttons.
** When the user clicks the Yes button, the dialog disappears, and the corresponding todo is deleted.
** When the user clicks the No button, the dialog disappears, and the todo is not deleted.

You can start with a collection of your choice. Here's the collection used in our demo app:

todo_items = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John '}
];

You can use the id property for each todo object to identify the todo item to remove from the DOM. Most applications use a data-id HTML attribute to identify DOM items.

*/

const todos = [
  {title: "Homework", id:"1"},
  {title: "Shopping", id:"2"},
  {title: "Calling Mom", id:"3"},
  {title: "Coffe with John", id:"4"},
]
const todosTemplate = Handlebars.compile($('#todos_template').text());
const confirmTemplate = Handlebars.compile($('#confirm_template').text());

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

  $('span.remove').on('click', e => {
    const promptData = {id: $(e.target).parent().attr("data-id")};
    $('div.confirm_prompt').empty();
    $('div.confirm_prompt').append(confirmTemplate(promptData));
    $('.overlay').css('display', 'block');
    $('.confirm_prompt').css('display', 'block');
    confirmationListeners();
  });
});
