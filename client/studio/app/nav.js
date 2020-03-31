app.nav = controller => (a,x) => a['app-nav']( [

  app.button( {
    label: [
      app.logo( 20 ),
      'Engines Studio',
    ],
    onclick: () => controller.open( '/' ),
    title: 'Home',
    class: 'btn app-btn',
  } ),

  a['app-nav-buttons']( [

    app.button( {
      label: 'Applications',
      onclick: () => controller.open( '/applications' ),
      class: 'btn app-btn app-nav-btn app-nav-btn-applications',
    } ),

    app.button( {
      label: 'Services',
      onclick: () => controller.open( '/namespaces' ),
      class: 'btn app-btn app-nav-btn app-nav-btn-namespaces',
    } ),

    a['app-nav-timeout-check']( null, {
      $check: function() {
        console.log( "Checking session" )
        this.$nodes = app.http( '/~/session', () => nav.$setUser( true ) )
      }
    } ),

    a['div.float-right']( [
      app.button( {
        label: app.icon( 'fa fa-cog' ),
        title: 'Settings',
        onclick: () => controller.open( '/settings' ),
        class: 'btn app-btn app-nav-btn app-nav-btn-settings',
      } ),
      app.button( {
        label: app.icon( 'fa fa-sign-out-alt' ),
        title: 'Log out',
        onclick: () => controller.load( '/logout' ),
        class: 'btn app-btn',
      } ),
    ] ),
  ], {
    style: { display: 'none' },
  } ),
], {
  id: 'nav',
  // $init: function() {
  //   this.$update()
  // },
  $setUser: function( user ) {
    let buttons = this.$('app-nav-buttons')
    user ? x.lib.animate.fade.in( buttons, { display: 'inline-block' } ) : x.lib.animate.fade.out( buttons )
  },
  $path: () => window.location.pathname,
  $update: function() {
    let path = this.$path()
    let active = ( path.match( /\w+/ ) || [''] )[0]
    nav.$$( `.app-nav-btn` ).classList.remove('active')
    nav.$$( `.app-nav-btn-${ active }` ).classList.add('active')
  },
  $timeoutCheck: function() {
    this.$('app-nav-timeout-check').$check()
  },
  $open: function( path ) {
    controller.open( path )
  },
  $load: function( path ) {
    controller.load( path )
  },

} )
