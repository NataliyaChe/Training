import {Storage, findUserByEmail, validateEmail} from "./utils.js";

const form = document.querySelector('.form');
const errorEmail = document.querySelector('.error-email');
const wrongEmail = document.querySelector('.wrong-email');
const wrongPass = document.querySelector('.wrong-pass');
const email_lbl = document.querySelector('.email_lbl');
const password_lbl = document.querySelector('.password_lbl');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let isError = false;

    const data = new FormData(event.target);
    const dataObj = Object.fromEntries(data.entries());

    if(validateEmail(dataObj.email)) {
      errorEmail.style.display = 'block';
      email_lbl.style.display = 'none';
      isError = true;
  } else {
      errorEmail.style.display = 'none';
      email_lbl.style.display = 'block';
  };

    // const users = JSON.parse(localStorage.getItem('usersArr')) ?? [];
    const storage = new Storage();
    const users = storage.getItem('usersArr') ?? [];
    
    const matchUser = findUserByEmail(users, dataObj.email);
    

    if (matchUser) {
        wrongEmail.style.display = 'none';
        email_lbl.style.display = 'block';
    } else {
        wrongEmail.style.display = 'block';
        email_lbl.style.display = 'none'; 
        isError = true;
    };

    if (matchUser?.password === dataObj.password) {
        wrongPass.style.display = 'none';
        password_lbl.style.display = 'block';
    } else if (!matchUser) {
        wrongPass.style.display = 'none';
        password_lbl.style.display = 'block';
        isError = true;
    }  else {
        wrongPass.style.display = 'block';
        password_lbl.style.display = 'none'; 
        isError = true;
    };

    if(!isError) {
        window.location.href = './main.html';
        // localStorage.setItem('matchUser', JSON.stringify(matchUser));
        storage.setItem('matchUser', matchUser);
    }
});

