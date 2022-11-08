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
        const userPosts = userItem.posts;
        for(let i = 0; i < userPosts.length; i++) {
            const liItem = document.createElement('li');
            liItem.className = 'post-item';
            liItem.innerHTML = `<p class="message">${userPosts[i].message}</p>  
            <p>${userPosts[i].date}</p>`;
            list.append(liItem);
        }
        
    }
    
}

postInp.addEventListener('keypress', event => {
    if(event.code === 'Enter') {
        for(const userItem of users) {
            if(userItem.name === matchUser.name) {
                userItem.posts.push({message: postInp.value, date: postDate, editDate: checkDate});
                // localStorage.setItem('usersArr', JSON.stringify(users));
                storage.setItem('usersArr', users);
            }
        }
        const liItem = document.createElement('li');
        liItem.className = 'post-item';
        liItem.innerHTML = `<p class="message">${postInp.value}</p> 
        <p>${postDate}</p> <p></p>`;
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
    const editItem = document.createElement('textarea');
    editItem.className = 'editForm';
    editItem.innerHTML = `${event.target.innerHTML}`;
    liParent.replaceChild(editItem, event.target);
    editItem.focus();
    editItem.selectionStart = editItem.value.length;
    editItem.addEventListener('focusout', liReturn)
}

function liReturn(event) {
    const liParent = event.target.parentNode
    const pItem = document.createElement('p');
    pItem.className = 'message';
    pItem.innerHTML = `${event.target.value}`;
    liParent.replaceChild(pItem, event.target);
    pItem.addEventListener('click', liChange);
    liParent.editDate = postDate 
    console.log('usersArr', users, liParent); 
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
