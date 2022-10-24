const title = document.querySelector('.main-title');
const taskInp = document.querySelector('.task');
const list = document.querySelector('.list');

const matchUser = JSON.parse(localStorage.getItem('matchUser'));
const users = JSON.parse(localStorage.getItem('usersArr'));

if(matchUser === null) {
    window.location.href = './reg_form.html';
}

title.innerHTML = `Hello ${matchUser.name}!`;
for(const usersItem of users) {
    if(usersItem.name === matchUser.name) {
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
        for(const usersItem of users) {
            if(usersItem.name === matchUser.name) {
                usersItem.task.push(taskInp.value);
                localStorage.setItem('usersArr', JSON.stringify(users));
            }
        }
        const liItem = document.createElement('li');
        liItem.innerHTML = taskInp.value;
        list.append(liItem);
        taskInp.value = '';
    }
});