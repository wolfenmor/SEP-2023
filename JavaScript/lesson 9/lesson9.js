// - створити блок,
//   - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let div = document.getElementById("target")
div.classList.add("wrap", "collapse", "alpha", "beta")
div.innerHTML = "<b>Lorem ipsum dolor.</b>"
div.style.background = "silver"
div.style.color = "red"
div.style.fontSize = "30px"
document.body.appendChild(div)

let cloned = div.cloneNode(true)
document.body.appendChild(cloned)
//
// - Є масив:
//   ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
//
let str = ['Main','Products','About us','Contacts']
let ul = document.createElement("ul")

for (const item of str) {
  let li = document.createElement("li")
  li.innerText = `${item}`
  ul.appendChild(li)
}
document.body.appendChild(ul)
// - Є масив
let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let courses = document.getElementsByClassName("courses")[0]
for (const coursesItem of coursesAndDurationArray) {
  let coursesBlock = document.createElement("div")
  coursesBlock.classList.add("course")
  coursesBlock.innerText = `${coursesItem.title} - ${coursesItem.monthDuration} Months`
  courses.appendChild(coursesBlock)
}
document.body.appendChild(courses)
// =========================
//
//   - Є масив
// let coursesAndDurationArray = [
//   {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//   {title: 'QA Complex', monthDuration: 4},
//   {title: 'FullStack', monthDuration: 7},
//   {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//   Завдання робити через цикли.
for (const item of coursesAndDurationArray) {
  let div = document.createElement("div")
  div.classList.add("item")

  let h1 = document.createElement("h1")
  h1.classList.add("heading")
  h1.innerText = `Title: ${item.title}`
  div.appendChild(h1)

  let p = document.createElement("p")
  p.classList.add("description")
  p.innerText = ` Months: ${item.monthDuration}`
  div.appendChild(p)

  document.body.appendChild(div)
}
// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
let simpsons = [
  {
    name: 'Bart',
    surname: 'Simpson',
    age: 10,
    info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
    photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
  },
  {
    name: 'Homer',
    surname: 'Simpson',
    age: 40,
    info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
    photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
  },
  {
    name: 'Marge',
    surname: 'Simpson',
    age: 38,
    info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
  },
  {
    name: 'Lisa',
    surname: 'Simpson',
    age: 9,
    info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
  },
  {
    name: 'Maggie',
    surname: 'Simpson',
    age: 1,
    info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
  },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//   Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
  for (const simpson of simpsons) {
    let everyMember = document.createElement("div")
    everyMember.classList.add("member")
    let h2 = document.createElement("h2")
    everyMember.appendChild(h2)

    h2.innerText = `name: ${simpson.name} ${simpson.surname} age: ${simpson.age} `

    let description = document.createElement("p")
    description.innerHTML = `${simpson.info} ${simpson.photo}`
    everyMember.appendChild(description)
    let img = document.createElement("img")
    img.src = simpson.photo
    everyMember.appendChild(img)

    document.body.appendChild(everyMember)
}

// =========================
//   Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
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
// Створити для кожного елементу масиву свій блок, блок розділити блоками,
// в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
for (const coursesArrayElement of coursesArray) {
  let container = document.createElement("div")
  container.classList.add("container")
  let divTitle = document.createElement("div")
  divTitle.classList.add("div_title")
  let divMonths = document.createElement("div")
  divMonths.classList.add("div_months")
  let divHours = document.createElement("div")
  divHours.classList.add("div_hours")
  let monthsAndHoursDiv = document.createElement("div")

  monthsAndHoursDiv.classList.add("div_box")
  divTitle.innerText = `Title: ${coursesArrayElement.title}`

  divMonths.innerText = `Months: ${coursesArrayElement.monthDuration}`
  divHours.innerText = `Hours: ${coursesArrayElement.hourDuration}`
  let ul1 = document.createElement("ul")

  for (const module of coursesArrayElement.modules) {
    let li = document.createElement("li")
    li.innerText = `${module}`
    ul1.appendChild(li)

  }

  monthsAndHoursDiv.appendChild(divMonths)
  monthsAndHoursDiv.appendChild(divHours)

  container.appendChild(divTitle)
  container.appendChild(monthsAndHoursDiv)
  container.appendChild(ul1)
  document.body.appendChild(container)
}
// ------------------

// mixkit.com
//let mp3 = document.querySelectorAll("")


let titleElement = document.querySelectorAll('.item-grid-card__title');
let authorElement = document.querySelectorAll('.item-grid-music-preview__author');
let title = titleElement.innerText
let author = authorElement.innerText
console.log('Title:', title);
console.log('Author:', author);
