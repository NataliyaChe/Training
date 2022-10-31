import {Storage, TableRow} from "./utils.js";

const tableBody =  document.querySelector('.table-body');

const storage = new Storage();
const users = storage.getItem('usersArr')


for(const userItem of users) {
    tableBody.innerHTML += TableRow(userItem);
}

const selects = document.querySelectorAll('.select')
console.log('select', selects);

selects.forEach(function(select) {
    select.addEventListener('change', function() {
        console.log('change', select.value);
        
        users.push(select.value);
        storage.setItem('usersArr', users);
        console.log('users', users);
    })
})
