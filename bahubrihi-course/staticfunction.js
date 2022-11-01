// static function

// we can not call any static function from
// any object like 
// 		let person1 = Person("Jhon", "Doe")
//		console.log(person1.test())
// this will show error

// instead we can do this
// 		console.log(Person.test())

class Person {
	constructor(fname, lname) {
		this.firstname = fname;
		this.lastname = lname;
	}

	greeting() {
		return `Hello ${this.firstname} ${this.lastname}!`;
	}

	static test() {
		console.log('I am static');
	}
}