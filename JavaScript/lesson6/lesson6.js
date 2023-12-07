// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str = "hello world"
console.log(str.length)

let str2 = 'lorem ipsum'
console.log(str2.length)

let str3 = 'javascript is cool'
console.log(str3.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str4 = 'hello world'
console.log(str4.toUpperCase())
let str5 = 'lorem ipsum'
console.log(str5.toUpperCase())
let str6 = 'javascript is cool'
console.log(str6.toUpperCase())
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str7 = 'HELLO WORLD'
console.log(str7.toLowerCase())
let str8 = 'LOREM IPSUM'
console.log(str8.toLowerCase())
let str9 = 'JAVASCRIPT IS COOL'
console.log(str9.toLowerCase())
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілі// в.
let str10 = ' dirty string   '
let trim = str10.trim()
console.log(trim[0])
console.log(trim)
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//   let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str11 = 'Ревуть воли як ясла повні';

let stringToarray = (str) => {
  console.log(str.split(" "));
}
stringToarray(str11)
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let n = [10,8,-7,55,987,-1011,0,1050,0]
let map = n.map((item) => item + "")
console.log(map)
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//   let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
let sortNums = (nums, direction) => {
if (direction === "ascending" ){
  console.log(nums.sort((a, b) => b - a));
}
else if (direction === "descending" ){
  console.log(nums.sort((a, b) => a - b))
}

}
(sortNums(nums, "ascending"));
(sortNums(nums, "descending"));


// ==========================
// - є масив
// let coursesAndDurationArray = [
//   {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//   {title: 'QA Complex', monthDuration: 4},
//   {title: 'FullStack', monthDuration: 7},
//   {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================
//   описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

// {
//   cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//   color:'', // 'red','black'
// }
//
// =========================
//
//   Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//   spades:[],
//     diamonds:[],
//   hearts:[],
//   clubs:[]
// }
// =========================
//   взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
