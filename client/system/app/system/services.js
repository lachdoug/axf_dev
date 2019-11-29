app.system.
services = ( controller ) => (a,x) => a['app-system-services']( [
  app.http( '/~/~/containers/services/status', ( result, el ) => {
    let services = x.lib.object.sort( result.content )
    el.$nodes = a['app-system-containers']( Object.keys( services ).map(
      name => app.system.services.service( controller, name, services[name] )
    ) )
  } )
] ),
