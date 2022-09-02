export default function Timer({
  secondsDisplay,
  minutesDisplay,
  timerTimeOut
}) {
  function defaultTimer() {
    clearTimeout(timerTimeOut)
    timeDisplayed(20, 0)
  }

  // Stop the clock if the
  function pauseTimer() {
    return clearTimeout(timerTimeOut)
  }

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
        controls.defaultReset()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      timeDisplayed(minutes, seconds - 1)
      timePassing()
    }, 1000)
  }

  return {
    timePassing,
    timeDisplayed,
    pauseTimer,
    defaultTimer
  }
}
