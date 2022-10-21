let title = document.querySelector('.main-title');
const task = document.querySelector('.task');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

const matchUser = JSON.parse(localStorage.getItem('matchUser'))
console.log('matchUser', matchUser, matchUser.login);
const users = JSON.parse(localStorage.getItem('usersArr'))
console.log('users', users);

title.innerHTML = `Hello ${matchUser.login}!`

// const findDuplicateLogin = (arr, login) => arr.find(item => login === item.login)

// let thisUser = findDuplicateLogin(users, matchUser.login) 
// console.log('obj', thisUser);

// const taskList = [];


// const taskStorage = JSON.parse(localStorage.getItem('taskArr')) ?? []

task.addEventListener('keypress', event => {
    if(event.code === 'Enter') {
        for(let i = 0; i < users.length; i++) {
            console.log('users.task for', users.task);
            if(users.login === matchUser.login) {
                console.log('users.task if', users.task);
                users.task.push(task.value)
            }
        }
        localStorage.setItem('users', JSON.stringify(users))
        let item = document.createElement('li');
        item.innerHTML = task.value;
        list.append(item);
        task.value = '';
        console.log('users push', users);
    }
});

// function makeListFromStorage(arr) {
    // for(let i = 0; i < arr.length; i++) {
    //     let storageItem = document.createElement('li');
    //     storageItem.innerHTML = arr[i];
    //     list.append(storageItem);
    // }
// };
// makeListFromStorage(matchUser.task)

// task.addEventListener('keypress', event => {
//     if(event.code === 'Enter') {
//         taskList.push(task.value)
//         thisUser.task = taskList
        // localStorage.setItem('thisUser', JSON.stringify(thisUser))
        // console.log('thisUser', thisUser);
        // let item = document.createElement('li');
        // item.innerHTML = task.value;
        // list.append(item);
        // task.value = '';
//     }
// });

// const findDuplicateEmail = (arr, login) => arr.find(item => login === item.login)

// btn.addEventListener('click', (event) => {
//     console.log('click', task.value);
//     let item = document.createElement('li');
//     item.innerHTML = task.value;
//     list.append(item);
//     task.value = '';
// })

// document.onkeydown = () => {
//     if(e.keyCode === 13) {
//         searchForm.submit();
//     }
// }