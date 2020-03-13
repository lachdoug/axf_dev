app.application.icon = controller => (a,x) => {

  const name = controller.params.name

  let path = `/~/~/containers/engine/${ name }/icon_url`

  return [

    a.h5( 'Icon' ),
    app.http(
      path,
      ( icon_url, el ) => {
        el.$nodes = [
          app.form( {
            url: path,
            object: { icon_url: icon_url },
            scope: 'api_vars',
            success: () => controller.open( '..' ),
            form: (f) =>  [
              f.field( {
                key: 'icon_url',
                as: 'input/url',
                label: false,
                layout: 'vertical',
              } ),
              f.buttons(),
            ]
          } )
        ]
      },
      {
        placeholder: app.hourglass( 'Loading icon' )
      }
    ),

  ]

}
