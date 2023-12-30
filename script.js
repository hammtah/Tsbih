document.querySelector("body").classList.add(`${localStorage.getItem("theme")}-back`);
document.querySelector(".inpt").classList.add(`${localStorage.getItem("theme")}-inpt`);



let arr=[];
if(localStorage.getItem("vals")) {
    arr=JSON.parse(localStorage.getItem("vals"));
    render(arr);
}
let all=document.querySelectorAll(".dh");
for(dh of all){
    dh.classList.add(`${localStorage.getItem("theme")}-dh`);

}

const form=document.querySelector("form");
const inpt=document.querySelector(".inpt");
form.addEventListener("submit",function(e){
    e.preventDefault();
    if(inpt.value){
        arr.push(inpt.value);
        localStorage.setItem("vals",JSON.stringify(arr))
        inpt.value="";
        render(arr);
    }
})

document.addEventListener("click",function(e){
    if(e.target.classList.contains("remove")){
        arr.splice(Number(e.target.dataset.id),1);        
        console.log(arr)
        localStorage.setItem("vals",JSON.stringify(arr))
        render(arr);
    }
})

function render(arr){
    let renderString="";
    for(let i=0;i<arr.length;i++){
        renderString+=`
        <div class="dh">
            <h2 class="val">${arr[i]}</h2>
            <i class="delete remove fa-solid fa-circle-minus" data-id="${i}"></i> 
        </div>
    `;
               
    }

    document.querySelector("main").innerHTML=renderString;

}