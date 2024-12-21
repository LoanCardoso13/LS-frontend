/*

Implement the markup and JavaScript to add one or more schedules. You should handle and inform the user of the different possible responses of the server.

(video at https://launchschool.com/exercises/dfda6f2b)

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Schedule Form</title>
    <style>
        .schedule-form {
            margin-bottom: 20px;
        }
    </style>
    <script>
        const URL = 'http://localhost:3000';

        function addScheduleForm() {
            const formContainer = document.getElementById('form-container');
            const submitButton = document.querySelector('#submit-button');
            const newForm = document.querySelector('.schedule-form').cloneNode(true);
            formContainer.appendChild(newForm);
            formContainer.insertBefore(newForm, submitButton);
        }

        document.addEventListener('DOMContentLoaded', () => {
          let names;
          let optionsContainer = document.querySelector('#staff-name');
          let form = document.querySelector('form');
          let request = new XMLHttpRequest();
          request.open('GET', URL + '/api/staff_members');

          request.addEventListener('load', event => {
            let staff = JSON.parse(request.response);
            names = staff.map(member => [member.name, member.id]);

            names.forEach(([name, id]) => {
              let option = document.createElement('option');
              option.setAttribute('value', id);
              option.innerHTML = name;
              optionsContainer.appendChild(option);
            });
          });

          request.send();

          form.addEventListener('submit', event => {
            event.preventDefault();

            let data = {};
            let forms = [].slice.call(document.querySelectorAll('.schedule-form'));
            forms = forms.map(form => {
              let formNodes = [].slice.call(form.querySelectorAll('.submitable'));
              return {
                "staff_id": formNodes[0].value,
                "date": formNodes[1].value,
                "time": formNodes[2].value
              }
            });
            data.schedules = forms;

            let request = new XMLHttpRequest();
            request.open(form.method, URL + form.getAttribute('action'));
            request.setRequestHeader('Content-Type', 'application/json');

            request.addEventListener('load', event => {
              if (request.status === 201) {
                alert('okay');
              } else {
                alert('not okay');
              }
            })

            request.send(JSON.stringify(data));
          });
        });

    </script>
</head>
<body>
    <button type="button" onclick="addScheduleForm()">Add More Schedules</button>
    <form method="post" id="form-container" action="/api/schedules">
        <fieldset class="schedule-form">
            <label for="staff-name">Staff Name:</label>
            <select id="staff-name" name="staff-name" class="submitable"></select>
            <br>
            <label for="date">Date:</label>
            <input type="date" id="date" name="date" class="submitable">
            <br>
            <label for="time">Time:</label>
            <input type="time" id="time" name="time" class="submitable">
            <br>
        </fieldset>
      <input type="submit" id="submit-button">
    </form>
</body>
</html>

*/
