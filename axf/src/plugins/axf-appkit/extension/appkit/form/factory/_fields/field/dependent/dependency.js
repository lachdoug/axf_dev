ax.extension.appkit.form.factory.field.
dependent.dependency = (f) => function( options ) {

  let lib = ax.x.appkit.lib.field

  let selected

  if ( options.traverse ) {

    selected = options.traverse.bind( this )( this )

  } else {

    let selector

    if ( options.selector ) {
      selector = options.selector
    } else {
      let name
      if ( options.key ) {
        name = lib.name.assemble( ...f.$scope, options.key )
      } else if ( options.name ) {
        name = options.name
      } else {
        ax.throw( `Field \`options.dependent\` needs a \`key\`, \`name\`, \`selector\` or \`traverse\`.` )
      }
      selector = `appkit-form-field[name='${ name }']`
    }

    let search = options.search || 'form'
    selected = this.$(`^${ search }`).$( selector )

  }

  if ( selected ) {
    if ( selected.$tag !== 'appkit-form-field' ) {
      selected = selected.$('^appkit-form-field')
    }
    if ( selected ) {
      return selected
    } else {
      debugger
      ax.throw( `Form field failed to find <appkit-form-field> for its dependency using ${ JSON.stringify( options ) }.` )
    }
  } else {
    ax.throw( `Form field failed to select its dependency using ${ JSON.stringify( options ) }.` )
  }

}
