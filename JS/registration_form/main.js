import {Storage} from "./utils.js";

const title = document.querySelector('.main-title');
const postInp = document.querySelector('.task');
const list = document.querySelector('.list');

const postDate = new Date();

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
        const userPost = userItem.posts;
        for(let i = 0; i < userPost.length; i++) {
            const liItem = document.createElement('li');
            liItem.innerHTML = `<p>${userPost[i].message}</p> <p>${userPost[i].date}</p>`;
            list.append(liItem);
        }
        
    }
    
}

postInp.addEventListener('keypress', event => {
    if(event.code === 'Enter') {
        for(const userItem of users) {
            if(userItem.name === matchUser.name) {
                userItem.posts.push({message: postInp.value, date: postDate});
                // localStorage.setItem('usersArr', JSON.stringify(users));
                storage.setItem('usersArr', users);
            }
        }
        const liItem = document.createElement('li');
        liItem.innerHTML = `<p>${postInp.value}</p> <p>${postDate}</p>`;
        list.append(liItem);
        postInp.value = '';
    }
});