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

const roles = ['user', 'super-admin', 'admin', 'moderator', 'editor']
const statuses = ['pending', 'approved', 'declined']

function Option(optionName, selectedOptionName) {
     if(optionName === selectedOptionName) {
        return `<option value="${optionName}" selected>${optionName}</option>`
    } else {
        return `<option value="${optionName}">${optionName}</option>`
    }
}

function Select(optionNames, selectedOptionName, email) {
    const options = optionNames.map(optionName => Option(optionName, selectedOptionName)
)
    return ` <select name="select" class="select" data-email="${email}">
        ${options}
    </select>`
}

function TableRow(user) {
    const {name, email, role, status} = user;
    return `<tr>
        <th>${name}</th>
        <th >${email}</th>
        <th data-key="role">${Select(roles, role, email)}</th>
        <th data-key="status">${Select(statuses, status, email)}</th>
    </tr>`
}

export {Storage, findUserByEmail, validateEmail, validateName, Option, Select, TableRow}

// localStorage.clear()
