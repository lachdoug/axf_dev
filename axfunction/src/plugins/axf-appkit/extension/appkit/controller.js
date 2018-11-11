ax.extension.appkit.controller = function( routes, options={} ) {

  return ax.a['appkit-controller']( {
    id: options.id,
    $init: ax.x.appkit.controller.$init( options ),
    $to: ax.x.appkit.controller.$to( options ),
    $open: ax.x.appkit.controller.$open( options ),
    $update: ax.x.appkit.controller.$update( options ),
    $content: ax.x.appkit.controller.$content( routes, options ),
    $nodes: ax.x.appkit.controller.$nodes( options ),
    ...options.controllerTag
  } )

}
