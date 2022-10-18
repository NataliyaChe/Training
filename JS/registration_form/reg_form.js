const form = document.querySelector('.form');
const errorName = document.querySelector('.error-name');
const errorEmail = document.querySelector('.error-email');
const errorPassword = document.querySelector('.error-password');
const login_lbl = document.querySelector('.login_lbl');
const email_lbl = document.querySelector('.email_lbl');
const password_lbl = document.querySelector('.password_lbl');

// const dataArr = []
// localStorage.setItem('personArr', JSON.stringify(dataArr))

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const dataObj = Object.fromEntries(data.entries());

    if(nameValidate(dataObj.login)) {
        errorName.style.display = 'block';
        login_lbl.style.display = 'none';
    } else {
        errorName.style.display = 'none';
        login_lbl.style.display = 'block';
    };

    if(emailValidate(dataObj.email)) {
        errorEmail.style.display = 'block';
        email_lbl.style.display = 'none';
    } else {
        errorEmail.style.display = 'none';
        email_lbl.style.display = 'block';
    };

    if(dataObj.password !== dataObj.password_rpt) {
        errorPassword.style.display = 'block';
        password_lbl.style.display = 'none';
    } else {
        errorPassword.style.display = 'none';
        password_lbl.style.display = 'block';
    };

    function getStorageData() {
        let storageArr = JSON.parse(localStorage.getItem('personArr'))
        console.log('storage', storageArr);
        if(storageArr == null) {
            storageArr = []
            console.log('if storage', storageArr);
            console.log('if storage func', getStorageData());
            storageArr.push(dataObj)
            console.log('arr', storageArr);
            localStorage.setItem('personArr', JSON.stringify(storageArr))
        }
        // storageArr.push(dataObj)
        // console.log('arr', storageArr);
        // localStorage.setItem('personArr', JSON.stringify(storageArr))
    }

    getStorageData()
});

function emailValidate(el) {
  return !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(el);
};

function nameValidate(el) {
  return !/^[a-zA-Z]+$/.test(el);
};


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
