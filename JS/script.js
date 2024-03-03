function DeactivateOverlay(){
    const overaly = document.getElementById("fadein-overlay");
    overaly.style.visibility = "hidden";
}

setTimeout(DeactivateOverlay, 2000);
