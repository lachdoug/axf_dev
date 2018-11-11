ax.tag.proxy.shim.component = function ( component ) {

  if ( component instanceof Element ) return { $nodes: [ component ] }
  if ( component instanceof Node ) return { $nodes: [ component ] }
  if ( component instanceof Array ) return { $nodes: component }
  if ( typeof component === "object" ) return component
  if ( typeof component === "function" ) return { $nodes: [ component ] }
  if ( component === undefined ) return {}
  return { $text: component }

}
