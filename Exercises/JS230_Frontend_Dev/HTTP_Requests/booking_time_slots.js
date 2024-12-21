/*

Implement the markup and JavaScript for booking a schedule. Be sure to check out the documentation on the requirements for a booking.

In the event that the student who's booking the appointment isn't in the database, you must provide a way for the user to create the student, and then automatically proceed with the booking once the student is successfully created.

Assume that only one schedule at a time can be booked.

(video at https://launchschool.com/exercises/2a95a258)

Note that page load may take a while when there are more than 7 schedules to retrieve. Recall the assigment on "Getting Schedules." It's up to you if you want to add code to handle this situation.

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
    <meta charset="utf-8">
    <script>
      const URL = 'http://localhost:3000';

      document.addEventListener('DOMContentLoaded', () => {
        const selectElement = document.querySelector('select');

        let request = new XMLHttpRequest();
        request.open('GET', URL + '/api/schedules');

        request.addEventListener('load', event => {
          let request2 = new XMLHttpRequest();
          request2.open('GET', URL + '/api/staff_members');

          request2.addEventListener('load', event => {
            let staff = JSON.parse(request2.response);
            let availableSlots = JSON.parse(request.response).filter(slot => slot.student_email === null);
            optionObjs = availableSlots.map(slot => {
              return {
                name: staff.filter(professor => professor.id === slot.staff_id)[0].name,
                date: slot.date,
                time: slot.time,
                schedule_id: slot.id,
              }
            });
            optionObjs.forEach(opt => {
              let optionNode = document.createElement('option');
              optionNode.innerHTML = `${opt.name} | ${opt.date} | ${opt.time}`;
              optionNode.setAttribute('value', opt.schedule_id);
              selectElement.appendChild(optionNode);
            });
          });

          request2.send();
        });

        request.send();
      });


    </script>
  </head>
  <body>
    <h1>Schedules</h1>
    <form>
      <label for="schedules">Please select one schedule </label>
      <select name="schedules"></select>
      <br>
      <label for="email">Email: </label>
      <input name="email"></select>
      <button type="submit">Submit</button>
    </form>
  </body>
</html>

*/
