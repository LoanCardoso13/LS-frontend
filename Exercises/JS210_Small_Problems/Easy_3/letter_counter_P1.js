/*

  Write a function that takes a string consisting of one or more space separated words and returns an object that shows the number of words of different sizes.

  Words consist of any sequence of non-space characters.

  Examples:

  wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
  wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
  wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
  wordSizes('');                                            // {}

  Algorithm 1:
  Find the lowest and highest bounds of word lengths in the sentence (minimum and maximum lengths from every word length).
  Iterate through these bounds (i)
    Count how many words in the sentence have a length of i
    If count is > 0, plug both i and count as key-value respectively into answer object
  Return answer object

  Algorithm 2:
  Map sentence into word lengths.
  Build a count of frequency from that mapped array.
    That is done by creating an array of the unique elements of the mapped array
    iterating through the elements of this array
      At each iteration count the number of occurrences of the elements in the mapped array
      Plug the key-value pair into the answer object
  Return answer object

  Algorithm 3:
  Intialize empty answer object.
  Iterate through words of sentence.
    Get length of word
    If answer value for key length is undefined, make it zero
    Increase answer value for key length by one
  Return answer.

*/

// function wordSizes1(sentence) {
//   let lengthArr = sentence.split(' ').map(word => word.length);
//   let minLength = Math.min(...lengthArr);
//   let maxLength = Math.max(...lengthArr);
//   let answer = {};
//
//   if (minLength === maxLength && minLength === 0) return answer;
//
//   for (let i = minLength; i <= maxLength; i++) {
//     let count = 0;
//     sentence.split(' ').forEach(
//       word => {
//         if (word.length === i) count += 1;
//       }
//     )
//     if (count > 0) answer[i] = count;
//   }
//
//   return answer;
// }
//
// console.log(wordSizes1('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes1('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes1("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes1(''));                                            // {}
//
// function wordSizes2(sentence) {
//   let lengthArr = sentence.split(' ').map(word => word.length);
//   let answer = {};
//   let uniqueLengthArr = [];
//
//   if (!sentence) return answer;
//
//   lengthArr.forEach(
//     ele => {
//       if (!uniqueLengthArr.includes(ele)) uniqueLengthArr.push(ele);
//     }
//   )
//
//   uniqueLengthArr.forEach(
//     ele => {
//       let count = 0;
//       lengthArr.forEach(
//         ele2 => {if (ele === ele2) count += 1;}
//       )
//       answer[ele] = count;
//     }
//   )
//
//   return answer;
// }
//
// console.log(wordSizes2('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes2('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes2("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes2(''));                                            // {}

function wordSizes3(sentence) {
  if (sentence.length === 0) return {};

  let answer = {};
  sentence.split(' ').forEach(
    word => {
      let length = word.length;
      answer[length] = answer[length] || 0;
      answer[length] += 1;
    }
  )
  return answer;
}

console.log(wordSizes3('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes3('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes3("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes3(''));                                            // {}
