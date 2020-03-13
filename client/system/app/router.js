app.router = (a,x) => x.router(
  controller => [
    app.nav( controller ),
    app.system.eventsource,
    app.routes( controller ),
  ],
  {
    default: controller => a['p.error']( [
      controller,
      `Not found: CLIENT ${ controller.path } in ${ controller.scope || 'root' }`
    ] ),
  }
)
