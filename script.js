let toggleNavStatus = false;

let toggleNav = function () {
    let getNavbar = document.querySelector("#navbar");
    let getBtnToggle = document.querySelector(".btn-toggle-nav");
    let getNavbarUl = document.querySelector("#navbar ul");
    let getNavbarLinks = document.querySelectorAll("#navbar ul li");
    let getNavbarTitle = document.querySelector("h1");
    let getMaindoc = document.querySelector("#main-doc");

    if (toggleNavStatus === false) {
        getNavbarUl.style.visibility = "visible";
        getNavbarTitle.style.visibility = "visible";
        getNavbar.style.width = "300px";
        getNavbarTitle.style.opacity = "0.7";
        getMaindoc.style.marginLeft = "300px";
        
        
        let arrayLength = getNavbarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getNavbarLinks[i].style.opacity = "1";   
        }

        toggleNavStatus = true;
    }
    else if (toggleNavStatus === true) {
        getNavbarUl.style.visibility = "hidden";
        getNavbarTitle.style.visibility = "hidden";
        getNavbar.style.width = "58px";
        getNavbarTitle.style.opacity = "0";
        getMaindoc.style.marginLeft = "80px";
        
        let arrayLength = getNavbarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getNavbarLinks[i].style.opacity = "0";
            
        }

        toggleNavStatus = false;
    }
}

getBtnToggle.addEventListener('click', toggleNav);