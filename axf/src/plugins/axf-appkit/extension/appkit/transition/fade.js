ax.extension.appkit.transition.fade = function( content, options={} ) {

  let a = ax.a
  let x = ax.x

  let time = ( options.time || 500 ) / 2

  return a['appkit-transition']( content, {
    $init: function () {
      this.style.display = 'none'
      if( content ) {
        this.$view = content
        this.$in()
      }
    },
    $in: function () {
      this.$nodes = this.$view
      x.appkit.lib.animate.fade.in( this, {
        time: time,
        // complete: options.complete
      } )
    },
    $to: function( view ) {
      // debugger
      view = ax.factory( view )

      // ax.log( view.isEqualNode( this.$view ) )
      if ( options.regulate && view.isEqualNode( this.$view ) ) {
        // Do nothing. Keep existing content.
      } else {
        this.$view = view
        if ( this.style.display === 'none' ) {
          this.$in()
        } else {
          x.appkit.lib.animate.fade.out( this, {
            time: time,
            complete: this.$in.bind( this )
          } )
        }
      }
    },
  } )

}
