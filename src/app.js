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
        // computed ??
        getFinishDate() {
            let date = new Date();
            date.setMinutes(date.getMinutes() + this.minutes);
            date.setSeconds(date.getSeconds() + this.seconds);
            date.setHours(date.getHours() + this.hours);
            return date;
        },
        startTimer() {
            if (this.timerId === null) {
                let finistDate = this.getFinishDate();
                // debugger;
                this.timerId = setInterval(() => {
                    // debugger;
                    let difference = new Date(finistDate - new Date());
                    if (+difference <= 0) {
                        console.log("STOP");
                        this.clearTimer();
                        alert('The time is out');
                        return;
                    }
                    console.log(difference);
                    this.hours = difference.getUTCHours();
                    this.minutes = difference.getUTCMinutes();
                    this.seconds = difference.getUTCSeconds();
                }, 250);
            }
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
            this.setTimer(0,0,0);
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
        timeLeft: function() {
            return `${this.hours}:${this.minutes}:${this.seconds}`;
            // return this.hours + ' ' + this.minutes + " " + this.seconds;
        }
    },
}
