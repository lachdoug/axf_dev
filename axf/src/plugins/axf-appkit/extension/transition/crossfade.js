ax.extension.transition.
crossfade = function( options={} ) {

  let a = ax.a
  let x = ax.x

  let time = ( options.time || 500 ) / 2
  let component = options.initial

  return a['|appkit-transition']( {
    $init: function () {
      this.style.display = 'none'
      if( component ) {
        this.$component = component
        this.$in()
      }
    },
    $in: function () {

      this.$nodes = this.$component
      x.lib.animate.fade.in( this, {
        time: time,
      } )
    },
    $to: function( component ) {

      component = ax.factory( component )

      // if ( options.regulate && component.isEqualNode( this.$component ) ) {
        // Do nothing. Keep existing content.
      // } else {
        this.$component = component
        if ( this.style.display === 'none' ) {
          this.$in()
        } else {
          x.lib.animate.fade.out( this, {
            time: time,
            complete: this.$in.bind( this )
          } )
        }
      // }
    },
  } )

}
