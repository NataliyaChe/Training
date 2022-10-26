import {Storage, findUserByEmail, validateEmail, validateName} from "./utils.js";

const tableBody =  document.querySelector('.table-body');

const storage = new Storage();
const users = storage.getItem('usersArr')
console.log('users', users);

for(const usersItem of users) {
    const tableItem = document.createElement('tr');
    tableBody.append(tableItem);
    let item = document.createElement('td');
    item.innerHTML = usersItem.name;
    tableItem.append(item); 
    item = document.createElement('td');
    item.innerHTML = usersItem.email;
    tableItem.append(item); 
    item = document.createElement('td');
    item.innerHTML = usersItem.role;
    tableItem.append(item); 
    item = document.createElement('td');
    item.innerHTML = usersItem.status;
    tableItem.append(item); 
}

