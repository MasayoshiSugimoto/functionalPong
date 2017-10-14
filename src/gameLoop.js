//"use strict"
//
//const GameLoopFactory = (collisionModule, windowRef, frameDuration) => {
//
//  const GameLoop = actors => {
//
//    const updateComponent = actors =>
//      return actors.map(actor =>
//        actor.mapComponent(componentId, component => component.update(frameDuration)))
//
//    const updatedActors = [
//      updateComponent(actors, 'PaddleControllerComponent'),
//      updateComponent(actors, 'MotionComponent'),
//      //collisionModule.applyCollision
//  //    keepInField
//    ].reduce( (actors, f) => return f(actors), actors)
//
//    //Side effects  
//    screen.clear()
//    updatedActors.foreach( actor => actor.draw() )
//    
//    windowRef.setTimeout( () => GameLoop(updatedActors), frameDuration.milliseconds() )
//  }
//
//  return GameLoop
//}
//
