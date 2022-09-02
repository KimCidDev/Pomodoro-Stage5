import controls from './control.js'
import Timer from './timeLogic.js'

// Global variables

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.soundOn')
const buttonSoundOff = document.querySelector('.soundOff')
const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')

let audio = new Audio('Assets/stream-3.mp3')

const controller = controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

/* Update time on the screen filling to two char

function timeDisplayed(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

/* reset to default settings
function defaultReset() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonStop.classList.add('hide')
  buttonSet.classList.remove('hide')

  timeDisplayed(20, 0)
}

/* Idea of time in seconds

function timePassing() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    timeDisplayed(minutes, 0)

    if (minutes <= 0) {
      defaultReset()
      return
    }

    if (seconds <= 00) {
      seconds = 60
      --minutes
    }

    timeDisplayed(minutes, seconds - 1)
    timePassing()
  }, 1000)
}

*/

// Button-events

buttonPlay.addEventListener('click', function () {
  controller.play()
  audio.play()
  timer.timePassing()
})

buttonPause.addEventListener('click', function () {
  audio.pause()
  timer.pauseTimer()
  controller.pause()
})

buttonStop.addEventListener('click', function () {
  controller.defaultReset()
  timer.defaultTimer()
  audio.pause()
})

buttonSet.addEventListener('click', function () {
  controller.set()
})

buttonSoundOff.addEventListener('click', function () {
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')

  audio.pause()
})

buttonSoundOn.addEventListener('click', function () {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')

  audio.play()
})
