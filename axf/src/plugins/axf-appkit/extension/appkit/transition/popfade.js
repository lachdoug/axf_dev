// ax.extension.appkit.transition.popfade = function( component, options={} ) {
//
//   let a = ax.a
//   let x = ax.x
//
//   let time = options.time || 500
//
//   return a['appkit-transition']( component, {
//     $complete: function () {
//       // debugger
//       this.$nodes = this.$nodes.slice(1)
//     },
//     $to: function( view ) {
//       view = ax.factory( view )
//       if ( options.regulate && view.isEqualNode( this.$view ) ) {
//         // Do nothing. Keep existing content.
//       } else {
//         this.$view = view
//         if ( this.style.display === 'none' ) {
//           this.$nodes = [ view ]
//         } else {
//           debugger
//           this.style.position = "relative"
//           this.firstChild.style.position = 'absolute'
//           x.appkit.lib.animate.fadeOut( this.firstChild, { time: time, complete: this.$complete.bind( this ) } )
//           // debugger
//           this.$nodes = this.$nodes.concat( [ view ]  )
//         }
//       }
//     },
//   } )
//
// };
