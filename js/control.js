// reset to default settings

export default function controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  timeDisplayed
}) {
  function set() {
    minutesDisplay.textContent =
      prompt('De quantos minutos você precisa?') || timer.defaultTimer()
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonStop.classList.remove('hide')
    buttonSet.classList.add('hide')
  }

  function defaultReset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')

  }

  return {
    defaultReset,
    play,
    pause,
    set
  }
}
