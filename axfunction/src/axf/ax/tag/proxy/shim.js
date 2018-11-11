ax.tag.proxy.shim = {
  get: ( target, property ) => function ( component, attributes={} ) {

    component = ax.tag.proxy.shim.component( component )
    attributes = ax.tag.proxy.shim.attributes( property, attributes )

    return ax.factory.object( { ...component, ...attributes } )

  }
}
