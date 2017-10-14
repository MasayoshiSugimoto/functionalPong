"use strict"

console.log('Loading vector.js')

export function Vector(x, y) {

  const length = () => Math.sqrt((x * x) + (y * y))
  const add = v => Vector(x + v.x, y + v.y)
  const sub = v => Vector(x - v.x, y - v.y)
  const scale = s => Vector(x * s, y * s)

  return { x, y, length, add, sub, scale }
}

const vector0  = Vector(0, 0)
const vectorX1 = Vector(1, 0)
const vectorY1 = Vector(0, 1)
