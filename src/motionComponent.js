"use strict"

const MotionComponent = (position, velocity) => {

  const id = "MotionComponent"
  const withPosition = newPosition => MotionComponent(newPosition, velocity)
  const withVelocity = newVelocity => MotionComponent(position, newVelocity)
  const update = duration => MotionComponent(position.add(velocity.scale(duration.seconds)), velocity)

  return { id, position, withPosition, apply }
}

