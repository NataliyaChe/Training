import {Storage} from "./utils.js";

const title = document.querySelector('.main-title');
const taskInp = document.querySelector('.task');
const list = document.querySelector('.list');

const taskDate = new Date();

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
        const userTask = userItem.task;
        for(let i = 0; i < userTask.length; i++) {
            const liItem = document.createElement('li');
            liItem.innerHTML = `<p>${userTask[i].task}</p> <p>${userTask[i].date}</p>`;
            list.append(liItem);
        }
        
    }
    
}

taskInp.addEventListener('keypress', event => {
    if(event.code === 'Enter') {
        for(const userItem of users) {
            if(userItem.name === matchUser.name) {
                userItem.task.push({task: taskInp.value, date: taskDate});
                // localStorage.setItem('usersArr', JSON.stringify(users));
                storage.setItem('usersArr', users);
            }
        }
        const liItem = document.createElement('li');
        liItem.innerHTML = `<p>${taskInp.value}</p> <p>${taskDate}</p>`;
        list.append(liItem);
        taskInp.value = '';
    }
});