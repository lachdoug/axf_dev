ax.extension.appkit.controller = function( routes, options={} ) {

  return ax.a['appkit-controller']( {
    // id: options.id,
    $init: ax.x.appkit.controller.$init( options ),
    $to: ax.x.appkit.controller.$to,
    $locate: ax.x.appkit.controller.$locate,
    $slaves: [],
    $bind: ax.x.appkit.controller.$bind,
    $open: ax.x.appkit.controller.$open( options ),
    // $detect: ax.x.appkit.controller.$detect( options ),
    $windowOpen: ax.x.appkit.controller.$windowOpen,
    $windowLocate: ax.x.appkit.controller.$windowLocate,
    // $view: ax.x.appkit.controller.$view( options ),
    $update: ax.x.appkit.controller.$update,
    $view: ax.x.appkit.controller.$view( routes, options ),
    $nodes: ax.x.appkit.controller.$nodes( options ),
    ...options.controllerTag
  } )

}
