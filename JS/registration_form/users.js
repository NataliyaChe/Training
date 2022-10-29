import {Storage, TableRow} from "./utils.js";

const tableBody =  document.querySelector('.table-body');

const storage = new Storage();
const users = storage.getItem('usersArr')


for(const userItem of users) {
    tableBody.innerHTML += TableRow(userItem);
}

const selectArr = document.querySelectorAll('.select')
console.log('select', tableBody);