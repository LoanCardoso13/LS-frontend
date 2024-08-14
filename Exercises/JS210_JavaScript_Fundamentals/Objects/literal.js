/*

  Identify the bug in the following code. Don't run the code until after you've tried to answer.

  const myObject = {
    a: 'name',
    'b': 'test',
    123: 'c',
    1: 'd',
  };

  myObject[1];
  myObject[a];
  myObject.a;

  Solution:

  When using bracket notation to extract value from object, it is necessary to use quotes to explicit make it a string literal. So myObject[a] needs to be myObject['a'].

*/

const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject['a'];
myObject.a;

