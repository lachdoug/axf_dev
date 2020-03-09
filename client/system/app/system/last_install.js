app.system.last_install = controller => (a,x) => [

  a['div.clearfix'](
    a['div.float-right']( [
      app.up( controller, 'Close' ),
    ] )
  ),

  a.h5( 'Last install' ),

  app.http(
    '/~/~/engine_builder/last_build/params',
    ( installation, el ) => el.$nodes = x.list( installation ),
  ),
  app.http(
    '/~/~/engine_builder/last_build/log',
    ( log, el ) => el.$nodes = cc.xterm( { text: log, label: 'Builder log' } ),
  ),
]
