//Slide-show
const buttons = document.querySelectorAll("[data-carousel-button]")
// Image carousel
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

window.onload = function() {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');

    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 0.4; 
    }

    setCanvasSize();  
    window.addEventListener('resize', setCanvasSize);  

    const characters = '01';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#09c3b3'; 
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
        ctx.fillStyle = '#09c3b3';
        ctx.font = '3em Quantico';
        const message = "Hire me";
        const textWidth = ctx.measureText(message).width;
        const textX = (canvas.width - textWidth) / 2;
        const textY = (canvas.height / 2) + 24;
        ctx.fillText(message, textX, textY);
    }

    setInterval(draw, 33); 
};
