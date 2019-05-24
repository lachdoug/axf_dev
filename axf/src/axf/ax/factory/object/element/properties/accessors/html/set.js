ax.factory.object.element.properties.accessors.html.
set = function ( element, html ) {

  delete element.$object.$text
  delete element.$object.$nodes
  element.$object.$html = html
  element.$render()

  return element

}
