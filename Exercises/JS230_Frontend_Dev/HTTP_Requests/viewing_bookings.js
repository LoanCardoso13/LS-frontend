/*

Implement the markup and JavaScript to view bookings made by students. The view for bookings should have two levels of detail. The first level shows only a list of dates that have bookings. The second level becomes visible only when a date is clicked and shows a nested list of booking details for the data. Details include the staff name, student email address, and the time booked.

(video at https://launchschool.com/exercises/1aefc02b)

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
    <meta charset="utf-8">
    <script>
      const URL = 'http://localhost:3000';
      function dropSchedules(event) {
        const date = event.target.textContent;
        const request = new XMLHttpRequest();
        request.open('GET', URL + `/api/bookings/${date}`);

        request.addEventListener('load', () => {
          const schedules = JSON.parse(request.response);
          const ul = document.createElement('ul');
          schedules.forEach(schedule => {
            const li = document.createElement('li');
            li.textContent = `${schedule[0]} | ${schedule[1]} | ${schedule[2]}`;
            ul.appendChild(li);
          });
          event.target.appendChild(ul);
        });

        request.send();
      }

      document.addEventListener('DOMContentLoaded', () => {
        const datesList = document.querySelector('ul');
        const request = new XMLHttpRequest();
        request.open('GET', URL + '/api/bookings');

        request.addEventListener('load', event => {
          const dates = JSON.parse(request.response)
          dates.forEach(date => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.setAttribute('href', '#');
            a.textContent = date;
            li.appendChild(a);
            datesList.appendChild(li);

            a.addEventListener('click', dropSchedules);
          });
        });

        request.send();
      })


    </script>
  </head>
  <body>
    <h1>Bookings</h1>
    <ul></ul>
  </body>
</html>

*/
