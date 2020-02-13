app.system.menu = ( system, controller ) => (a,x) => [

  app.system.menu.system( system, controller ),
  app.system.menu.applications( controller ),
  app.system.menu.services( controller ),

]
