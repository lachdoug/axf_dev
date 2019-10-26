ax.factory.element.properties.accessors.html = function ( element ) {

  let accessors = this

  Object.defineProperty( element, '$html', {
    get : function () {
      return element.$properties.$html
    },
    set : function( html ) {
      accessors.html.set( element, html )
    }
  } )

  return element

}
