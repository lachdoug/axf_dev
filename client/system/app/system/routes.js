app.system.routes = ( system, controller ) => (a,x) => [
  a['div.mt-3'](
    controller.routes( {
      '/?': app.system.show,

      '/install*': app.system.install,

      '/applications/:name*': app.application,
      '/services/:name*': app.service,

      '/shutdown': app.system.shutdown,
      '/restart': app.system.restart,

      '/update': app.system.update,
      '/update_os': app.system.update_os,

      '/domains*': app.system.domains,
      '/certificates*': app.system.certificates,
      '/keys*': app.system.keys,

      '/hostname': app.system.hostname,
      '/label': app.system.label,
      '/locale': app.system.locale,
      '/timezone': app.system.timezone,
      '/site': app.system.site,

      '/admin': app.system.admin,
      '/users*': app.system.users,
      '/email*': app.system.email,

      '/registry': app.system.registry,
      '/reserved': app.system.reserved,
      '/orphans*': app.system.orphans,
      '/exceptions': app.system.exceptions,
      '/last_install': app.system.last_install,
      '/checkup': app.system.checkup,

    }, {
      transition: 'crossfade',
      lazy: true
    } )
  )

]
