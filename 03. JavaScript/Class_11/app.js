
// function login(){
//     let user = prompt("Enter Your Name");
//     let password = prompt("Enter Your Password");
//     if (user === "Aliyan" && password === "Aliyan123"){
//         window.location.href = "https://www.saylaniit.com";
//         console.log("Login Sucessful");

//     }else{
//         console.log("Invalid Crdentials");

        
//     }
// }


// let apikey = "128484d0e626477f90fcc8847a28aa56";
// function

// let apiKey = "";
// let lon = 10.99;
// let url = `https://openweathermap.org{lat}&lon=${lon}&appid=${apiKey}&units=metric`;
// let son = url.json();

async function getWeather() {
  let apikey = "128484d0e626477f90fcc8847a28aa56"; // profile section
//   let city = prompt("Enter Your City Name");
  let country = prompt("Enter Your Country Name");
  let findweather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apikey}&units=metric`);
  let convert = await findweather.json();
  console.log(convert);

//   document.write("Temperature :"+convert.main.temp);
//   console.log("pressure :"+convert.main.pressure);
//   console.log("humidity : "+convert.main.humidity);
//   console.log("sea_level : "+convert.main.sea_level);
}
getWeather();