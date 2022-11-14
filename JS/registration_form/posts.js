import {Storage, UsersMapper} from "./utils.js";

const postsWrap = document.querySelector('.posts-wrap');

const storage = new Storage();
const users = storage.getItem('usersArr');

const postsArr = UsersMapper(users)

// for(const postItem of postsArr) {
//     postsWrap.innerHTML += createCard(postItem);
// }

postsArr.forEach(function({name, id, message, date, editDate}) {
    createCard({name, id, message, date, editDate})
})

function createCard(obj) {
    // const edit = obj.editDate ?? '';
    const card = document.createElement('div');
    card.className = 'card'; 
    // card.setAttribute("data-id", `${obj.id}`);
    card.innerHTML = `<p>${obj.name}</p>
        <p class="message">${obj.message}</p> 
        <p>${obj.date}</p> 
        <p class="edit">edit: ${obj.editDate}</p>
        <button type="submit" class="button btn editBtn" data-id="${obj.id}">Edit</button>
        <button type="submit" class="button btn deleteBtn" data-id="${obj.id}">Delete</button>`; 
        const deleteButtons = card.querySelector('.deleteBtn');
        const editButtons = card.querySelector('.editBtn');
        deleteButtons.addEventListener('click', deletePost);
        editButtons.addEventListener('click', editPost);
        postsWrap.append(card);
}

function deletePost(event) {
    console.log('deletePost', event.target);
    users.forEach(function(user) {
        for(let i = 0; i < user.posts.length; i++) {
            if(user.posts[i].id == event.target.dataset.id) {
                user.posts.splice(i, 1);
            }
        }   
    })
    storage.setItem('usersArr', users);
}

function editPost(event) {
    console.log('test');
    const editItem = document.createElement('textarea');
    editItem.className = 'editForm';
    
    editItem.addEventListener('focusout', postReturn) 
}

function postReturn(event) {

}

console.log('UsersMapper()', UsersMapper(users));

// editButtons.forEach(function(button) {
//     button.addEventListener('click', function() { 
//         console.log('click', button);
//         users.forEach(function(user) {
//             for(let i = 0; i < user.posts.length; i++) {
//                 if(user.posts[i].id == button.dataset.id) {
                    
//                 }
//             }   
//         })
//         storage.setItem('usersArr', users);
//     })
// })