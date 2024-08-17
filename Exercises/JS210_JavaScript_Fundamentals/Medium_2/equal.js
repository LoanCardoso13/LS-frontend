/*

  Read through the following code. Currently, it does not log the expected result. Explain why this happens, then refactor the code so that it works as expected.

  const person = { name: 'Victor' };
  const otherPerson = { name: 'Victor' };

  console.log(person === otherPerson);    // false -- expected: true

  Solution:

  It doesn't work a expected because when comparing objects JS only returns true when they reside, in fact, in the same place in memory, i.e. if the references used by comparison point to the same object (not just object literals with same key value pairs). I like to solve this by converting the objects to string and then comparing them. If it is not a problem that the variables point to the same place in memory, then assigning person to otherPerson solves the problem. 

*/

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };
                                                                   
console.log(String(person) === String(otherPerson));    // false -- expected: true
