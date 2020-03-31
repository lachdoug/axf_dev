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
              initial: app.container.show( 'service', controller, container )
            } ),
            {
              name: name,
              $state: container,
              $update: function( el, container ) {
                this.$('|appkit-transition').$to( app.container.show( 'service', controller, container ) )
              }
            }
          ),

        ]

      },
      {
        placeholder: app.hourglass( 'Loading container' )
      }
    ) ),
  ] )

}
