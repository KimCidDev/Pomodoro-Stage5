// Global variables

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.soundOn')
const buttonSoundOff = document.querySelector('.soundOff')
const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')

let timerTimeOut
let audio = new Audio('Assets/stream-3.mp3')

// Update time on the screen filling to two char

function timeDisplayed(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

// Idea of time in seconds

function timePassing() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    timeDisplayed(minutes, 0)

    if (minutes <= 0) {
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

// Button-events

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonStop.classList.remove('hide')
  buttonSet.classList.add('hide')

  audio.play()

  timePassing()
})

buttonPause.addEventListener('click', function () {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')

  audio.pause()

  clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function () {
  buttonStop.classList.add('hide')
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  buttonSet.classList.remove('hide')

  audio.pause()

  clearTimeout(timerTimeOut)
  timeDisplayed(20, 0)
})

buttonSet.addEventListener('click', function () {
  minutesDisplay.textContent = prompt('De quantos minutos você precisa?') || 0
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
