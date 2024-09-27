/*

  It is quite common to find yourself in a situation where you need to perform a search on some data to find something you're looking for. Imagine that you need to search through the yellow pages to find the phone number of a particular business. A straightforward way to do this would be to go through the yellow pages one business at a time, checking if the current business name is the one you're trying to find.

  This may be a simple and easy way to search, but it's not very efficient. In the worst case scenario, it could mean having to search through every single business name before finding out that the business isn't listed—or, slightly better, having to go through every letter from 'A' to 'Z' before finding the business. A linear search such as this can take quite a long time.

  A binary search algorithm is a much more efficient alternative. This algorithm allows you to cut the search area in half on each iteration by discarding the half that you know your search term doesn't exist in. The binary search algorithm is able to do this by relying on the data being sorted. Going back to the yellow pages example, let's say that we're searching the following yellowPages data for the search item 'Pizzeria':

  // Yellow pages list of business names data:
  const yellowPages = ['Apple Store', 'Bags Galore',
                       'Bike Store',  'Donuts R Us',
                       'Eat a Lot',   'Good Food',
                       'Pasta Place', 'Pizzeria',
                       'Tiki Lounge', 'Zooper'];

  With a linear search, we would have to sequentially go through each of the items until we found the search item 'Pizzeria'. In a binary search, however, the following sequence happens:

  * Retrieve the middle value from the data (assume truncation to integer) --> 'Eat a Lot'.
  * If the middle value is equal to 'Pizzeria', stop the search.
  * If the middle value is less than 'Pizzeria':
  * * Discard the lower half, including the middle value --> ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot'].
  * * Repeat the process from the top, using the upper half as the starting data --> ['Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'].
  * If the middle value is greater than 'Pizzeria', do the same as the previous step, but with opposite halves.

  Using the process described above, the search successfully ends on the second iteration when the middle value is 'Pizzeria'.

  Implement a binarySearch function that takes an array and a search item as arguments, and returns the index of the search item if found, or -1 otherwise. You may assume that the array argument will always be sorted.

  Examples:

  const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
  binarySearch(yellowPages, 'Pizzeria');                   // 7
  binarySearch(yellowPages, 'Apple Store');                // 0

  binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
  binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
  binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

  binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
  binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6

  Problem:

    Use binary search to find index of a searched item in a sorted list. If item not found, return -1.

  Example and test cases:

    Provided.

  Data structure:

    Conditional, recursion (?).

  Algorithm (FAIL):

    Calculate midPoint as list length / 2 rounded - 1
    Compare mid item (by using index calculated above) from list with searchedItem.
    If list is empty:
      Return -1
    Else If they're the same:
      Return midPoint
    Else If mid item is less than searchedItem:
      Calculate list as current sliced from midPoint + 1 (inclusive) to end
      Call itself again with arguments new list and searchedItem and assign return value to idxFound
      Return midPoint + idxFound
    Else If mid item is greater than searchedItem:
      Calculate list as current sliced from 0 to midPoint (not inclusive)
      Call itself again with arguments new list and searchedItem and assign return value to idxFound
      Return midPoint - idxFound

*/

function binarySearch(list, searchedItem) {
  let midPoint = Math.floor(list.length / 2);
  if (list.length === 0) {
    return -1;
  } else if (list[midPoint] === searchedItem) {
    return midPoint;
  } else if (list[midPoint] < searchedItem) {
    list = list.slice(midPoint + 1);
    let idxFound = binarySearch(list, searchedItem);
    return idxFound === -1 ? -1 : midPoint + idxFound + 1;
  } else if (list[midPoint] > searchedItem) {
    list = list.slice(0, midPoint);
    let idxFound = binarySearch(list, searchedItem);
    return idxFound === -1 ? -1 : idxFound;
  }
}

const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
