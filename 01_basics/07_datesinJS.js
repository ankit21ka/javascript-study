// dates

let myDate = new Date()
// console.log(myDate.toString()); 
//Sat Oct 11 2025 07:08:03 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString());  //Sat Oct 11 2025
// console.log(myDate.toISOString());   //2025-10-11T07:17:01.945Z
// // console.log(myDate.toJSON());       //2025-10-11T07:18:05.903Z
// console.log(myDate.toLocaleDateString());  //10/11/2025
// console.log(myDate.toLocaleString());   //10/11/2025, 7:18:05 AM
// console.log(myDate.toTimeString());   //07:18:05 GMT+0000 (Coordinated Universal Time)


// console.log(typeof myDate); //object




// let myCreateDate = new Date(2025, 0, 25)
// console.log(myCreateDate.toDateString());  //Sat Jan 25 2025



// let myCreateDate = new Date(2003, 6, 21, 3);
// console.log(myCreateDate.toLocaleString());




let myCreateDate = new Date("10-11-2025");
// console.log(myCreateDate.toLocaleString());



let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()

// console.log(newDate);     //2025-10-11T08:42:11.457Z
// console.log(newDate.getDate());  //11
// console.log(newDate.getDay());   // 6
// console.log(newDate.getFullYear());    //2025
// console.log(newDate.getHours());       //8
// console.log(newDate.getMilliseconds());    //457
// console.log(newDate.getMinutes());     //42
// console.log(newDate.getMonth());     //9
// console.log(newDate.getSeconds());    //11



newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: ""
})

console.log(newDate);

