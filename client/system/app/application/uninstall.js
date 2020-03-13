app.application.uninstall = controller => (a,x) => {

  const name = controller.params.name

  return [

    a.h3( `Uninstall ${ name }` ),
    a['div.clearfix']( a['div.float-right']( app.close( controller, 'Close' ) ) ),

    a.p( app.btn(
      app.icon( 'fas fa-minus-circle', 'Uninstall' ),
      (e,el) => el.$('^').$uninstall()
    ), {
      $uninstall: function() {
        this.$nodes = app.http(
          `/~/~/containers/engine/${ name }/delete/all`,
          () => controller.open( '..' ),
          { method: 'delete' }
        )
      },
    } ),

  ]

}
