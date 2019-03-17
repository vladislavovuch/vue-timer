<template>
    <div id="app">
        <div class="timer">
            <h2>{{timeLeft}}</h2>
            <div class="control_buttons">
                <button @click="startTimer">Start</button>
                <button @click="pauseTimer">Pause</button>
                <button @click="resetTimer">Reset</button>
            </div>
            <div>
                <label for="hours">
                    <span>Hours</span>
                </label>
                <select name="hours" id="hours" v-model="customTime.hours">
                    <option v-for="n in 25" :value="n - 1" :key="n">{{getCorrectNumberView(n - 1)}}</option>
                </select>
                <label for="minutes">
                    <span>Minutes</span>
                </label>
                <select name="minutes" id="minutes" v-model="customTime.minutes">
                    <option v-for="n in 60" :value="n - 1" :key="n">{{getCorrectNumberView(n - 1)}}</option>
                </select>
                <label for="seconds">
                    <span>Seconds</span>
                </label>
                <select name="seconds" id="seconds" v-model="customTime.seconds">
                    <option v-for="n in 60" :value="n - 1" :key="n">{{getCorrectNumberView(n - 1)}}</option>
                </select>
                <button @click="setTimer">Set time</button>
            </div>
        </div>
    </div>
</template>

<script src="./app.js"></script>

<style src="./style.css" scoped></style>
