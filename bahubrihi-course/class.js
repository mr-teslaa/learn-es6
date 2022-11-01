// class
// class is a template for creating objects


// after creating class
class Person {
	constructor(fname, lname, dob) {
		this.firstname = fname;
		this.lastname = lname;
		this.dob = dob;
	}

	calculateAge() {
		let birthday = new Date(this.dob);
		let diff = Date.now() - birthday.getTime();
		let ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	fullname() {
		return `${this.firstname} ${this.lastname}`
	}
}

let person3 = new Person("Khaled Bin", "Waalid", "12-12-1980");
console.log(person3.calculateAge());
console.log(`Full name: ${person3.fullname()}`);

let p1 = document.querySelector('#obj1');
let p2 = document.querySelector('#obj2');
p1.innerHTML = person3.fullname()


// before creating classes we might hard code 
// to create and object like this
let person1 = {
	firstname: "Nikola",
	lastname: "Tesla",
	dob: "11-13-1995",

	fullname: function() {
		console.log(`${this.firstname} ${this.lastname}`);

	}
}


let person2 = {
	firstname: "Jhon",
	lastname: "Doe",
	dob: "08-12-1985",

	fullname: function() {
		console.log(`${this.firstname} ${this.lastname}`);
		
	}
}

console.log(person1)
console.log(person2)
