/*

  Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

  Examples:

  wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
  wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
  wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
  wordSizes('');                                            // {}

*/

function wordSizes1(sentence) {
  let lengthArr = sentence.split(' ').map(word => word.length);
  let minLength = Math.min(...lengthArr);
  let maxLength = Math.max(...lengthArr);
  let answer = {};

  if (minLength === maxLength && minLength === 0) return answer;

  for (let idx = minLength; idx <= maxLength; idx++) {
    let count = 0;
    sentence.split(' ').forEach(
      word => {
        if (word.length === idx) count += 1;
      }
    );
    if (count > 0) answer[idx] = count;
  }

  return answer;
}

function filterNonAlphabetic(str) {
  return str.split('').filter(character => !!character.match(/[a-z ]/gi)).join('');
}

function wordSizes(sentence) {
  return wordSizes1(filterNonAlphabetic(sentence));
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}
