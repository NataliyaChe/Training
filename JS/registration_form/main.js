let title = document.querySelector('.main-title');
const task = document.querySelector('.task');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

const matchUser = JSON.parse(localStorage.getItem('matchUser')) ?? []
console.log('matchUser', matchUser, matchUser.login);

title.innerHTML = `Hello ${matchUser.login}!`

task.addEventListener('keypress', event => {
    if(event.code === 'Enter') {
        console.log('click', task.value);
        let item = document.createElement('li');
        item.innerHTML = task.value;
        list.append(item);
        task.value = '';
        
        const taskData = new FormData(event.target);
        const taskItem = Object.fromEntries(taskData.entries());
        const taskStorage = JSON.parse(localStorage.getItem('taskArr')) ?? []
        taskStorage.push(taskItem)
        localStorage.setItem('taskArr', JSON.stringify(taskStorage))
        console.log('taskArr', taskArr);
    }
});

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