document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("x-menu");
    const dropdown = document.getElementById("dropdown");

    menuIcon.addEventListener("click", function() {
        dropdown.classList.toggle("active");
    });

    closeIcon.addEventListener("click", function() {
        dropdown.classList.remove("active");
    });

    document.addEventListener("click", function(event) {
        if (!dropdown.contains(event.target) && !menuIcon.contains(event.target)) {
            dropdown.classList.remove("active");
        }
    });
});