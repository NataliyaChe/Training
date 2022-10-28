import {Storage, Option, Select, TableRow} from "./utils.js";

const tableBody =  document.querySelector('.table-body');

const storage = new Storage();
const users = storage.getItem('usersArr')

for(const usersItem of users) {
    tableBody.innerHTML += TableRow(usersItem);
}
