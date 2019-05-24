// ax.extension.appkit.loading = function( options={} ) {
//
//   let a = ax.a
//   let x = ax.x
//
//   let text = options.text ? " " + options.text : "Loading"
//
//   let component = a.div( [ { class: "spinner-border text-primary" }, text ] )
//
//   let loadingTag = {
//     $init: (el) => {
//       el.$('appkit-transition').$to( component )
//     },
//     ...options.loadingTag
//   }
//
//   return a['app-loading'](
//     x.appkit.transition.fade( {}, { time: 500 } ),
//     loadingTag
//   )
//
// }
