app.system.show.metrics.cpu = cpu => (a,x) => {

  return [
    a.p( 'CPU' ),
    app.charts.cpu( cpu ),
    a.hr,
  ]

}
