ax.factory.object.element.properties.define = function ( element ) {

  for ( let property in element.$object ) {
    if ( element.$object.hasOwnProperty( property ) ) {
      if ( /[a-zA-Z]/.test( property[0] ) ) {

        let value = element.$object[ property ]

        if ( value ) {

          if ( typeof value === "object" ) {
            value = this.define.attribute( value )
          }

          let attribute = document.createAttribute( property )
          attribute.value = value
          element.setAttributeNode( attribute )

        }

      } else {

        if (
          property != '$text' &&
          property != '$nodes' &&
          property != '$html' &&
          property != '$state' &&
          property != '$on'
        ) {
          element[ property ] = element.$object[ property ]
        }

      }
    }
  }

  return element

}
