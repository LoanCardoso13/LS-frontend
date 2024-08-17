/*

  Read through the code below. What values will be logged to the console? Can you explain these results?

  const languages = ['JavaScript', 'Ruby', 'Python'];
  console.log(languages);
  console.log(languages.length);

  languages.length = 4;
  console.log(languages);
  console.log(languages.length);

  languages.length = 1;
  console.log(languages);
  console.log(languages.length);

  languages.length = 3;
  console.log(languages);
  console.log(languages.length);

  languages.length = 1;
  languages[2] = 'Python';
  console.log(languages);
  console.log(languages[1]);
  console.log(languages.length);

  Solution:

  In JS, the length property of arrays can be assigned to integers. If increased, JS will add empty stops in the remaining places. The same will happen if the bracket notation is used to add an element in an index above length, i.e. the spots between that index and length - 1 will be left vacant. In this case the length will be the index of the just added, last element, plus 1. If any vacant spot is read with bracket notation, it returns undefined. If the length of array decreased, JS will drop any extra element in an index after length - 1. These elements are eliminated, so even if the length is brought back up, after trimming it down and losing elements, the lost elements won't show up again. 

*/

const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages);
console.log(languages.length);
                                                    
languages.length = 4;
console.log(languages);
console.log(languages.length);
                                                    
languages.length = 1;
console.log(languages);
console.log(languages.length);
                                                    
languages.length = 3;
console.log(languages);
console.log(languages.length);
                                                    
languages.length = 1;
languages[2] = 'Python';
console.log(languages);
console.log(languages[1]);
console.log(languages.length);
