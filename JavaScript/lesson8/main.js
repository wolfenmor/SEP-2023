// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone){
return{
  id,
  name,
  surname,
  email,
  phone
}
}
let arr = []
let user1 = new User(4,"Max","Graham", "@gmail",234312412)
let user2 = new User(9,"Antonette", "Howell", "@gmail", 314144143)
let user3 = new User(2, "Clementine ","Bauch", "@gmail", 124342352334)
let user4 = new User(1, "Patricia","Lebsack", "@gmail", 42343253242)
let user5 = new User(10, "Chelsey","Dietrich", "@gmail", 121246945764)
let user6 = new User(8, "Mrs. Dennis","Schulist", "@gmail", 543539640603)
let user7 = new User(5, "Kurtis","Weissnat", "@gmail", 1029330546)
let user8 = new User(3, "Nicholas","Runolfsdottir", "@gmail", 54866573211)
let user9 = new User(6, "Glenna","Reichert", "@gmail", 502574306423)
let user10 = new User(7, "Clementina","DuBuque", "@gmail", 5484370634645)
function pusher(...user){
  arr.push(...user)
}
pusher(user1)
pusher(user2)
pusher(user3)
pusher(user4)
pusher(user5)
pusher(user6)
pusher(user7)
pusher(user8)
pusher(user9)
pusher(user10)
console.log(arr)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(arr)
//arr.filter(item => (
  //item.id % 2 === 0.
//));
let filtered = arr.filter(function (arr){
 return  arr.id % 2 === 0
})
console.log(filtered)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sorted = arr.sort((a,b) =>{
  return a.id - b.id
})
console.log(sorted)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// //-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт ca// r//



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//   За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
