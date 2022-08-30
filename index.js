const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.play').innerHTML
const setButton = document.querySelector('.play').innerHTML
const volumeUpButton = document.querySelector('.play').innerHTML
const volumeDownButton = document.querySelector('.play').innerHTML

function playTimer() {
  return playButton.addEventListener('click', function () {
    pauseButton.classList.remove('hide')
    playButton.classList.add('hide')
  })
}

playTimer()

function pauseTimer() {
  return pauseButton.addEventListener('click', function () {
    playButton.classList.remove('hide')
    pauseButton.classList.add('hide')
  })
}

pauseTimer()
