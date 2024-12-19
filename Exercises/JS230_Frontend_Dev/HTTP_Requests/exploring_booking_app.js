/*

- App Description
The booking app is a tool for students to book the available schedule slots of staff. Staff provide the schedules that students can book. Note that this is only a simple booking app and by design it does not handle various scenarios and exceptions. For instance, the app doesn't bother to check whether the students who are registering have unique emails nor does it check the quality of the input provided (e.g., well formatted email, valid date value, valid time value).

- App Specifications
The app has four resources and the following relationship:
* Staff Members: List of staff that can provide available time slots.
** ID
** Name
** Email

* Schedules: List of schedules that students can book. A schedule is booked if there is a value for the student email.
** ID
** Staff ID
** Date
** Time
** Student Email

* Students: List of students who can book a schedule.
** ID
** Name
** Email

* Booking Sequences: List of booking sequences. A student who wants to register must have a booking sequence. Students get a booking sequence when they first try to book a schedule and they are not yet in the database.
** ID
** Student Email
** Sequence

(diagram at https://launchschool.com/exercises/dfb2dd61)

---

- Setting up the Booking App
(instructions at https://launchschool.com/exercises/dfb2dd61)

---

- Exercise

You'll be using a booking app throughout the exercise group, "Making HTTP Requests." To help you explore the documentation, try answering the following questions by running the server, opening your browser, visiting /doc, and carefully reading the documentation available for each route in the app. The app has seed data, so you can freely test out the different routes. You should only need to visit one route to determine the answer; if you'll need to visit more than one route, then the answer is "There is no route that will provide this information."

How many staff are there?
How many students are there?
How many schedules exist?
How many schedules have bookings?
Do all staff have schedules?
Did all students book a schedule?

Note: Some students have reported that they needed to install the http-errors NPM package before they could run their program.

*/
