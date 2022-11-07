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
const formsForEdit = document.querySelectorAll('.textarea')

postItems.forEach(function(post) {
    const postMessage = document.querySelector('.message')
    const formForEdit = document.querySelector('.textarea')
    post.addEventListener('click', function() {
        liSwitch()
    })
    function liSwitch() {
        post.innerHTML = `<textarea onblur='liReset()' value='${postMessage.innerHTML}' />`;
        document.getElementsByTagName('textarea')[0].focus();
    }
    function liReset() {
        post.innerHTML = `<li onclick='liSwitch()'> <p class="message">${formForEdit.value}</p> 
        <p>${postDate}</p> </li>`;
    }
})



// function setStyles(showElement, hideElement) {
//     showElement.style.display = 'block';
//     hideElement.style.display = 'none'; 
// }

// const postItems = document.querySelectorAll('.post-item')
// postItems.forEach(function(post) {
//     post.addEventListener('click', function() { 

//         // post.innerHTML = `<textarea>${userPost[i].message}</textarea>`;
//         console.log('focus', post, p.innerHTML);
//     })
// })
// postItem.addEventListener('click', event => {
//     console.log('liItem', liItem);
// })