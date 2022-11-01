let value;
value = this;
value = document;
value = window.document;
// value = document.all.length;
// value = document.doctype;
// value = document.domain;
// value = document.URL;
// value = document.characterSet;
// value = document.contentType;
// value = document.scripts;
// value = document.scripts[0].src;
// value = document.scripts[0].getAttribute('src');


value = document.all;
let valueArray = Array.from(value);
valueArray.forEach((element)=> {
	console.log(element);
})

console.log(valueArray);
console.log(value);