app.system.install.monitor = controller => (a,x) => [

  a['div.clearfix'](
    a['div.float-right']( [
      app.close( controller, 'Close' ),
    ] )
  ),

  a.h5( 'Monitor installation' ),
  app.http(
    '/~/~/engine_builder/params',
    ( installing, el ) => installing => {
// debugger
      if ( installing.engine_name ) {
        el.$nodes = [

          installing.engine_name,
          a.i( `${
            installing.host_name
          }.${
            installing.domain_name
          }` ),

          app.xterm( { label: 'Builder log' } ),
          a['appkit-event-source']( null, {
            $init: function() {
              this.$eventsource = new EventSource( '/~/eventsource/builder' )
              this.$eventsource.onmessage = function(e) {
                var line = e.data
                if ( line == String.fromCharCode(4) ) this.$complete()
                if ( line ) this.previousSibling.$write( `${ line }\r\n` )
              }.bind( this )
              this.$eventsource.onerror = function(e) {
                // Timeout to stop error when eventstream exits on new page load.
                setTimeout( () => {
                  console.error( `Builder log events stream ${ this.$started } - Unexpected error.` )
                  this.$eventsource.close()
                }, 1000 )

              }.bind( this )
            },
            $complete: function() {
              this.$eventsource.close()
              this.$nodes = [
                a.p( 'Installation complete.' ),
                a.p( 'Please read the installation report.' ),
                app.btn(
                  app.icon( 'fa fa-arrow-right', 'Installation report' ),
                  (e,el) => controller.open( `/applications/${ installing.engine_name }/installation` )
                ),
              ]
            },
          } ),
        ]
      } else {
        el.$nodes = [
          a.p( a['.error']( 'Not installing.' ) ),
          app.btn(
            app.icon( "fa fa-check", "OK" ),
            () => controller.open( '..' ),
            { class: 'btn btn-primary' },
          )
        ]
      }

    }
  ),

]
