// FETCH API
// it bascially use js promises

let getdata = document.querySelector('#getdata-fetch');
let showdata = document.querySelector('#showdata');

getdata.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function (res) {
            // showdata.innerHTML = res.json()
            return res.json()
        }).then(function (data) {
            showdata.innerHTML = data
        }).catch(function (error) {
            showdata.innerHTML = error;
        })

})