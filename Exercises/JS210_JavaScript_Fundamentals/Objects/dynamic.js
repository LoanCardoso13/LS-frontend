/*

  What will the following code log to the console and why? Don't run the code until after you have tried to answer.

  const myObject = {
    prop1: '123',
    prop2: '234',
    'prop 3': '345',
  };

  const prop2 = '456';
  myObject['prop2'] = '456';
  myObject[prop2] = '678';

  console.log(myObject[prop2]);
  console.log(myObject.prop2);

  Solution:

  It logs 678 then 456. Line 8 mutates the object by changing the value from its 'prop2' property from '234' to '456'. Subsequently, line 9 creates a new key value pair by assigning 678 value to the key referenced by constant prop2 in the main scope, which is '456'. When the first console.log is called, the constant prop2 is used as reference to the key in the bracket notation to extract to value corresponding to 456, which is where the constant points to. It happens to be '678' as defined and described. Subsequently, when the second console.log is called, this time it uses the dot notation to extract the value from prop2 property of myObject, which is '456' as per what was described on line 8.

*/

const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]);
console.log(myObject.prop2);
