app2.navbar = (a,x) => a['app-navbar']( {
  $nodes: [
    app2.navbar.item( app2.fa('home'), '' ),
    app2.navbar.item( 'Get', 'get' ),
    app2.navbar.item( 'Examples', 'examples' ),
    app2.navbar.item( 'Extensions', 'extensions' ),
    x.appkit.router( {
      '/:section**': function(c) {
        this.$('^app-navbar').
        $$('app-navbar-item').
        $activate( c.params.section )
      },
    } ),
  ],
} )

app2.navbar.item = ( label, section ) => (a,x) => a['app-navbar-item'](
  x.appkit.transition.fade(
      app2.navbar.link( label, section ),
      { regulate: true }
  ),
  {
    $activate: function( active ) {
      this.$('appkit-transition').$to(
        app2.navbar.link( label, section, active )
      )
    }
  }
)

app2.navbar.link = ( label, section, active ) => (a,x) => {

  return app2.btn(
      label,
    function() { app2.open( `/${ section }` ) },
    `outline-secondary ${ section === active ? 'active' : null }`,
    // { disabled: section === active ? 'disabled' : null },
  )

}
