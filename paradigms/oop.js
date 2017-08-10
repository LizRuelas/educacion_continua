function Note(text) {
  this.text = text || '';
  this.createdAt = new Date();
  this.completed = false;
}

Note.prototype.toString = function () {
  let str = '[' + (this.completed ? 'X' : ' ') + ']';
  str += ' | ' + this.createdAt.toDateString();
  str += ' | ' + this.text;
  return str;
};


function Notes() {
  this.data = [];
}

Notes.prototype.add = function (note) {
  if( note instanceof Note ){
    this.data.unshift(note);
  }else{
    throw new Error("El argumento 'note' no es una instancia de 'Note'");
  }
};

Notes.prototype.toString = function () {
  let array = [];
  if(this.data.length){
    for(let i = 0 ; i < this.data.length ; i++){
      array.push(this.data[i].toString());
    }
    return array.join('\n');
  }else{
    return '';
  }
};

module.exports = {Notes , Note};
