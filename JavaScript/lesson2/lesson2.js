// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let books = [
  {title: "IT", pageCount: 876, genre: "horror",
      author: [{ name: "Stephen King", age: 76}]
  },
{title: "Sara", pageCount: 706, genre: "mystery",
  author: [{ name: "Stephen King", age: 76}]
},
{title: "Harry Potter and the Order of the Phoenix", pageCount: 766, genre: "fantasy",
  author: [{ name: "Joanne Rowling", age: 58}]
}
]
console.log(books)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
  {
    password: 112423443,
    name: "Leanne Graham",
    username : "Bret"
  },
  {
    password: 213423524,
    name: "Ervin Howell",
    username: "Antonette"
  },
  {
    password: 342342532452,
    name: "Clementine Bauch",
    username: "Samantha",
  },
  {
    password: 442323543566,
    name: "Patricia Lebsack",
    username: "Karianne",
  },
  {
    password: 5255233243222,
    name: "Chelsey Dietrich",
    username: "Kamren",
  },
  {
    password: 62352453523,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
  },
  {
    password: 7524563265,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
  },
  {
    password: 84353553623,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
  },
  {
    password: 945353453422,
    name: "Glenna Reichert",
    username: "Delphine",
  },
  {
    password: 10453453534,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
  }
]
for (let i = 0; i < users.length; i++) {
  console.log(users[i].password)
}

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
let n = +prompt("Write a number")
console.log(n)
 // Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
if (n!==0){
  console.log("Вірно")
}
else {
  console.log("Невірно")
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let t = +prompt("write a time")
if (t <=15 || t === 0) {
  console.log("перша")
}
else if (t>=16 && t <=30){
  console.log("друга")
}
else if (t>=31 && t <=45){
  console.log("третя")
}
else if (t>=46 && t <=60){
  console.log("четверта")
}
else {
  console.log("error")
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt("write a day");
console.log(day)
if (day <=10 && day >= 1) {
  console.log("перша")
}
else if (day>=11 && day <=20){
  console.log("друга")
}
else if (day>=21 && day <=31){
  console.log("третя")
}
else {
  console.log("error")
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let schedule = +prompt("write a number of the week")
switch (schedule){
  case 1 :
    console.log("monday")
    break;
  case 2 :
    console.log("tuesday")
    break;
  case 3 :
    console.log("wednesday")
    break;
  case 4 :
    console.log("thursday")
    break;
  case 5 :
    console.log("friday")
    break;
  case 6 :
    console.log("saturday")
    break;
  case 7 :
    console.log("sunday")
    break;
}
 // - Користувач вводить або має два числа.
let n1 = 1; let n2 = 4;
   // Потрібно знайти та вивести максимальне число з тих двох .
   // Також потрібно врахувати коли введені рівні числа.
if (n1 > n2){
  console.log(n1)
}
else if (n1 < n2){
  console.log(n2)
}
else console.log("draw, " + "number - " + n1)

  // - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
   // за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x = 1
x = x || "default"
console.log(x)

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
console.log("-----------------")
let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];

for (let i = 0; i < coursesAndDurationArray.length; i++) {

  if (coursesAndDurationArray[i].monthDuration > 5){
    console.log("Super - " + coursesAndDurationArray[i].monthDuration)
  }
  else{
    console.log("Not Bad - " + coursesAndDurationArray[i].monthDuration)
  }
}
