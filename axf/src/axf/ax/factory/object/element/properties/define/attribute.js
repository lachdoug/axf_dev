ax.factory.object.element.properties.define.
attribute = function ( element, property, value ) {

  let attribute = document.createAttribute( property )
  attribute.value = value
  element.setAttributeNode( attribute )

}
