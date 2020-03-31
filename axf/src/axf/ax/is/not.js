/**
 * Type Is Not Something.
 * Determines whether value is not a type.
 *
 * @since 0.0.0
 *
 * @return {boolean}
 *
 */
ax.is.not = new Proxy(
  {},
  {
    get: ( target, property, receiver ) => {

      if ( ax.is.function( ax.is[ property ] ) ) {
        return ( value ) => !ax.is[ property ]( value )
      } else {
        console.error( `ax.is does not support .${ property }()` )
      }

    }
  }
)
