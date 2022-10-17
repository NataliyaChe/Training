// 1  написать логику которая вернет объект объектов 
// где тру значения попадают в объект тру, а фалс значения в объект фалс, и ключи и значения у них совпадают:
// {
//   true: { '1': 1, true: true, hello: 'hello' },
//   false: { '0': 0, false: false, null: null, undefined: undefined }
// }

const arr = [false, 0, null, undefined, true, 1, 'hello'];
let obj = {
    objTrue: {},
    objFalse: {},
};
console.log(obj);

arr.forEach((item, index) => {
 if(Boolean(item) == true) {
    let keyTrue = item
    obj.objTrue[keyTrue] = item
 } else if (Boolean(item) == false) {
    let keyFalse = item
    obj.objFalse[keyFalse] = item
 } 
})