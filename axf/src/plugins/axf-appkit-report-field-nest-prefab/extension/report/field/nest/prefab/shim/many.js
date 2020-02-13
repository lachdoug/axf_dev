ax.extension.report.field.nest.prefab.shim.
many = function ( f, options ) {

  let a = ax.a

  return f.controls.nest( {
    ...options,
    report: (ff) => (a,x) => {

      return a['|appkit-report-nest-many-wrapper']( [
        ff.items( {
          ...options,
          report: (fff) => [
            a['|appkit-report-nest-many-item-header']( options.itemHeaderTag ),
            a['|appkit-report-nest-many-item-body']( options.report( fff ), options.itemBodyTag ),
          ],
        } ),
      ],
      {
        ...options.wrapperTag,
        style: {
          display: 'block',
          ...( options.wrapperTag || {} ).style
        },
      } )

    }
  } )

}
