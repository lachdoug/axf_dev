app.service.show = controller => (a,x) => {

  const name = controller.params.name

  return a['div.row']( [
    a['div.col-3']( app.container.menu( controller, 'service' ) ),
    a['div.col-9']( app.http(
      [
        `/~/~/containers/service/${ name }/status`,
        `/~/~/containers/service/${ name }/websites`,
      ],
      ( [ status, websites ], el ) => {
        let container = {
          type: 'service',
          name: name,
          status: status,
          websites: websites,
        }
        el.$nodes = [
          a['app-container-state'](
            ax.x.transition.crossfade( {
              initial: [
                app.container.show.state( container ),
                app.container.show.instructions( controller, container ),
                app.container.show.metrics( container ),
              ]
            } ),
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
    ) ),
  ] )

}
