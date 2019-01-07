ax.factory.object.element.properties.accessors.$html = function ( element ) {

  Object.defineProperty( element, "$html", {
    get : function () {
      return element.$object.$html
    },
    set : function( html ) {
      delete element.$object.$text
      delete element.$object.$nodes
      element.$object.$html = html
      element.$render()
    }
  } )

  return element

}
