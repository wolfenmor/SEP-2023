// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let f1 = document.getElementById("f1")
console.log(f1)
let users = []
f1.onsubmit = function (ev) {
  ev.preventDefault()
  let name = this.name.value
  let surname = this.surname.value
  let age = this.age.value
  users.push({name, surname, age})
  for (const user of users) {
    let div = document.createElement("div")
div.innerText = `name: ${name}, ${surname} - age: ${age}`
    document.body.appendChild(div)

  }
}
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
window.onload = function (){
  let divBlock = document.getElementById("block")
  let nums =localStorage.getItem("localPage"|| 0)
  nums++
  localStorage.setItem("localPage", nums)
  divBlock.innerText = nums

  document.body.appendChild(divBlock)
}
// ==========================
// Є сторінка sessions.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки sessions.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
window.addEventListener("load", function () {
let sessionsStorage = localStorage.getItem("sessions")
let sessions = JSON.parse(sessionsStorage) || []
  let date = new Date()
  sessions.push(date)
  localStorage.setItem("sessions",JSON.stringify(sessions) )
})
// =========================
// зробити масив на 100 об'єктів та дві кнопки prev next
let nums = [1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  90,
  91,
  92,
  93,
  94,
  95,
  96,
  97,
  98,
  99,
  100]
let prev = document.getElementById("prev")
let next = document.getElementById("next")
// при завантажені сторінки з'являються перші 10 об'єктів.
window.addEventListener("load", function () {
  let p = document.createElement("p")
  let firstTen = nums.slice(count, count += 10)
  p.innerText = `${firstTen}`
  document.body.appendChild(p)
})
// При натисканні next виводяться настпні 10 об'єктів
let count = 0
next.addEventListener("click", function () {
  let p = document.createElement("p")
  let nextTen = nums.slice(count, count += 10);
  p.innerText = `${nextTen}`
  document.body.appendChild(p)
})
// При натисканні prev виводяться попередні 10 об'єктів
prev.addEventListener("click", function () {
  let p = document.createElement("p")
  let prevTen = nums.slice(count, count+10);
  count -= 10
  p.innerText = `${prevTen}`
  document.body.appendChild(p)
})
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let event = document.getElementById("event")
let hide = document.getElementById("text")

event.addEventListener("click", function () {
  hide.style.display = "none"
})
//   - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let ageBth = document.getElementById("age-btn")
let f2 = document.getElementById("f2")
let ageInput = document.getElementById("ageInput")
ageBth.addEventListener("click", function (ev) {
  ev.preventDefault()
  if (f2[0].value < 18 || 0){
    let div = document.createElement("div")
    div.innerText = "you're under than 18"
    document.body.appendChild(div)
  }
  if (f2[0].value >= 18){
    let div = document.createElement("div")
    div.innerText = "you good"
    document.body.appendChild(div)
  }
})

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//   При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//   зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//   При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
