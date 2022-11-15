import {Storage, UsersMapper} from "./utils.js";

const postsWrap = document.querySelector('.posts-wrap');

const storage = new Storage();
const users = storage.getItem('usersArr');

const postsArr = UsersMapper(users)

postsArr.forEach(function({name, id, message, date, editDate}) {
    createCard({name, id, message, date, editDate})
})

function createCard({id, name, message, date, editDate}) {
    const lastEditDate = editDate ?? '';
    const card = document.createElement('div');
    card.className = 'card'; 
    card.setAttribute("data-id", id);
    card.innerHTML = `<p class="name">${name}</p>
        <p class="message">${message}</p> 
        <p class="date">${date}</p> 
        <p class="edit">edit: ${lastEditDate}</p>
        <button type="submit" class="button btn deleteBtn">Delete</button>`; 
    const deleteButton = card.querySelector('.deleteBtn');
    deleteButton.addEventListener('click', deletePost);
    const messageElement = card.querySelector('.message');
    messageElement.addEventListener('click', editPost);
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
    const textarea = document.createElement('textarea');
    textarea.className = 'editForm';
    textarea.innerHTML = `${event.target.innerHTML}`;
    divParent.replaceChild(textarea, event.target);
    textarea.focus();
    textarea.selectionStart = textarea.value.length;
    textarea.addEventListener('focusout', postReturn)   
}

function postReturn(event) {
    const divParent = event.target.parentNode;
    const editedPost = postsArr.find(item => item.id === divParent.dataset.id)
    const paragraph = document.createElement('p');
    const editDate = divParent.querySelector('.edit');
    paragraph.className = 'message';
    paragraph.innerHTML = `${event.target.value}`;
    divParent.replaceChild( paragraph, event.target);
    paragraph.addEventListener('click', editPost);
    editedPost.message =  paragraph.innerHTML;
    editedPost.editDate = new Date();
    editDate.innerHTML = `${editedPost.editDate}`
    users.forEach(function(user) {
        user.posts.forEach(function(post) {
            if(post.id === divParent.dataset.id) {
                post.message = event.target.value;
                post.editDate = editedPost.editDate;
            }
        })   
    })
    storage.setItem('usersArr', users);
}
console.log('postsArr', postsArr);

const searchInput = document.querySelector('.search-inp');
// const usersName = document.querySelectorAll('.name');

searchInput.addEventListener('keyup', function() {
    console.log('callback', event);
    const usersName = document.querySelectorAll('.name');
    let searchValue = searchInput.value.toLowerCase();
    usersName.forEach(function(user) {
        if(user.innerHTML.toLowerCase().indexOf(searchValue) > -1) {
            user.parentNode.style.display = ''
        } else {
            user.parentNode.style.display = 'none'
        }
    });
});

const sortButton = document.querySelector('.sort-btn');
const postsDate = document.querySelectorAll('.date');

sortButton.addEventListener('click', function() {
    const postsSortedByDate = postsArr.sort((a, b) => new Date(b.date) - new Date(a.date))
    postsWrap.innerHTML = ''
    postsSortedByDate.forEach(postCard => createCard(postCard))
});

// const arrByDate = postsArr.sort(function(a, b){
//     return new Date(b.date) - new Date(a.date);
// });
// console.log('arrByDate', arrByDate);
// postsWrap.innerHTML = ''
// arrByDate.forEach(function({name, id, message, date, editDate}) {
// // postsWrap.innerHTML = ''
// createCard({name, id, message, date, editDate})
// });

// const arrByDate = []
// function sortByDate() {
//     postsArr.sort(function(a, b){
//         console.log('sort', new Date(b.date) - new Date(a.date));
//         // const arrByDate = new Date(b.date) - new Date(a.date)
//         return new Date(b.date) - new Date(a.date);
//     });
// }
// sortByDate()
// console.log('arrByDate', sortByDate());



// localStorage.clear()