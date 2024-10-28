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
