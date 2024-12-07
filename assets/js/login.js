let forgotPage = document.querySelector(".forgot-page")
let forgoten = document.querySelector(".forgotten")
forgoten.addEventListener("click",(e)=>{
    e.preventDefault()
forgotPage.classList.remove("none")
})
let close = document.querySelector(".close")
close.addEventListener("click",(e)=>{
    e.preventDefault()
forgotPage.classList.add("none")

})