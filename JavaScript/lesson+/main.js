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
