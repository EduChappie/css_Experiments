const gallery = document.querySelector(".gallery");

//Efeito do Mouse
gallery.addEventListener('mousemove', (key) => {

    const newX = key.clientX,
          newY = key.clientY;

    const xDecimal = newX / window.innerWidth,
          yDecimal = newY / window.innerHeight;

    const maxX = gallery.offsetWidth - window.innerWidth,
          maxY = gallery.offsetHeight - window.innerHeight;

    const panX = maxX*xDecimal*-1;
    const panY = maxY*yDecimal*-1;

    gallery.animate({
        transform: `translate(${panX}px, ${panY}px)`
    }, {
        duration: 4000,
        fill: "forwards",
        easing: "ease"
    })
});

//Efeito para Título e botão
const main = document.querySelector("main");
main.addEventListener("mousemove", (key) => {
    const text = document.querySelector("div.start");

    text.style.top = "45%";
    text.style.left = "45%";
    text.style.zIndex = "0"
})


document.querySelector("#buttonStart").addEventListener('click', (ck) => {
    window.open("https://github.com/EduChappie");
    window.alert("wow, você clicou no botão 😱");
})


function menubar(t) {
    const menu = document.querySelector(".menu");
    if (t) {
        menu.style.display = "block";
    } else { menu.style.display = "none"; }
}

var barrStatus = false;
document.querySelector("#config").addEventListener('click', (ck) => {
    if (barrStatus) { 
        barrStatus = false;
    } else { 
        barrStatus = true; 
    }
    menubar(barrStatus)
})

