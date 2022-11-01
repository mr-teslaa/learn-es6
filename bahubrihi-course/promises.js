// PROMISES
// more like callback function difference is syntex like .then() and others

let persons = [
    {
        firstName: "Jhone",
        lastName: "Doe"
    },
    {
        firstName: "Nikola",
        lastName: "Tesla"
    }
]

const createPerson = (person) => {
    // PROMISE ALWAYS HAVE 2 PARAM, RESOLVE AND REJECT
    let prom = new Promise(function (resolve, reject) {
        persons.push(person)

        // WHAT IF WE GET AN ERROR? LET'S CREATE A FAKE ERROR AND SEE
        // WE ALSO NEED TO CALL .CATCH() FOR SHOWING THE ERROR AT BOTTOM
        let error = false;
        if (!error) {
            resolve()
        } else {
            reject("An error ocurreddddd !!!!!")
        }

    });

    return prom;
}

const getPerson = () => {
    setTimeout(function () {
        let output = '';
   
        persons.forEach(function (person) {
            output += `<li>${person.firstName} ${person.lastName}</li>`
        });
        
        document.querySelector('#output').innerHTML = output;
   
    }, 1000)
}


// as we created an array with object,
// we need to pass object(kwargs) rather than arguments(args)
createPerson({ firstName: "Hossain", lastName: "Foysal" })
    .then(getPerson)
    .catch(function (err) {
        document.querySelector('#output').innerHTML = err;
    })