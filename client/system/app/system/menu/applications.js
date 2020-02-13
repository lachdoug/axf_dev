app.system.menu.
applications = ( controller ) => (a,x) => app.http( '/~/~/containers/engines/status', ( response, el ) => {
  response.json().then( result => {
    let applications = x.lib.object.sort( result )
    el.$nodes = [
      a.hr,
      a['div.container'](
        a['app-system-applications']( [
          a['app-system-containers']( Object.keys( applications ).map(
            name => app.system.menu.applications.application( controller, name, applications[name] )
          ) ),
        ] )
      )
    ]
  } )
} )
