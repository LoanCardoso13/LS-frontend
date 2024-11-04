/*

Read the following code carefully. What do you think is logged on line 7. Try to answer the question before you run the code.

const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

*/

const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName); // NaN; 'firstName' and 'lastName' aren't properties of the global object and 'this', in this case, refers to the top level object since it is outside of any function context.
