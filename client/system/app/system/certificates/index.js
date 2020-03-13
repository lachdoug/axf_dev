app.system.certificates.index = controller => (a,x) => [

  a['div.clearfix'](
    a['div.float-right']( [
      app.close( controller, 'Close' ),
    ] )
  ),

  app.http( '/~/~/system/certs/default' ),

  app.http(
    '/~/~/system/certs/',
    ( certificates, el ) => el.$nodes = [
      certificates,
      // app.btn(
      //   app.icon( 'fa fa-plus' ),
      //   (e,el) => controller.open( 'add' )
      // ),
      // app.btn(
      //   app.icon( 'fa fa-minus' ),
      //   (e,el) => controller.open( 'remove' )
      // ),
    ]
  ),

  app.http( '/~/~/system/certs/service_certs' )

]
