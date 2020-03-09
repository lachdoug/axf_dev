app.nav = controller => (a,x) => a['app-nav']( [

  app.button( {
    label: [
      app.logo( 20 ),
      'Engines System',
    ],
    onclick: () => window.location.href = '/system',
    title: 'Home',
    class: 'btn app-btn',
  } ),

  a['.nav-host']( a.small( location.hostname ) ),

  a['app-nav-buttons.float-right']( [
    // app.button( {
    //   label: app.icon( 'fa fa-cog' ),
    //   onclick: () => controller.open( '/settings' ),
    // } ),
    app.btn(
      app.icon( 'fas fa-cog' ),
      () => controller.open( '/settings' ),
      {
        class: 'btn app-btn app-nav-btn app-nav-btn-settings',
        title: 'Settings',
      }
    ),

    app.button( {
      label: app.icon( 'fa fa-sign-out-alt' ),
      title: 'Log out',
      onclick: () => controller.load( '/logout' ),
      class: 'btn app-btn',
    } ),
  ], {
    style: { display: 'none' },
  } ),

  app.http( '/~/session', ( response, el ) => {
    el.$('^app-nav').$setUser( true )
  } ),

], {

  id: 'nav',

  $init: function() {
    this.$update()
  },
  $setUser: function( user ) {
    let buttons = this.$('app-nav-buttons')
    user ? x.lib.animate.fade.in( buttons ) : x.lib.animate.fade.out( buttons )
  },
  $path: () => window.location.pathname,
  $update: function() {
    let path = this.$path()
    let active = ( path.match( /\w+/ ) || [''] )[0]
    this.$$( `.app-nav-btn` ).classList.remove('active')
    this.$$( `.app-nav-btn-${ active }` ).classList.add('active')
  },
  $open: function( path ) {
    controller.open( path )
  },
  $reopen: function() {
    controller.reopen()
  },
  $load: function( path ) {
    controller.load( path )
  },

} )
