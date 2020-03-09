app.system.install.library = controller => (a,x) => [

  a['div.clearfix'](
    a['div.float-right']( [
      app.btn( app.icon( 'fas fa-save', 'Load' ), (e,el) => controller.open( 'url' ) ),
      // app.btn( app.icon( 'fa fa-backward', 'Last' ), (e,el) => controller.open( 'last' ) ),
      app.up( controller, 'Close' ),
    ] )
  ),

  app.http(
    'https://library.engines.org/api/v0/apps',
    ( library, el ) => el.$nodes = [
      a['.app-library'](
        library.apps.map( application => app.button( {
          class: 'btn',
          label: [
            a['div.application-icon'](
              application.icon_url ? [ a.img( null, {
                src: application.icon_url
              } ) ] : null
            ),
            application.label,
          ],
          onclick: () => controller.open( 'new', {
            blueprint_url: application.blueprint_url,
            label: application.label,
            icon_url: application.icon_url || '',
          } )
        } ) ),
      ),
    ]
  ),

]
