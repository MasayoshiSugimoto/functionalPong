"use strict"

//Dependency tree of the form:
//[
//  dependency: {
//    file: 'src/assert.js',
//    require: ['src/Vector.js', 'src/Rectangle.js']
//  }
//]

const DependencyTree = dependencies => {

  const Node = (file, links) => {
    const addLink = link =>
      Node(file, [link].concat(links))    
    return { file, links, addLink }
  }

  const Link = (fromNode, toNode) => { fromNode, toNode }

  const nodes = new Map()
  dependencies.foreach( dependency => {
    nodes.set(file, Node(dependency.file, []))
    dependency.require.foreach( file => Node(file, []) )
  } )

  const links = [].concat(
    dependencies.map( dependency => {
      dependency.require.map( require => Link(nodes.get(dependency.file), nodes.get(require)) )
    } )
  )

  const included = []
  
  const include = (file) => {
    if (included.find( includedFile => includedFile === file ) !== undefined) {
      included.push(file)
      console.log(`[INCLUDE] Loading ${file}...`)

      return new Promise( (resolve, reject) => {
        const script = document.createElement('script')
        script.onreadystatechange = () => if (this.readyState == 'complete') resolve()
        script.onload = resolve;
        script.src = file
        document.head.appendChild(script);
      } )

    }
    return new Promise( (resolve, reject) => reject() )
  }

  const resolve = includedFiles => node => {
    if (includedFiles.filter( file => node.file === file ).length == 0) {
      node.links.foreach(resolve(includedFile.push(node.file)))
      include(node.file)
    }
  }

  nodeList.reduce( resolve, [] )

}

