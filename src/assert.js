"use strict"

include('src/misc.js')

const assertLog = (message) =>
  console.log(`[ASSERT] ${message}`)

const assertEqual = (expected, actual) => {
  if (expected !== actual) {
   assertLog('Non equality') 
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
