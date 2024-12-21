/*

Implement a form for adding new staff, and then use the booking app API to add the staff to the database. Your implementation should handle the different possible responses of the server and inform the user of the outcome.

Here's a video clip that shows how the form should work:

(video at https://launchschool.com/exercises/c873c2df)

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
    <meta charset="utf-8">
    <script>
      const URL = 'http://localhost:3000';

      document.addEventListener('DOMContentLoaded', () => {
        let form = document.querySelector('form');

        form.addEventListener('submit', event => {
          event.preventDefault();

          let data = new FormData(form);

          let request = new XMLHttpRequest();
          request.open(form.method, URL + form.getAttribute('action'));

          request.addEventListener('load', event => {
            if (request.status === 201) {
              alert(`Successfully created staff with id: ${JSON.parse(request.response).id}`);
            } else {
              alert('Staff cannot be created. Check your inputs.');
            }
          })

          request.send(data);
        });
      });


    </script>
  </head>
  <body>
    <form action="/api/staff_members" method="post">
      <fieldset>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <input type="submit" value="Submit">
      </fieldset>
    </form>
  </body>
</html>

*/

