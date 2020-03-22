cc.control.builder.report.report = ( options={} ) => (a,x) => {

  let components = (r) => ( options.components || [] ).map(
    ( componentSpec ) => cc.control.builder.report.component( r, componentSpec, options.params )
  )

  let reportFn = (r) => [
    ...components(r),
    a.p( [
      cc.button( {
        label: app.icon( 'fa fa-times', 'Back' ),
        onclick: undefined,
        buttonTag: { data: { dismiss: 'modal' } },
      } ),
      cc.button( {
        label: app.icon( 'fa fa-check', 'OK' ),
        onclick: undefined,
        buttonTag: { data: { dismiss: 'modal' } },
      } )
    ] ),
  ]

  return cc.report( {
    report: reportFn,
    params: options.params,
    object: options.object,
  } )

}
