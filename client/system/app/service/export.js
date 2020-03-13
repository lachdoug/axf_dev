app.service.export = controller => (a,x) => {

  const name = controller.params.name

  return [

    a.h5( `Export` ),
    a['div.clearfix']( a['div.float-right']( app.close( controller, 'Close' ) ) ),
    app.link( {
      label: app.icon( 'fa fa-check', 'OK' ),
      href: `/~/download/service/${ name }`,
      target: '_blank',
      class: 'btn btn-primary',
    } ),
    app.link( { label: 'TEST DOWNLOAD', href: '/~/download/test', target: '_blank' } ),

  ]


}
