/*

Create a type representing all property names of the existing interface UserData. Then write a function that takes a UserData object and a key from UserData, and prints out the value of that key from the object.

Expected outcome:

The function should be able to take any key of UserData and print out the corresponding value.

*/

interface UserData {
  name: string;
  age: number;
  isOn: boolean;
}

type UserProps = keyof UserData;

function printValue(obj: UserData, key: UserProps) {
  return obj[key];
}
