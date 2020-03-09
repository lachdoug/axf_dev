app.system.show.metrics.memory = memory => (a,x) => [

  a.p( 'Memory' ),
  app.charts.ram( memory.ram ),
  app.label( 'Applications' ),
  app.charts.containers( memory.containers.applications ),
  app.label( 'Services' ),
  app.charts.containers( memory.containers.services ),

  a.hr,

]
