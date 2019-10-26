ax.factory.element.properties.tools = function ( element ) {

  element.$ = this.traverse.$
  element.$$ = this.query.$$

  return element

}
