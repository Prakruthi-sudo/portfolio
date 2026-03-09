// Scroll Progress Bar

window.addEventListener("scroll", function () {

let scrollTop = document.documentElement.scrollTop;

let height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

let scrolled = (scrollTop / height) * 100;

document.getElementById("progress-bar").style.width = scrolled + "%";

});


// Certificate button click

document.querySelectorAll(".certificate-card button").forEach(button => {

button.addEventListener("click", () => {
alert("Certificate link goes here!");
});

});


// Mobile menu toggle

function toggleMenu(){
document.getElementById("navLinks").classList.toggle("show");
}