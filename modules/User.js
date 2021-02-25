export default class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

export function printName(user) {
  console.log(`User name is ${user.name}`)
}

function printAge(user) {
  console.log(`User age is ${user.age}`)
}

export let admin = { };

export function sayHi() {
  alert(`Ready to serve, ${admin.name}!`);
}

export { printAge }