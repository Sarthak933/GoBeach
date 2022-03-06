(function(){
    "use strict";

    var body = document.querySelector("body")
    var dayNight = document.querySelector(".dayNight")
    var menuToggle = document.querySelector(".menuToggle")
    var navigation = document.querySelector(".navigation")

    dayNight.onclick = function() {
        body.classList.toggle("dark")
        dayNight.classList.toggle("active")
    }

    menuToggle.onclick = function() {
        menuToggle.classList.toggle("active")
        navigation.classList.toggle("active")
    }
})();