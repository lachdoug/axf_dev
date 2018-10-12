ax.extensions.appkit.transitions.popfade = function( components, options={} ) {

  let a = ax.a
  let x = ax.x

  let time = ( options.time || 250 )

  return a.transition( components, {
    $complete: function () {
      this.$components.shift()
    },
    $to: function( view ) {
      if ( this.$components ) {
        this.$('view')[0].style.position = 'absolute'
        x.appkit.lib.fadeOut( this.$('view')[0], { time: time, complete: this.$complete } )
        this.$components.push( view )
      } else {
        this.$components = [ view ]
      }
    },
  } )

};
