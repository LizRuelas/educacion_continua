const createNote = text => {
	let obj = {};
	obj.text = text;
	obj.createdAt = new Date();
	obj.completed = false
	return obj;
};

const noteToString = note => [
  '[' + (note.completed ? 'X' : ' ') + ']',
  ' | ' + note.createdAt.toDateString(),
  ' | ' + note.text
].join('');

const createNotes = array => {
	let array_obj = [];
	array.map((element) => {
		let obj = createNote(element);
		array_obj.unshift(obj);
	})
	return array_obj;
};

const notesToString = notes => {
	let str = "";
	notes.map((element, position) => {
		let cadena = noteToString(element);
		if(position === notes.length -1 ){
			str += cadena;
		}else{
			str += cadena + "\n";
		}
	})
	return str;
};

module.exports = {
	createNote : createNote ,
	createNotes : createNotes ,
	noteToString : noteToString ,
	notesToString : notesToString
}
