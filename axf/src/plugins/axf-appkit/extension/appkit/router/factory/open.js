ax.extension.appkit.router.factory.
open = (r) => function( locator='', query={}, anchor=null ) {

  locator = '' + locator

  if ( locator[0] === "%" ) {

    this.router[0].$open(
      r.scope + "/" + locator.slice(1),
      query,
      anchor
    )

  } else if ( locator[0] === "/" ) {

    this.router[0].$open(
      locator,
      query,
      anchor
    )

  } else {

    let located = this.locate( locator )
    let path = located.path
    located.target.$open( path, query, anchor )

  }
}
