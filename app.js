const fs = require("fs");
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js'); //getting notes.js

const titleOptions = {
  describe:"Title of Note",
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe:"Body of Note",
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add','Add new note',{
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all Notes')
  .command('read', 'Reading Note',{
    title: titleOptions
  })
  .command('remove', 'Remove Note',{
    title: titleOptions
  })
  .help()
  .argv;
var command = argv._[0];
// console.log("Command:" + command);

switch(command){
  case 'list':{
    var allNotes = notes.getAll();
    console.log(`Getting ${allNotes.length} note(s):`);
    allNotes.forEach((note) => notes.logNote(note));
  }
  break;

  case 'add':{
    // console.log('Adding Notes');
    var note = notes.addNotes(argv.title, argv.body);
    if (note) {
      console.log('Created new Note');
      notes.logNote(note);
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
    if(note.length !== 0){
      console.log("Note Found!");
      notes.logNote(note);
    }else{
      console.log("Note not found.!!");
    }
  }
  break;

  default: console.log('Cannot Recognize code');
  break;
}

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
