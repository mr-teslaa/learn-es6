// AJAX = Asynchronus JavaScript and XML
// Get data without loading the page

let button = document.querySelector('#getdata'); 
let outputdata = document.querySelector('#outputdata'); 

button.addEventListener('click', () => {
	console.log("button clicked");
	// create XHR object(xml http request)
	let xhr = new XMLHttpRequest();

	// OPEN
	xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true)

	xhr.onreadystatechange = function() {
		if(this.status === 200 && this.readyState === 4) {
			let data = JSON.parse(this.responseText);
			
			const creatednode = (ele) => {
				let p = document.createElement('p');
				p.innerHTML = ele;
				// console.log(p)

				return p;
			}

			data.forEach((item) => {
				let name = creatednode(`Name: ${item.name}`);
				let username = creatednode(`Username: ${item.username}`);
				let email = creatednode(`Email: ${item.email}`);
				fulladdr = `${item.address.suite}, ${item.address.street}, ${item.address.city}` 
				let address = creatednode(`Address: ${fulladdr}`);
				let phone = creatednode(`Phone: ${item.phone}`);
				let company = creatednode(`Company: ${item.company.name}`);

				let div = document.createElement('div');
				div.setAttribute('class', 'details mb-3')
				console.log(div)
				div.appendChild(name)
				div.appendChild(username)
				div.appendChild(email)
				div.appendChild(address)
				div.appendChild(phone)
				div.appendChild(company)
				
				outputdata.appendChild(div)
			});
		}
	}

	xhr.send();
});