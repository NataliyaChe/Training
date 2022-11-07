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
            liItem.className = 'post-item';
            liItem.innerHTML = `<p class="message">${userPost[i].message}</p> <textarea class="edit-form textarea">${userPost[i].message}</textarea> 
            <p>${userPost[i].date}</p>`;
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
        liItem.className = 'post-item';
        liItem.innerHTML = `<p class="message">${postInp.value}</p> 
        <p>${postDate}</p>`;
        list.append(liItem);
        postInp.value = '';
    }
});

const postItems = document.querySelectorAll('.post-item')
const postMessages = document.querySelectorAll('.message')

postMessages.forEach(function(message) {
    message.addEventListener('click', liChange)  
})

function liChange(event) {
    const liParent = event.target.parentNode
    event.target.style.display = 'none'; 
    const editItem = document.createElement('textarea');
    editItem.className = 'editForm';
    editItem.innerHTML = `${event.target.innerHTML}`;
    liParent.prepend(editItem);
    editItem.focus();
    editItem.selectionStart = editItem.value.length;
    editItem.addEventListener('focusout', liReturn)
}

function liReturn(event) {
    const liParent = event.target.parentNode
    event.target.style.display = 'none'; 
    const liItem = document.createElement('li');
    liItem.className = 'post-item';
    liItem.innerHTML = `${event.target.value}`;
    liParent.prepend(liItem);
    liItem.addEventListener('click', liChange)
}

// function setStyles(showElement, hideElement) {
//     showElement.style.display = 'block';
//     hideElement.style.display = 'none'; 
// }
