const countdownElement = document.getElementById('timer');

let seconds = 10;

function updateCountdown() {
    if(seconds > 0) {
        countdownElement.textContent = seconds + ' segundos restantes';
        seconds--;    
        setTimeout(updateCountdown, 1000);
    } else {
        countdownElement.textContent = 'Lançaaaaaaaaaar!'
    }
} 

updateCountdown();