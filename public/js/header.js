/* header behavior script */

window.onload = () => {
    /* const and variables */
    const burger_menu_icon = document.getElementById("burger_menu_icon");
    const close_nav_icon = document.getElementById("close_nav_menu");
    const header_title = document.getElementById("header_title");
    const navbar = document.getElementById("navigation");
    const navbar_ul = navbar.querySelectorAll("ul");
    const header = document.getElementById("header");
    let actual_section = 1;
    const changing_sections_count = document.getElementsByClassName("changing_sections").length;
    const btns_next = document.querySelectorAll(".btn_next");
    const btns_prev = document.querySelectorAll(".btn_prev");

    /* functions */

    /**
     * hidde all the .changing_sections except the one which is wanted
     * @param actual_section
     */
    function showChangingSection(actual_section){
        const changing_sections = document.querySelectorAll(".changing_sections");

        for(let i = 0; i < changing_sections.length ; i++){
            changing_sections[i].style.display = "none";
        };

        document.querySelector("#section" + actual_section).style.display = "block";
    }

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

    /* click on changing section button */
    for(let i=0; i < btns_next.length ; i++){
        /* .btn_next */
        btns_next[i].addEventListener("click", function (){
            /* if the actual section is the last, then we come back to the first one */
            if(actual_section >= changing_sections_count){
                actual_section = 1;
            }else{ /* else we come to the next section */
                actual_section += 1;
            }

            /* all the changing sections are hidden except the wanted section */
            showChangingSection(actual_section);
        })

        /* .btn_prev */
        btns_prev[i].addEventListener("click", function (){
            /* if the actual section is the first, then we come back to the last one */
            if(actual_section <= 1){
                actual_section = changing_sections_count;
            }else{ /* else we come to the previous section */
                actual_section -= 1;
            }

            /* all the changing sections are hidden except the wanted section */
            showChangingSection(actual_section);
        })
    }

}