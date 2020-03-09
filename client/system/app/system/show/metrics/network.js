app.system.show.metrics.network = network => (a,x) => {

  return [
    a.p( 'Rx/Tx' ),
    app.charts.network( network ),
  ]

}
