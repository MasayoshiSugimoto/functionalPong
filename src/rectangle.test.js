"use strict"

include('src/rectangle.js')
include('src/vector.js')
include('src/assert.js')

{ //Test all functions at once
  const r = Rectangle(Vector(10, 20), Vector(11, 22))
  assertEqual(10, r.left())
  //assertEqual(20, r.top())

}

