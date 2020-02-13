app.router = (a,x) => a['app-router'](
  x.router(
    ( controller ) => [
      app.nav( controller ),
      controller.routes(
        {
          // '/': controller => controller.open + '', // app.home,
          '/login': app.login,
          '/logout': app.logout,
          '/timeout': app.timeout,
          '/applications*': app.applications,
          '/namespaces*': app.namespaces,
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
      default: controller => a['p.error']( [ controller, `Not found: CLIENT ${ controller.path } in ${ controller.scope || 'root' }` ] ),
      home: '/applications',
    }
  ),
)
