const dynamicTest = document.querySelector(".texteDefil span")
const words = ["Codeur", "Rédacteur", "Joueur"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex)
    dynamicTest.textContent = currentChar;
    dynamicTest.classList.add("stop-blinking")
    console.log(currentWord, currentChar)

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100)
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 80)
    } else {
        isDeleting = !isDeleting;
        dynamicTest.classList.remove("stop-blinking")
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200)
    }
}

typeEffect();


// function menu() {
//     document.querySelector(".background").classList.toggle("hide")
// }

// function page() {
//     document.querySelector(".background").classList.toggle("hide")
// }

// document.querySelector("#menuForeground").addEventListener("click", menu)
// document.querySelector("#menuBackground").addEventListener("click", page)

