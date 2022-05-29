function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navigationList") {
        x.className += " responsive";
    } else {
        x.className = "navigationList";
    }
}