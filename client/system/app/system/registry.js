app.system.registry = controller => (a,x) => [
  a.h3( 'System registry' ),

  a['div.clearfix'](
    a['div.float-right']( [
      app.close( controller, 'Close' ),
    ] )
  ),

  app.http(
    '/~/~/registry/configurations/',
    ( result, el ) => el.$nodes = app.tree( result )
  ),

  app.http(
    '/~/~/registry/engines/',
    ( result, el ) => el.$nodes = app.tree( result )
  ),

  app.http(
    '/~/~/registry/services/',
    ( result, el ) => el.$nodes = app.tree( result )
  ),

  app.http(
    '/~/~/registry/sub_services/',
    ( result, el ) => el.$nodes = app.tree( result )
  ),

  app.http(
    '/~/~/registry/orphans/',
    ( result, el ) => el.$nodes = app.tree( result )
  ),

  app.http(
    '/~/~/registry/shares/',
    ( result, el ) => el.$nodes = app.tree( result )
  ),

]
