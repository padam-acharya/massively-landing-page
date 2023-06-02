
const hamburgerEl = document.querySelector(".hamburger")
const sidebarEl = document.getElementById("sidebar")

const topBarEl = document.querySelector(".top-bar")
const midBarEl = document.querySelector(".mid-bar")
const bottomBarEl = document.querySelector(".bottom-bar")


hamburgerEl.addEventListener("click",()=>{
    sidebarEl.classList.toggle("show")
    topBarEl.classList.toggle("top-rotate")
    midBarEl.classList.toggle("mid-rotate")
    bottomBarEl.classList.toggle("bottom-rotate")
})