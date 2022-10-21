let title = document.querySelector('.main-title');
const taskInp = document.querySelector('.task');
const list = document.querySelector('.list');

const matchUser = JSON.parse(localStorage.getItem('matchUser'));
const users = JSON.parse(localStorage.getItem('usersArr'));

title.innerHTML = `Hello ${matchUser.login}!`;

for(const usersItem of users) {
    if(usersItem.login === matchUser.login) {
        const userTask = usersItem.task;
        for(i = 0; i < userTask.length; i++) {
            let liItem = document.createElement('li');
            liItem.innerHTML = userTask[i];
            list.append(liItem);
        }
    }
}

taskInp.addEventListener('keypress', event => {
    if(event.code === 'Enter') {
        for(const usersItem of users) {
            if(usersItem.login === matchUser.login) {
                usersItem.task.push(taskInp.value);
                localStorage.setItem('usersArr', JSON.stringify(users));
            }
        }
        let liItem = document.createElement('li');
        liItem.innerHTML = taskInp.value;
        list.append(liItem);
        taskInp.value = '';
    }
});