/*

Any data collected from a form will probably get sent to the server. The browser does this automatically using the action attribute and the submit button. With AJAX, we bypass the browser's default behavior and send the data programmatically with the XMLHttpRequest object. For the data to make sense to the server, it must have a format that the server recognizes and understands. In this exercise, you will serialize the sign-up form data into a valid POST request body that is compatible with a content-type of application/x-www-form-urlencoded.

Specifications
* Prevent the default action on the Submit button.
* Add a block element to the bottom of the page with a heading of "Serialized Form". You will render the form data in this block.
* When the user clicks the Submit button, and the data is valid, extract the form data from all fields in the form. Use the data to construct a string of key/value pairs separated by &, e.g., first_name=David&last_name=Shepherd&email=davids%40example.com.
* Make sure each name/value pair is URL-encoded. For instance, in the example above, the email address uses %40 instead of @.
* Concatenate the 4 credit card inputs into a single value before adding it to the request body string.
* Render the form data as text in the block element you created earlier.

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
    const msg = "Form cannot be submitted until errors are corrected.";

    $('form input').toArray().forEach(validateInput);

    if ($('form input').hasClass('invalid_field')) {
      $('p.form_errors').text(msg);
    } else {
      const creditCardNumber = $('#cd1').val() + $('#cd2').val() + $('#cd3').val() + $('#cd4').val();
      $('#credit_card').val(creditCardNumber);
      $('#serialized').text($('form').serialize());
    }
  });

  $('#first_name').add('#last_name').on('keypress', e => {
    if (!/[a-zA-Z\s]/.test(e.key)) e.preventDefault();
  });

  $('#phone').add('input[name="credit_card"]').on('keydown', e => {
    if (!/[0-9]/.test(e.key) && e.key !== "Backspace") e.preventDefault();
  });

  $('#cd1').add('#cd2').add('#cd3').add('#cd4').on('keyup', e => {
    if (
      e.target.value.length === 4 &&
      $(e.target).next().text() === '-'
    ) $(e.target).next().next().focus();
  });
});
