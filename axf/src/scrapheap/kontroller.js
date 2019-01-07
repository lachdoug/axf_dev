ax.extension.appkit.kontroller = function( routes, options={} ) {
// debugger
  return ax.a['appkit-kontroller']( {
    id: options.id,
    $init: ax.x.appkit.kontroller.$init( options ),
    $to: ax.x.appkit.kontroller.$to( options ),
    $open: ax.x.appkit.kontroller.$open( options ),
    $update: ax.x.appkit.kontroller.$update( options ),
    $content: ax.x.appkit.kontroller.$content( routes, options ),
    $nodes: ax.x.appkit.kontroller.$nodes( options ),
    ...options.kontrollerTag
  } )

}
