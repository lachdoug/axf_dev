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
ax.type.is.not = new Proxy(
  {},
  {
    get: ( target, property, receiver ) => {

      if ( ax.type.is.function( ax.type.is[ property ] ) ) {
        return ( value ) => !ax.type.is[ property ]( value )
      } else {
        ax.throw( `ax.type.is does not support .${ property }()` )
      }

    }
  }
)
