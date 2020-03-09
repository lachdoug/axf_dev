app.system.show.engines = controller => (a,x) => [
  a['div.clearfix']( [
    a['div.float-right'](
      app.btn(
        app.icon( 'fas fa-redo', 'Update' ),
        () => controller.open( 'update' )
      ),
    ),
    a['div.float-left'](
      a.div( null, {
        $init: (el) => el.$text = `Engines ${ system.$state.version }`,
        class: 'mt-2' }
      ),
    ),
  ] ),
  a.hr,
]



// app.http(
//   '/~/~/system/version/ident',
//   ( version, el ) => el.$nodes = [
//     a['div.clearfix']( [
//       a['div.float-right'](
//         app.btn(
//           app.icon( 'fas fa-redo', 'Update' ),
//           () => controller.open( 'update' )
//         ),
//       ),
//       a['div.float-left'](
//         a.div( `Engines ${ version }`, { class: 'mt-2' } ),
//       ),
//     ] ),
//     a.hr,
//   ]
// )
