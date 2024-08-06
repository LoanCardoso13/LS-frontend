/*

  Take a look at the following code:

  let myName = 'Bob';
  const saveName = myName;
  myName = 'Alice';
  console.log(myName, saveName);

  What does this code log to the console? Think about it for a moment before continuing.

  If you said that this code logged:

  Alice Bob

  you would be 100% correct, and the answer should come as no surprise. Now let's look at something slightly different:

  const myName = 'Bob';
  const saveName = myName;
  myName.toUpperCase();
  console.log(myName, saveName);

  What does this code log? Can you explain these results?

  Solution:

  Bob Bob

  The String.prototype.toUpperCase() method returns a new value and doesn't interfere with the object caller, which is a primitive and non-mutating anyways.

*/
