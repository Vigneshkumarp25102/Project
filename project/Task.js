function openNav() {
    const sidebar = document.getElementById("mySidebar");
    const sidebarTextElements = sidebar.getElementsByClassName("d-none");
    const main = document.getElementById("main");
    const navButtonIcon = document.getElementById("navButtonIcon");
    const sidebar3 = document.getElementById("sidebar3");
    const isSidebarOpen = sidebar.style.width === "250px";

    if (window.innerWidth >= 992) { 
        if (isSidebarOpen) {
            sidebar.style.width = "70px";
            main.style.marginLeft = "0px";
            sidebar3.style.width="68%";
            for (let i = 0; i < sidebarTextElements.length; i++) {
                sidebarTextElements[i].classList.remove("d-lg-inline");
            }
            navButtonIcon.classList.remove("fa-chevron-left");
            navButtonIcon.classList.add("fa-chevron-right");
            navButtonIcon.onclick = null; 
        } else {
            sidebar.style.width = "250px";
            main.style.marginLeft = "0px";
            for (let i = 0; i < sidebarTextElements.length; i++) {
                sidebarTextElements[i].classList.add("d-lg-inline");
            }
            navButtonIcon.classList.remove("fa-chevron-right");
            navButtonIcon.classList.add("fa-chevron-left");
            navButtonIcon.onclick = null; 
        }
    }
}
function toggleSidebar() {
    var sidebar = document.getElementById("main");
    sidebar.style.display = (sidebar.style.display === "none") ? "block" : "none";
}


function toggleNav() {
    const sidebar = document.getElementById("mySidebar");
    const sidebar3 = document.getElementById("sidebar3");
    const main = document.getElementById("main");
    const sidebarTextElements = main.getElementsByClassName("d-none");
    const navButtonIcon = document.getElementById("navButtonIcon1");

    const isMainOpen = main.style.width === "70px";

    if (isMainOpen) {
        main.style.width = "320px";
        main.style.marginLeft = "0px";

        for (let i = 0; i < sidebarTextElements.length; i++) {
            sidebarTextElements[i].classList.add("d-lg-inline");
        }

        navButtonIcon.classList.remove("fa-chevron-right");
        navButtonIcon.classList.add("fa-chevron-left");
        sidebar3.style.width="57%";
    } else {
        main.style.width = "70px";
        main.style.marginRight = "0px";

        for (let i = 0; i < sidebarTextElements.length; i++) {
            sidebarTextElements[i].classList.remove("d-lg-inline");
        }

        navButtonIcon.classList.remove("fa-chevron-left");
        navButtonIcon.classList.add("fa-chevron-right");
        sidebar3.style.width="77%";
    }
}
(() => {
    let year_satart = 1940;
    let year_end = (new Date).getFullYear(); 
    let year_selected = "Year";

    let option = '';
    option = '<option value="">Year</option>'; 

    for (let i = year_satart; i <= year_end; i++) {
        let selected = (i === year_selected ? ' selected' : '');
        option += '<option value="' + i + '"' + selected + '>' + i + '</option>';
    }

    document.getElementById("year").innerHTML = option;
})();

(() => {
    let day_selected = "Day"; 
    let option = '';
    let day = '';
    option = '<option value="">Day</option>'; 
    for (let i = 1; i < 32; i++) {
        day = (i <= 9) ? '0' + i : i;


        let selected = (i === day_selected ? ' selected' : '');
        option += '<option value="' + day + '"' + selected + '>' + day + '</option>';
    }
    document.getElementById("day").innerHTML = option;
})();

(() => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month_selected = "Month";
    let option = '';
    let month_value = '';
    option = '<option value="">Month</option>';

    for (let i = 0; i < months.length; i++) {
        let month_number = (i + 1);

        month_value = (month_number <= 9) ? '0' + month_number : month_number;



        let selected = (i === month_selected ? ' selected' : '');
        option += '<option value="' + '"' + selected + '>' + months[i] + '</option>';
    }
    document.getElementById("month").innerHTML = option;
})();

