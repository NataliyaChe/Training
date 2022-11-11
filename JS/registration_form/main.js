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

if(!matchUser) {
    window.location.href = './reg_form.html';
}

title.innerHTML = `Hello ${matchUser.name}!`;
  
const user = users.find(item => item.email === matchUser.email);

user.posts.forEach(function({id, message, date, editDate}) {
    createLi({id, message, date, editDate})
})

postInp.addEventListener('keypress', event => {
    if(event.code === 'Enter') {
        const newPost = {id: uuidv4(), message: postInp.value, date: new Date(), editDate: null}
        user.posts.push(newPost);
        // localStorage.setItem('usersArr', JSON.stringify(users));
        storage.setItem('usersArr', users);
               
        createLi(newPost)
        
        postInp.value = '';
    }
});

function liChange(event) {
    const liParent = event.target.parentNode;
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
    const editedPost = user.posts.find(item => item.id === liParent.dataset.id)
    const pItem = document.createElement('p');
    const editDate = liParent.querySelector('.edit');
    console.log('edit', editDate);
    pItem.className = 'message';
    pItem.innerHTML = `${event.target.value}`;
    liParent.replaceChild(pItem, event.target);
    pItem.addEventListener('click', liChange);
    editedPost.message = pItem.innerHTML;
    editedPost.editDate = new Date();
    editDate.innerHTML = `${editedPost.editDate}`
    storage.setItem('usersArr', users);
}

function createLi(obj) {
    const edit = obj.editDate ?? '';
    const liItem = document.createElement('li');
    liItem.className = 'post-item'; 
    liItem.setAttribute("data-id", `${obj.id}`);
    liItem.innerHTML = `<p class="message">${obj.message}</p> <p>${obj.date}</p> <p class="edit">edit: ${edit}</p>`; 
    const message = liItem.querySelector('.message');
    message.addEventListener('click', liChange);
    list.append(liItem);
}

// localStorage.clear()
