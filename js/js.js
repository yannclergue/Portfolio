const parcours = document.querySelector(".trigger")

window.addEventListener("scroll", () => {
    const {scrollTop, clientHeight} = document.documentElement;

   const topElementToTopViewport = parcours.getBoundingClientRect().top

   if(scrollTop > (scrollTop + topElementToTopViewport).toFixed()) {
    document.querySelector(".animation1").classList.add("active")
    document.querySelector(".animation2").classList.add("active")
    document.querySelector(".animation3").classList.add("active")
   }
})

function appear(){
    document.querySelector(".mobileBack").classList.toggle("hide")
}

function hide(){
    document.querySelector(".mobileBack").classList.toggle("hide")
}

document.querySelector(".mobileFor img").addEventListener("click", appear)
document.querySelector(".mobileBackHead img").addEventListener("click", hide)



