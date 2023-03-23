const bar = document.getElementById("bar");
const close = document.querySelector(".close");

const nav = document.getElementById("navbar");

bar.addEventListener("click", () => {
        nav.classList.add('active');
    })

close.addEventListener("click", () => {
        nav.classList.remove('active');
    })


