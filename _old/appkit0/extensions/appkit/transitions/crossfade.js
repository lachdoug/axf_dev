ax.extensions.appkit.transitions.crossfade = function( components, options={} ) {

  let a = ax.a
  let x = ax.x

  let time = ( options.time || 250 )

  return a['.transition']( components, {
    $shift: function () {
      this.$components.shift()
      this.$complete()
    },
    $complete: function () {
      [ ...this.children ].forEach( function( element ) { element.style.position = "" } )
      this.style.minHeight = '0px'
      options.complete && options.complete( this )
    },
    $child: function( view, complete ) {
      return a.div( view, {
        style: "display: none; position: absolute; width: 100%;",
        $init: function() {
          x.appkit.lib.fadeIn( this, { time: time, complete: complete } )
          this.parentElement.style.minHeight =
              this.offsetHeight + 'px'
        }
      } )
    },
    $to: function( view ) {
      let transition = this
      if ( this.$components ) {
        x.appkit.lib.fadeOut( this.$('div')[0], { time: time } )
        this.$components.splice( 1, 0,
          this.$child( view, transition.$shift )
        )
      } else {
        this.$components = [
          this.$child( view, transition.$complete )
        ]
      }
    },
    style: `
display: block; position: relative; width: 100%;
-webkit-transition: min-height 0.25s;
transition: min-height 0.25s;
transition-timing-function: ease-out;
`
  } )

};
