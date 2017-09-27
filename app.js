console.log("Starting app.js");
const fs = require("fs");
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js'); //getting notes.js

const argv = yargs.argv;
var command = argv._[0];
console.log("Command:" + command);

switch(command){
  case 'list':{

  }
  break;

  case 'add':{
    // console.log('Adding Notes');
    var note = notes.addNotes(argv.title, argv.body);
    if (note) {
      console.log('Created new Note');
      console.log(`Note title: ${note.title}`);
      console.log(`Note body: ${note.body}`);
    } else {
      console.log('Cannot Create Note');
    }
  }
  break;

  case 'remove':{
    // console.log('Removing Notes');
    var note = notes.removeNote(argv.title);
    var message = note ? `Note is removed.` : `Note cannot be removed.`;
    console.log(message);

  }
  break;

  case 'read':{
    var note = notes.readNote(argv.title);
    if(note){
      console.log("Note Found!");
      console.log(`Note title: ${note.title}`);
      console.log(`Note body: ${note.body}`);
    }else{
      console.log("Note not found.!!");
    }
  }
  break;

  default: console.log('Cannot Recognize code');
}


// if (command === 'list') {
//   console.log('Display List');
//   notes.getAll();
// } else if (command === 'add') {
//
// } else if (command === 'read') {
//   console.log('Reading Notes');
//   notes.readNote(argv.title);
// } else if (command === 'remove') {
//   console.log('Removing Notes');
//   var note = notes.removeNote(argv.title);
//   if(note){
//     console.log(`${note.title} is removed.`);
//   // } else{
//   //   console.log(`${note.title} cannot be removed.`);
//   }
// } else {
//   console.log('Cannot Recognize code');
// }
// var result = notes.addNotes();
// console.log(result);
//
// console.log('Result:'+ notes.add(3,5));
//
// var filterArr = _.uniq([1,2,3,555555,4,4,4,2,4,4,4,5635,3653,762,2,4325,3, 1, 3]);
// console.log(filterArr);
//
// var user = os.userInfo();
// console.log(user.username);
// fs.appendFile('greetings.txt', `\n Hello ${user.username}! \n` , function(err){
//     if(err){
//       console.log('Unable to write a file!');
//     }
// });
