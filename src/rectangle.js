"use strict"

include('src/vector.js')

function Rectangle(origin, size) {
  return {
    left: () => origin.x + 1,
    top: () => origin.y,
    right: () => origin.x + size.x,
    bottom: () => origin.y + size.y,
    topLeft: () => origin,
    topRight: () => origin.add(Vector(size.x, 0)),
    bottomRight: () => origin.add(size),
    bottomLeft: () => origin.add(Vector(0, size.y)),
    size,
    setPosition: origin => Rectangle(origin, size),
    setSize: size => Rectangle(origin, size)
  }
}

//const rectangle0 = Rectangle(vector0, vector0)

