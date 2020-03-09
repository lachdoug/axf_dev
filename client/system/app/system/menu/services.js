app.system.menu.
services = controller => (a,x) => app.http(
  '/~/~/containers/services/status',
  ( services, el ) => el.$nodes = [
    a.hr,
    a['div.container'](
      a['app-system-services']( [
        a['app-system-containers'](
          Object.keys( services ).sort().map(
            name => app.system.menu.services.service( controller, name, services[name] )
          )
        ),
      ] )
    )
  ]
)
