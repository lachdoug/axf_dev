app.formBuilder = ( formSpec, params ) => (a,x) => {

  let formComponents = function( f, componentsSpec ) {

    return componentsSpec.map( ( componentSpec ) => {

      return app.formBuilder.component( f, componentSpec, params )

    } )

  }

  let formFn = (f) => [
    ...formComponents( f, Object.values( formSpec.components || {} ) ),
    a.p( [
      f.submit( {
        label: '✔ Submit test',
      } ),
    ] ),
  ]

  let scope = formSpec.scope
  let objectGetScope = scope.get
  let objectSetScope = scope.set
  let object

  let keys = x.lib.name.dismantle( objectGetScope )
  object = x.lib.object.dig( params, keys )

  let component = app.form( {
    form: formFn,
    params: params,
    object: object,
    scope: objectSetScope,
  } )

  return component

}
