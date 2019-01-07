ax.factory.object.element.process = function ( element ) {

  ax.factory.pipeline.forEach( function( pipelineFunction ) {
    element.$object = pipelineFunction( element.$object )
  } )

  return  this.process.properties( element )

}
