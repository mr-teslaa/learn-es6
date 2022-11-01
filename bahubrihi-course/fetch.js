// CALLBACK FUNCTION


// =========================
// SYNC WAY
// =========================
// let persons = [
//     {
//         firstName: "Jhone",
//         lastName: "Doe"
//     },
//     {
//         firstName: "Nikola",
//         lastName: "Tesla"
//     }
// ]

// const createPerson = (person) => {
//     setTimeout(function () {
//         persons.push(person)
//     }, 5000);
// }

// const getPerson = () => {
//     setTimeout(function () {
//         let output = '';
   
//         persons.forEach(function (person) {
//             output += `<li>${person.firstName} ${person.lastName}</li>`
//         });
        
//         document.querySelector('#output').innerHTML = output;
   
//     }, 1000)
// }


// // as we created an array with object,
// // we need to pass object(kwargs) rather than arguments(args)
// createPerson({ firstName: "Hossain", lastName: "Foysal" })

// getPerson()



// =========================
// ASYNC WAY
// =========================
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

const createPerson = (person, callback) => {
    setTimeout(function () {
        persons.push(person)
        callback()
    }, 5000);
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
createPerson({ firstName: "Hossain", lastName: "Foysal" }, getPerson)