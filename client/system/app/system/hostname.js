app.system.hostname = controller => (a,x) => [
  a.h3( "Hostname" ),

  app.http(
    '/~/~/system/config/hostname',
    ( hostname, el ) => el.$nodes = app.form( {
      url: '/~/~/system/config/hostname',
      success: () => location.assign( '/' ),
      scope: 'api_vars',
      form: (f) => [
        f.field( {
          key: 'host_name',
          value: hostname,
          label: false,
          layout: 'vertical'
        } ),
        f.btns( controller ),
      ]
    } ),
    {
      placeholder: app.hourglass( 'Loading hostname' ),
    }
  ),

]

// f\.buttons\([\n\r\s]+\{[\n\r\s]+cancel:[\n\r\s]+\{[\n\r\s]+onclick:.+[\n\r\s]+\}[\n\r\s]+\}[\n\r\s]+\)
