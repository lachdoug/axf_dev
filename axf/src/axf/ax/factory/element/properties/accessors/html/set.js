ax.factory.element.properties.accessors.html.
set = function ( element, html ) {

  delete element.$properties.$text
  delete element.$properties.$nodes
  element.$properties.$html = html
  element.$render()

  return element

}
