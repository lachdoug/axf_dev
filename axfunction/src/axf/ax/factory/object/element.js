ax.factory.object.element = function ( object ) {

  object = { ...this.base, ...object }
  let element = document.createElement( object.$tag )
  element.$object = object

  ax.factory.pipeline.forEach( function( pipelineFunction ) {
    element.$object = pipelineFunction( element.$object )
  } )

  return this.element.properties.$init(
    this.element.properties( element ).$render()
  )

}
