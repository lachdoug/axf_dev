cc.control.builder.report = ( reportSpec, params ) => (a,x) => {

  return cc.control.builder.report.report( {
    components: Object.values( reportSpec.components || {} ),
    object: params,
    params: params,
    back: reportSpec.back,
    close: reportSpec.close,
  } )

}
