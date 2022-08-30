// BUTTONS

const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const setButton = document.querySelector('.set')
const volumeUpButton = document.querySelector('.play').innerHTML
const volumeDownButton = document.querySelector('.play').innerHTML

// CLOCK

let minutes = document.querySelector('#minutes').innerHTML
let seconds = document.querySelector('#seconds').textContent

let userMinutes

// INTERACTIONS

function playTimer() {
  return playButton.addEventListener('click', function () {
    pauseButton.classList.remove('hide')
    playButton.classList.add('hide')

    stopButton.classList.remove('hide')
    setButton.classList.add('hide')
  })
}

playTimer()

function pauseTimer() {
  return pauseButton.addEventListener('click', function () {
    playButton.classList.remove('hide')
    pauseButton.classList.add('hide')
    setButton.classList.remove('hide')
  })
}

pauseTimer()

function stopTime() {
  return stopButton.addEventListener('click', function () {
    playButton.classList.remove('hide')
    pauseButton.classList.add('hide')
    setButton.classList.remove('hide')
  })
}

stopTime()

function setTime() {
  return setButton.addEventListener('click', function () {
    newMinutes = prompt('Quantos minutos deseja?')

    document.querySelector('#minutes').innerHTML = newMinutes
  })
}

setTime()
