/*

Read the following code carefully. Will the JavaScript garbage collection mechanism garbage collect the array assigned to the variable array after the function pushIt is called on line 11?

function makeArrays() {
  let array = [];

  return () => {
    array.push('');
    return array;
  };
}

const pushIt = makeArrays();
pushIt();
// more code

*/

// No. As long as the 'pushIt' function exist it will keep a reference to the 'array' in its closure as it is necessary for its operation.
