const hamburgesa = document.querySelector(".hamburgesa");
const navMenu = document.querySelector(".nav-menu");

hamburgesa.addEventListener("click", () =>{
    hamburgesa.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelector(".nav-link").forEach(n. addEventListener("click", () => {
    hamburgesa.classList.remove("active");
    navMenu.classList.remove("active");
}))