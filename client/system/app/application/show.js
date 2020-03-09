app.application.show = controller => (a,x) => {

  const name = controller.params.name

  return a['div.row']( [
    a['div.col-3']( app.container.menu( controller, 'application' ) ),
    a['div.col-9']( app.http(
      [
        `/~/~/containers/engine/${ name }/status`,
        `/~/~/containers/engine/${ name }/websites`,
        `/~/~/containers/engine/${ name }/icon_url`,
      ],
      ( [ status, websites, icon_url ], el ) => {
        let container = {
          type: 'application',
          name: name,
          status: status,
          websites: websites,
          icon_url: icon_url,
        }
        el.$nodes = [
          a['app-container-state'](
            [
              a['div.float-right']( a.img( null, { src: container.icon_url, height: 48, width: 48 } ) ),
              ax.x.transition.crossfade( {
                initial: [
                  app.container.show.state( container ),
                  app.container.show.instructions( controller, container ),
                  app.container.show.metrics( container ),
                ]
              } ),
            ],
            {
              name: name,
              $state: container,
              $update: function( el, container ) {
                this.$('|appkit-transition').$to( [
                  app.container.show.state( container ),
                  app.container.show.instructions( controller, container ),
                  app.container.show.metrics( container ),
                ] )
              }
            }
          ),
          app.container.show.websites( container ),
        ]
      },

      {
        placeholder: app.hourglass( 'Loading container' )
      }
    ) )
  ] )

}
