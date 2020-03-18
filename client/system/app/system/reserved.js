app.system.reserved = controller => (a,x) => [

  a.h3( 'Reserved' ),

  a['div.clearfix'](
    a['div.float-right']( [
      app.close( controller, 'Close' ),
    ] )
  ),

  a.p( app.collapse( {
    label: 'Container names',
    body: app.http(
      '/~/~/system/reserved/engine_names',
      ( result, el ) => el.$nodes = x.output( result )
    ),
  } ) ),
  a.p( app.collapse( {
    label: 'Hostnames',
    body: app.http(
      '/~/~/system/reserved/hostnames',
      ( result, el ) => el.$nodes = x.output( result )
    ),
  } ) ),
  a.p( app.collapse( {
    label: 'Ports',
    body: app.http(
      '/~/~/system/reserved/ports',
      ( result, el ) => el.$nodes = x.output( result )
    ),
  } ) ),

]
