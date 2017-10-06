"use strict"

const assertLog = (message) =>
  console.log(`[ASSERT] ${message}`)

const assertEqualString = (expected, actual) => {
  if (expected != actual) {
   assertLog('String not equal') 
   assertLog('Expected: ' + expected)
   assertLog('Actual: ' + actual)
  }
}

const assertEqualFloat = (expected, actual) => {
  if (Math.abs(expected - actual) > EPSILON) {
   assertLog(`Float not equal. Expected: ${expected}, Actual: ${actual}`) 
   throw "assertEqualFloat"
  }
}
