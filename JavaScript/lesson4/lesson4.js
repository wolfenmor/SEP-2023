
// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//   - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaOfSquare (a, b){
  console.log(a * b)
}
areaOfSquare(14,4);
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaOfCircle (pi, r1, r2){
  console.log(pi * r1 * r2)
}
areaOfCircle(Math.PI, 4, 6)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaOfCylinder (n, pi, r, h){
  console.log(n * pi * r * h);
}
areaOfCylinder(2, Math.PI, 7, 6)
// - створити функцію яка приймає масив та виводить кожен його елемент
let coursesTitleArray = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];
function iteration (){
  for (const item of coursesTitleArray) {
    console.log(item)
  }
}
iteration()
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraphCreator (text){
  document.write(`<p>${text}</p>`)
}
paragraphCreator("Lorem ipsum.")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function ulAndli(liText){
  document.write(`<ul>
<li>${liText}</li>
<li>${liText}</li>
<li>${liText}</li>
</ul>`)
}
ulAndli(23)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function LiandUl1 (text, length){
 let ul = document.createElement(`ul`);
  for (let i = 1; i <= length; i++) {
    let li = document.createElement('li');
    li.textContent = `${text}`;
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
}
LiandUl1("Lorem ipsum.", 2)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array = [2,5,"str", true]

function liCreator (){
  document.write(`<ul>`)
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    document.write(`<li>
  ${item}
    </li>`)
  }
  document.write(`</ul>`)
}
liCreator()
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let user = [{id: "23", name: "Max", age: 18}]

function blockCreator (){
  for (let i = 0; i < user.length; i++) {
    const item = user[i];
    document.write(`<div>
<p>${item.id}</p>
<p>${item.name}</p>
<p>${item.age}</p>
</div>`)
  }
}
blockCreator()
// - створити функцію яка повертає найменьше число з масиву
let n = [23,6]
function smallerNumber () {
  let minNumber = Math.min(...n)
  console.log(minNumber)
}
smallerNumber()
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum (arr){
  console.log(arr.reduce((a, b) => a + b))
}
sum([1,2,10])
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
function swap(arr){
  arr.reverse()
  console.log(arr)
}
swap([12,3,6])
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)


// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currencyValues, exchangeCurrency){
  for (const currency of currencyValues) {
    if (currency.currency === exchangeCurrency){
      return  sumUAH / currency.value
    }
  }
  }
  const currencies = [{currency:"USD",value:40}, {currency:'EUR',value:42}];
console.log(exchange(10000, currencies, "USD"));
console.log(exchange(10000, currencies, "EUR"));

