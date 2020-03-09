ax.extension.transition.
fadein = function( options={} ) {

  let a = ax.a
  let x = ax.x

  let time = ( options.time || 500 ) / 2
  let component = options.initial

  return a['|appkit-transition']( null, {
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
      this.$component = component
      this.$in()

    },
  } )

}
