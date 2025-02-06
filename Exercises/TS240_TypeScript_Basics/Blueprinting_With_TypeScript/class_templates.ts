/*

Define a class Person with properties name (string) and age (number). Include a constructor that takes these two properties, and add a method describe that returns a string with the person's name and age.

Expected output:

const person = new Person("Alice", 30);
console.log(person.describe());
// Expected Output:
// Alice is 30 years old.

*/

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `${this.name} is ${this.age} years old.`;
  }
}

const person = new Person("Alice", 30);
console.log(person.describe());
// Expected Output:
// Alice is 30 years old.
