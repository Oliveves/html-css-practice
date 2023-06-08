const toggleBtn = document.querySelector(".navbar-toggleBtn");
const menu = document.querySelector(".navbar-menu");
const icons = document.querySelector(".navbar-icons");

const handleClick = () => {
    menu.classList.toggle("active");
    icons.classList.toggle("active");
}

toggleBtn.addEventListener("click", handleClick);