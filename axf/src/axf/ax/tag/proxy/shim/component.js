ax.tag.proxy.shim.component = function ( component ) {

  let is = ax.type.is
// debugger
  if ( is.node( component ) ) return { $nodes: [ component ] }
  if ( is.nodelist( component ) ) return { $nodes: [ Array.from( component ) ] }
  if ( is.array( component ) ) return { $nodes: component }
  if ( is.object( component ) ) return component
  if ( is.function( component ) ) return { $nodes: [ component ] }
  if ( is.undefined( component ) ) return {}
  return { $text: component }

}
