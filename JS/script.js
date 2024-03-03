const bottomSection = document.getElementById("bottom-section");
const myName = document.getElementById("name");

function Deactivate(){
    bottomSection.style.display = "none";
    myName.style.display = "none";
}

function Activate(){
    bottomSection.style.display = "flex";
    myName.style.display = "flex";
}

Deactivate();
setTimeout(Activate, 2000);
