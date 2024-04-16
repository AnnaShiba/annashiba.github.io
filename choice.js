document.addEventListener('DOMContentLoaded', function() {
    const redButton = document.getElementById('redButton');
    const blueButton = document.getElementById('blueButton');
    const modal = document.getElementById('myModal');
    const modalText = document.getElementById('modalText');
    const span = document.getElementsByClassName("close")[0];

    const choiceMade = localStorage.getItem('choiceMade');

    if (choiceMade) {
        function showAlert(message) {
            modalText.textContent = message;
            modal.style.display = "block";
        }

        redButton.addEventListener('click', function(event) {
            event.preventDefault();
            showAlert('You already made your choice!');
        });

        blueButton.addEventListener('click', function(event) {
            event.preventDefault();
            showAlert('You already made your choice!');
        });

        span.onclick = function() {
            modal.style.display = "none";
        };

        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    } else {
        redButton.addEventListener('click', function() {
            localStorage.setItem('choiceMade', 'red');
            window.location.href = 'red.html';
        });
        blueButton.addEventListener('click', function() {
            localStorage.setItem('choiceMade', 'blue');
            window.location.href = 'blue.html';
        });
    }
});





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
        const message = "The choice is yours";
        const textWidth = ctx.measureText(message).width;
        const textX = (canvas.width - textWidth) / 2;
        const textY = (canvas.height / 2) + 24;
        ctx.fillText(message, textX, textY);
    }

    setInterval(draw, 33); 
    document.addEventListener('DOMContentLoaded', function() {
    const redButton = document.getElementById('redButton');
    const blueButton = document.getElementById('blueButton');

    // Check if a choice has already been made
    const choiceMade = localStorage.getItem('choiceMade');

    if (choiceMade) {
        // Disable buttons and alert if clicked again
        redButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor behavior
            alert('You already made your choice!');
        });
        blueButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor behavior
            alert('You already made your choice!');
        });
    } else {
        // Handle the red button click
        redButton.addEventListener('click', function() {
            localStorage.setItem('choiceMade', 'red');
            window.location.href = 'red.html'; // Redirect to red.html
        });
        // Handle the blue button click
        blueButton.addEventListener('click', function() {
            localStorage.setItem('choiceMade', 'blue');
            window.location.href = 'blue.html'; // Redirect to blue.html
        });
    }
});

};
