app.system.
services = ( controller ) => (a,x) => a['app-system-services']( [
  app.http( '/api/-/containers/services/status', ( result, el ) => {
    let services = x.appkit.lib.object.sort( result.content )
    el.$nodes = a['app-system-containers']( Object.keys( services ).map(
      name => app.system.services.service( controller, name, services[name] )
    ) )
  } )
] ),
