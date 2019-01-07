ax.extension.appkit.router = function( options={} ) {

  // options.scope = options.scope || "/"
  // options.home = options.home || "/"

  return ax.a['appkit-router']( {
    id: options.id,
    $init: ax.x.appkit.router.$init( options ),
    $update: ax.x.appkit.router.$update(),
    $open: ax.x.appkit.router.$open( options ),
    $to: ax.x.appkit.router.$to( options ),
    $bind: ax.x.appkit.router.$bind(),
    $kontrollers: [],
    ...options.routerTag
  } )

}
