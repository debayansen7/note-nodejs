console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNotes = (title, body) => {
  // console.log('ADDING NEW NOTE', title, body);
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicates = notes.filter((note) => note.title === title);

  if (duplicates.length == 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  } else {
    console.log("ERROR:: Duplicate Note");
  }

};

var getAll = () => {
  console.log("Getting all the list");
};

var readNote = (title) => {
  // console.log("Reading Note: " + title);
  var notes = fetchNotes();
  var note = {
    title
  };
  var matchFound = notes.filter((note) => notes.filter((note) => note.title == title));
  console.log(matchFound);
};

var removeNote = (title) => {
  console.log("Remove Note: " + title);
  var notes = fetchNotes();
  var note = {
    title
  };
  var uniqueNotes = notes.filter((note) => note.title != title);
  saveNotes(uniqueNotes);
  return notes.length !== uniqueNotes.length;
};

module.exports = {
  addNotes,
  getAll,
  readNote,
  removeNote
}

// console.log(module);

// module.exports.addNotes = () => {
//   console.log('Notes Added');
//   return 'New Notes';
// };

// module.exports.add = (a,b) => {
//   return a + b;
// }
