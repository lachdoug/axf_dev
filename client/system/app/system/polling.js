app.system.polling = ( route, success, options={} ) => (a,x) => a['app-polling']( null, {
  $init: function() { this.$check() },
  $wait: function() { this.$nodes = [ app.system.polling.wait() ] },
  $check: function() { this.$nodes = [ app.system.polling.check( route, success, options ) ] }
} )
