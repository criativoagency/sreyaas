const clicky = document.querySelector(".click-here");
const icon = document.querySelector(".social");
const sayhi = document.querySelector(".say-hi button");
const moving = document.querySelector(".moving");
const buttonPro1 = document.querySelector(".button-pro1"); // First button
const buttonPro2 = document.querySelector(".button-pro2"); // Second button
const buttonPro3 = document.querySelector(".button-pro3"); 
function change(event) {
    event.preventDefault(); 

    if (clicky.textContent === "Click here") { 
        // When the button says "Click here"
        moving.style.display = "none";
        sayhi.style.display = "none";
        icon.style.display = "flex";
        clicky.textContent = "Close";
        buttonPro1.style.animation = "none";
        buttonPro2.style.animation = "none";
        buttonPro3.style.animation = "none";
    } else if (clicky.textContent === "Close") {
        // When the button says "Close"
        moving.style.display = "block";
        sayhi.style.display = "block";
        icon.style.display = "none";
        clicky.textContent = "Click here";  
        buttonPro1.style.animation = "";
        buttonPro2.style.animation = "";
        buttonPro3.style.animation = "";
    }
}
