// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("modal");
    var btn = document.querySelector(".description-cpu-button");
    var span = document.querySelector(".close-button");

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
