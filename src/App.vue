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
                <select name="hours" id="hours" v-model="customTime.hours">
                    <option v-for="n in 25" :value="n - 1" :key="n">{{n - 1}}</option>
                </select>
                <select name="minutes" id="minutes" v-model="customTime.minutes">
                    <option v-for="n in 60" :value="n - 1" :key="n">{{n - 1}}</option>
                </select>
                <select name="seconds" id="seconds" v-model="customTime.seconds">
                    <option v-for="n in 60" :value="n - 1" :key="n">{{n - 1}}</option>
                </select>
                <button @click="setTimer">Set time</button>
            </div>
        </div>
    </div>
</template>

<script src="./app.js"></script>

<style>
    .timer {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .timer button {
        margin: 1rem;
        cursor: pointer;
        vertical-align: middle;
        font-size: 1.2rem;
        text-align: center;
        border: 1px solid transparent;
        transition: color .15s;
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
        padding: .375rem 1.2rem;
    }
    .timer button:hover {
        background-color: #0069d9;
        border-color: #0062cc;
    }
    select {
        margin: 1rem;
        padding: .375rem .75rem;

        font-size: 1rem;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        border: 1px solid #ced4da;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    option {
        font-size: 1rem;
        line-height: 1.5;
        color: #495057;
    }
</style>
