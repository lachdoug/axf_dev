app2.navigator = function( c, page, pages, scope ) {

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

  return (a,x) => [
    a.div( [
      app2.btn( app2.fa( "arrow-left" ), () => c.open( `${ scope }/${ pages[ previous ] }` ), "outline-primary", { disabled: previous === false } ),
      a["div.btn-group"]( [
        a["button.btn.btn-outline-primary.dropdown-toggle"]( app2.fa("crosshairs"), { data: { toggle: "dropdown" } } ),
        a[".dropdown-menu.dropdown-menu-right"](
          pages.map( function( page ) {
            return app2.btn( x.appkit.lib.text.labelize( page ), () => c.open( `${ scope }/${ page }` ), "link dropdown-item" )
          } ) )
      ] ),
      app2.btn( app2.fa( "arrow-right" ), () => c.open( `${ scope }/${ pages[ next ] }` ), "outline-primary", { disabled: next === false } ),
    ], { class: "btn-group float-right navigator" } ),
    a.h1( ax.x.appkit.lib.text.labelize( page ) ),
  ]

}
