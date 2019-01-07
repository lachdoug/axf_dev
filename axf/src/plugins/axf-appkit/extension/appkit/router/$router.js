ax.extension.appkit.router.$router = function( element, routes, options ) {

  // return function () {
    // debugger
    return {
      $element: element,
      $config: { routes: routes, options: options },
      $slaves: [],
      $init: ax.x.appkit.router.$router.$init,
      $enslave: ax.x.appkit.router.$router.$enslave,
      $open: ax.x.appkit.router.$router.$open,
      $to: ax.x.appkit.router.$router.$to,
      $locate: ax.x.appkit.router.$router.$locate,
      $update: ax.x.appkit.router.$router.$update,
      $controller: ax.x.appkit.router.$router.$controller,
    }

  // }

}
