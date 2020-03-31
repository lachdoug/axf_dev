ax.extension.transition.
fadein = function( options={} ) {

  let a = ax.a
  let x = ax.x

  let duration = ( options.duration || 500 ) / 2
  let component = options.initial

  return a['|appkit-transition']( null, {
    $init: function () {
      this.style.display = 'none'
      if( component ) {
        this.$content = component
        this.$in()
      }
    },
    $in: function () {

      this.$nodes = this.$content
      x.lib.animate.fade.in( this, {
        duration: duration,
      } )
    },
    $to: function( component ) {

      component = ax.factory( component )
      this.$content = component
      this.$in()

    },
  } )

}
