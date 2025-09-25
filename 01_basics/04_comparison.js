// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2<=1);
// console.log(2 == 1);
// console.log(1 != 1);



// ----------------can't use this type of conversion --------
// console.log("2" > 1);
// console.log("02" > 1);



// console.log(null > 0);  //false
// console.log(null == 0);  //false
// console.log(null >= 0);  //true

/*the reason is that an qualtiy check == and comparison 
<, >, >=, <=, work diferently.
Comparison convert null to a number , treating it as 0.
that's why (3) null >=0 is true and (1) null > 0 is false.
*/

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false


// -----------------------------------------------------------

// === 

// console.log("2" == 2); //true
// console.log("2" === 2); //false
