/*

  Read through the following code. Why will it log 'debugging'?

  function debugIt() {
    const status = 'debugging';
    function logger() {
      console.log(status);
    }

    logger();
  }

  debugIt();

  Solution:

  Upon its declaration, the function 'logger' is hoisted at the top of the 'debugIt' function scope. That means the value of constant status will be available to it, when called, no matter where it is called.

*/
