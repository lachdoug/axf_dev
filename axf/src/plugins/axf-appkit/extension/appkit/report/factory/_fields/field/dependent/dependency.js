ax.extension.appkit.report.factory.field.
dependent.dependency = (r) => function( options ) {

  let lib = ax.x.appkit.lib.field

  let selected

  if ( options.traverse ) {

    field = this.$('^')
    selected = options.traverse.bind( field )( field )

  } else {

    let selector

    if ( options.selector ) {
      selector = options.selector
    } else {
      let name
      if ( options.key ) {
        name = lib.name.assemble( ...r.$scope, options.key )
      } else if ( options.name ) {
        name = options.name
      } else {
        ax.throw( `Field \`options.dependent\` needs a \`key\`, \`name\`, \`selector\` or \`traverse\`.` )
      }
      selector = `appkit-report-field[name='${ name }']`
    }
    let search = options.search || 'appkit-report'
    selected = this.$(`^${ search }`).$( selector )

  }

  if ( selected ) {
    if ( selected.$tag !== 'appkit-report-field' ) {
      selected = selected.$('^appkit-report-field')
    }
    if ( selected ) {
      return selected
    } else {
      ax.throw( `Report field failed to find <appkit-report-field> for its dependency using ${ JSON.stringify( options ) }.` )
    }
  } else {
    ax.throw( `Report field failed to select its dependency using ${ JSON.stringify( options ) }.` )
  }

}
