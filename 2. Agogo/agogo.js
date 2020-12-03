let countdown;
const timerDisplay = document.querySelector('.timer-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[Data-time]');


function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if(secondsLeft <= 0) {
            clearInterval(countdown);
            return;
        }
        console.log(secondsLeft);
        displayTimeLeft(secondsLeft);
    }, 1000);
} 

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderseconds = seconds % 60;  
    const display = `${minutes}:${remainderseconds < 10 ? '0' : ''}${remainderseconds}`;
    document.title = display;
    console.log(display);
    timerDisplay.textContent = display;    
} 

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjusteHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${adjusteHour}:${minutes < 10 ? '0' : ''}${minutes}`;

}

function startTimer() {
    let seconds = parseInt(this.dataset.time)
    console.log(seconds);
    timer(seconds)

}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
})