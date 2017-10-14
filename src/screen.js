"use strict"

function Screen(doc, windowRef, backgroundColor) {

  const logger = Logger('Screen')

  const canvas = doc.createElement('canvas')
  doc.body.appendChild(canvas)
  const context = canvas.getContext('2d')

  const width = windowRef.innerWidth
  const height = windowRef.innerHeight

  return () => {

    function getRef() { return { width, height, clear } }

    function clear() {
      doc.body.style.margin = 0
      canvas.style.width = width
      canvas.style.height = height
      context.fillStyle = backgroundColor
      context.fillRect(0, 0, width, height)
      return getRef()
    }
    
    function drawRectangle(rectangle, color) {
      context.fillStyle = color
      context.fillRect(
        rectangle.left(),
        rectangle.right(),
        rectangle.size.x,
        rectangle.size.y
      )
      return getRef()
    }

    function center() {
      return Vector(width / 2, height / 2)
    }

    return getRef()
  }
}
