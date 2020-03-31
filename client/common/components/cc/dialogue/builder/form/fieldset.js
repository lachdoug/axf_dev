cc.dialogue.builder.form.fieldset = ( f, fieldsetSpec, params ) => {

  if ( fieldsetSpec.body ) {
    let componentsSpec = fieldsetSpec.body || []
    let result = []
    for ( let i in componentsSpec ) {
      result.push( cc.dialogue.builder.form.component( f, componentsSpec[i] ) )
    }
    fieldsetSpec.body = result
  }

  if ( !fieldsetSpec.label ) fieldsetSpec.label = false

  return f.fieldset( fieldsetSpec )

}
