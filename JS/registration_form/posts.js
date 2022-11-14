import {Storage, UsersMapper} from "./utils.js";

const postsWrap = document.querySelector('.posts-wrap');

const storage = new Storage();
const users = storage.getItem('usersArr');

const postsArr = UsersMapper(users)

postsArr.forEach(function({name, id, message, date, editDate}) {
    createCard({name, id, message, date, editDate})
})

function createCard(obj) {
    const edit = obj.editDate ?? '';
    const card = document.createElement('div');
    card.className = 'card'; 
    card.setAttribute("data-id", `${obj.id}`);
    card.innerHTML = `<p>${obj.name}</p>
        <p class="message">${obj.message}</p> 
        <p>${obj.date}</p> 
        <p class="edit">edit: ${edit}</p>
        <button type="submit" class="button btn deleteBtn">Delete</button>`; 
    const deleteButtons = card.querySelector('.deleteBtn');
    deleteButtons.addEventListener('click', deletePost);
    const message = card.querySelector('.message');
    message.addEventListener('click', editPost);
    postsWrap.append(card);
}

function deletePost(event) {
    users.forEach(function(user) {
        for(let i = 0; i < user.posts.length; i++) {
            if(user.posts[i].id == event.target.parentNode.dataset.id) {
                user.posts.splice(i, 1);
                const parent = event.target.parentNode;
                parent.style.display = 'none'; 
            }
        }   
    })
    storage.setItem('usersArr', users);
}

function editPost(event) {
    const divParent = event.target.parentNode;
    const editItem = document.createElement('textarea');
    editItem.className = 'editForm';
    editItem.innerHTML = `${event.target.innerHTML}`;
    divParent.replaceChild(editItem, event.target);
    editItem.focus();
    editItem.selectionStart = editItem.value.length;
    editItem.addEventListener('focusout', postReturn)   
}

function postReturn(event) {
    const divParent = event.target.parentNode;
    const editedPost = postsArr.find(item => item.id === divParent.dataset.id)
    const pItem = document.createElement('p');
    const editDate = divParent.querySelector('.edit');
    pItem.className = 'message';
    pItem.innerHTML = `${event.target.value}`;
    divParent.replaceChild(pItem, event.target);
    pItem.addEventListener('click', editPost);
    editedPost.message = pItem.innerHTML;
    editedPost.editDate = new Date();
    editDate.innerHTML = `${editedPost.editDate}`
    users.forEach(function(user) {
        for(let i = 0; i < user.posts.length; i++) {
            if(user.posts[i].id === divParent.dataset.id) {
                user.posts[i].message = event.target.value;
                user.posts[i].editDate = editedPost.editDate;
            }
        }   
    })
    storage.setItem('usersArr', users);
}
console.log('UsersMapper()', UsersMapper(users));

// localStorage.clear()