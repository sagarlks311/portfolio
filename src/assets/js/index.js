window.onload = function () {

  const menu = document.querySelector(".menu");
  const navOpen = document.querySelector(".hamburger");
  const navClose = document.querySelector(".close");
  const navBar = document.querySelector(".nav");

  const navLeft = menu.getBoundingClientRect().left;
  navOpen.addEventListener("click", () => {
    if (navLeft < 0) {
      menu.classList.add("show");
      document.body.classList.add("show");
      navBar.classList.add("show");
    }
  });

  navClose.addEventListener("click", () => {
    if (navLeft < 0) {
      menu.classList.remove("show");
      document.body.classList.remove("show");
      navBar.classList.remove("show");
    }
  });

  const links = [...document.querySelectorAll(".scroll-link")];
  links.map(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      // const id = e.target.getAttribute("href").slice(1);
      // const element = document.getElementById(id);
      // const fixNav = navBar.classList.contains("fix-nav");
      // let position = element.offsetTop - navHeight;

      // window.scrollTo({
      //   top: position,
      //   left: 0,
      // });

      navBar.classList.remove("show");
      menu.classList.remove("show");
      document.body.classList.remove("show");
      
     
    });
  });

}