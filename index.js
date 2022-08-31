const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')

function timeDisplayed(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function timePassing() {
  setTimeout(function () {
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

    timeDisplayed(minutes, String(seconds-1))
    timePassing()
  }, 1000)
}

buttonPlay.addEventListener('click', function () {
  timePassing()
})

buttonStop.addEventListener('click', function () {})
