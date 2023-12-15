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
class Client extends User{
constructor(id, name, surname, email, phone, order) {
  super(id, name, surname, email, phone, order);
  this.order = order
}

}
let client1 = new Client(4,"Max","Graham", "@gmail",234312412,["milk", "eggs", "bottle", "water", "soup"])
let client2 = new Client(9,"Antonette", "Howell", "@gmail", 314144143, ["milk", "eggs", "bottle", "water", "soup", "cup"])
let client3 = new Client(2, "Clementine ","Bauch", "@gmail", 124342352334, ["milk", "eggs", "soup", "salami", "pizza"])
let client4 = new Client(1, "Patricia","Lebsack", "@gmail", 42343253242, ["milk", "eggs", "soup", "pizza"])
let client5 = new Client(10, "Chelsey","Dietrich", "@gmail", 121246945764, ["milk", "eggs", "soup", "salami", "pizza", "limonade", "juice"])
let client6 = new Client(8, "Mrs. Dennis","Schulist", "@gmail", 543539640603, ["milk", "eggs", "soup", "salami", "pizza", "limonade", "juice", "figures"])
let client7 = new Client(5, "Kurtis","Weissnat", "@gmail", 1029330546, ["milk", "eggs", "pizza", "juice", "apples"])
let client8 = new Client(3, "Nicholas","Runolfsdottir", "@gmail", 54866573211, ["milk", "juice", "orange", "pineapple"])
let client9 = new Client(6, "Glenna","Reichert", "@gmail", 502574306423, ["salami", "pizza", "limonade", "mango"])
let client10 = new Client(7, "Clementina","DuBuque", "@gmail", 5484370634645, ["milk", "eggs", "chicken"])
// створити пустий масив, наповнити його 10 об'єктами Client
function pusher1(...client){
  arr1.push(...client)
}
let arr1 = []
pusher1(client1)
pusher1(client2)
pusher1(client3)
pusher1(client4)
pusher1(client5)
pusher1(client6)
pusher1(client7)
pusher1(client8)
pusher1(client9)
pusher1(client10)
console.log(arr1);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sorted1 = arr1.sort((a,b) =>{
 return  a.order.length - b.order.length
})
console.log(sorted1)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car (model, manufacturer, year, maxSpeed, capacity){
  return{
    model,
    manufacturer,
    year,
    maxSpeed,
    capacity,
    drive () {
      console.log(`Driving at a speed of ${maxSpeed} km/h`);
    },
    info(){
      console.log(`Model - ${model} manufacturer - ${manufacturer}`)
    },
    increaseMaxSpeed (newSpeed){
      return newSpeed
    },
    changeYear (newValue){
      return newValue
    },
    addDriver (driver, surname, age){
      return {
        driver,
        surname,
        age
      }
    }
  }

}
let car1 = new Car("911", "Porsche", 2016, 275, 214)
console.log(car1)
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
car1.drive()
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля
car1.info()
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
console.log(`New speed of the car is ` + car1.increaseMaxSpeed(10));
//-- changeYear (newValue) - змінює рік випуску на значення newValue
console.log(`New year of the car is ` + car1.changeYear(1999));
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
let driver = car1.addDriver("Max", "asf", 18);
let carArray = [];
carArray.push(car1, driver)
console.log(carArray)
// - (Те саме, тільки через клас)
class CarWithDriver extends Car{
  constructor(model, manufacturer, year, maxSpeed, capacity, driverName, driverSurname, age) {
    super(model, manufacturer, year, maxSpeed, capacity, driverName, driverSurname, age);
    this.driverName = driverName
    this.driverSurname = driverSurname
    this.age = age
  }

}
let car = new CarWithDriver("911", "Porsche", 2016, 275, 214,"Max", "asf", 18)
console.log(car)

// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// //-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class ClassCar extends Car {
  constructor(model, manufacturer, year, maxSpeed, capacity) {
    super(model, manufacturer, year, maxSpeed, capacity);
  }
}

let car2 = new ClassCar("911", "Porsche", 2016, 275, 214)
console.log(car2)

car2.drive()

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella(name, age, sizeOfTheFoot){
  return{
    name,
    age,
    sizeOfTheFoot
  }
}
let arr3 = []
let cinderella1 = new Cinderella("Maximiliana",21,35)
let cinderella2 = new Cinderella("Antonette",19, 36)
let cinderella3 = new Cinderella("Clementine", 22,34)
let cinderella4 = new Cinderella("Patricia", 21,39)
let cinderella5 = new Cinderella("Chelsey", 20,36)
let cinderella6 = new Cinderella("Dennis", 18,37)
let cinderella7 = new Cinderella("Kurtis", 19,38)
let cinderella8 = new Cinderella("Nichole", 18,35)
let cinderella9 = new Cinderella("Glenna", 18,35)
let cinderella10 = new Cinderella("Clementina", 17,34)
function pusher3(...cinderella){
  arr3.push(...cinderella)
}
pusher3(cinderella1)
pusher3(cinderella2)
pusher3(cinderella3)
pusher3(cinderella4)
pusher3(cinderella5)
pusher3(cinderella6)
pusher3(cinderella7)
pusher3(cinderella8)
pusher3(cinderella9)
pusher3(cinderella10)
console.log(arr3)
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prinz extends Cinderella {
  constructor(name, age, shoeThatHeFound) {
    super(name, age, shoeThatHeFound);
  }
}
let prince = new Prinz("Antoine", 18, 37)
console.log(prince)
//   За допомоги циклу знайти яка попелюшка повинна бути з принцом.
function findCinderellaForPrince(prince, arr3){
  for (let i = 0; i < arr3.length; i++) {
   if (arr3[i].sizeOfTheFoot === prince.sizeOfTheFoot){
     return arr3[i];
   }

  }
  return null
}
let matchingCinderella = findCinderellaForPrince(prince, arr3)
console.log(matchingCinderella)
//   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let findCinderella = arr3.find(item => item.sizeOfTheFoot === 37)
console.log(findCinderella);
