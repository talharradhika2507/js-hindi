// Primitive

const { PureComponent } = require("react");

// 7 types : String, Number, Boolean, null, undefined , Symbol, BigInt

//js is dynamically typed programming language.
//This means that you do not need to explicitly declare the data type of a variable, 
//and the same variable can hold values of different types during the program's execution

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id= Symbol("123")
const anotherId = Symbol("123")
console.log(id==anotherId)

//const BigInt = 123434556789456787n


// Referance type(Non Primitive)
//directly allocate the reference in the memory.

// Arrays, Objects, Functions
//Arrays
const City = [Amravati, Nashik, Pune, Mumbai];

//Objects
const myObj ={
    name: "Radhika",
    age: 24,
}

//Funtion
const myFunction = Function()
{
    console.log("hello World"); 
}

console.log(typeof BigInt);
