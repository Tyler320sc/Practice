/*
Use MDN as a reference throughout these exercises.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

// Practice using string index

/*
6.1 Print the third letter of the alphabet string.
*/
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
console.log(alphabet[2]);


/*
6.11 Print the last letter of the alphabet string, without using the length property.
*/
console.log(alphabet[25]);
/*
6.12 Create a function called 'numLetter' that takes a number, n, and returns the nth letter of the alphabet. If n is 3, it should return the third letter, 'c'.
Remember to write some lines of code to test if your function works correctly.
*/

const numLetter = n => alphabet[n - 1];

console.log('char at position 3 is c:', numLetter(3) === 'c');
console.log('char at postion 26 is z:', numLetter(26) === 'z');
console.log('char at position 1 is a:' , numLetter(1) === 'a');
console.log(numLetter(3));
/*
6.13 Create a function called 'isAtIndex' that takes a string, a letter, and a number. It should return true if the letter is found at the index number of the string, otherwise false.
The following lines should help test if your function works correctly. They should print true.
*/
const isAtIndex = (str, char, num) => char === str[num];

console.log('e is at index 1 in hello:', isAtIndex('hello', 'e', 1));
console.log('e is at index 4 in Alice:', isAtIndex('Alice', 'e', 4));

// Practice using length

/*
6.2 Print the length of the alphabet string.
*/
console.log(alphabet.length);

/*
6.21 Print the last letter of the alphabet string, using the length property.
*/
console.log(alphabet[alphabet.length -1]);

/*
6.22 Try to guess the length of the string c, then print it to see if you got it right.
*/
const a = 'alpha';
const b = 'bet';
const c = a + b;
console.log(c.length);


// Practice using methods

/*
6.3 Create a function called 'inAlphabet' that takes a string and returns true if it is included in the alphabet, otherwise false. It only needs to work on lowercase letters.

Use the includes() method.

The following lines should help test if your function works correctly. They should print true.
*/
const inAlphabet = str => {
  return alphabet.includes(str.toLowerCase());
}

console.log('a is in the alphabet:', inAlphabet('a') === true);
console.log('lmno is in the alphabet:', inAlphabet('lmno') === true);
console.log('1 is not in the alphabet:', inAlphabet('1') === false);
console.log('A is in the alphabet:', inAlphabet('A') === true);
/*
6.301 Create a function called 'isDigit' that takes a digit as a string and returns true if it is included in the following string, otherwise false.

The following lines should help test if your function works correctly. They should print true.
*/
const digits = '1234567890';

const isDigit = strDigit => {
  return digits.includes(strDigit);
}
console.log('1 is a digit:', isDigit('1') === true);
console.log('9 is a digit:', isDigit('9') === true);
console.log('a is not a digit:', isDigit('a') === false);

/*
6.302 Create a function called 'isInTrouble' that takes a name and returns true if it is included in the email text.
*/
const email = `Hello all.

As you know, last quarter was suboptimal. We did not meet the expected revenue and things need to change. There are a few people invited to a special meeting at 1PM today in the conference room. From engineering, Dilbert, Wally, and Alice. Asok the intern. Mordac from management.

If your name was not stated, continue work as usual. Sincerely, PHB.`;

const isInTrouble = name => {
  return email.includes(name);
}

console.log('Dilbet is in trouble:', isInTrouble('Dilbert') === true);
console.log('Asok is in trouble:', isInTrouble('Asok') === true);
console.log('Tyler is not in trouble:', isInTrouble('Tyler') === false);
/*
6.303 Create a function called 'badLanguage' that takes a message and returns true if it contains any bad language, otherwise false. The bad language phrases are: butt face, poopy head, and snot brain.
*/
const badLanguage = message => message.includes('butt face') || message.includes('poopy head') || message.includes('snot brain');

console.log('bad language test');
console.log(badLanguage('butt face') === true);
console.log(badLanguage('Sally was being a butt face to me today') === true);
console.log(badLanguage('Your a poopy head!') === true);
console.log(badLanguage('what a crap head!') === false);
/*
6.31 Create a function called 'IsBasicQuestion' that takes a sentence and returns true if it is a basic question, otherwise false. A basic question begins with one of the five Ws (Who, What, When, Where, Why) and ends with a question mark.
*/
const isBasicQuestion = q => {
  if ( (q.startsWith('Who') || q.startsWith('What') || q.startsWith('When') || q.startsWith('Where') || q.startsWith('Why')) && q.endsWith('?') ) {
    return true;
  } else {
    return false;
  }
}
console.log(isBasicQuestion('Who is your Daddy?') === true);
console.log(isBasicQuestion('Where is your Daddy?') === true);
console.log(isBasicQuestion('Where is your Daddy') === false);
/*
6.32 Create a function called 'validURL' that takes a string and returns true if it is a valid URL, otherwise false. For our sake, a valid URL must start with either "http://" or "https://" and end with any of: ".com", ".ca", or ".org".
*/
const validURL = str => {
  return ( (str.startsWith("http://") || str.startsWith("https://") )
   && 
   (str.endsWith(".com") || str.endsWith(".ca") || str.endsWith(".org")));
}
console.log('validURL Test')
console.log(validURL("http://TylerIsAwesome!.com") === true);
console.log(validURL("https://TylerIsDaMan!.ca") === true);
console.log(validURL("https://TylerIsDaBest!.org") === true);
console.log(validURL("http://TylerIsDaBestEver!.org") === true);
console.log(validURL("http://TylerIsDaBestEver!.caorg") === false);
console.log(validURL("httpss://TylerIsDaBestEver!.org") === false);
/*
6.33 Create a function called 'firstSpace' that takes a string and returns the index of its first space character.
*/
const firstSpace = str => str.indexOf(' ');

console.log(firstSpace(' Tyler') === 0);
console.log(firstSpace('Tyler is the dopest!') === 5);
console.log(firstSpace('Ty') !== 0); 
console.log(firstSpace('Ty ') !== 1); 
console.log(firstSpace('Ty') === -1); 
/*
6.331 Create a function called 'firstOfLast' that takes a full name (e.g. "John Smith") and returns the first letter of the last name (e.g. "S"). How can you use the firstSpace() function to make this easier?
*/
const firstOfLast = str => {
  const space = firstSpace(str);
  const nextChar = space + 1;
  return str[nextChar];
}
console.log(firstOfLast('John Smith') === 'S');
console.log(firstOfLast('Tim Johns') === 'J');
/*
6.332 Create a function called 'initials' that takes a full name (e.g. "Jane Doe") and returns the initials (e.g. "J.D."). How can you use firstOfLast() to make this easier?
*/
const initials = str => {
  const firstInitial = str[0];
  const secondInitial = firstOfLast(str);
  return firstInitial + '.' + secondInitial + '.';
}
console.log('initials---------------------------------------------------------------------------');
console.log(initials('Jane Doe') === 'J.D.');
/*
6.34 Create a function called 'capitalize' that takes a word (e.g. "hello") and returns the same word, but with the first letter capitalized (e.g. "Hello").
*/
const capitalize = w => w[0].toUpperCase() + w.slice(1);
console.log('capitalize--------------------------------------------------------------------------');
console.log(capitalize('tyler') === 'Tyler');
console.log(capitalize('the') === 'The');
/*
6.35 Create a function called 'rhetorical' that takes a rhetorical question and returns the same question, but ending with a period instead of a question mark. Don't use the replace method.
*/
const rhetorical = q => {
  let replace = q[q.length -1];
  replace = '.';
  let newStr = q.slice(0, -1);
  return newStr + replace;
}
console.log('rhetorical----------------------------------------------------------------------------');
console.log(rhetorical('What am I doing here?') === 'What am I doing here.');
console.log(rhetorical('Is rain wet?') === 'Is rain wet.');
console.log(rhetorical('Does a bear poop in the woods?') === 'Does a bear poop in the woods.');
/*
6.36 Create a function called 'couldBeWord' that takes a made up word and returns true if it could be a word, otherwise false. Only made up words containing at least one vowel (a, e, i, o, u) could be words.
*/
const couldBeWord = w => (w.includes('a') || w.includes('e') || w.includes('i') || w.includes('o') || w.includes('u'));

console.log('couldBeWord-------------------------------------------------------------------------');
console.log(couldBeWord('Hello') === true);
console.log(couldBeWord('Yeah') === true);
console.log(couldBeWord('Hello') === true);
console.log(couldBeWord('Psst') === false);
console.log(couldBeWord('nth') === false);
console.log(couldBeWord('TV') === false);
/*
6.37 Create a function called 'fixSentence' that takes a sentence and returns the fixed version. The first letter should be capitalized and a period should be added if the original does not end with punctuation (period, question mark, or exclamation mark).
*/
const fixSentence = s => {
  const firstLetter = capitalize(s[0]);
  if (s[s.length - 1] !== '.' || s[s.length - 1] !== '?' || s[s.length - 1] !== '!') {
    var newPunctuation = s + '.';
  }
  return firstLetter + newPunctuation;
}
console.log('fixSentence-------------------------------------------------------------------------');
console.log(fixSentence('what does life even mean?') === 'What does life even mean?');
console.log(fixSentence('fix the sentence') === 'Fix the sentence.');

/*
6.38 Create a function called 'alternating' that takes a number and returns an alternating string of that many 1s and 0s.

1: 1
2: 10
3: 101
4: 1010
5: 10101
...
*/


/*
6.4 Create a function called 'hasDigit' that takes a string and returns true if it contains any digits, otherwise false.
*/


/*
6.41 Create a function called 'hasPunctuation' that takes a string and returns true if it contains any punctuation (., !, ?), otherwise false.
*/


/*
6.42 Create a function called 'validPassword' that takes a password and returns true if it is valid, otherwise false.

A valid password must:
- be at least 6 characters long
- contain a digit
- contain a character of punctuation (., !, ?)
*/


/*
6.43 Create a function called 'betterPassword' that takes two passwords and returns the better of the two. A password is considered better if it gets more points. Each character in the password counts for 1 point. Including any digits counts for an additional 5 points (flat, not for each digit). Including any punctuation (., !, ?) counts for an additional 10 points (flat, not for each punctuation).
*/