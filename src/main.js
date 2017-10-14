//"use strict"
//
//include('src/screen.js')
//include('src/misc.js')
//
//const VelocityComponent = velocity => {
//
//  const apply = deltaTime => actor =>
//    VelocityComponent(actor.position.add(velocity.scale(deltaTime.seconds)))
//
//  return { apply }
//}
//  
//const RectangleDrawComponent = screen => (color, size) => {
//
//  const apply = actor =>
//    screen.drawRectangle(Rectangle(actor.position, size), color)
//
//  return { apply }
//}
//
//const PaddleControllerComponent = keyboard => upKey => downKey => {
//  const apply = actor => {
//    if (keyboard.isPressed(upKey))
//      return actor.move(Vector(0, 10))
//    if (keyboard.isPressed(downKey))
//      return actor.move(Vector(0, -10))
//    return actor
//  }
//  return { id:"PaddleControllerComponent", apply }
//}
//
//const main = () => {
//  const screenFactory = Screen(document, window, "grey")
//  const screen = screenFactory().clear()
//  const keyboardFactory = KeyboardFactory(window)
//  const actorFactory = ActorFactory()
//  const rectangleComponentFactory = RectangleComponent(screen)
//
//  const ballSize = Vector(10, 10)
//  const ball = actorFactory()
//      .addComponent(VelocityComponent(1.0))
//      .addDrawComponent(RectangleDrawComponent(screen)("red", Vector(10, 10)))
//
//  const paddleFactory = () =>
//    actorFactory()
//      .addComponent(PaddleControllerComponent(keyboardFactory(), KEYBOARD_KEY_UP, KEYBOARD_KEY_DOWN))
//      .addDrawComponent(RectangleDrawComponent(screen)("red", Vector(10, 100)))
//  const p1Paddle = paddleFactory()
//  const p2Paddle = paddleFactory()
//
//  const actors = [ ball, p1Paddle ]
//
//  const gameLoop = (actors, frameDuration) => {
//
//    [
//      //Control update
//      actors => actors.map( actor =>
//        return actor.component('PaddleControllerComponent')
//          .map( component => component.apply(frameDuration) )
//      ),
//      //Motion update
//      actors => actors.map( actor => actor.update(frameDuration) ),
//      applyCollision,
//      keepInField,
//    ].reduce( (actors, f) => return f(actors), actors)
//
//    //Side effects  
//    screen.clear()
//    actors.foreach( actor => actor.draw() )
//  }
//}
