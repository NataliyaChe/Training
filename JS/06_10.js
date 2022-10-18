// 1

// for (let i = 1; i <= 100; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//         console.log('FuzzBuzz');
//     } else if (i % 3=== 0) {
//         console.log('Fuzz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }

// 2

// function toLowerUpper(word) {
//     let symb = '';
//     for (let i = 0; i < word.length; i++) {
//         symb += (i % 2 === 0) ? word[i].toLowerCase() : word[i].toUpperCase();
//     } 
//     return symb
// }

// console.log('test', toLowerUpper('october'));

// console.log('october'.toUpperCase());
// toLowerUpper('october') 

// 3

// function splitString(myString) {
//     let words = myString.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase()
//     }
//     let newString = words.join('');
//     return newString
// }

// console.log(splitString('which hopefully result in a complete checklist'));

// function splitString(myString) {
//     const words = myString.split(" ");
//     const newWords = words.map(word => word[0].toUpperCase()) 
//     const newString = newWords.join('');
//     return newString
// }

// console.log(splitString('which hopefully result in a complete checklist'));

// function splitString(myString) {
//     const words = myString.split(" ").map(word => word[0].toUpperCase()).join('');
//     return words
// }

// console.log(splitString('which hopefully result in a complete checklist'));

// 4

// const names = ['Max', 'Den', 'Vlad', 'Nata', 'Andrew', 'Tilda', 'Jo', 'Nick']
// const professions = ['It', 'journalist', 'plumber']
// const newArr = names.map(item => {
//         return {name: item, 
//         age: Math.floor(Math.random() * 100) + 1, 
//         profession: professions[Math.floor(Math.random()*professions.length)]
//     }  
// })

// console.log('names', newArr);

// names.forEach(function(item){ 
//     newArr.push({name: item, 
//     age: Math.floor(Math.random() * 100) + 1, 
//     profession: professions[Math.floor(Math.random()*professions.length)]})
// })

// const filterList = newArr.filter(function(item) {
//     return (item.profession === "It" || item.profession === "journalist") && (item.age > 25 && item.age < 45);
// });
// console.log('filter', filterList);

// const filterList = newArr.filter(function(item) {
//     return item.profession === "It";
// });
// console.log(filterList);

// const filterList = newArr.filter(function(item) {
//     return item.age > 25 && item.age < 45;
// });
// console.log(filterList);

// newArr.push({name: names.forEach(item)})

// let random = Math.floor(Math.random() * 100) + 1;
// console.log('random', names[Math.floor(Math.random()*names.length)]);

// [
//     { name: 'Max', age: 70, profession: 'It' },
//     { name: 'Den', age: 46, profession: 'plumber' },
//     { name: 'Vlad', age: 41, profession: 'plumber' }
//   ]

// 5 

// const names = ['Max', 'Den', 'Vlad']

// const newArr = names.map(item => item.split(""))

// console.log('names', newArr);

// 6

const btn = document.querySelector('.btn')
const deleteBtn = document.querySelector('.deleteBtn')
const btnList = document.querySelector('.list-from-btn')
const strgList = document.querySelector('.list-from-storage')

const workers = [
    ['Peter', {status: 'salary', bonus: false}],
    ['Max', {status: 'salary', bonus: true}],
    ['Vlad', {status: 'vacation'}],
    ['Den', {status: 'retired', bonus: false}],
    ['Natasha', {status: 'retired', bonus: false, retiredStatus: 'bad behavior'}],
    ['Jeka', {status: 'retired', bonus: false, retiredStatus: 'cut'}],
    ['Mike', {status: 'retired', bonus: false, retiredStatus: 'reduction'}],
]

function getAmount(status, bonus, retiredStatus) {
    const salary = 3000;
    const bonusData = 1000;
    let amount 

    if (status === 'salary') { 
        amount = salary
    }
    if (status === 'salary' && bonus === true) {
        amount = salary + bonusData
    }
    if (status === 'vacation' ) {
        amount = salary + (salary / 2)
    }
    if (status === 'retired' ) {
        amount = salary / 2
    }
    if (status === 'retired' && (retiredStatus === 'cut' || retiredStatus === 'reduction')) {
        amount = salary + (bonusData / 2)
    }
    if (status === 'retired' && retiredStatus === 'bad behavior') {
        amount = salary / 3
    }
    return amount
}

btn.onclick = function() {
    const newArr = workers.map(function(item, index) {
        [name, { status, bonus, retiredStatus }] = item
        let element = {  
            id: index + 1,
            name: name,
            amount: getAmount(status, bonus, retiredStatus),
            status: status,
            bonus: !!bonus,
            retiredStatus: retiredStatus ?? 'No status'
        }

    let liItem = document.createElement('li');
    const content = `
        Name: ${ element.name}, 
        amount: ${element.amount},
        status: ${ element.status}, 
        bonus: ${element.bonus},
        retired status: ${element.retiredStatus} 
    `
    liItem.innerHTML = content;
    btnList.appendChild(liItem);
    return element
    })
    localStorage.setItem('list', JSON.stringify(newArr)) 
}

const storageList = JSON.parse(localStorage.getItem('list'))
const storageArr = storageList.forEach(function(item) {
console.log('storage');
let liItem = document.createElement('li');
    const content = `
        Name: ${ item.name}, 
        amount: ${item.amount},
        status: ${ item.status}, 
        bonus: ${item.bonus},
        retired status: ${item.retiredStatus} 
    `
    liItem.innerHTML = content;
    strgList.appendChild(liItem);
})

deleteBtn.onclick = function() {
    localStorage.removeItem('list')
    location.reload()
}
    // const newArr = workers.map(function(item, index) {
    //     [name, { status, bonus, retiredStatus }] = item
    //     return {  
    //         id: index + 1,
    //         name: name,
    //         amount: getAmount(status, bonus, retiredStatus),
    //         status: status,
    //         bonus: !!bonus,
    //         retiredStatus: retiredStatus ?? 'No status'
    //     }
    // })
// console.log('amount', newArr);


// localStorage работает для текушего домена, если сменить домен - данные будут недоступны

// const myNumber = 42
// Для записи данных в localStorage используют команду setItem. Необходимы два атрибута: ключ (тут: 'number') и значение (myNumber). Значение должно быть в виде строки.

// localStorage.setItem('number', myNumber);

// Для получения данных используется команда getItem

// console.log(localStorage.getItem('number'));

// Команда для удаления 

// localStorage.removeItem('number')

// Очищение всего localStorage, команда clear()

// localStorage.clear()

// localStorage и объекты. localStorage умеет работать только со строками, поэтому при работе с объектом он попытается присести его к строке. Поэтотому нужно использовать объект JSON. У него есть два метода.
// stringify - позволяет сохранить объект в виде строки

// const obj = { name: 'Max', age: 70, profession: 'It' }
// localStorage.setItem('person', JSON.stringify(obj))

// Получить объект можно с помощью команды parse

// const raw = localStorage.getItem('person')
// const person = JSON.parse(raw) 
// person.name = 'Den'

// console.log(person);



    // for (let i = 0; i < newArr.length; i++) {
    //     const element = newArr[i]
    //     let liItem = document.createElement('li');
    //     const content = `
    //         Name: ${ element.name}, 
    //         amount: ${element.amount},
    //         status: ${ element.status}, 
    //         bonus: ${element.bonus},
    //         retired status: ${element.retiredStatus} 
    //     `
    //     liItem.innerHTML = content;
    //     btnList.appendChild(liItem);
    // }
// }
// renderList(newArr);


// btnList.innerHTML = newArr

// newArr.forEach(e => btnList.innerHTML += '<li>' + e + '</li>');
    
//  const newArr = workers.map(function(item, index) {
//     // if (item[1].retiredStatus === undefined) {
//     //     item[1].retiredStatus = 'No status'
//     //   } 
//     // if (item[1].bonus === undefined) {
//     //     item[1].bonus = false
//     //    } 

//     return {  id: index + 1,
//         name: item[0],
//         amount: getAmount(item[1]),
//         status: item[1].status,
//         // bonus: item[1].bonus,
//         // retiredStatus: item[1].retiredStatus 
//         bonus: !!item[1].bonus,
//         retiredStatus: item[1].retiredStatus ?? 'No status'
//         }
//  })

//  console.log('amount', newArr);

//

 // {
//     id: 1,
//     name: 'Peter',
//     amount: 3000,
//     status: 'salary',
//     bonus: false,
//     retiredStatus: 'Нет статуса'
//   },

// Самое интересное - расчет зарплаты на основе метаданных
// Напомним, что базовая зарплата равна 3000 а бонус это 1000

// Таким образом Человек со статусом 'salary' - получает просто чистую зарплату
// Тот, у кого статус 'salary' и есть бонус - получает сумму зарплаты и бонуса,
// Работник со статусом 'vacation' получает полную зарплату плюс 1500
// Далее идут работники со статусом 'retired'. 
// Те у кого нет статуса отставки (retiredStatus) просто получают половину от обычной зарплаты. Работник с retiredStatus cut - получит полную зарплату плюс половину бонуса. Далее идет retiredStatus bad behavior - человек получает только треть от полной зарплаты. И retiredStatus reduction получит базовую зарплату плюс половину от бонуса. 

// function getSum(a, b) {
//     return a + b;
// }
// console.log(getSum(2, 5));

// Деструктуризация массива

// const arr = ['John', 'Smit', 'development', 'programmer', 2000];
// const [name, surmame, department, position, salary] = arr;

// console.log(name, surmame, department, position, salary)

//

// function func() {
// 	return ['John', 'Smit', 'development', 'programmer', 2000];
// }

// let [name, surmame, department, position, salary] = func();
// console.log(name, surmame, department, position, salary)

//

// const arr = ['John', 'Smit', 'development', 'programmer', 2000];
// const [,, department, position, ,] = arr;
// console.log(department, position)

//

// const arr = ['John', 'Smit', 'development', 'programmer', 2000];
// const [name, surmame, ...info] = arr;
// console.log(info)

//

// const arr = ['John', 'Smit', 'development', , 2000];
// const [name, surmame, department, position = 'trainee', salary = 3000] = arr;
// console.log(name, surmame, department, position, salary)

//

// function func() {
// 	return (new Date).getDate();
// }

// function funcM() {
// 	return (new Date).getDate();
// }

// let [year, month = funcM(), day = func()] = arr;

//

// const options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// const {color, width, height} = options;
// console.log(color, width, height);

//

// const options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// const {color: c, width: w, height: h} = options;
// console.log(c, w, h);

//

// const options = {
// 	width:  400,
// 	height: 500,
// };
// const {color = 'red', width, height} = options;
// console.log(color, width, height);

//

// const options = {
// 	width:  400,
// 	height: 500,
// };
// const {color: c = 'red', width: w, height} = options;
// console.log(c, w, height);

//
// const arr = ['John', 'Smit', 'development', 'programmer', 2000];
// function func([name, surmame, department, position, salary]) {
//     console.log(name); 
// 	console.log(surmame); 
// 	console.log(department);
// 	console.log(position); 
// 	console.log(salary);  
// }
// func( arr );

//

// const arr = ['John', 'Smit', 'development', 'programmer', 2000];
// function func([name, surmame, ...info]) {
//     console.log(name); 
// 	console.log(surmame); 
// 	console.log(info);
// }
// func( arr );

//

// const arr = ['John', 'Smit', 'development'];
// function func([name, surmame, department, position = 'trainee']) {
//     console.log(name); 
// 	console.log(surmame); 
// 	console.log(department);
// 	console.log(position);  
// }
// func( arr );

//

// const arr = ['John', 'Smit'];
// function func(department, [name, surname], [year, month, day]) {
//  console.log(name); 
// 	console.log(surname); 
// 	console.log(department);
// 	console.log(year); 
// 	console.log(month);  
// }
// func('development', arr, [2022, 10, 11] );

//

// const options = {
// 	// color: 'red',
// 	width:  400,
// 	height: 500,
// };

// function func({color, width, height}) {
// 	console.log(color);
//     console.log(width); 
//     console.log(height); 
// }

// func( options );

//

// const options = {
// 	width:  400,
// 	height: 500,
// }; 

// function func({color = 'green', width, height}) {
// 	console.log(color);
//     console.log(width); 
//     console.log(height); 
// }

// func( options );

//
