let users = [
                {name: 'vasya', age: 31, status: false},
                {name: 'petya', age: 30, status: true},
                {name: 'kolya', age: 29, status: true},
                {name: 'olya', age: 28, status: false},
                {name: 'max', age: 30, status: true},
                {name: 'anya', age: 31, status: false},
                {name: 'oleg', age: 28, status: false},
                {name: 'andrey', age: 29, status: true},
                {name: 'masha', age: 30, status: true},
                {name: 'olya', age: 31, status: false},
                {name: 'max', age: 31, status: true}
            ];
let iterator = ({name, age}) => {
  return{
    name,
    age
  }
}
console.log(users.map(iterator));

let cloned = users.map((clone, index) => {
  return {
    id: index+1,
    clone
  }
})
console.log(cloned)

let checks = [124,342,444,122,412,431,111]

let reduce = checks.reduce((result, check) =>{
  if (check < 200){
    result[0].push(check)
  }else{
    result[0].push(check)
  }
  return result
}, [[],[]])
console.log(reduce)

let btn = document.createElement("button")
btn.classList.add("btn")
btn.style.marginTop = "20px"
btn.innerText = "output all users"
let container = document.createElement("div")

btn.addEventListener("click", function () {
  for (const user of users) {
    let usersDiv = document.createElement("div")
    usersDiv.style.marginBottom = "20px"
    usersDiv.innerHTML = ` name: ${user.name}<br> age: ${user.age}<br> status: ${user.status}`
    btn.style.display = "none"

    container.appendChild(usersDiv)
    document.body.appendChild(container)

  }
})

document.body.appendChild(btn)

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

window.onload = function () {
  let div = document.getElementById("courses-div")
  for (const course of coursesArray) {
    if (course.monthDuration > 5){
      let p = document.createElement("p")
      p.innerText = `${course.title}`

      div.appendChild(p)
      document.body.appendChild(div)
    }
  }
}

let plus = document.getElementById("plus")
let minus = document.getElementById("minus")

let div = document.createElement("div")
let p  = document.getElementById("btn-p")

let currentValue = localStorage.getItem("currentValue" || 0)
plus.addEventListener("click", function (ev) {
  ev.preventDefault()
  currentValue++
  localStorage.setItem("currentValue", currentValue)
  p.textContent = `${currentValue}`
})

minus.addEventListener("click", function (ev) {
  ev.preventDefault()
  currentValue--
  localStorage.setItem("currentValue", currentValue)
  p.textContent = `${currentValue}`
})

let products = [
  {
  title: 'milk',
    price: 22,
   image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
 },
 {
   title: 'juice',
  price: 27,
   image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
 },
 {
   title: 'tomato',
price: 47,
    image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
  },
  {
   title: 'tea',
    price: 15,
   image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
 },
];

let productsDiv = document.getElementById("products")
productsDiv.classList.add("products")

let productsParse = JSON.parse(localStorage.getItem("products")) || []
for (const product of products) {
  let p  = document.createElement("p")
  p.innerText = ` title: ${product.title} price: ${product.price}`
  let btn = document.createElement("button")
  btn.innerText = "Click to put in the basket"

  productsDiv.append(p, btn)
  btn.addEventListener("click", function (ev) {
    ev.preventDefault()
    productsParse.push(product.title)
    localStorage.setItem("products", JSON.stringify(productsParse))
  })
}
let clearBtn = document.getElementById("clear")
clearBtn.innerText = "clear"
clearBtn.addEventListener("click", function (ev) {
  ev.preventDefault()
  localStorage.clear()
})

let coursesTitleArray = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];
let containerCourses = document.getElementById("courses")
let courses = JSON.parse(localStorage.getItem("courses")) || []
for (const course of coursesTitleArray) {
  let p = document.createElement("p")
  p.innerText = `${course}`
  let btn = document.createElement("button")
  btn.innerText = "click"
  btn.onclick = function (e) {
    e.preventDefault()
    courses.push(course)
    localStorage.setItem("courses", JSON.stringify(courses))
  }
  containerCourses.append(p, btn)
}

let hover = document.getElementById("hoverElement")

hover.addEventListener("mouseover", function () {
  hover.style.background = "red"
  hover.style.color = "white"
})
hover.addEventListener("mouseout", function (){
  hover.style.background = "lightblue"
  hover.style.color = "black"
})

let f2 = document.getElementById("f2")
f2.addEventListener("submit", function (ev) {
  ev.preventDefault()
  let emailInput = f2.querySelector("#email")
  let email = emailInput.value
  if (email.includes("@")){
    console.log("good")
  }else{
    console.log("er")
  }
})
let f3 = document.getElementById("f3")
let info = document.getElementById("number")

f3.onsubmit = function (ev) {
  ev.preventDefault()
  let p = document.createElement("p")
  p.innerText = info.value
  info.value = ""

  f3.appendChild(p)
}
let scrollBtn = document.createElement("button")
scrollBtn.innerText = "scroll"
document.body.appendChild(scrollBtn)
scrollBtn.addEventListener("click", function () {
  console.log("Scroll position: " + window.scrollY);

});

let f4 = document.getElementById("f4")
let inputInfo = document.getElementById("input-info")
let ul = document.createElement("ul")
f4.onsubmit = function (ev) {
  ev.preventDefault()
  let li = document.createElement("li")
  li.innerText = `${inputInfo.value}`

  ul.appendChild(li)
  document.body.appendChild(ul)
}

let dbClick = document.getElementById("doubleClickElement")

dbClick.addEventListener("dblclick", function (e) {
  console.log("double click")
  console.log(e);
})
