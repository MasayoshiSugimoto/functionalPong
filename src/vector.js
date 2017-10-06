"use strict"

function Vector(x, y) {

  const length = () => Math.sqrt((x * x) + (y * y))
  const add = (v2) => Vector(x + v2.x, y + v2.y)

  return { x, y, length, add }
}

