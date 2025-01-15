/*

The previous exercise is a first good step at validating user input. Let's enhance it a bit:

* The first and last names aren't validated properly: the user can use numbers in their name. With our current validation rules, the user can get away with using numbers as names. Don't let the user enter invalid characters in these fields.
* Solicit a credit card number as four hyphen-separated 4-digit numbers.

Specifications
* Use the pattern a-zA-Z'\s to validate user input for first and last names. Use the keypress event to prevent the user from entering a character that doesn't match the pattern.
* Add a credit card field to the form. The field should use 4 inputs, all with the same name attribute.
* Each credit card input should have a maximum length of 4 characters.
* Each credit card input should only allow numeric digits.
* The phone number input should only allow numeric digits.
* Use the keydown event to prevent the user from entering non-numeric characters in the credit card inputs.

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
    console.log(/[a-zA-Z\s]/.test(e.key))
    if (!/[a-zA-Z\s]/.test(e.key)) e.preventDefault();
  });

  $('#phone').add('input[name="credit_card"]').on('keydown', e => {
    if (!/[0-9]/.test(e.key) && e.key !== "Backspace") e.preventDefault();
  })
});
