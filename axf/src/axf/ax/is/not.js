/**
 * Type Is Not Something.
 * Determines whether variable is not a type.
 *
 * @since 0.0.0
 *
 * @param variable
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
        ax.log.error( `ax.is does not support .${ property }()` )
      }

    }
  }
)
