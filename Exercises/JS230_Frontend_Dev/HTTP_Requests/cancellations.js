/*

Implement two functions: one for cancelling schedules and the other for cancelling of bookings. The functions take a scheduleId and a bookingId as arguments respectively.

const URL = 'http://localhost:3000'

function cancelSchedule(scheduleId) {
  const request = new XMLHttpRequest();
  request.open('DELETE', URL + `/api/schedules/${scheduleId}`);

  request.addEventListener('load', event => {
    if (request.status === 204) {
      alert('Schedule cancelled');
    } else {
      alert(request.response);
    }
  });

  request.send();
}
function cancelBooking(bookingId) {
  const request = new XMLHttpRequest();
  request.open('PUT', URL + `/api/bookings/${bookingId}`);

  request.addEventListener('load', event => {
    console.log(request.status);
    if (request.status === 204) {
      alert('Booking cancelled');
    } else {
      alert(request.response);
    }
  });

  request.send();
}

*/
