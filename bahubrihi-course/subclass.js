// sub class
// inheritance

class Person {
	constructor(fname, lname) {
		this.firstname = fname;
		this.lastname = lname;
	}

	greeting() {
		return `Hello ${this.firstname} ${this.lastname}!`;
	}
}

class Customer extends Person {
	constructor(fname, lname, phone, membership) {
		super(fname, lname);

		this.phone = phone;
		this.membership = membership;
	}
}

let person1 = new Person("Jhone", "Doe");
let customer1 = new Customer("Nikola", "Tesla", "017524632", "Not a member");

console.log(person1);
console.log(person1.greeting());

console.log(customer1);
console.log(customer1.greeting());
