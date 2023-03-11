const gallery = document.querySelector(".gallery");

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

const main = document.querySelector("main");
main.addEventListener("mousemove", (key) => {
    const text = document.querySelector("div.start");

    text.style.top = "45%";
    text.style.left = "45%";
    text.style.zIndex = "0"
})


document.getElementsByClassName("box")[0].addEventListener('click', (ck) => {
    window.alert("funcionou!");
})