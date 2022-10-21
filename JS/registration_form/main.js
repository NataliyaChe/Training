let title = document.querySelector('.main-title');
const task = document.querySelector('.task');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

const matchUser = JSON.parse(localStorage.getItem('matchUser'))
console.log('matchUser', matchUser, matchUser.login);
const users = JSON.parse(localStorage.getItem('usersArr'))
console.log('users', users);

title.innerHTML = `Hello ${matchUser.login}!`

task.addEventListener('keypress', event => {
    if(event.code === 'Enter') {
        for(let i = 0; i < users.length; i++) {
            console.log('users.task for', users[i].task);
            if(users[i].login === matchUser.login) {
                console.log('users.task if', users[i].task);
                users[i].task.push(task.value)
                localStorage.setItem('usersArr', JSON.stringify(users))
            }
        }
        let item = document.createElement('li');
        item.innerHTML = task.value;
        list.append(item);
        task.value = '';
        console.log('users push', users);
    }
});


// document.onkeydown = () => {
//     if(e.keyCode === 13) {
//         searchForm.submit();
//     }
// }