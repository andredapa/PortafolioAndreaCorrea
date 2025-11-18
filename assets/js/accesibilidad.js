
document.getElementById("btn-daltonismo").addEventListener("click", function () {
    document.body.classList.toggle("daltonismo");
});


document.getElementById("btn-font").addEventListener("click", function () {
    document.body.classList.toggle("font-large");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

document.querySelectorAll(".fade-section").forEach(sec => {
    observer.observe(sec);
});
