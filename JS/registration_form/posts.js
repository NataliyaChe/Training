import {Storage, UsersMapper} from "./utils.js";

const container = document.querySelector('.posts-wrap');

const storage = new Storage();
const users = storage.getItem('usersArr');

console.log('UsersMapper()', UsersMapper(users));
