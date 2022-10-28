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

const roleArr = ['user', 'admin', 'editor']
const statusArr = ['pending', 'approved', 'declined']

function Option(item) {
    return `<option value="${item}">${item}</option>`
}

function Select(arr) {
    const optionArr = arr.map(item => {
        return Option(item)
    })
    let strOption = optionArr.join('')
    return ` <select name="select" id="obj">
        ${optionArr}
    </select>`
}

function TableRow(obj, arr) {
    return `<tr>
        <th>${obj.name}</th>
        <th>${obj.email}</th>
        <th>${Select(roleArr)}</th>
        <th>${Select(statusArr)}</th>
    </tr>`
}

export {Storage, findUserByEmail, validateEmail, validateName, Option, Select, TableRow}