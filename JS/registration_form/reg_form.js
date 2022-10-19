const form = document.querySelector('.form');
const errorName = document.querySelector('.error-name');
const errorEmail = document.querySelector('.error-email');
const wrongEmail = document.querySelector('.wrong-email');
const errorPassword = document.querySelector('.error-password');
const login_lbl = document.querySelector('.login_lbl');
const email_lbl = document.querySelector('.email_lbl');
const password_lbl = document.querySelector('.password_lbl');

// const dataArr = []
// localStorage.setItem('personArr', JSON.stringify(dataArr))

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isError = false

    const data = new FormData(event.target);
    const dataObj = Object.fromEntries(data.entries());
 
    if(nameValidate(dataObj.login)) {
        errorName.style.display = 'block';
        login_lbl.style.display = 'none';
        isError = true
    } else {
        errorName.style.display = 'none';
        login_lbl.style.display = 'block';
        isError = false
    };

    if(emailValidate(dataObj.email)) {
        errorEmail.style.display = 'block';
        email_lbl.style.display = 'none';
        isError = true
    } else {
        errorEmail.style.display = 'none';
        email_lbl.style.display = 'block';
        isError = false
    };

    if(dataObj.password !== dataObj.password_rpt) {
        errorPassword.style.display = 'block';
        password_lbl.style.display = 'none';
        isError = true
    } else {
        errorPassword.style.display = 'none';
        password_lbl.style.display = 'block';
        isError = false
    };

    const users = JSON.parse(localStorage.getItem('usersArr')) ?? []
    console.log('users', users);
    
    console.log('duplicate', findDuplicateEmail(users, dataObj.email));
    if (findDuplicateEmail(users, dataObj.email)) {
        wrongEmail.style.display = 'block';
        email_lbl.style.display = 'none'; 
        isError = true
    } else {
        wrongEmail.style.display = 'none';
        email_lbl.style.display = 'block';
        isError = false
    }; 
   
    if(isError == false) {
        users.push(dataObj)
        localStorage.setItem('usersArr', JSON.stringify(users))
    }
    // users.push(dataObj)
    // localStorage.setItem('usersArr', JSON.stringify(users))
    }
);

function emailValidate(login) {
  return !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(login);
};

function nameValidate(email) {
  return !/^[a-zA-Z]+$/.test(email);
};

const findDuplicateEmail = (arr, email) => arr.find(item => email === item.email)

// function findEmail(arr, email) {
//      return arr.find(item => email === item.email)
// }

// findEmail = () => console.log('Hello');
// findEmail()
// function findEmail(arr, email) {
//     arr.forEach(function(item){ 
//         console.log('item', item.email);  
//         email === item.email
//         })
//     return !email === item.email
// }

// localStorage.clear()

// const storageUser = JSON.parse(localStorage.getItem('person'))
//     console.log('starage', storageUser);

// let storageLogin = login
//     user[storageLogin] = login.value


// function checkPassword() {
//     if (password.value !== password_rpt.value) {
//         return false
//     }
// };
