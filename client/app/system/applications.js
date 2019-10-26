app.system.
applications = ( controller ) => (a,x) => a['app-system-applications']( [
  app.http( '/api/-/containers/engines/status', ( result, el ) => {
    let applications = x.appkit.lib.object.sort( result.content )
    el.$nodes = a['app-system-containers']( Object.keys( applications ).map(
      name => app.system.applications.application( controller, name, applications[name] )
    ) )
  } )
] ),
