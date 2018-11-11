ax.extension.appkit.transition.fade = function( component, options={} ) {

  let a = ax.a
  let x = ax.x

  let time = ( options.time || 500 ) / 2

  return a['appkit-transition']( component, {
    $init: function () {
      this.style.display = 'none'
    },
    $in: function () {
      this.$nodes = [ this.$view ]
      // debugger
      x.appkit.lib.animate.fade.in( this, { time: time, complete: options.complete } )
    },
    $to: function( view ) {
      this.$view = view
      if ( this.$nodes.length ) {
        x.appkit.lib.animate.fade.out( this, { time: time, complete: this.$in.bind( this ) } )
      } else {
        this.$in()
      }
    },
  } )

};
