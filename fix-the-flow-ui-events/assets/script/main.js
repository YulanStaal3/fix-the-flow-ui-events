let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}



let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('click', rotationHandler)
frontend.addEventListener('animationend', rotationHandler)

function rotationHandler() {
  frontend.classList.toggle('rotate')
}



let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('click', orangeHandler)

function orangeHandler() {
  design.classList.toggle('orange')
}



let and = document.querySelector('a:nth-of-type(3)')

and.addEventListener('dblclick', violetHandler)

function violetHandler() {
  and.classList.toggle('violet')
}



let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener('click', spinningHandler)
development.addEventListener('animationend', spinningHandler)

function spinningHandler() {
  development.classList.toggle('spinning')
}



let sprint5 = document.querySelector('a:nth-of-type(5)')

sprint5.addEventListener('click', shakingHandler)

function shakingHandler() {
  sprint5.classList.toggle('shaking')
}



let fix = document.querySelector('a:nth-of-type(6)')

fix.addEventListener('click', verticalHandler)

function verticalHandler() {
  fix.classList.toggle('vertical-shaking')
}



let the = document.querySelector('a:nth-of-type(7)')

the.addEventListener('click', horizontalHandler)

function horizontalHandler() {
  the.classList.toggle('horizontal')
}



let flow = document.querySelector('a:nth-of-type(8)')

flow.addEventListener('click', discoHandler)

function discoHandler() {
  flow.classList.toggle('disco')
}



let user = document.querySelector('a:nth-of-type(9)')

user.addEventListener('click', squareHandler)

function squareHandler() {
  user.classList.toggle('square')
}



let interface = document.querySelector('a:nth-of-type(10)')

interface.addEventListener('click', moveHandler)

function moveHandler() {
  interface.classList.toggle('move')
}
