"use strict";

const KEYBOARD_KEY_W      = 87
const KEYBOARD_KEY_S      = 83
const KEYBOARD_KEY_UP     = 38
const KEYBOARD_KEY_DOWN   = 40

function KeyboardFactory(windowRef) {

  let keyboard = [] 

  windowRef.onkeydown = event => keyboard[event.which] = true
  windowRef.onkeyup = event => keyboard[event.which] = false

  const isPressedFactory = keyboard => keyCode => keyboard[keyCode]

  return () => { isPressed: isPressedFactory(keyboard) }
}
