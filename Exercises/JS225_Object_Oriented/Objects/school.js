/*

Create a school object. The school object uses the same kind of student object as the previous exercise. It has methods that use and update information about the student. Be sure to check out the previous exercise for the other arguments that might be needed by the school object. Implement the following methods for the school object:

* addStudent: Adds a student by creating a new student and adding the student to a collection of students. The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid otherwise it logs "Invalid Year".
* enrollStudent: Enrolls a student in a course.
* addGrade: Adds the grade of a student for a course.
* getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
* courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.

To test your code, use the three student objects listed below. Using the three student objects, produce the following values from the getReportCard and courseReport methods respectively.

// Examples of created student objects with grades; methods
// on the objects are not shown here for brevity. The
// following are only showing the properties that aren't
// methods for the three objects

console.log(paul);
// {
//   name: 'paul',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

console.log(mary);
// {
//   name: 'Mary',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

console.log(kim);
// {
//   name: 'Kim',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }

> school.getReportCard(paul);
= Math: 95
= Advanced Math: 90
= Physics: In progress

> school.courseReport('Math');
= =Math Grades=
= Paul: 95
= Mary: 91
= Kim: 93
= ---
= Course Average: 93

> school.courseReport('Advanced Math');
= =Advanced Math Grades=
= Paul: 90
= Kim: 90
= ---
= Course Average: 90

> school.courseReport('Physics');
= undefined

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

let school = {
  students: [],
  addStudent(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      this.students.push(createStudent(name, year));
      return this.students[this.students.length - 1];
    } else {
      console.log('Invalid year.');
    }
  },
  enrollStudent(student, courseObj) {
    student.addCourse(courseObj);
  },
  addGrade(student, courseName, grade) {
    student.courses.filter(course => course.name === courseName)[0].grade = grade;
  },
  getReportCard(student) {
    student.courses.forEach(course => {
      if (course.grade) {
        console.log(`${course.name}: ${course.grade}`);
      } else {
        console.log(`${course.name}: In progress`);
      }
    });
  },
  courseReport(courseName) {
    let grades = [];
    this.students.forEach(student => {
      student.courses.forEach(course => {
        if (course.name === courseName && course.grade) {
          grades.push([student.name, course.grade]);
        }
      });
    });
    if (grades.length !== 0) {
      console.log(`=${courseName} Grades=`);
      grades.forEach(grade => console.log(`${grade[0]}: ${grade[1]}`));
      console.log('---');
      console.log(`Course Average: ${grades.map(([name, grade]) => grade).reduce((sum, grade) => sum + grade) / grades.length}`);
    } else {
      console.log(undefined);
    }
  },
}

let paul = school.addStudent('paul', '3rd');
school.enrollStudent(paul, { name: 'Math', code: 101});
school.addGrade(paul, 'Math', 95);
school.enrollStudent(paul, { name: 'Advanced Math', code: 102});
school.addGrade(paul, 'Advanced Math', 90);
school.enrollStudent(paul, { name: 'Physics', code: 202 });
console.log(paul);

let mary = school.addStudent('mary', '1st');
school.enrollStudent(mary, { name: 'Math', code: 101});
school.addGrade(mary, 'Math', 91);
console.log(mary);

let kim = school.addStudent('kim', '2nd');
school.enrollStudent(kim, { name: 'Math', code: 101});
school.addGrade(kim, 'Math', 93);
school.enrollStudent(kim, { name: 'Advanced Math', code: 102});
school.addGrade(kim, 'Advanced Math', 90);
console.log(kim);

console.log();
school.getReportCard(paul);
// Math: 95
// Advanced Math: 90
// Physics: In progress
console.log();

school.courseReport('Math');
// =Math Grades=
// Paul: 95
// Mary: 91
// Kim: 93
// ---
// Course Average: 93
console.log();

school.courseReport('Advanced Math');
// =Advanced Math Grades=
// Paul: 90
// Kim: 90
// ---
// Course Average: 90
console.log();

school.courseReport('Physics');
// undefined
