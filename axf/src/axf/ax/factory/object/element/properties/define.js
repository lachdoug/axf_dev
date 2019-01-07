ax.factory.object.element.properties.define = function ( element ) {

  for ( let property in element.$object ) {
    if ( element.$object.hasOwnProperty( property ) ) {
      if ( /[a-zA-Z]/.test( property[0] ) ) {

        let value = element.$object[ property ]

        if ( value || value === "" ) {

          let isObject = ax.type.is.object( value )

          if ( isObject && property === "data" ) {
            this.define.data( element, value )
          } else if ( isObject && property === "style" ) {
            this.define.style( element, value )
          } else {
            this.define.attribute( element, property, value )
          }

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
          // if ( ax.type.is.function( element[ property ] ) ) {
          //   element[ property ].bind( element )
          // }
        }

      }
    }
  }

  return element

  // for ( let property in element.$object ) {
  //   if ( element.$object.hasOwnProperty( property ) ) {
  //     if ( /[a-zA-Z]/.test( property[0] ) ) {
  //
  //       let value = element.$object[ property ]
  //
  //       if ( value || value === "" ) {
  //
  //         if ( ax.type.is.object( value ) ) {
  //           value = this.define.attribute( value )
  //         }
  //
  //         let attribute = document.createAttribute( property )
  //         attribute.value = value
  //         element.setAttributeNode( attribute )
  //
  //
  //       }
  //
  //     } else {
  //
  //       if (
  //         property != '$text' &&
  //         property != '$nodes' &&
  //         property != '$html' &&
  //         property != '$state' &&
  //         property != '$on'
  //       ) {
  //         element[ property ] = element.$object[ property ]
  //       }
  //
  //     }
  //   }
  // }
  //
  // return element

}
