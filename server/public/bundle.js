// (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// let $preferences = {
//   // codeEditorKeymap: 'vim',
// }
//
// let app = () => [ app.css, app.view ]
//
// app.xterm = ( text ) => (a,x) => a['app-xterm']( a.div( {
//   $init: (el) => {
//     var term = new Terminal()
//     term.open(el)
//     term.write(text)
//   }
// } ) )
//
// app.http = function( route, success, options={} ) {
//   return (a,x) => x.appkit.http( route, {
//     status: {
//       401: ( result, el ) => x.appkit.lib.event( el, 'enginesNotAuthenticated' ),
//       418: ( result, el ) => { alert( result ); x.appkit.lib.event( el, 'enginesNotAuthenticated' ) },
//       503: ( result, el ) => x.appkit.lib.event( el, 'enginesDisconnected' ),
//       ...options.status
//     },
//     handlers: {
//       'text/terminal': ( response, el ) => response.text().then( result => {
//         el.$nodes = () => app.xterm( result )
//       } )
//     },
//     success: success,
//     method: options.method,
//     placeholder: options.placeholder,
//   } )
// }
//
// app.view = (a,x) => a['app-view']( a['div.container'](
//   x.appkit.router( ( controller ) =>
//     a['app-system-events'](
//       controller.routes( {
//         '/login': app.system.login,
//         '/logout': app.system.logout,
//         '/disconnected': app.system.disconnected,
//         '*': app.system,
//         // '/applications/?**': app.systems.applications,
//         // '/services/?**': app.systems.services,
//         // '**': 'Not found'
//       }, {
//         lazy: true,
//         transition: [ 'crossfade', null, { time: 250 } ],
//       } ),
//       {
//         $on: {
//           'enginesNotAuthenticated': (e,el) => {
//             controller.open( '/login' )
//           },
//           'enginesDisconnected': (e,el) => {
//             // debugger
//             controller.open( '/disconnected' )
//           },
//           'enginesReconnected': (e,el) => {
//             controller.open( '/' )
//           },
//         }
//       }
//     ),
//   )
// ) )
//
// app.system = ( controller ) => controller.routes( {
//   '*': app.system.load,
//   // '/applications/?': 'applications',
//   // '/services/?': 'services',
//   // '*': 'Not found',
// }, { lazy: false } )
//
// app.system.load = ( controller ) => (a,x) => a['app-system-load'](
//   app.http(
//     '/api/system/system_user/settings',
//     ( systemSettings, el  ) => {
//       // if ()
//       el.$nodes = () => app.system.connected( controller, systemSettings )
//     }
//   ),
//   {
//     $on: {
//       'axfAppkitHttpStart': (e,el) => {
//         // debugger
//         x.appkit.lib.animate.fade.in( systemLoadingSpinner )
//       },
//       'axfAppkitHttpComplete': (e,el) => {
//         // debugger
//         // if (!("axfAppkitHttpStart" in window)) {
//         //   /* do something amazing */
//         // }
//         x.appkit.lib.animate.fade.out( systemLoadingSpinner )
//       }
//     }
//   }
// )
//
//
// // app.system = (a,x) => a['app-system']
//
// app.system.connected = ( controller, systemSettings ) => (a,x) => [
//   a['.float-right'](
//     app.btn( app.icon( 'fa fa-sign-out' ), () => controller.open( '!/logout' ) )
//   ),
//   a.h1( 'System' ),
//   controller,
//   systemSettings,
//   app.http(
//     '/api/system/staus',
//     // ( systemSettings, el  ) => {
//     //   el.$nodes = () => app.system.connected( controller, systemSettings )
//     // }
//   ),
// ]
//
//
//
// app.system.polling = ( route, success, options={} ) => (a,x) => a['app-polling']( {
//   $nodes: app.system.polling.wait( route, success, options ),
// } )
//
// app.system.polling.wait = ( route, success, options={} ) => () => (a,x) => a['app-polling-wait']( {
//   $nodes: 'Waiting...',
//   $init: (el) => setTimeout(
//     () => el.$nodes = app.system.polling.check( route, success, options ),
//     8000
//   ),
// } )
//
// app.system.polling.check = ( route, success, options={} ) => () => (a,x) => a['app-polling-check']( {
//   $nodes: [ 'Checking...', a['app-polling-check-http'] ],
//   $init: (el) => setTimeout(
//     () => {
//       el.$('app-polling-check-http').$nodes = () => [
//         app.http(
//           route,
//           success,
//           {
//             status: {
//               503: (e,el) => { el.$('^app-polling').$render() },
//               ...options.status
//             }
//           }
//         )
//       ]
//     },
//     2000
//   ),
// } )
//
// app.system.disconnected = ( controller ) => (a,x) => a['app-system-disconnected'](
//   [
//     a.h3( "System disconnected" ),
//     app.system.polling(
//       '/api/system/status',
//       (e,el) => x.appkit.lib.event( el, 'enginesReconnected' )
//     )
//   ],
//   {
//     // $init: (el) => setTimeout(
//     //   () => {
//     //     debugger
//     //     app.http( '/api/system/status', (e,el) => {
//     //       return x.appkit.lib.event( el, 'enginesReconnected' )
//     //     } )
//     //   },
//     //   1000
//     // )
//   }
// )
//
//
//
// // app.router = (a,x) =>
//
// app.system.login = ( controller ) => (a,x) => a['div.app-system-login'](
//   [
//     a.h3( "Log in" ),
//     app.form( {
//       action: '/api/system/login',
//       form: (f) => [
//         // f.field( { key: 'user_name', value: 'engines', type: 'hidden' } ),
//         f.input( { name: 'password', type: 'password', placeholder: 'Password' } ),
//         f.submit( {
//           label: app.icon( 'fa fa-sign-in' )
//         } ),
//       ]
//     } )
//   ]
// )
//
// app.system.logout = ( controller ) => (a,x) => a['div.app-system-logout'](
//   app.http(
//     '/api/system/login',
//     ( result, el  ) => {
//       el.$nodes = a.$$.p(
//         a.h3( "Logged out" ),
//         app.btn( app.icon( "fa fa-sign-in", "Login" ), () => controller.open( '/login' ) )
//       )
//     },
//     {
//       method: 'delete',
//     }
//   )
// )
//
//
//
// //   x.appkit.router( ( controller ) => [
// //     // app.navbar(r),
// //
// //     // `app ${ controller.scope }`,
// //     a['div.container'](
// //       controller.routes( {
// //         '/?': app.views,
// //         '/applications/?**': app.views.applications,
// //         '/services/?**': app.views.services,
// //         // '/plans': app.views.plans,
// //         // '**': 'oops'
// //       }, {
// //         transition: [ 'fade', null, { time: 200 } ],
// //       } )
// //     )
// //
// //   ], {
// //     default: ( controller ) => (a,x) => [
// //       a.p( `Not found ${ controller.path }` ),
// //     ],
// //   } ),
// // ] }
// //
// //
// //
// //
// // app.views = ( controller ) => (a,x) => a.p( [
// //   // `app.views ${ controller.scope }`,
// //   a.h1( 'Home' ),
// //   // `XXX ${ controller.scope }`,
// //   a.div( app.btn( app.fa( 'caret-right', 'Applications' ), () => controller.open( '/applications' ) ) ),
// //   a.div( app.btn( app.fa( 'caret-right', 'Services' ), () => controller.open( '/services' ) ) ),
// // ] )
// //
//
//
//
// // let user = {
// //   name: "Lachlan",
// //   birthday: "26/2/72"
// // }
// //
// //
// // let doit = function( params) {
// //   params[:name]
// //   params.name
// // }
// //
// // doit( user )
//
//
//
//
// // let app = (a,x) => a.p( [
// //   a.p( [
// //     a.p( 1 ),
// //     a.p( 2 ),
// //   ] ),
// //   a.p( [
// //     a.p( 3 ),
// //     a.p( 4 ),
// //   ] ),
// // ], { $on: { 'click': ( e, el ) => {
// //   debugger
// //   el.$$("p")
// // } } } )
//
// // let app = function(a,x) { return [
// //   app.css,
// //   x.appkit.router( ( controller ) => [
// //     // app.navbar(r),
// //
// //     // `app ${ controller.scope }`,
// //     a['div.container'](
// //       controller.routes( {
// //         '/?': app.views,
// //         '/applications/?**': app.views.applications,
// //         '/services/?**': app.views.services,
// //         // '/plans': app.views.plans,
// //         // '**': 'oops'
// //       }, {
// //         transition: [ 'fade', null, { time: 200 } ],
// //       } )
// //     )
// //
// //   ], {
// //     default: ( controller ) => (a,x) => [
// //       a.p( `Not found ${ controller.path }` ),
// //     ],
// //   } ),
// // ] }
// //
// //
// //
// //
// // app.views = ( controller ) => (a,x) => a.p( [
// //   // `app.views ${ controller.scope }`,
// //   a.h1( 'Home' ),
// //   // `XXX ${ controller.scope }`,
// //   a.div( app.btn( app.fa( 'caret-right', 'Applications' ), () => controller.open( '/applications' ) ) ),
// //   a.div( app.btn( app.fa( 'caret-right', 'Services' ), () => controller.open( '/services' ) ) ),
// // ] )
// //
// // app.views.applications = ( controller ) => [
// //
// //   // `app.views.applications ${ controller.scope }`,
// //
// //   controller.routes( {
// //     '/?': app.views.applications.index,
// //     '/:id/?**': app.views.applications.item,
// //     // '**': ( controller ) => { debugger; return 'Lost in Applications' },
// //   } )
// //
// // ]
// //
// // app.views.applications.index = ( controller ) => (a,x) => a.p( [
// //   // `app.views.applications.index ${ controller.scope }`,
// //   a.h1( 'Applications' ),
// //   app.btn( app.fa( 'arrow-up' ), () => controller.open( '<' ) ),
// //   app.btn( app.fa( 'caret-right', '1' ), () => controller.open( '1' ) ),
// //   app.btn( app.fa( 'caret-right', '2' ), () => controller.open( '2' ) ),
// // ] )
// //
// // app.views.services = ( controller ) => [
// //   // `app.views.services ${ controller.scope }`,
// //   controller.routes( {
// //     '/?': 'Services',
// //     '**': 'Lost in Services',
// //   } )
// // ]
// //
// // app.views.plans = ( controller ) => [
// //   // `app.views.plans ${ controller.scope }`,
// //
// //   controller.routes( {
// //     '/': 'Plans',
// //     '**': 'Lost in Plans',
// //   } )
// //
// // ]
// //
// // app.views.applications.
// // item = ( controller ) => (a,x) => a.p( [
// //   // `app.views.applications.item ${ controller.scope }`,
// //   controller.routes( {
// //     '/?': app.views.applications.item.show,
// //     '/edit/?': app.views.applications.item.edit,
// //     '/base/?': app.views.applications.item.base,
// //     // '/?': app.views.applications.item.show
// //   } ),
// // ] )
// //
// // app.views.applications.item.
// // edit = ( controller ) => (a,x) => a.p( [
// //   // `app.views.applications.item.edit ${ controller.scope }`,
// //   'Edit application',
// //   app.btn( app.fa( 'arrow-up' ), () => controller.open( '~' ) ),
// //   x.appkit.put( controller.params ),
// // ] )
// //
// // app.views.applications.item.show = ( controller ) => (a,x) => a.p( [
// //   // `app.views.applications.item.show ${ controller.scope }`,
// //   a.h1( `Show application ${ controller.params.id }` ),
// //   x.appkit.put( controller.params ),
// //   app.btn( app.fa( 'arrow-up' ), () => controller.open( '<' ) ),
// //   app.btn( app.fa( 'edit', 'Edit' ), () => controller.open( '~edit' ) ),
// //   "Here's the application",
// // ] )
// //
// // app.views.applications.item.
// // base = ( controller ) => (a,x) => a.p( [
// //   // `app.views.applications.item.base ${ controller.scope }`,
// //   'Base',
// //   controller.routes( {
// //     '/?': app.views.applications.item.edit,
// //     '/edit/?': app.views.applications.item.base,
// //     '**': app.views.applications.item.show
// //   } )
// // ] )
//
// },{}]},{},[1]);
