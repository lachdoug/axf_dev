app.router = (a,x) => a['div|app-router'](
  x.router(
    ( controller ) => [
      app.nav( controller ),
      controller.routes(
        {
          '/': app.home,
          '/login': app.login,
          '/logout': app.logout,
          '/timeout': app.timeout,
          '/applications*': app.applications,
          // '/services*': app.services,
          '/services*': app.namespaces,
          '/settings': app.settings,

          // '*': app.notFound,
        },
        {
          lazy: true,
          transition: [ 'crossfade', { time: 500 } ],
        }
      ),
    ],
    {
      default: controller => a['p.error']( [ controller, `Not found: CLIENT ${ controller.path } in ${ controller.scope || 'root' }` ] )
      //   home: '/applications',
    }
  ),
)

// app.routes = ( controller, routes, options={} ) => (a,x) => controller.routes( routes, {
//   lazy: true,
//   transition: options.transition ? [ 'crossfade', { time: 500 } ] : false,
// } )
