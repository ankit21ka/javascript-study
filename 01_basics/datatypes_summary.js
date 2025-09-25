//  # premitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// javascript is dynamic type language

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null //object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); //false

const bigNumber = 345678765434567895678n  //bigint






// Reference  (non primitive)

// Array, Objects, functions

const heros = ["shaktiman", "nagraaj", "doga"] //array  // object

let myObj ={
    name: "ankit",
    age: 22,
    
}  //object

const myFunction = function() {
    console.log("hello World");
    

} //functon

console.log(typeof bigNumber); 
console.log(typeof outsideTemp);
console.log(typeof heros);




