"use strict"

function makeScreen(doc, windowRef) {

  const canvas = doc.createElement('canvas')
  doc.body.appendChild(canvas)
  const context = canvas.getContext('2d')

  const width = windowRef.innerWidth
  const height = windowRef.innerHeight

  function Screen(backgroundColor) {

    function getRef() { return { width, height, clear } }

    function clear() {
      context.fillStyle = backgroundColor
      context.fillRect(0, 0, width, height)
      return getRef()
    }
    
    return getRef()
  }

  return Screen
}
