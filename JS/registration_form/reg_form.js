import {Storage} from "./utils.js";

const form = document.querySelector('.form');
const errorName = document.querySelector('.error-name');
const errorEmail = document.querySelector('.error-email');
const wrongEmail = document.querySelector('.wrong-email');
const errorPassword = document.querySelector('.error-password');
const name_lbl = document.querySelector('.name_lbl');
const email_lbl = document.querySelector('.email_lbl');
const password_lbl = document.querySelector('.password_lbl');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isError = false;

    const data = new FormData(event.target);
    const dataObj = Object.fromEntries(data.entries());
 
    if(validateName(dataObj.name)) {
        errorName.style.display = 'block';
        name_lbl.style.display = 'none';
        isError = true;
    } else {
        errorName.style.display = 'none';
        name_lbl.style.display = 'block';
    };

    if(validateEmail(dataObj.email)) {
        errorEmail.style.display = 'block';
        email_lbl.style.display = 'none';
        isError = true;
    } else {
        errorEmail.style.display = 'none';
        email_lbl.style.display = 'block';
    };

    if(dataObj.password !== dataObj.password_rpt) {
        errorPassword.style.display = 'block';
        password_lbl.style.display = 'none';
        isError = true;
    } else {
        errorPassword.style.display = 'none';
        password_lbl.style.display = 'block';
    };

    // const users = JSON.parse(localStorage.getItem('usersArr')) ?? [];
    const storage = new Storage();
    const users = storage.getItem('usersArr') ?? [];

    if (findDuplicateEmail(users, dataObj.email)) {
        wrongEmail.style.display = 'block';
        email_lbl.style.display = 'none'; 
        isError = true;
    } else {
        wrongEmail.style.display = 'none';
        email_lbl.style.display = 'block';
    }; 
   
    if(!isError) {
        delete dataObj.password_rpt;
        dataObj.task = [];
        users.push(dataObj);
        // localStorage.setItem('usersArr', JSON.stringify(users));
        storage.setItem('usersArr', users);
        window.location.href = './login_form.html';
    }
});

function validateEmail(email) {
  return !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};

function validateName(name) {
  return !/^[a-zA-Z]+$/.test(name);
};

const findDuplicateEmail = (arr, email) => arr.find(item => email === item.email);

// localStorage.clear()




