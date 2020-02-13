app.system = ( controller ) => (a,x) => a( {
  $init: function(el) {
    Promise.all( [

      fetch( '/~/~/system/status' ).
      then( response => response.json() ),

      fetch( '/~/~/engine_builder/status' ).
      then( response => response.json() ),

      fetch( '/~/~/system/system_user/settings' ).
      then( response => response.json() ),



    ] ).then( ( [
      system,
      installer,
      settings
    ] ) => {

      system = { ...system, ...installer, ...settings }

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
