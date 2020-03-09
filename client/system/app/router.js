app.router = (a,x) => x.router(
  controller => [
    app.nav( controller ),
    app.system.eventsource,
    app.routes( controller ),
  ] ,{
    home: '/system',
  }
)
