// Using async callbacks

// const fs = require('fs'); // Import the module as one big object

// fs.readFile('first.txt', 'utf8', (err, data) => {
//   if (err) throw err; // Print the error and quit
//   const parts = data.split('---');
//   fs.writeFile('second.txt', parts[0], 'utf8', err => {
//     if (err) throw err; // Print the error and quit
//     console.log('Successfully copied the contents!');
//   });
// });

// console.log('Starting task...'); // This prints first!
'======================================================================================================'
// Using Promises

// const fs = require('fs').promises; // Import the module as one big object

// fs.readFile('first.txt', 'utf8')
//   .then(data => {
//     const parts = data.split('---');
//     fs.writeFile('second.txt', parts[0], 'utf8')
//       .then(() => {
//         console.log('Successfully copied the contents!');
//       })
//       .catch(err => { // Catch any errors with writeFile
//         console.log('Something went wrong with writeFile:');
//         console.log(err);
//       })
//   })
//   .catch(err => { // Catch any errors with readFile
//     console.log('Something went wrong with readFile:');
//     console.log(err);
//   });

// console.log('Starting task...');
'============================================================================'
// returning writefile
// const fs = require('fs').promises; // Import the module as one big object

// fs.readFile('first.txt', 'utf8')
//   .then(data => {
//     const parts = data.split('---');
//     return fs.writeFile('second.txt', parts[0], 'utf8');
//   })
//   .then(() => {
//     console.log('Successfully copied the contents!');
//   })
//   .catch(err => { // Catch any errors
//     console.log('Something went wrong:');
//     console.log(err);
//   });

// console.log('Starting task...');
'=========================================================================='
// using async / await "syntactic sugar"

// const fs = require('fs').promises;

// const go = async () => {
//   try {
//     console.log('Starting task...');
//     const data = await fs.readFile('first.txt', 'utf8');
//     const parts = data.split('---');
//     await fs.writeFile('second.txt', parts[0], 'utf8');
//     console.log('Successfully copied the contents!');
//     console.log(data);
//   } catch (err) {
//     console.log('Something went wrong:');
//     console.log(err);
//   }
// }
// go();

// ========================= Final Examples ===============================================

// Public notes / private notes examples async / await syntax

const fs = require('fs').promises;

const go = async () => {
  try {
    console.log('Gathering notes...');
    const notes = await fs.readFile('notes.txt', 'utf8');
    const [publicNotes, privateNotes] = notes.split('---');

    console.log('Copying public notes...');
    await fs.writeFile('public.txt', publicNotes, 'utf8');

    console.log('Copying private notes...');
    await fs.writeFile('private.txt', privateNotes, 'utf8');

    console.log('Removing original file...');
    await fs.unlink('notes.txt');

    console.log('Finished!');
  } catch (err) {
    console.log('Something went wrong:');
    console.log(err);
  }
};

go();