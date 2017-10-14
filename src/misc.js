"use strict"

const EPSILON = 0.0001

const Logger = label => message =>
  console.log(`[${label}] ${message}`)

const pixels = p => p + "px"

const sequenceGenerator = () => {
  let counter = 0
  return () => {
    counter = counter + 1
    return counter
  }
}

