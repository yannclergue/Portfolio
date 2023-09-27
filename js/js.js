function appear(){
    document.querySelector(".mobileBack").classList.toggle("hide")
}

function hide(){
    document.querySelector(".mobileBack").classList.toggle("hide")
}

document.querySelector(".mobileFor img").addEventListener("click", appear)
document.querySelector(".mobileBackHead img").addEventListener("click", hide)