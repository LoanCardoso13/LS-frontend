/*

Create an object factory for a student object. The student object should have the following methods and it should produce the expected results demonstrated in the sample code:

* info: Logs the name and year of the student.
* addCourse: Enrolls student in a course. A course is an object literal that has properties for its name and code.
* listCourses: Returns a list of the courses student has enrolled in.
* addNote: Adds a note property to a course. Takes a code and a note as an argument. If a note already exists, the note is appended to the existing one.
* updateNote: Updates a note for a course. Updating a note replaces the existing note with the new note.
* viewNotes: Logs the notes for all the courses. Courses without notes are not displayed.

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"

*/

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    notes: {},
    info() {
      return `${this.name} is a ${this.year} year student`
    },
    listCourses() {
      return this.courses;
    },
    addCourse(course) {
      this.courses.push(course);
    },
    addNote(code, text) {
      this.notes[code] ||= [];
      this.notes[code].push(text);
    },
    viewNotes() {
      this.courses.forEach(course => {
        if (this.notes[course.code]) {
          console.log(`${course.name}: ${this.notes[course.code].join('; ')}`);
        }
      });
    },
    updateNote(code, text) {
      if (this.notes[code]) this.notes[code] = [text];
    },
  }
}

let foo = createStudent('Foo', '1st');
console.log(foo.info());
// "Foo is a 1st year student"
console.log(foo.listCourses());
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
console.log(foo.listCourses());
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"
