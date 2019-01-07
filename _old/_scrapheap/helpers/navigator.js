app.navigator = function( page, pages, scope ) {

  let a = ax.a
  let x = ax.x

  let index = pages.indexOf( page )
  let length = pages.length
  let next, previous

  if ( index === 0 ) {
    next = 1
    previous = false
  } else if ( index === length - 1 ) {
    next = false
    previous = index - 1
  } else {
    next = index + 1
    previous = index - 1
  }

  return [
    a.div( [
      app.btn( app.fa( "arrow-left" ), () => app.open( `${ scope }/${ pages[ previous ] }` ), "outline-primary", { disabled: previous === false } ),
      a["div.btn-group"]( [
        a["button.btn.btn-outline-primary.dropdown-toggle"]( app.fa("crosshairs"), { data: { toggle: "dropdown" } } ),
        a[".dropdown-menu.dropdown-menu-right"](
          pages.map( function( page ) {
            return app.btn( x.appkit.lib.text.labelize( page ), () => app.open( `${ scope }/${ page }` ), "link dropdown-item" )
          } ) )
      ] ),
      app.btn( app.fa( "arrow-right" ), () => app.open( `${ scope }/${ pages[ next ] }` ), "outline-primary", { disabled: next === false } ),
    ], { class: "btn-group float-right navigator" } ),
    a.h1( ax.x.appkit.lib.text.labelize( page ) ),
  ]
}
