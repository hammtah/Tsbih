const body=document.querySelector("body");
const countingNumber=document.querySelector(".counting-number");
const tourNumber=document.querySelector(".tour-number");
const clickSound= new Audio("click.wav");
const tourSound=new Audio("tour.wav");

let counter=0;
if(localStorage.getItem("counterNumber")){
    counter=localStorage.getItem("counterNumber");
} 
let tour=0;
if(localStorage.getItem("tourNumber")){
    tour=localStorage.getItem("tourNumber");
} 
let alt=tour;
if(localStorage.getItem("altNumber")){
     alt=localStorage.getItem("altNumber");
} 

console.log(alt)

let max=window.prompt("enter max");
if(!Number(max)) max=100;
console.log(max)


// var dTheme=true;
let theme="white";
if(localStorage.getItem("theme")) theme=localStorage.getItem("theme")

render();

setInterval(checkAndChangeMidnight, 1000);
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("fa-moon")){
        document.querySelector("body").classList.toggle("white-back");
        document.querySelector("body").classList.toggle("dark-back");
        // dTheme=!dTheme;
        if(theme=="white") (theme="dark")
        else if (theme=="dark") (theme="white")
        localStorage.setItem("theme",theme);


    }
    else if(e.target.classList.contains(".tour-number")){
        document.querySelector("body").innerHTML=localStorage.getItem("days")
    }
    else if(e.target.classList.contains("fa-list-ul")){
        window.location.href = 'dh.html';
    }
    else if(e.target.classList.contains("fa-rotate-right")){
            if((confirm("are you sure ?")==true)&&(tour!=0)){
                counter=0;
                tour=0;
            }
        }
        else{
            counter++;
            clickSound.play();
            if(counter>=max) {
                tourSound.play();
                if ("vibrate" in navigator) navigator.vibrate(200);
                counter=0;
                tour++;
                alt++;

            }
        }
    localStorage.setItem("counterNumber",counter);
    localStorage.setItem("tourNumber",tour);
    localStorage.setItem("altNumber",alt);
    saveTourHistory(alt);
    render();
    
})

function render(){
    let aTheme="";
    if(theme=="white") {aTheme="dark";document.querySelector("body").classList.add("white-back");document.querySelector("body").classList.remove("dark-back");}
    else if (theme=="dark") {aTheme="white";document.querySelector("body").classList.add("dark-back");document.querySelector("body").classList.remove("white-back");}

    let renderString="";
    renderString+=`
    <div class="counting-div">
        <h1 class="counting-number " id="counting-number">${counter}   </h1>
        <h2 class="tour-number" id="tour-number">${tour}</h2>
    </div>
    <div class="tour-div ${aTheme}">
        <i class="fa-solid fa-moon"></i>
        <i class="fa-solid fa-rotate-right"></i>
        <i class="fa-solid fa-list-ul"></i>
    </div>
    `
    body.innerHTML=renderString;
}



function saveTourHistory(tour){
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // Months are zero-based, so we add 1
const day = today.getDate();

// Create a string in the format YYYY-MM-DD
const todayDateString = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
localStorage.setItem(todayDateString,tour);
localStorage.setItem("days",localStorage.getItem(todayDateString,tour));

console.log(todayDateString);
}



function checkAndChangeMidnight() {
  const now = new Date();
  
  // Check if it's midnight
  if (now.getHours() === 2 && now.getMinutes() === 5 && now.getSeconds() === 0) {
    // Change the value of your variable
    localStorage.setItem("altNumber",0);
    console.log("It's midnight! Variable updated.");
  }
}

// Set up the interval to check every second (adjust as needed)
