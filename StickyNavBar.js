let nav = document.querySelector("nav")
console.log(nav)
let home = document.querySelector(".home")
console.log(home)
let previous = window.scrollY;
console.log(previous)


window.addEventListener("scroll",()=>
{
    if(window.scrollY >= 300)
    {
        nav.classList.add("active");  
        home.classList.remove("home")  
        home.classList.add("liactive");
    }
    else
    {
        nav.classList.remove("active");    
        home.classList.remove("liactive");
        home.classList.add("home") 
    }
})


