let title = document.querySelector('.main-title');

const matchUser = JSON.parse(localStorage.getItem('matchUser')) ?? []
console.log('matchUser', matchUser, matchUser.login);

document.title.innerHTML = `Hello ${matchUser.login}!`


// document.onkeydown = () => {
//     if(e.keyCode === 13) {
//         searchForm.submit();
//     }
// }