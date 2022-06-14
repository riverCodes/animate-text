// grabbing required elements
const form = document.querySelector(`form`)
const input = document.querySelector(`#text`)
const container = document.querySelector(`.container`)
const resetButton = document.querySelector(`[type="reset"]`)

// function formSubmitHandler
function formSubmitHandler(e) {
  e.preventDefault()
  const textInput = input.value
  const ch = textInput.length
  const time = ch / 5 // 300 characters per minute (60wpm) = ch/time (seconds)
  console.log(textInput, ch, time)

  const textAnimate = `
  <div class="text" 
  style="
  height: fit-content;
  border-right: 1px solid black;
  width: ${ch}ch;
  animation: type ${time}s steps(${ch}), blink 0.5s ${time}s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  ">
  ${textInput}
  </div>`
  container.innerHTML = textAnimate
}
// Listening for form submit
form.addEventListener(`submit`, formSubmitHandler)

resetButton.addEventListener(`click`, () => {
  input.value = ""
  const textAnimate = container.firstElementChild
  textAnimate.textContent = ""
})
