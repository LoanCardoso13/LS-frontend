/*

Define two interfaces, Person and Employee. Person should have name and age. Employee should extend Person and add an employeeId. Then create an object of type Employee.

Expected outcome:

The Employee type object should adhere to both Person properties and its own employeeId.

*/

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

const myself: Employee = {
  name: "Joe",
  age: 37,
  employeeId: 13,
}
