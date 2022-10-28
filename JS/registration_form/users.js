import {Storage} from "./utils.js";

const tableBody =  document.querySelector('.table-body');

const storage = new Storage();
const users = storage.getItem('usersArr')
console.log('users', users);

const roleArr = ['user', 'admin', 'editor']
const statusArr = ['pending', 'approved', 'declined']


function Option(item) {
    return `<option value="${item}">${item}</option>`
}

function Select(obj, arr) {
    const optionArr = statusArr.map(item => {
        return Option(item)
    })
    console.log('optionArr', optionArr);
    let strOption = optionArr.join('')
    console.log('strOption', strOption)
    return ` <select name="select" id="obj">
        ${optionArr}
    </select>`
}

function TableRow(obj, arr) {
    return `<tr>
        <th>${obj.name}</th>
        <th>${obj.email}</th>
        <th>${obj.role}</th>
        <th>${Select(obj, arr)}</th>
    </tr>`
}

for(const usersItem of users) {
    console.log(TableRow(usersItem, statusArr));
    tableBody.innerHTML += TableRow(usersItem);
}


// tableBody.innerHTML = html;


// for(const usersItem of users) {
//     const tableItem = document.createElement('tr');
//     tableBody.append(tableItem);
//     let item = document.createElement('td');
//     item.innerHTML = usersItem.name;
//     tableItem.append(item); 
//     item = document.createElement('td');
//     item.innerHTML = usersItem.email;
//     tableItem.append(item); 
//     item = document.createElement('select');
//     item.innerHTML = usersItem.role;
//     tableItem.append(item); 
//     item = document.createElement('td');
//     item.innerHTML = usersItem.status;
//     tableItem.append(item); 
// }
