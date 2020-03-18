app.system.checkup = controller => (a,x) => [

  a.h3( 'System checkup' ),

  a['div.clearfix'](
    a['div.float-right']( [
      app.close( controller, 'Close' ),
    ] )
  ),

  app.http(
    '/~/~/containers/check_and_act',
    (  report, el ) => el.$nodes = x.output( report ),
  )

]
