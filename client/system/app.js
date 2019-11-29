let app = (a,x) => a['app']( [
  app.modal(),
  app.view,
] )


// app.nav = (a,x) => a['app-nav']( [
//   app.logo( 20 ),
//   'Engines',
// ], {
//   // style: "display: block;",
// } )

// app.nav = (controller) => (a,x) => a['div|app-nav']( [
//
//   // app.link( {
//   //   label: [
//   //     app.logo( 20 ),
//   //     'Engines Studio',
//   //   ],
//   //   title: 'Engines Studio',
//   //   href: '/',
//   //   class: 'btn btn-outline-secondary',
//   // } ),
//
//   app.button( {
//     label: [
//       app.logo( 20 ),
//       'Engines Studio',
//     ],
//     onclick: () => controller.open( '/' ),
//     title: 'Home',
//     class: 'btn btn-outline-secondary',
//   } ),
//
//   a['|app-nav-buttons']( [
//
//     app.button( {
//       label: 'Applications',
//       onclick: () => controller.open( '/applications' ),
//       class: 'btn btn-outline-secondary app-nav-btn app-nav-btn-applications',
//     } ),
//
//     // app.button( {
//     //   label: 'Services',
//     //   onclick: () => controller.open( '/services' ),
//     //   class: 'btn btn-outline-secondary app-nav-btn app-nav-btn-services',
//     // } ),
//
//     app.button( {
//       label: 'Services',
//       onclick: () => controller.open( '/namespaces' ),
//       class: 'btn btn-outline-secondary app-nav-btn app-nav-btn-namespaces',
//     } ),
//
//     a['div.float-right']( [
//       app.button( {
//         label: app.icon( 'fa fa-cog' ),
//         title: 'Settings',
//         onclick: () => controller.open( '/settings' ),
//         class: 'btn btn-outline-secondary app-nav-btn app-nav-btn-settings',
//       } ),
//       app.button( {
//         label: app.icon( 'fa fa-sign-out-alt' ),
//         title: 'Log out',
//         onclick: () => controller.load( '/logout' ),
//         class: 'btn btn-outline-secondary',
//         // id: 'logout',
//       } ),
//     ] ),
//
//   ] ),
//
//
// ], {
//   id: 'nav',
//   $init: function() {
//     this.$update()
//   },
//   $setUser: function( user ) {
//     let buttons = this.$('|app-nav-buttons')
//     user ? x.lib.animate.fade.in( buttons ) : x.lib.animate.fade.out( buttons )
//   },
//   $path: () => window.location.pathname,
//   $update: function() {
//     let path = this.$path()
//     let active = ( path.match( /\w+/ ) || [''] )[0]
//     nav.$$( `.app-nav-btn` ).classList.remove('active')
//     nav.$$( `.app-nav-btn-${ active }` ).classList.add('active')
//     // if ( path == '/' ) {
//     //   x.lib.animate.fade.out( up )
//     // } else {
//     //   x.lib.animate.fade.in( up )
//     // }
//   },
//   $open: function( path ) {
//     controller.open( path )
//   },
//   // $up: function() {
//   //   let path = this.$path().match( /^(.*)\/\w+$/ )[1] || '/'
//   //   controller.open( path )
//   // }
//
// } )
