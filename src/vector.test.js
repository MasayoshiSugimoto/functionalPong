"use strict"

include('../src/vector.js')
include('../src/assert.js')

{ //Test the length
  const v1 = Vector(2, 3)
  assertEqualFloat(3.6055, v1.length())
}

{ //Test the 
  const v1 = Vector(1, 2)
  const v2 = Vector(3, 4)
  assertEqualFloat(4, v1.add(v2).x())
  assertEqualFloat(6, v1.add(v2).y())
}
