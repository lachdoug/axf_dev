ax.factory.element.properties.define = function ( element ) {

  for ( let property in element.$properties ) {
    if ( element.$properties.hasOwnProperty( property ) ) {
      if ( /[a-zA-Z]/.test( property[0] ) ) {

        let value = element.$properties[ property ]

        if ( ax.is.not.undefined( value ) ) {

          if ( property == 'data' ) {
            this.define.data( element, value )
          } else if ( property == 'style' ) {
            this.define.style( element, value )
          } else {
            this.define.attribute( element, property, value )
          }

        }

      } else if ( property == '$handle' ) {

        element.dataset.axf = element.$properties.$handle

      } else {

        if ( ! (
          property == '$text' ||
          property == '$nodes' ||
          property == '$html' ||
          property == '$state' ||
          property == '$send' ||
          property == '$on' ||
          property == '$off'
        ) ) {
          element[ property ] = element.$properties[ property ]
        }

      }
    }
  }

  return element

}
