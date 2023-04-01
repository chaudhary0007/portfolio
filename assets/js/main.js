const navMenu =document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navItem = document.querySelectorAll(".nav__item"),
header= document.getElementById("header");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu--open");
    changeIcon();
  });


navItem.forEach((item) => {
    item.addEventListener("click" , () => {
        if(navMenu.classList.contains("nav__menu--open")){
            navMenu.classList.remove("nav__menu--open");
        }
        changeIcon()
    });
});

function changeIcon(){
    if(navMenu.classList.contains("nav__menu--open")){
        navToggle.classList.replace("ri-menu-fill", "ri-close-fill");
    }else{
        navToggle.classList.replace("ri-close-fill","ri-menu-fill");
    }

}


