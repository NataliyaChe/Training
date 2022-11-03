import {Storage} from "./utils.js";

const logout = document.querySelector('.logout-btn');

const storage = new Storage();
const matchUser = storage.getItem('matchUser')
const users = storage.getItem('usersArr')

logout.addEventListener('click', () => {
    localStorage.removeItem('matchUser')
    window.location.href = './login_form.html';
});
