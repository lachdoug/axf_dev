ax.extension.xtermjs = ( options={} ) => (a,x) =>

a['axf-xtermjs']( {
  // style: { display: 'block' },
  $nodes: [
    a['axf-xtermjs-toolbar'](
      [
        a['axf-xtermjs-toolbar-left']( options.label ),
        a['axf-xtermjs-toolbar-right'](
          a['axf-xtermjs-fullscreen'](
            a.button( { $text: '🗖' }, {
              type: 'button',
              $on: {
                'click: toggle full screen': function() {
                  let terminal = this.$('^axf-xtermjs')
                  terminal.$fullscreen = !terminal.$fullscreen
                  if ( terminal.$fullscreen ) {
                    this.$text = '🗗'
                    this.$('^body').style.overflowY = 'hidden'
                    this.$('^body').querySelectorAll('axf-xtermjs').forEach( (el) => {
                      if ( el != this.$('^axf-xtermjs') ) el.$('axf-xtermjs-container').style.display = 'none'
                    } )
                    terminal.$('^axf-xtermjs').classList.add('fullscreen')
                  } else {
                    this.$text = '🗖'
                    this.$('^body').style.overflowY = 'auto';
                    this.$('^body').querySelectorAll('axf-xtermjs').forEach( (el) => {
                      el.$('axf-xtermjs-container').style.display = ''
                    } )
                    terminal.$('^axf-xtermjs').classList.remove('fullscreen')
                  }
                  terminal.$xterm.toggleFullScreen( terminal.$fullscreen )
                  terminal.$xterm.fit()
                  // Fit called twice as hack for bug where resizing is
                  // terminal.$xterm.fit() // wrong after exiting fullscreen.
                },
              },
            } )
          )
        ),
      ],
      options.toolbarTag
    ),
    a['axf-xtermjs-container']
  ],
  $init: function() {

    const resizeFn = function() {
      this.$xterm.fit()
      // Fit called twice as hack for bug where resizing is
      // this.$xterm.fit() // wrong after some page zoom changes.
    }.bind( this )

    window.addEventListener( 'resize', resizeFn )

    Terminal.applyAddon( fullscreen )
    Terminal.applyAddon( fit )
    this.$xterm = new Terminal( options.terminal )
    this.$xterm.open( this.$('axf-xtermjs-container') )
    this.$xterm.write( options.text || '' )
    resizeFn()

  },
  $on: {
    // 'keyup: check for escape fullscreen': function(e) {
    //   if ( e.keyCode == 27 ) {
    //     this.$('^axf-xtermjs').$xterm.toggleFullScreen(false)
    //   }
    // },
    // 'onblur: close fullscreen': function(e) {
    //   this.$('^axf-xtermjs').$xterm.toggleFullScreen(false)
    // },
  },
  $write: function( text ) {
    this.$xterm.write( text )
    // this.$xterm.fit()
  },
  ...options.terminalTag
} )
