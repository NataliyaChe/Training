import {Storage, findUserByEmail, validateEmail, validateName} from "./utils.js";

const form = document.querySelector('.form');
const errorName = document.querySelector('.error-name');
const errorEmail = document.querySelector('.error-email');
const wrongEmail = document.querySelector('.wrong-email');
const errorPassword = document.querySelector('.error-password');
const name_lbl = document.querySelector('.name_lbl');
const email_lbl = document.querySelector('.email_lbl');
const password_lbl = document.querySelector('.password_lbl');
let isError = false;

const storage = new Storage();
const users = storage.getItem('usersArr') ?? [];

const superAdmin = {name: 'Super-admin', email: 'super-admin@gmail.com', password: '123456', task: [], role: 'super-admin', status: 'approved'};

if (!findUserByEmail(users, superAdmin.email)) {
    users.push(superAdmin);
    storage.setItem('usersArr', users);
}; 

form.addEventListener('submit', (event) => {
    console.log('submit');
    event.preventDefault();

    const data = new FormData(event.target);
    const dataObj = Object.fromEntries(data.entries());
    console.log('formdata', dataObj, data);
    if(validateName(dataObj.name)) {
        setStyles(errorName, name_lbl)
        isError = true;
    } else {
        setStyles(name_lbl, errorName)
    };
    console.log('nameval', isError);
    if(validateEmail(dataObj.email)) {
        setStyles(errorEmail, email_lbl)
        isError = true;
    } else {
        setStyles(email_lbl, errorEmail)
    };
    console.log('emailval', isError);
    if(dataObj.password !== dataObj.password_rpt) {
        errorPassword.style.display = 'block';
        password_lbl.style.display = 'none';
        isError = true;
    } else {
        errorPassword.style.display = 'none';
        password_lbl.style.display = 'block';
    };
    console.log('passval', isError);
    const storage = new Storage();
    const users = storage.getItem('usersArr') ?? [];
    console.log('getusers', users);
    if (findUserByEmail(users, dataObj.email)) {
        wrongEmail.style.display = 'block';
        email_lbl.style.display = 'none'; 
        isError = true;
    } else {
        wrongEmail.style.display = 'none';
        email_lbl.style.display = 'block';
    }; 
    console.log('dubl', isError);
    if(!isError) {
        delete dataObj.password_rpt;
        dataObj.task = [];
        dataObj.role = 'user';
        dataObj.status = 'pending';
        users.push(dataObj);
        storage.setItem('usersArr', users);
        window.location.href = './login_form.html';
    }
});

function setStyles(showElement, hideElement) {
    showElement.style.display = 'block';
    hideElement.style.display = 'none'; 
}

// localStorage.clear()




