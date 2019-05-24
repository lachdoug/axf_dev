ax.extension.appkit.router.factory.
routes = (r) => function( routes, options={} ) {
// debugger
  let scope = r.scope + ( options.scope || "" )
  let path = r.path
  let params = r.params
  let query = r.query
  let anchor = r.anchor
  let defaultView = options.default || r.default
  let transition = options.transition || r.transition

  let scopedpathFor = function( path ) {
    let lengthScope = scope.length
    let lengthPath = path.length
    if ( path.slice( 0, lengthScope ) === scope ) {
      return path.slice( lengthScope )
    } else {
      return null
    }
  }

  let component = ax.extension.appkit.router.factory.routes.
  component( r.router, scope, params, { default: defaultView } )

  let init
  let nodes
  let update

  if ( transition ) {
    init = function( el, state ) {
      el.$update( el, state )
    }
    nodes = [ transition ]
    update = function( el, state ) {
      // debugger
      el.$('appkit-transition').$to( component( el, state ) )
      return false
    }
  } else {
    init = () => {}
    nodes = component
    update = () => { return true }
  }


  let routesTag = {
    $scope: scope,
    $state: {
      scopedpath: scopedpathFor( path ),
      query: query
    },
    $anchor: anchor,
    $init: init,
    $nodes: nodes,
    $update: update,
    $open: function( path, query, anchor ) {
      // debugger
      this.$state = {
        scopedpath: scopedpathFor( path ),
        query: query
      }
      this.$anchor = anchor
      if ( anchor ) {
        let anchored = document.getElementById( anchor )
        if ( anchored ) anchored.scrollIntoView()
      }
    },
    $views: ax.extension.appkit.router.factory.routes.
    views( routes ),
    ...options.routesTag
  }

  return (a,x) => a["appkit-router-routes"](
    routesTag
  )

}
