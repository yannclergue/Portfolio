function menu() {
    document.querySelector(".background").classList.toggle("hide")
}

function page() {
    document.querySelector(".background").classList.toggle("hide")
}

document.querySelector("#menuForeground").addEventListener("click", menu)
document.querySelector("#menuBackground").addEventListener("click", page)