export default {
    data() {
        return {
            customTime: {
                hours: 0,
                minutes: 0,
                seconds: 0,
            },
            hours: 0,
            minutes: 5,
            seconds: 0,
            timerId: null,
        }
    },
    methods: {
        getCorrectNumberView(num) {
            return num < 10 ? `0${num}` : num;
        },
        startTimer() {
            if (this.timerId === null) {
                let finishDate = this.getFinishDate;
                this.timerId = setInterval(() => {
                    let difference = new Date(finishDate - new Date());
                    if (+difference <= 0) {
                        this.stopTimer();
                        return;
                    }
                    this.setTime(difference.getUTCHours(), difference.getUTCMinutes(), difference.getUTCSeconds());
                }, 200);
            }
        },
        stopTimer() {
            this.clearTimer();
            alert('The time is out');
        },
        pauseTimer() {
            // зупиняєм поточний інтервал
            this.clearTimer();
        },
        clearTimer() {
            clearInterval(this.timerId);
            this.timerId = null;
        },
        resetTimer() {
            this.clearTimer();
            this.setTimer(0, 0, 0);
        },
        setTimer() {
            this.setTime(this.customTime.hours, this.customTime.minutes, this.customTime.seconds);
            this.clearCustomTime();
            this.clearTimer();
        },
        clearCustomTime() {
            this.customTime = {
                hours: 0,
                minutes: 0,
                seconds: 0
            }
        },
        setTime(hours, minutes, seconds) {
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
        }
    },
    computed: {
        timeLeft: function () {
            return `${this.getCorrectNumberView(this.hours)}:${this.getCorrectNumberView(this.minutes)}:${this.getCorrectNumberView(this.seconds)}`;
        },
        getFinishDate: function() {
            let date = new Date();
            date.setMinutes(date.getMinutes() + this.minutes);
            date.setSeconds(date.getSeconds() + this.seconds);
            date.setHours(date.getHours() + this.hours);
            return date;
        },
    },
}
