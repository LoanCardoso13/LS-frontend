/*

Implement something that makes the following code work as described in the comments using the pseudo-classical approach. Subclasses should inherit all of the superclass's methods. Reuse the constructors of the superclass when implementing a subclass.

const person = new Person('Foo', 'Bar', 21, 'male');
console.log(person instanceof Person);       // logs true
console.log(person instanceof Doctor);       // logs false
console.log(person instanceof Professor);    // logs false
console.log(person instanceof Student);      // logs false
person.eat();                                // logs 'Eating'
person.communicate();                        // logs 'Communicating'
person.sleep();                              // logs 'Sleeping'
console.log(person.fullName());              // logs 'Foo Bar'

const doctor = new Doctor('Bar', 'Qux', 21, 'female', 'Pediatrics');
console.log(doctor instanceof Person);       // logs true
console.log(doctor instanceof Doctor);       // logs true
console.log(doctor instanceof Professor);    // logs false
console.log(doctor instanceof Student);      // logs false
doctor.eat();                                // logs 'Eating'
doctor.communicate();                        // logs 'Communicating'
doctor.sleep();                              // logs 'Sleeping'
console.log(doctor.fullName());              // logs 'Bar Qux'
doctor.diagnose();                           // logs 'Diagnosing'

const professor = new Professor('Bar', 'Foo', 48, 'female', 'Law');
console.log(professor instanceof Person);    // logs true
console.log(professor instanceof Professor); // logs true
console.log(professor instanceof Doctor);    // logs false
console.log(professor instanceof Student);   // logs false
professor.eat();                             // logs 'Eating'
professor.communicate();                     // logs 'Communicating'
professor.sleep();                           // logs 'Sleeping'
console.log(professor.fullName());           // logs 'Bar Foo'
professor.teach();                           // logs 'Teaching'


function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.teach = () => {
  console.log('Teaching');
};
Professor.prototype.constructor = Professor;


const graduateStudent = new GraduateStudent('Qux', 'Bar', 21, 'non-binary', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);          // logs true
console.log(graduateStudent instanceof Student);         // logs true
console.log(graduateStudent instanceof GraduateStudent); // logs true
console.log(graduateStudent instanceof Professor);       // logs false
console.log(graduateStudent instanceof Doctor);          // logs false
graduateStudent.eat();                       // logs 'Eating'
graduateStudent.communicate();               // logs 'Communicating'
graduateStudent.sleep();                     // logs 'Sleeping'
console.log(graduateStudent.fullName());     // logs 'Qux Bar'
graduateStudent.study();                     // logs 'Studying'
graduateStudent.research();                  // logs 'Researching'

*/
