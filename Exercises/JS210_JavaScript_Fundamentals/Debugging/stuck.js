/*

  The following code is a simplified (and not so serious) model of how we read a software development book. But running this code results in a stack overflow. What is wrong?

  const totalPages = 364;
  let energy = 100;

  function read() {
    let currentPage = 1;

    while (energy > 0 && currentPage < totalPages) {
      currentPage += 1;
      energy -= (5 + currentPage * 0.1);
    }

    console.log(`Made it to page ${String(currentPage)}.`);

    // Drink a cup of coffee.
    energy = 100;

    // Continue reading.
    if (currentPage < totalPages) {
      read();
    } else {
      console.log('Done!');
    }
  }

  read();

  Solution:

  Every time read is called it reinitializes currentPage to 1, and since the energy always ends before reaching the totalPages, the conditional of the if clause at the end of the function will always be true and the program will run an infinite loop of drinking coffee and reading from the beginning, the same pages, always, all over again, again and again, forever. To fix this we can make the currentPage only defaults to 1, if it is not provided as argument in the function call, and provide it when we drink coffee and restart reading.

*/

const totalPages = 364;
let energy = 100;
                                                          
function read(currentPage) {
  currentPage = currentPage || 1;
                                                          
  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }
                                                          
  console.log(`Made it to page ${String(currentPage)}.`);
                                                          
  // Drink a cup of coffee.
  energy = 100;
                                                          
  // Continue reading.
  if (currentPage < totalPages) {
    read(currentPage);
  } else {
    console.log('Done!');
  }
}
                                                          
read();
