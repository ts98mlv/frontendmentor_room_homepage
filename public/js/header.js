/* header behavior script */

window.onload = () => {
    /* const and variables */
    const burger_menu_icon = document.getElementById("burger_menu_icon");
    const close_nav_icon = document.getElementById("close_nav_menu");
    const header_title = document.getElementById("header_title");
    const navbar = document.getElementById("navigation");
    const navbar_ul = navbar.querySelectorAll("ul");
    const header = document.getElementById("header");

    /* click on burger_menu_icon*/
    burger_menu_icon.addEventListener("click", function (element){
        element.preventDefault();
        /*hide header elements */
        header_title.style.display = "none";
        burger_menu_icon.style.display = "none";

        /* show nav bar elements */
        navbar.style.display = "flex";

        /* change header background color and change its height */
        header.style.background = "hsl(0, 0%, 100%)";
    })

    /* click on close_nav_menu */
    close_nav_icon.addEventListener("click", function (element){
        element.preventDefault();
        /*show header elements */
        header_title.style.display = "flex";
        burger_menu_icon.style.display = "flex";

        /* hide nav bar elements */
        navbar.style.display = "none";

        /* change header background color and change its height */
        header.style.background = "none";
    })
}