// Array
// let name = "Aliyan";
// let age = 20;
// let Course = "Modern Web";
// let City = "Karachi";


// let userno = +prompt("Guess No 1 to 5")
// let cities = ["Karachi", "Lahore", "Islamabad", "KPK", "Quetta"];
// if ( userno <= 5 ){
//     alert("Great");
//     console.log("Welcome to Karachi");
// } 
// else{
//     console.log("Please Select Right No Under 1 to 5");
// }
// console.log(cities);

//Find the length
// console.log(cities.length);
// //Find the Index
// console.log(cities[userno]);

//Adding and Removing method

// let arr = ["Muhammad" , "Aliyan"]
// console.log(arr);
// let username = prompt("Enter Your New Name")
// arr.pop();
// arr.push(username);
// console.log(arr);

// let users = ["Talha", "Aliyan", "Usman"];
// users.shift();
// users.unshift("Asif")
// console.log(users);

// let user = prompt("Enter your Country")
// let countries = ["Pakistan","India","China","UAE","KSA"]
// countries.splice(2 , 3, user)
// console.log(countries);

// let countries = ["Pakistan","India","China","UAE","KSA"];
// let newcountries = countries.slice(2, 4);
// newcountries.splice(1, 0 , "Pakistan")
// console.log(newcountries);

//For Loop


// console.log("For Loop");
// let usercity = prompt("Enter Your City")
// let cities = ["Karachi", "Lahore", "Quetta", "Hyderabad"];
// let useriv = +prompt("Enter Your Initial Number Start a loop")
// let userivlength = +prompt("Enter Your Initial Number end a loop")
// let tableNo = +prompt("Enter Your table Number");
// for (var i = useriv; i <= userivlength; i++){
//     console.log(tableNo + "X" + i + "=" + tableNo * i);
    
//     // if(usercity === cities[i]){
//     //     console.log("It's Found");
//     //     break;
//     // }
// }

// Chapter 26

// let number = 75.9;
// // console.log(Math.round(number));
// // console.log(Math.ceil(number));
// // console.log(Math.floor(number));
// var randomNumber = Math.random();
// console.log(randomNumber * 12345);


//for loop Nested
//  var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];

//  var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];

//  var fullNames = [];

//  for (var i = 0; i < firstNames.length; i++) {

//  for (var j = 0; j < lastNames.length; j++) {
//  fullNames.push(firstNames[i] + lastNames[j]);
 
// }
// console.log(fullNames);

// }

// let username = prompt("Enter Email");
// console.log(username.toLowerCase());
// console.log(username.toUpperCase());

//String Replaceing 
// let text = "World War II";
//  for (var i = 0; i < text.length; i++) {
// if (text.slice(i, i + 12) === "World War II") {
//  text = text.slice(0, 1) + "the Second World War" + text.slice(i + 12);
//  }
//  }
//  console.log(text);
// let text = "To replace every match, pass a regular expression with the global (g) flag, or use the";
// let updated = text.replace("flag", "SMIT@123");
// console.log(updated);

//Rounding Number
// let kitkat = 399.80;
// console.log(Math.floor(kitkat));
// console.log(Math.ceil(kitkat));

//Random Number Generate 
// let random = Math.random();
// let multi = random * 12232;
// console.log(multi.toFixed(6));

//Chapter 28
// let num = "Muhammad" + "Aliyan";
// console.log(num);

//Chapter 29
// let num = prompt("Enter Your Age");
// let add_num = parseInt(num) + 1;
// console.log(add_num);
// let usernmae = prompt("Enter Your Name");
// console.log(Number(usernmae));

// console.log(parseFloat(userpercentage));

// let age = 17;
// console.log(age.toString());

// let TodayDate = new Date();
// console.log(TodayDate);

//Chapter 31 (Get And Set Date and Time)

// let TodayDate = new Date();
// let result = TodayDate.toString().slice(0, 25);
// console.log(result);

// console.log(TodayDate);
// console.log(TodayDate.getDate(), TodayDate.getMonth(), TodayDate.getFullYear());
