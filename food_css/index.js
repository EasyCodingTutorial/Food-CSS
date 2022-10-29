let SearchForm = document.querySelector(".SearchForm");
let Navbar = document.querySelector(".navbar");

document.querySelector("#MenuBtn").onclick = () => {
  Navbar.classList.toggle("active");
  SearchForm.classList.remove("active");
  ThemeToggle.classList.remove("active");
};

document.querySelector("#SearchBtn").onclick = () => {
  Navbar.classList.remove("active");
  ThemeToggle.classList.remove("active");
  SearchForm.classList.toggle("active");
};

// When Window Scroll Then Change The Color of Navbar a Tag
let Section = document.querySelectorAll("section");
let NavLink = document.querySelectorAll("header .navbar a");

window.onscroll = () => {
  ThemeToggle.classList.remove("active");
  Navbar.classList.remove("active");
  SearchForm.classList.remove("active");

  // When Window Scroll Then Change The Color of Navbar a Tag
  Section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      NavLink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header .navbar a[href*=" + id + "] ")
          .classList.add("active");
      });
    }
  });
};

// Theme Toggle

let ThemeToggle = document.querySelector(".themeToggle");
let ToggleBtn = document.querySelector(".ToggleBtn");

ToggleBtn.onclick = () => {
  ThemeToggle.classList.toggle("active");
  Menu.classList.remove("fa-times");
  Navbar.classList.remove("active");
  SearchForm.classList.remove("active");
};
document.querySelectorAll(".themeToggle .themeBtn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--main", color);
  };
});
