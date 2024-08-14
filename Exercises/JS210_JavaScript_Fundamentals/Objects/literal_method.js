/*

  In the following code, a user creates a person object literal and defines two methods for returning the person's first and last names. What is the result when the user tries out the code on the last line?

  const person = {
    firstName() {
      return 'Victor';
    },
    lastName() {
      return 'Reyes';
    },
  };

  console.log(`${person.firstName} ${person.lastName}`);

  Solution:

  It is going to show the name of the function, only, not a return value from its calling/invoking because the function was never called/invoked. To do that it needs ().

*/

const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName()} ${person.lastName()}`);
