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
let max=window.prompt("enter max");
if(!Number(max)) max=100;
console.log(max)
render();



document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("fa-moon")){
        document.querySelector("body").classList.toggle("white-back");
        document.querySelector("body").classList.toggle("dark-back");
    }
    else if(e.target.classList.contains("fa-rotate-right")){
            if(confirm("are you sure ?")==true){
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
            }
        }
    localStorage.setItem("counterNumber",counter);
    localStorage.setItem("tourNumber",tour);

    render();
    
})


function render(){
    let renderString="";
    renderString+=`
    <div class="counting-div">
        <h1 class="counting-number " id="counting-number">${counter}   </h1>
    </div>
    <div class="tour-div">
        <i class="fa-solid fa-moon"></i>
        <h2 class="tour-number" id="tour-number">${tour}</h2>
        <i class="fa-solid fa-rotate-right"></i>
    </div>
    `
    body.innerHTML=renderString;
}

