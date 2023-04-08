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

// header
window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("header--scroll");
    } else {
      header.classList.remove("header--scroll");
    }
  });
  
  // ScrollReveal animations
  const sr = ScrollReveal({
    duration: 2000,
    distance: "100px",
    delay: 300,
    reset: false,
  });
  
  sr.reveal(".home__content, .about__content");
  sr.reveal(".home__img", { origin: "top" });
  
  sr.reveal(
    ".home__info-wrapper, .skills__title, .skills__content, .qualification__name, .qualification__item, .service__card, .project__content, .footer__content",
    {
      delay: 500,
      interval: 100,
    }
  );
  
  sr.reveal(".qualification__footer-text, .contact__content", {
    origin: "left",
  });
  
  sr.reveal(".qualification__footer .btn, .contact__btn", { origin: "right" });