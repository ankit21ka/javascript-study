const name = "ankit"
const repoCount = 50

// console.log(name + " "+ repoCount +" value");  not use

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`); use this type 

const gameName = new String('Ankit-Kumar')

// console.log(gameName[0]); // A
// console.log(gameName.__proto__); //{}


// console.log(gameName.length); //5
// console.log(gameName.toUpperCase());  //ANKIT
// console.log(gameName.charAt(3)); // i
// console.log(gameName.indexOf('t')); // i
 
// const newString = gameName.substring(0,7)
// console.log(newString);  //Ankit-K


// const anotheString = gameName.slice(-10, 9) //nkit-Kum
// console.log(anotheString);

// const newStringOne = "   hitesh   "
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://ankit.com/hitesh%30choudhary"

console.log(url.replace('%30', '-')) //https://ankit.com/hitesh-choudhary

console.log(url); //https://ankit.com/hitesh%30choudhary

console.log(url.includes('ankit'));  //true
console.log(url.includes('shreya'));  //false

console.log(gameName.split('-')); //[ 'Ankit', 'Kumar' ]
