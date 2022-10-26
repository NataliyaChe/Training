class Storage {
    constructor() {

    }

    getItem(key) {
        return JSON.parse(localStorage.getItem(key))
    }

    setItem(key, item) {
        localStorage.setItem(key, JSON.stringify(item));
    }
}



function validateEmail(email) {
    return !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};

function validateName(name) {
    return !/^[a-zA-Z]+$/.test(name);
};

const findUserByEmail = (arr, email) => arr.find(item => email === item.email);

export {Storage, findUserByEmail, validateEmail, validateName}