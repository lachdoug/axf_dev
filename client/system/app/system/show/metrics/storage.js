app.system.show.metrics.storage = storage => (a,x) => {

  return [
    a.p( 'Storage' ),
    app.charts.storage( storage ),
    a.hr,
  ]

}
