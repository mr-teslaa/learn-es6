const xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = () => {
	if (this.readyState == 4 && this.status == 200) {
		let data = this.responseText;
		console.log(data);
		// jsonExtract(data);
	}
}

xmlhttp.open("GET", "data.json", true);
xmlhttp.send();

const jsonExtract = (jsondata) => {
	// console.log(jsondata);
	let js_obj = JSON.parse(jsondata);


	for(i in js_obj.persons) {
		let persons = js_obj.persons;

		for(j in persons[i]) {
			console.log(y);
			console.log(persons[i][j]);
		}
	}
}

// =======================================

let student = {
	name: "John Doe",
	age: 27,
	addr: "Dhaka"
}

let stdjson = JSON.stringify(student);
let stdNew = JSON.parse(stdjson);

console.log(stdjson);
console.log(stdNew);
