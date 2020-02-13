app.system.menu.
services = ( controller ) => (a,x) => app.http( '/~/~/containers/services/status', ( response, el ) => {
  response.json().then( result => {
    let services = x.lib.object.sort( result )
    el.$nodes = [
      a.hr,
      a['div.container'](
        a['app-system-services']( [
          a['app-system-containers']( Object.keys( services ).map(
            name => app.system.menu.services.service( controller, name, services[name] )
          ) ),
        ] )
      )
    ]
  } )
} )
