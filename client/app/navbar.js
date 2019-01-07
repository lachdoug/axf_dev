app.navbar = (a,x) => a['app-navbar']( {
  $nodes: [
    app.navbar.item( app.fa('home'), '' ),
    app.navbar.item( 'Get', 'get' ),
    app.navbar.item( 'Guide', 'guide' ),
    app.navbar.item( 'Extensions', 'extensions' ),
    x.appkit.router( {
      '/:section**': function(c) {
        this.$('^app-navbar').
        $$('app-navbar-item').
        $activate( c.params.section )
      },
    } ),
  ],
} )

app.navbar.item = ( label, section ) => (a,x) => a['app-navbar-item'](
  x.appkit.transition.fade(
      app.navbar.link( label, section ),
      { regulate: true }
  ),
  {
    $activate: function( active ) {
      this.$('appkit-transition').$to(
        app.navbar.link( label, section, active )
      )
    }
  }
)

app.navbar.link = ( label, section, active ) => (a,x) => {

  return app.btn(
      label,
    function() { app.open( `/${ section }` ) },
    `outline-secondary ${ section === active ? 'active' : null }`,
    { disabled: section === active ? 'disabled' : null },
  )

}
