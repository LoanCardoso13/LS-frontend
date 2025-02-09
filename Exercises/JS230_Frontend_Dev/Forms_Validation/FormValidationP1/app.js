/*

Create a sign-up form that validates each field when it loses focus.

Specifications
Form Controls

The form should have the following controls:

* First Name
* Last Name
* Email
* Password
* Phone

The form should also have a submit button with the value of "Sign Up".

Validation Rules

The following validation rules apply to the form's fields:

* The first name, last name, password, and email fields are all required.
* The phone number is optional.
* Password must be at least 10 characters long.
* Phone number must use US-style numbers: 111-222-3333.
* Email should conform to the constraint validation pattern .+@.+ (see below).

Functionality

* When a form field loses focus, validate the field value against the validation rule for that field. If the value is not valid, display a red error message to the right of the field. You may also want to add a red border to the input element. The error message should describe what the program expects, e.g., "The password is required."
* When a field with an error regains focus, the message should disappear. It should not reappear after the user corrects the field.
* When the user clicks the Submit button, don't send the form to the server if it has any validation errors. Instead, display an error message at the top of the page that says "Fix errors before submitting this form."
* The form validation error message should disappear when the user corrects all fields with an error.

Implementation
* You should not use the built-in error message mechanism. You can disable them with the form element's novalidate attribute.
* Use HTML5 constraint validation API and the pattern attribute to implement validations. MDN has a nice article on form validation. Read the section on constraint validation API.

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
  })
})
