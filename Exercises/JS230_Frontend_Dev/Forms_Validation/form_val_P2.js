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
