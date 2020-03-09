app.system.keys.index = controller => (a,x) => [

  a['div.clearfix'](
    a['div.float-right']( [
      app.up( controller, 'Close' ),
    ] )
  ),

  a['p.error']( 'System API needs route added for SSH keys collection.' ),

  // app.btn(
  //   app.icon( 'fa fa-user-secret', 'Private' ),
  //   (e,el) => controller.open( 'private' )
  // ),
  // a.hr,
  // a.p( 'Public' ),
  // app.btn(
  //   app.icon( 'fa fa-download', 'Download' ),
  //   (e,el) => controller.open( 'download' )
  // ),
  // app.btn(
  //   app.icon( 'fa fa-upload', 'Upload' ),
  //   (e,el) => controller.open( 'upload' )
  // ),

]
