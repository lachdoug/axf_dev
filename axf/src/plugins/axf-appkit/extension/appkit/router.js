ax.extension.appkit.router = function( routes, options={} ) {

  return ax.a['appkit-router']( {
    id: options.id,
    $init: ax.x.appkit.router.$init( routes, options ),
    $nodes: ax.x.appkit.router.$nodes( options ),
    ...options.routerTag
  } )

}
