app.systemOld = controller => (a,x) => a( {
  $nodes: a['div.text-center.mt-4']( app.hourglass( 'Loading system' ) ),
  $init: function(el) {
    Promise.all( [

      fetch( '/~/~/system/status' ).
      then( response => response.json() ),

      fetch( '/~/~/engine_builder/status' ).
      then( response => response.json() ),

      fetch( '/~/~/system/config/hostname' ).
      then( response => response.text() ),

      fetch( '/~/~/system/system_user/settings' ).
      then( response => response.json() ),

    ] ).then( ( [
      system,
      installer,
      hostname,
      settings
    ] ) => {

      el.$send( 'app.connected' )

      system = { ...system, ...installer, hostname: hostname , ...settings }

      if ( system.is_rebooting ) {
        el.$send( 'app.restarting' )
      } else if ( system.is_base_system_updating ) {
        el.$send( 'app.os.updating' )
      } else if ( system.is_engines_system_updating ) {
        el.$send( 'app.updating' )
      }

      el.$nodes = app.system.panes( system, controller )

    } ).catch( error => {

      console.warn( 'Failed to load system.' )

    } )

  },
} ),
