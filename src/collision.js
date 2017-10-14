//"use strict"
//
//const CollisionModule = {
//
//  const CollisionData = (x, y) => {
//    const or = collision => CollisionData(x && collision.x, y && collision.y)
//    return { x, y }
//  }
//
//  const collisions = (rectangle1, rectangle2) => {
//
//    //X collision
//    const leftRectangle = (rectangle1.left() < rectangle2.left()) ? rectangle1 : rectangle2
//    const rightRectangle = (rectangle1 === leftRectangle) ? rectangle2 : rectangle1
//
//    let xCollisionVerticesCount = 0
//    if (rightRectangle.right() <= leftRectangle.right()) {
//      xCollisionVerticesCount = 2
//    } else if (rightRectangle.left() <= leftRectangle.right()) {
//      xCollisionVerticesCount = 1
//    }
//
//    //Y collision
//    const topRectangle = (rectangle1.top() < rectangle2.top()) ? rectangle1 : rectangle2
//    const bottomRectangle = (topRectangle == rectangle1) ? rectangle2 : rectangle1
//
//    let yCollisionVerticesCount = 0
//    if (bottomRectangle.bottom() <= topRectangle.bottom()) {
//      yCollisionVerticesCount = 2
//    } else if (bottomRectangle.top() <= topRectangle.bottom()) {
//      yCollisionVerticesCount = 1
//    }
//
//    if (xCollisionVerticesCount == 0 || yCollisionVerticesCount == 0) { // No collision
//      //Do nothing
//      return Collision(false, false)
//    } else if (xCollisionVerticesCount == yCollisionVerticesCount) {
//      //Corner collision or one rectangle containing the other
//      return Collision(true, true)
//    } else if (xCollisionVerticesCount == 1) {
//      return Collision(true, false)
//    } else if (yCollisionVerticesCount == 1) {
//      return Collision(false, true)
//    } else {
//      throw "INVALID PATH"
//    }
//    throw "INVALID PATH"
//  }
//
//  const applyCollision = actors => {
//    //Nah, won't do that the functional way...
//    let collisionDatas = []
//    for (let i = 0; i < actors.length; i++) {
//      collisionDatas[i] = CollisionData(false, false)
//    }
//    for (let i = 0; i < actors.length; i++) {
//      for (let j = 0; j < actors.length; j++) {
//        collisionDatas[i] = collisionDatas[i].or(collisions(actors[i], actors[j]))
//      }
//    }
//
//    let actorsWithIndex = []
//    for (let index = 0; index < actors.length; index++) {
//      actorsWithIndex[i] = actor[i]
//          .mapComponent('CollisionComponent', component => component.apply(collisionDatas[i]))
//    }
//    return actorsWithIndex
//  }
//
//}
//
//const CollisionComponent = actor => {
//
//  const apply = collisionData => {
//    return actor.component('MotionComponent').map( component => {
//      if (collisionData.x) {
//        component.withVelocity(Vector(-component.position.x, component.position.y)) 
//      }
//    } ).map( component => {
//      if (collisionData.y) {
//        component => component.withVelocity(Vector(component.position.x, -component.position.y))
//      }
//    } ).push(actor)[0]
//  }
//
//}
