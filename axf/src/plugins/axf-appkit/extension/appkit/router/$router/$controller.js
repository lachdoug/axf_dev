ax.extension.appkit.router.$router.$controller = function () {

    let locator = this.$locator

    let params = { ...locator.variables, ...locator.search }

    if ( locator.splat ) {
      params.splat = locator.splat
    }

    if ( locator.splats ) {
      params.splats = locator.splats
    }

    if ( locator.anchor ) {
      params.anchor = locator.anchor
    }

    return {
      element: this.$element,
      params: params,
      locator: locator,
      open: this.$open.bind( this ),
    }


}
