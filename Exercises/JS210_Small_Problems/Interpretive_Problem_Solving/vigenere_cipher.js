/*

  The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

  Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:

  plaintext: Pineapples don't go on pizzas!
  keyword: meat

  Applying the Vigenere Cipher for each alphabetic character:
  plaintext : Pine appl esdo ntgo onpi zzas
  shift     : meat meat meat meat meat meat
  ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

  result: Bmnxmtpeqw dhz'x gh ar pbldal!

  Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

  Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

  ---

  For a quick lookup of a ciphertext per character, you may consult this tabula recta (https://en.wikipedia.org/wiki/Tabula_recta). Each row of the table corresponds to a Caesar Cipher encryption using the columns' character letter as a shift value.

--- Problem ---

  Encrypt a string based on vigenere cipher. 
  
  In this cipher, the key is given as a string containing only alphabetic characters. Each character of the key string offers a subKey to encrypt its corresponding character in the input string. This subKey is calculated as the distance between the letter to the beginning of the alphabet. 

  The corresponding character of the key is found by pairing key characters and input string characters and cycling the key word so that every character has a pair. The key word is always smaller than the input string.

  The encrypted string is found by shifting each character of the input string by the subKey number of positions to its right in the alphabet. If exceeds the alphabet, it wraps around it. 

---Examples and test cases---

vigenereCipher("Pineapples don't go on pizzas!", "meat") // Bmnxmtpeqw dhz'x gh ar pbldal!

---Data structure---

  Build array of subKeys. Iterate through strings with conditionals. Use of arithmetic remainder for wrapping.
  
---Algorithm---

  Initialize subKeys to empty array
  Initialize answer to empty array
  Make key word lowercase
  Initialize counter to 0
  Iterate through indexes of input string (i)
    If input string character at i is alphabetic
      get char code of key word at position counter % key word length and subtract it by 97
      Push it to subKeys array
      Increase counter
    Else
      Push 0 to subKeys array
  Iterate through indexes of input string (i)
    If input string at i is uppercase letter
      subtract 65 from its charcode, add subKeys at i position, get remainder by 26, add to 65, get char from this code and push it to answer array
    If input string at i is lowercase letter
      subtract 97 from its charcode, add subKeus at i position, get remainder by 26, add to 97, get char from this code and push it to answer array
    Else
      push input string character at i to answer array
  Return joined answer array

*/

let vigenereCipher = (str, keyWord) => {
  let subKeys = [];
  let answer = [];
  keyWord = keyWord.toLowerCase();
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (/[a-zA-Z]/.test(str[i])) {
      subKeys.push(keyWord[counter % keyWord.length].charCodeAt(0) - 97);
      counter += 1;
    } else {
      subKeys.push(0);
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      answer.push(String.fromCharCode((str.charCodeAt(i) - 65 + subKeys[i]) % 26 + 65));
    } else if (/[a-z]/.test(str[i])) {
      answer.push(String.fromCharCode((str.charCodeAt(i) - 97 + subKeys[i]) % 26 + 97));
    } else {
      answer.push(str[i]);
    }
  }

  return answer.join('');
}

console.log(vigenereCipher("Pineapples don't go on pizzas!", "meat")) // Bmnxmtpeqw dhz'x gh ar pbldal!
