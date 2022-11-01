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
        for(const userItem of users) {
            console.log('userItem', userItem);
            if(userItem.email === select.dataset.email && select.parentNode.dataset.key === "role") {
                userItem.role = select.value;
                storage.setItem('usersArr', users);
            } else if (userItem.email === select.dataset.email && select.parentNode.dataset.key === "status") {
                userItem.status = select.value;
                storage.setItem('usersArr', users);
            }
        }
    })
})
