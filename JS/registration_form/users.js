import {Storage, TableRow} from "./utils.js";

const tableBody =  document.querySelector('.table-body');

const storage = new Storage();
const users = storage.getItem('usersArr')


for(const userItem of users) {
    tableBody.innerHTML += TableRow(userItem);
}

const selects = document.querySelectorAll('.select')

selects.forEach(function(select) {
    select.addEventListener('change', function() { 
        const user = users.find(item => item.email === select.dataset.email)
        user[select.dataset.arg] = select.value;
        storage.setItem('usersArr', users);
    })
})
