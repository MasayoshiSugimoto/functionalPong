//"use strict"
//
//function ActorFactory() {
//
//  const generateId = sequenceGenerator() 
//
//  const Actor = (id, components) => {
//
//    const addComponent = component => return Actor(id, [component].concat(components))
//
//    const mapComponent = (componentId, f) => {
//      const updatedComponent = components.filter( component => component.id === componentId )
//          .map( component => f(component) )
//      return Actor(id, updatedComponent.concat(components.filter( component => component.id !== componentId )))
//    }
//
//    const component = componentId => return components.filter( component => component.id === componentId )
//
//    return { id, components }
//  }
//
//  return () => Actor(generateId(), [])
//}
