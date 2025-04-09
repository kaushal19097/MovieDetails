function startCountdown(seconds) {
    let countdownInterval = setInterval(() => {
        if (seconds > 0) {
            console.log(`Time remaining: ${seconds} seconds`);
            seconds--;
        } else {
            console.log("Countdown Complete!");
            clearInterval(countdownInterval);
        }
    }, 1000);

    let stopCountdownOnKeyPress = () => {
        document.addEventListener("keydown", (event) => {
            if (event.key.toLowerCase() === "s") {
                clearInterval(countdownInterval);
                console.log("Countdown stopped by user!");
            }
        });
    };

    stopCountdownOnKeyPress();
}

startCountdown(10);
