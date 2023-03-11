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
