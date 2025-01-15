/*

In the previous exercise, we added a Credit Card field to the sign-up form. The field uses four separate inputs, with room for 4 digits per input. To enter a credit card number, the user must change focus from one input to the next by pressing the Tab key or clicking the mouse. A nice touch for this application would have the focus change automatically as the user enters the 4th digit in each input.

Specifications
* Validate the credit card inputs to enforce precisely 4 digits in each input.
* Attach an event handler to the first three credit card inputs to automatically change the focus to the next input when the user enters the 4th digit. The last input doesn't need an event handler.

*/

$(function() {
  function validateInput(inputElement) {
    const field = $(`label[for="${inputElement.id}"]`).text();
    
    if (!inputElement.validity.valid) {
      $(inputElement).addClass('invalid_field');
      if (inputElement.validity.patternMismatch && field !== "Password") {
        $(inputElement).parent().find('.error_message').text(`Please Enter a valid ${field}.`); 
      } else {
        $(inputElement).parent().find('.error_message').text(`Password must be at least 10 characters long.`); 
      }
      if (inputElement.validity.valueMissing) $(inputElement).parent().find('.error_message').text(`${field} is a required field.`); 
    }

    if (!$('form input').hasClass('invalid_field')) $('p.form_errors').text('');
  }

  $('form input').on('focusout', e => {
    validateInput(e.target);
  });

  $('form input').on('focusin', e => {
    $(e.target).removeClass('invalid_field');
    $(e.target).parent().find('.error_message').text('');
  });

  $('form').on('submit', e => {
    e.preventDefault();
    const msg = "Form cannot be submitted until errors are corrected."

    $('form input').toArray().forEach(validateInput)

    if ($('form input').hasClass('invalid_field')) $('p.form_errors').text(msg);
  });

  $('#first_name').add('#last_name').on('keypress', e => {
    if (!/[a-zA-Z\s]/.test(e.key)) e.preventDefault();
  });

  $('#phone').add('input[name="credit_card"]').on('keydown', e => {
    if (!/[0-9]/.test(e.key) && e.key !== "Backspace") e.preventDefault();
  });

  $('input[name="credit_card"]').on('keyup', e => {
    if (
      e.target.value.length === 4 &&
      $(e.target).next().text() === '-'
    ) $(e.target).next().next().focus();
  });
});
