app.system.eventsource = (a,x) => a['app-system-eventsource'](
  null,
  {
    $digest: function(e) {
      let serializedData = e.data
      console.info( `Container events stream ${ this.$started } - Container event data: '${ serializedData }'` )
      if ( serializedData ) {
        let data = JSON.parse( serializedData )
        if ( data.type == 'timeout' ) {
          this.$close()
          this.$send( 'app.timeout' )
        // } else if ( data.type == 'eot' ) {
        //   this.$close()
        } else if ( data.type == 'error' ) {
          this.$close()
          console.warn( `Event error.\n\n${ data.error }` )
          this.$send( 'app.disconnected' )
        } else if ( data.type == 'container_status_update' ) {
          let container_status_update = data.container_status_update
          this.$send( 'app.container.status.update', { detail: container_status_update } )
        } else if ( data.type == 'system_status_update' ) {
          let system_status_update = data.system_status_update
          this.$send( 'app.system.status.update', { detail: system_status_update } )
        }
      }
    },
    $run: function() {
      if ( !this.$eventsource  ) {
        const now = new Date();
        this.$started = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        console.info( `Container events stream ${ this.$started } - Container events stream open.` )
        this.$eventsource = new EventSource( '/~/eventsource/containers' )
        this.$eventsource.onmessage = (e) => this.$digest(e)
        this.$eventsource.onerror = function(e) {
          // An event stream error is thrown when the page reloads.
          // The error is shown at the start of the console of freshly loaded page.
          // The timeout below gives a potential reload a moment to do its thing, which
          // will mean that timeout function will not be called and no error will be thrown.
          // If the error was not caused by page reload, the timeout will complete and the function will execute as normal.
          setTimeout( () => {
            console.error( `Container events stream ${ this.$started } - Unexpected error.` )
            this.$send( 'app.disconnected' )
            this.$close()
          }, 1000 )
        }.bind( this )
      }
    },
    $close: function() {
      if ( this.$eventsource ) {
        this.$eventsource.close()
        this.$eventsource = null
        console.info( `Container events stream ${ this.$started } - Container events stream closed.` )
      }
    },
  }
)
