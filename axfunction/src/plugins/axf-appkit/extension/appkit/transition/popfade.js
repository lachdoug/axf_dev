ax.extension.appkit.transition.popfade = function( component, options={} ) {

  let a = ax.a
  let x = ax.x

  let time = options.time || 500

  return a['appkit-transition']( component, {
    $complete: function () {
      // debugger
      this.$nodes = this.$nodes.slice(1)
    },
    $to: function( view ) {
      if ( this.$nodes.length ) {
        this.$nodes[0].style.position = 'absolute'
        x.appkit.lib.animate.fadeOut( this.$nodes[0], { time: time, complete: this.$complete.bind( this ) } )
        // debugger
        this.$nodes = this.$nodes.concat( [ view ]  )
      } else {
        this.$nodes = [ view ]
      }
    },
  } )

};
