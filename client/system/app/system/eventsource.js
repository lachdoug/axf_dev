app.system.eventsource = (a,x) => a['app-system-eventsource'](
  {
    $digest: function(e) {
      let serializedData = e.data
      ax.log.info( `Container events stream ${ this.$started } - Container event data: '${ serializedData }'` )
      if ( serializedData ) {
        let data = JSON.parse( serializedData )
        if ( data.type == 'timeout' ) {
          this.$close()
          this.$send( 'systemSessionTimeout' )
        // } else if ( data.type == 'eot' ) {
        //   this.$close()
        } else if ( data.type == 'error' ) {
          this.$close()
          ax.log.warn( data.error )
          let confirmed = confirm( `${ data.error }\n\nReload the page?` )
          if ( confirmed ) this.$send( 'systemDisconnected' )
        } else if ( data.type == 'container_status_update' ) {
          // debugger
          let container_status_update = data.container_status_update
          this.$send( 'containerStatusUpdate', { detail: container_status_update } )
        }
      }
    },
    $run: function() {
      if ( !this.$eventsource  ) {
        const now = new Date();
        this.$started = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        ax.log.info( `Container events stream ${ this.$started } - Container events stream open.` )
        this.$eventsource = new EventSource( '/~/eventsource/containers' )
        this.$eventsource.onmessage = (e) => this.$digest(e)
        this.$eventsource.onerror = function(e) {
          // An event stream error is thrown when the page reloads.
          // The error is shown at the start of the console of freshly loaded page.
          // The timeout below gives a potential reload a moment to do its thing, which
          // will mean that timeout function will not be called and no error will be thrown.
          // If the page does not reload, the timeout will complate and the function will execute as normal.
          setTimeout( () => {
            ax.log.error( `Container events stream ${ this.$started } - Unexpected error.` )
            this.$send( 'systemDisconnected' )
            this.$close()
          }, 1000 )
        }.bind( this )
      }
    },
    $close: function() {
      if ( this.$eventsource ) {
        this.$eventsource.close()
        this.$eventsource = null
        ax.log.info( `Container events stream ${ this.$started } - Container events stream closed.` )
      }
    },
  }
)
