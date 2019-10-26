app.system = ( controller ) => (a,x) => a['app-system']( [

  x.panes(
    {
      proximate: app.system.load( controller ),
      adjacent: app.system.routes( controller ),
      percent: window.localStorage.systemtemHorizontalPanesPercent || 33,
      panesTag: {
        $on: {
          'axf.panes.resize': (e,el) => {
            const panesPercent = e.detail.percent
            window.localStorage.systemtemHorizontalPanesPercent = panesPercent
            // e.stopPropagation()
            // el.$send( 'resize' )
          }
        }
      }
    }
  ),
  //   "Logs",
  //   {
  //     vertical: true,
  //     percent: window.localStorage.systemtemVerticalPanesPercent || 33,
  //     panesTag: {
  //       $on: {
  //         resize: (e,el) => {
  //           const panesPercent = e.detail.percent
  //           window.localStorage.systemtemVerticalPanesPercent = panesPercent
  //           // debugger
  //           // e.stopPropagation()
  //           // el.$send( 'resize' )
  //         }
  //       }
  //     }
  //   }
  // ),

],  )







// app.system = (a,x) => a['app-system']















// app.router = (a,x) =>















//   x.appkit.router( ( controller ) => [
//     // app.navbar(r),
//
//     // `app ${ controller.scope }`,
//     a['div.container'](
//       controller.routes( {
//         '/?': app.views,
//         '/applications/?**': app.views.applications,
//         '/services/?**': app.views.services,
//         // '/plans': app.views.plans,
//         // '**': 'oops'
//       }, {
//         transition: [ 'fade', null, { time: 200 } ],
//       } )
//     )
//
//   ], {
//     default: ( controller ) => (a,x) => [
//       a.p( `Not found ${ controller.path }` ),
//     ],
//   } ),
// ] }
//
//
//
//
// app.views = ( controller ) => (a,x) => a.p( [
//   // `app.views ${ controller.scope }`,
//   a.h1( 'Home' ),
//   // `XXX ${ controller.scope }`,
//   a.div( app.btn( app.fa( 'caret-right', 'Applications' ), () => controller.open( '/applications' ) ) ),
//   a.div( app.btn( app.fa( 'caret-right', 'Services' ), () => controller.open( '/services' ) ) ),
// ] )
//



// let user = {
//   name: "Lachlan",
//   birthday: "26/2/72"
// }
//
//
// let doit = function( params) {
//   params[:name]
//   params.name
// }
//
// doit( user )




// let app = (a,x) => a.p( [
//   a.p( [
//     a.p( 1 ),
//     a.p( 2 ),
//   ] ),
//   a.p( [
//     a.p( 3 ),
//     a.p( 4 ),
//   ] ),
// ], { $on: { 'click': ( e, el ) => {
//   debugger
//   el.$$("p")
// } } } )

// let app = function(a,x) { return [
//   app.css,
//   x.appkit.router( ( controller ) => [
//     // app.navbar(r),
//
//     // `app ${ controller.scope }`,
//     a['div.container'](
//       controller.routes( {
//         '/?': app.views,
//         '/applications/?**': app.views.applications,
//         '/services/?**': app.views.services,
//         // '/plans': app.views.plans,
//         // '**': 'oops'
//       }, {
//         transition: [ 'fade', null, { time: 200 } ],
//       } )
//     )
//
//   ], {
//     default: ( controller ) => (a,x) => [
//       a.p( `Not found ${ controller.path }` ),
//     ],
//   } ),
// ] }
//
//
//
//
// app.views = ( controller ) => (a,x) => a.p( [
//   // `app.views ${ controller.scope }`,
//   a.h1( 'Home' ),
//   // `XXX ${ controller.scope }`,
//   a.div( app.btn( app.fa( 'caret-right', 'Applications' ), () => controller.open( '/applications' ) ) ),
//   a.div( app.btn( app.fa( 'caret-right', 'Services' ), () => controller.open( '/services' ) ) ),
// ] )
//
// app.views.applications = ( controller ) => [
//
//   // `app.views.applications ${ controller.scope }`,
//
//   controller.routes( {
//     '/?': app.views.applications.index,
//     '/:id/?**': app.views.applications.item,
//     // '**': ( controller ) => { debugger; return 'Lost in Applications' },
//   } )
//
// ]
//
// app.views.applications.index = ( controller ) => (a,x) => a.p( [
//   // `app.views.applications.index ${ controller.scope }`,
//   a.h1( 'Applications' ),
//   app.btn( app.fa( 'arrow-up' ), () => controller.open( '<' ) ),
//   app.btn( app.fa( 'caret-right', '1' ), () => controller.open( '1' ) ),
//   app.btn( app.fa( 'caret-right', '2' ), () => controller.open( '2' ) ),
// ] )
//
// app.views.services = ( controller ) => [
//   // `app.views.services ${ controller.scope }`,
//   controller.routes( {
//     '/?': 'Services',
//     '**': 'Lost in Services',
//   } )
// ]
//
// app.views.plans = ( controller ) => [
//   // `app.views.plans ${ controller.scope }`,
//
//   controller.routes( {
//     '/system': 'Plans',
//     '**': 'Lost in Plans',
//   } )
//
// ]
//
// app.views.applications.
// item = ( controller ) => (a,x) => a.p( [
//   // `app.views.applications.item ${ controller.scope }`,
//   controller.routes( {
//     '/?': app.views.applications.item.show,
//     '/edit/?': app.views.applications.item.edit,
//     '/base/?': app.views.applications.item.base,
//     // '/?': app.views.applications.item.show
//   } ),
// ] )
//
// app.views.applications.item.
// edit = ( controller ) => (a,x) => a.p( [
//   // `app.views.applications.item.edit ${ controller.scope }`,
//   'Edit application',
//   app.btn( app.fa( 'arrow-up' ), () => controller.open( '~' ) ),
//   x.appkit.put( controller.params ),
// ] )
//
// app.views.applications.item.show = ( controller ) => (a,x) => a.p( [
//   // `app.views.applications.item.show ${ controller.scope }`,
//   a.h1( `Show application ${ controller.params.id }` ),
//   x.appkit.put( controller.params ),
//   app.btn( app.fa( 'arrow-up' ), () => controller.open( '<' ) ),
//   app.btn( app.fa( 'edit', 'Edit' ), () => controller.open( '~edit' ) ),
//   "Here's the application",
// ] )
//
// app.views.applications.item.
// base = ( controller ) => (a,x) => a.p( [
//   // `app.views.applications.item.base ${ controller.scope }`,
//   'Base',
//   controller.routes( {
//     '/?': app.views.applications.item.edit,
//     '/edit/?': app.views.applications.item.base,
//     '**': app.views.applications.item.show
//   } )
// ] )
