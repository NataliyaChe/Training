import {Storage} from "./utils.js";

const title = document.querySelector('.main-title');
const taskInp = document.querySelector('.task');
const list = document.querySelector('.list');

// const matchUser = JSON.parse(localStorage.getItem('matchUser'));
// const users = JSON.parse(localStorage.getItem('usersArr'));
const storage = new Storage();
const matchUser = storage.getItem('matchUser')
const users = storage.getItem('usersArr')

if(matchUser === null) {
    window.location.href = './reg_form.html';
}

title.innerHTML = `Hello ${matchUser.name}!`;
for(const userItem of users) {
    if(userItem.name === matchUser.name) {
        const userTask = usersItem.task;
        for(let i = 0; i < userTask.length; i++) {
            const liItem = document.createElement('li');
            liItem.innerHTML = userTask[i];
            list.append(liItem);
        }
    }
}

taskInp.addEventListener('keypress', event => {
    if(event.code === 'Enter') {
        for(const userItem of users) {
            if(userItem.name === matchUser.name) {
                userItem.task.push(taskInp.value);
                // localStorage.setItem('usersArr', JSON.stringify(users));
                storage.setItem('usersArr', users);
            }
        }
        const liItem = document.createElement('li');
        liItem.innerHTML = taskInp.value;
        list.append(liItem);
        taskInp.value = '';
    }
});