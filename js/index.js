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
