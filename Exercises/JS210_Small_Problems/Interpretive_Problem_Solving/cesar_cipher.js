/* 
Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

--- Problem ---

  Write a function that implements the Ceaser Cipher. The function receives a string and an integer. The string is the message to be encrypted and the integer is the key to do the encryption. 

  To encrypt means that for every letter, upper or lowercase, it is substituted by another letter, with the same casing, found by moving key positions in the alphabet. If moving exceeds the alphabet, then it wraps around and continues through the beginning of the alphabet (with case consistency).

  For characters that are not letters, these should be kept. Input is always string. Empty string returns itself.

---Examples---

  Given

---Data strucutre---

  Iteration through characters and index of input. Conditional with regex to check letter and case. Character code <=> caracter conversions. Integer arithmetics to wrap around limits of alphabet character codes. 

---Algorithm---

  Initialize answer array
  Iterate through indexes of str
    If current character is uppercase letter
      get charcode from current character subtracted by 65 (normalizedCode)
      get remainder with 26 of normalizedCode plus key (newCode)
      get character from newCode plus 65 and push into answer array
    Else if current character is lowercase letter
      get charcode from current character subtracted by 97
      get remainder with 26 of normalizedCode plus key (newCode)
      get character from newCode plus 97 and push into answer array
    Else
      push current character to answer array
  Return joined answer array

*/

function caesarEncrypt(str, key) {
  let answer = [];
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      let normalizedCode = str[i].charCodeAt(0) - 65;
      let newCode = (normalizedCode + key) % 26;
      answer.push(String.fromCharCode(65 + newCode));
    } else if (/[a-z]/.test(str[i])) {
      let normalizedCode = str[i].charCodeAt(0) - 97;
      let newCode = (normalizedCode + key) % 26;
      answer.push(String.fromCharCode(97 + newCode));
    } else {
      answer.push(str[i]);
    }
  }
  return answer.join('');
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"
 
// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"
 
// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"
 
// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
