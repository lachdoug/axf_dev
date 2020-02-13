app.system.registry = ( controller ) => (a,x) => [
  a.h3( 'System registry' ),

  a['div.clearfix'](
    a['div.float-right']( [
      app.btn( app.icon( 'fa fa-arrow-up' ), (e,el) => controller.open( '../diagnostics' ) ),
    ] )
  ),

  app.http(
    '/~/~/registry/configurations/',
    ( response, el ) => response.json().then(
      result => el.$nodes = [
        app.tree( result ),
      ]
    )
  ),

  app.http(
    '/~/~/registry/engines/',
    ( response, el ) => response.json().then(
      result => el.$nodes = [
        app.tree( result ),
      ]
    )
  ),

  app.http(
    '/~/~/registry/services/',
    ( response, el ) => response.json().then(
      result => el.$nodes = [
        app.tree( result ),
      ]
    )
  ),

  app.http(
    '/~/~/registry/sub_services/',
    ( response, el ) => response.json().then(
      result => el.$nodes = [
        app.tree( result ),
      ]
    )
  ),

  app.http(
    '/~/~/registry/orphans/',
    ( response, el ) => response.json().then(
      result => el.$nodes = [
        app.tree( result ),
      ]
    )
  ),

  app.http(
    '/~/~/registry/shares/',
    ( response, el ) => response.json().then(
      result => el.$nodes = [
        app.tree( result ),
      ]
    )
  ),

]
