ax.factory = function( component ) {

  if ( component instanceof Element ) return component
  if ( component instanceof Node ) return component
  if ( component instanceof Array ) return ax.factory.array( component )
  if ( typeof component === "object" ) return ax.factory.object( component )
  if ( typeof component === "function" ) return ax.factory.function( component )
  return ax.factory.text( component )

}
