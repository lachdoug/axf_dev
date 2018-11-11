ax.factory.array = function ( component ) {

// console.log(component)
  return this( { $tag: "div", $nodes: component } )

}
