// ----------------------------GLOBAL EVENTS-----------------------------

// ---------------BUTTONS

const navMenuBtn = document.querySelector("#mainNav_sidebarBtn");
const clearLSBtn = document.querySelector("#clearLSBtn");

// ---------------ELEMENTS

const sidebar = document.querySelector("#sidebar");

// ---------------LISTENERS

toggleDisplay(navMenuBtn, sidebar);

clearLSBtn.addEventListener("click", e => {
    console.log("Cleared");
    localStorage.clear();
})

function toggleDisplay(button, element1, element2, element3, element4) {
    button.addEventListener("click", e => {
        console.log("yes");
        element1.classList.toggle("off");
        if (element2){
            element2.classList.toggle("off");
        }
        if (element3){
            element3.classList.toggle("off");
        }
        if (element4){
            element4.classList.toggle("off");
        }
    })
}