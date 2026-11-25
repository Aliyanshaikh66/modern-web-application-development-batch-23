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


function tellme(){
    let user = prompt("Enter Your Name");
    if (user === "Aliyan"){
        console.log("Welcome : " + user);
    }
    else{
        console.log("Not Match");
        
    }
}