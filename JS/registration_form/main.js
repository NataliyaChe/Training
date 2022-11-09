import {Storage} from "./utils.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const title = document.querySelector('.main-title');
const postInp = document.querySelector('.task');
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
  
const user = users.find(item => item.email === matchUser.email);

for(let i = 0; i < user.posts.length; i++) {
    const liItem = document.createElement('li');
    liItem.className = 'post-item';
    liItem.innerHTML = `<p data-id="${user.posts[i].id}" class="message">${user.posts[i].message}</p>  
    <p>${user.posts[i].date}</p>`;
    list.append(liItem);
}
    
postInp.addEventListener('keypress', event => {
    if(event.code === 'Enter') {
        const newPost = {id: uuidv4(), message: postInp.value, date: new Date()}
        user.posts.push(newPost);
        function checkDate() {
            
        }
        // localStorage.setItem('usersArr', JSON.stringify(users));
        storage.setItem('usersArr', users);
               
        const liItem = document.createElement('li');
        liItem.className = 'post-item';
        liItem.innerHTML = `<p data-id="${newPost.id}" class="message">${postInp.value}</p> <p>${newPost.date}</p> <p></p>`;
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
    const liParent = event.target.parentNode;
    liParent.setAttribute("id", `${event.target.dataset.id}`);
    const editItem = document.createElement('textarea');
    editItem.className = 'editForm';
    editItem.innerHTML = `${event.target.innerHTML}`;
    liParent.replaceChild(editItem, event.target);
    editItem.focus();
    editItem.selectionStart = editItem.value.length;
    editItem.addEventListener('focusout', liReturn)   
}

function liReturn(event) {
    const liParent = event.target.parentNode;
    const editedPost = user.posts.find(item => item.id === liParent.id)
    const pItem = document.createElement('p');
    pItem.className = 'message';
    pItem.innerHTML = `${event.target.value}`;
    liParent.replaceChild(pItem, event.target);
    pItem.addEventListener('click', liChange);
    editedPost.message = pItem.innerHTML;
    storage.setItem('usersArr', users);
    // liParent.editDate = postDate 
}

// function addElement(event, itemEl, tag, className, content) {
//     let itemEl
//     const liParent = event.target.parentNode
//     event.target.style.display = 'none'; 
//     itemEl = document.createElement('tag');
//     itemEl.className = 'className';
//     itemEl.innerHTML = `${event.target.content}`;
//     liParent.prepend(item);
// }

// function setStyles(showElement, hideElement) {
//     showElement.style.display = 'block';
//     hideElement.style.display = 'none'; 
// }

// localStorage.clear()