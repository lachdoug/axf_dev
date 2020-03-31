ax.extension.transition.
crossfade = function( options={} ) {

  let a = ax.a
  let x = ax.x

  let duration = ( options.duration || 500 ) / 2

  return a['div|appkit-transition']( null, {
    $init: function () {
      let component = options.initial
      this.style.display = 'none'
      if( component ) {
        this.$in( component )
      }
    },
    $in: function( component ) {
      this.$nodes = component
      x.lib.animate.fade.in( this, {
        duration: duration,
      } )
    },
    $to: function( component ) {
      if ( this.style.display === 'none' ) {
        this.$in( component )
      } else {
        x.lib.animate.fade.out( this, {
          duration: duration,
          complete: () => this.$in( component )
        } )
      }

    },
    ...options.transitionTag
  } )

}
