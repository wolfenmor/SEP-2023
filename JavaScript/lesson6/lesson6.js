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
 let coursesAndDurationArray = [
   {title: 'JavaScript Complex', monthDuration: 5},
   {title: 'Java Complex', monthDuration: 6},
   {title: 'Python Complex', monthDuration: 6},
   {title: 'QA Complex', monthDuration: 4},
   {title: 'FullStack', monthDuration: 7},
   {title: 'Frontend', monthDuration: 4}
 ];
// -- відсортувати його за спаданням за monthDuration
let res = coursesAndDurationArray.sort((a,b) =>{

  return b.monthDuration - a.monthDuration
});
console.log(res)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
coursesAndDurationArray.filter(function (item){
  if (item.monthDuration > 5){
    console.log(item)
  }
})

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let newCoursesArray = coursesAndDurationArray.map((course, index) =>{
  return{
    id: index+1,
    title: course.title,
    monthDuration: course.monthDuration
  }
})

console.log(newCoursesArray)
// =========================
//   описати колоду карт (від 6 до туза без джокерів)
deck = [
  { cardSuit: "spade", value: '6', color: "black" },
  { cardSuit: "spade", value: '7', color: "black" },
  { cardSuit: "spade", value: '8', color: "black" },
  { cardSuit: "spade", value: '9', color: "black" },
  { cardSuit: "spade", value: '10', color: "black" },
  { cardSuit: "spade", value: 'jack', color: "black" },
  { cardSuit: "spade", value: 'queen', color: "black" },
  { cardSuit: "spade", value: 'king', color: "black" },
  { cardSuit: "spade", value: 'ace', color: "black" },
  { cardSuit: "diamond", value: '6', color: 'red' },
  { cardSuit: "diamond", value: '7', color: 'red' },
  { cardSuit: "diamond", value: '8', color: 'red' },
  { cardSuit: "diamond", value: '9', color: 'red' },
  { cardSuit: "diamond", value: '10', color: 'red' },
  { cardSuit: "diamond", value: 'jack', color: 'red' },
  { cardSuit: "diamond", value: 'queen', color: 'red' },
  { cardSuit: "diamond", value: 'king', color: 'red' },
  { cardSuit: "diamond", value: 'ace', color: 'red' },
  { cardSuit: "heart", value: '6', color: 'red' },
  { cardSuit: "heart", value: '7', color: 'red' },
  { cardSuit: "heart", value: '8', color: 'red' },
  { cardSuit: "heart", value: '9', color: 'red' },
  { cardSuit: "heart", value: '10', color: 'red' },
  { cardSuit: "heart", value: 'jack', color: 'red' },
  { cardSuit: "heart", value: 'queen', color: 'red' },
  { cardSuit: "heart", value: 'king', color: 'red' },
  { cardSuit: "heart", value: 'ace', color: 'red' },
  { cardSuit: "club", value: '6', color: 'black' },
  { cardSuit: "club", value: '7', color: 'black' },
  { cardSuit: "club", value: '8', color: 'black' },
  { cardSuit: "club", value: '9', color: 'black' },
  { cardSuit: "club", value: '10', color: 'black' },
  { cardSuit: "club", value: 'jack', color: 'black' },
  { cardSuit: "club", value: 'queen', color: 'black' },
  { cardSuit: "club", value: 'king', color: 'black' },
  { cardSuit: "club", value: 'ace', color: 'black' },
]
// - знайти піковий туз
let foundAce = deck.find(item => item.cardSuit === "spade" && item.value === "ace")
console.log(foundAce);
// - всі шістки
let includes = deck.filter(item => item.value.includes("6"))
console.log(includes)
// - всі червоні карти
let includes1 = deck.filter(item => item.color.includes("black"))
console.log(includes1)

// - всі буби
let includes2 = deck.filter(item => item.cardSuit.includes("diamond"))
console.log(includes2)
// - всі трефи від 9 та більше
let filteredDeck = deck.filter(item => (
  item.cardSuit.includes("club") && ["9", "10", "jack", "queen", "king", "ace"].includes(item.value)
));

console.log(filteredDeck);
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
console.log(deck.reduce((accumulator, item) => {
  if (item.cardSuit === "spade"){
    accumulator.spades.push(item)
  }
  else if (item.cardSuit === "diamond"){
    accumulator.diamonds.push(item)
  }
  else if (item.cardSuit === "heart"){
    accumulator.hearts.push(item)
  }
  else if (item.cardSuit === "club"){
    accumulator.clubs.push(item)
  }
  return accumulator;

}, {spades: [], diamonds: [], hearts: [], clubs: []}))

// =========================
//   взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
  {
    title: 'JavaScript Complex',
    monthDuration: 5,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
  },
  {
    title: 'Java Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'angular',
      'aws',
      'docker',
      'git',
      'java core',
      'java advanced']
  },
  {
    title: 'Python Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'angular',
      'aws',
      'docker',
      'python core',
      'python advanced']
  },
  {
    title: 'QA Complex',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
  },
  {
    title: 'FullStack',
    monthDuration: 7,
    hourDuration: 909,
    modules: ['html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'react',
      'angular',
      'aws',
      'docker',
      'git',
      'node.js',
      'python',
      'java']
  },
  {
    title: 'Frontend',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
  }
];
// --написати пошук всіх об'єктів, в який в modules є sass
let result = coursesArray.filter(value =>
  value.modules.includes("sass")
)
console.log(result)
// --написати пошук всіх об'єктів, в який в modules є docker
let result1 = coursesArray.filter(value =>
  value.modules.includes("docker")
)
console.log(result1)

