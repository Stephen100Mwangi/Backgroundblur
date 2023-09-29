const contEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const popEl = document.querySelector(".pop");
const closeEl = document.querySelector(".close");

btnEl.addEventListener("click",()=>{
    contEl.classList.add("active");
    popEl.classList.remove("active");
})
closeEl.addEventListener("click",()=>{
    contEl.classList.remove("active");
    popEl.classList.add("active");
})