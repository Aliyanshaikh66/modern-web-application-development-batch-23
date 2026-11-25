//Chapter 31 to 34 (Get And Set Date and Time)

// let TodayDate = new Date();
// // let day = TodayDate.getDay().toString();
// // console.log(day);

// let result = TodayDate.toString().slice(4, 15);
// console.log(result);
// console.log(TodayDate);
// console.log(TodayDate.getDate(), TodayDate.getMonth(), TodayDate.getFullYear());

// let d = new Date();
// let e = d.setMonth(11);
// console.log(e);
// let today = new Date();
// var doomsday = new Date("December 15, 2026");
// console.log(today);
// console.log(doomsday);


// function tellme(){
//     let user = prompt("Enter Your Name");
//     if (user === "Aliyan"){
//         console.log("Welcome : " + user);
//     }
//     else{
//         console.log("Not Match");
        
//     }
// }
// alert("Hello world");
// let now = new Date();
// let day = now.getDay();
// let hours = now.getHours();
// let min = now.getMinutes();
// console.log("Current Time is : "  + hours + ":" + min);
// console.log(min);
// console.log(now);

//Chapter 35 Functions

// Addition Function
// let num1 = +prompt("Enter Your First Number"); 
// let num2 = +prompt("Enter Your Second Number");
// console.log(num1 + num2);

// addition();

// let num = 0;
// let arr = ["Apple", "Banana"];
// console.log(arr);

// function ADD(){
    // let fruitname = prompt("Enter Your Fruit Name");
    // arr.push(fruitname);
    // arr.pop();
    // console.log(arr);
    // console.log(arr);
    // let Name = prompt("Enter Your Name")
// }
// user()

// let user = prompt("Enter Your Name") 
// let age =  parseInt(prompt("Enter Your Age"));
// function variable(){
//     if (user === "Aliyan" && age === 22){
//         console.log("User Verifed");
//     }else{
//         console.log("User Not Found"); 
//     }    
// }
// variable();

// let num1 = +prompt("Enter Your Number 1")
// let num2 = +prompt("Enter Your Number 2")
// function Addition(){
//     console.log(num1 + num2);
// }
// function Subtraction(){
//     console.log(num1 - num2);
// }
// function Multipication(){
//     console.log(num1 * num2);
// }
// function Devision(){
//     console.log(num1 / num2);
// }

//parameter

// function greet(first,last) { //parameter
//   return first + " " + last ;
// }
// greet(); //Arrgument
// console.log(user);


// function myfunction(){
//   console.log("Hello I am Function");
// }
// myfunction();

// let first = 5;
// let last = 25;


// function para(){
//   return first + last
  
// }
// console.log(para());

// function userdata(){
//   return {
//     name: "Aliyan",
//     role: "Developer"
//   }

// }
// console.log(userdata());

// async function fetchPrice() {
//   const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={Enter your api key}");
//   const data = await response.json();
//   return data.description;
// }

// async function displayPrice() {
//   const description = await fetchPrice();
//   if (description !== undefined && description !== null) {
//     console.log("Product Price:", description);
//   } else {
//     console.log("Price available nahi hai.");
//   }
// }
// displayPrice();

// async function weathercheck() {
//   const lon = 10.99;
//   let apiKey = "Enter your api key";
//   const response = await fetch(`https://openweathermap.org{lat}&lon=${lon}&appid=${apiKey}&units=metric`);
//   const data = await response.json();
//   console.log(data);
// }

// weathercheck();


// let apiKey = "Enter your api key";
// let lat = 44.34;
// let lon = 10.99;
// let url = `https://openweathermap.org{lat}&lon=${lon}&appid=${apiKey}&units=metric`;
// let son = url.json();
// console.log(son);



// async function getWeather() {
//   let apikey = "Enter Your API Key"; // profile section
//   let findweather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apikey}&units=metric`);
//   let convert = await findweather.json();
//   console.log("Temperature :"+convert.main.temp);
//   console.log("pressure :"+convert.main.pressure);
//   console.log("humidity : "+convert.main.humidity);
// }
// getWeather();

// local and global function

// global
// let user = prompt("Enter Your Name");

// function userinfo(){
//     //local 
//     let user = prompt("Enter Your Name");
//     console.log(user);
// }


// function fetchPrice() {
//   const response =  fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={Enter your api key}");
//   const data =  response.json();
//   return data.description;
// }

// function displayPrice() {
//   const description =  fetchPrice();
//   if (description !== undefined && description !== null) {
//     console.log("Product Price:", description);
//   } else {
//     console.log("Price available nahi hai.");
//   }
// }
// displayPrice();

//Switch Case Statement

// let dayOfWk = +prompt("Enter a Days of Week Name");
//  switch(dayOfWk) {
//  case 123 :
//  alert("Whoopee");
//  break;
//  case "Sun" :
//  alert("Whoopee");
//  break;
//  case "Fri" :
//  alert("TGIF!");
//  break;
//  default :
//  alert("Shoot me now!");
//  }

// switch ==> if 
// case ==> elseif
// default ==> else

// while and dowhile loop
// while first check the condition them run
// do while first Time run without check condition then again run


// for (var i = 1; i <= 5; i++)
//     {
//         console.log(i); //statement
//     } 

// let i = 1;
// while(i < 10){
//     console.log(i);
//     i++;  
// }

//Do while 

// let i = 1;
// do{
//     console.log(i); //1
//     i++; //2
// } while(i < 10);

// const name = "Aliyan"
// var name1 = "Faizan"
// console.log(name);


// Practice 
// if else statement
// array
// for loop
// Functions
// switch case
// while loop and do while loop
