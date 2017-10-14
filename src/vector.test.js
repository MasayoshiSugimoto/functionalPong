"use strict"

include('src/vector.js')
include('src/assert.js')

{ //Test length
  const v1 = Vector(2, 3)
  assertEqualFloat(3.6055, v1.length())
}

{ //Test addition
  const v1 = Vector(1, 2)
  const v2 = Vector(3, 4)
  assertEqual(4, v1.add(v2).x)
  assertEqual(6, v1.add(v2).y)
}

{ //Test subsctraction
  const v = Vector(10, 20).sub(Vector(1, 2))
  assertEqual(9, v.x)
  assertEqual(18, v.y)
}

{ //Test scale
  const v = Vector(10, 20).scale(0.1)
  assertEqualFloat(1, v.x)
  assertEqualFloat(2, v.y)
}
