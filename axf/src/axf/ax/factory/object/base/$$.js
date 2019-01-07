ax.factory.object.base.$$ = function( selector ) {

    return ax.factory.object.query(
      Array.from( this.querySelectorAll( selector ) )
    )

}
