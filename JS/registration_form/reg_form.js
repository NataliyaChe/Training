const form = document.querySelector('.form');
const errorName = document.querySelector('.error-name');
const errorEmail = document.querySelector('.error-email');
const errorPassword = document.querySelector('.error-password');
const email = document.querySelector('.email');
const login = document.querySelector('.login');
const password = document.querySelector('.password');
const password_rpt = document.querySelector('.password_rpt');
const login_lbl = document.querySelector('.login_lbl');
const email_lbl = document.querySelector('.email_lbl');
const password_lbl = document.querySelector('.password_lbl');

// const data = new FormData(form);
// const arr = Array.from(data);
// const user = {};
// console.log('test', user);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(nameValidate(login)) {
        errorName.style.display = 'block';
        login_lbl.style.display = 'none';
    } else {
        errorName.style.display = 'none';
        login_lbl.style.display = 'block';
    };

    if(emailValidate(email)) {
        errorEmail.style.display = 'block';
        email_lbl.style.display = 'none';
    } else {
        errorEmail.style.display = 'none';
        email_lbl.style.display = 'block';
    };

    if(password.value !== password_rpt.value) {
        errorPassword.style.display = 'block';
        password_lbl.style.display = 'none';
    } else {
        errorPassword.style.display = 'none';
        password_lbl.style.display = 'block';
    };
    const data = new FormData(form);
    // const arr = Array.from(data);
    console.log('array1', data);
    const dataObj = Object.fromEntries(data.entries());
    console.log('dataObj', dataObj);
    // user.storageLogin = login.value;
    // user.storageEmail = email.value;
    // user.storagePassword = password.value;
    // localStorage.setItem('person', JSON.stringify(user))
});

function emailValidate(email) {
  return !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value);
};

function nameValidate(name) {
  return !/^[a-zA-Z]+$/.test(name.value);
};

console.log('array2', Array.from(data));

// const storageUser = JSON.parse(localStorage.getItem('person'))
//     console.log('starage', storageUser);

// let storageLogin = login
//     user[storageLogin] = login.value


// function checkPassword() {
//     if (password.value !== password_rpt.value) {
//         return false
//     }
// };
