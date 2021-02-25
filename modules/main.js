import User, { printName, printAge, admin, sayHi } from './User.js'
export { default } from './User.js' // re export default
export * from './User.js' // re export named objects
const user1 = new User('John', 18)

console.log(user1)
console.log(printAge(user1))
console.log(printName(user1))
console.log("this in module is " + this);
admin.name = "Test User"
sayHi();