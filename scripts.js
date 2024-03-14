document.addEventListener("DOMContentLoaded", function() {
    const menuTitle = document.getElementById("menuTitle");
    const navMenu = document.getElementById("navMenu");

    menuTitle.addEventListener("click", function() {
        navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
    });
});
