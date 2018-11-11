ax.factory.function = function ( component, attributes={} ) {

  const a = ax.tag
  const x = ax.extensions

  if ( /^class\s/.test( Function.prototype.toString.call( component ) ) ) {
    component = ( new component( a,x ) ).render( a,x )
  } else {
    component = component( a,x )
  }

  return this( component, attributes )

}
