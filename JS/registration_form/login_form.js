const form = document.querySelector('.form');
const errorEmail = document.querySelector('.error-email');
const email = document.querySelector('.email');
const email_lbl = document.querySelector('.email_lbl');
const password_lbl = document.querySelector('.password_lbl');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if(emailValidate(email)) {
    errorEmail.style.display = 'block';
    email_lbl.style.display = 'none';
  } else {
    errorEmail.style.display = 'none';
    email_lbl.style.display = 'block';
  };

});

function emailValidate(email) {
  return !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value);
};

const storageUser = JSON.parse(localStorage.getItem('person'))
    console.log('starage', storageUser);