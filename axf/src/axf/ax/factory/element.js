ax.factory.element = function ( properties ) {

  properties = { $tag: 'span', ...properties }

  let element = document.createElement( properties.$tag )
  element.$properties = properties

  return this.element.properties.init(
    this.element.properties( element ).$render()
  )

}
