ax.extensions.appkit.transitions.fade = function( components, options={} ) {

  let a = ax.a
  let x = ax.x

  let time = ( options.time || 250 ) / 2

  return a.transition( components, {
    $init: function () {
      this.style.display = 'none'
    },
    $in: function () {
      this.$components = [ this.$view ]
      x.appkit.lib.fadeIn( this, { time: time, complete: options.complete } )
    },
    $to: function( view ) {
      this.$view = view
      if ( this.$components ) {
        x.appkit.lib.fadeOut( this, { time: time, complete: this.$in } )
      } else {
        this.$in()
      }
    },
  } )

};
