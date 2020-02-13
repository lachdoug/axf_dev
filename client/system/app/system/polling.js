app.system.polling = ( route, success, options={} ) => (a,x) => a['app-polling']( {
  $init: function() { this.$check() },
  $wait: function() { this.$nodes = [ app.system.polling.wait() ] },
  $check: function() { this.$nodes = [ app.system.polling.check( route, success, options ) ] }
} )

app.system.polling.wait = () => (a,x) => a['app-polling-wait']( {
  $nodes: 'Waiting...',
  $init: (el) => setTimeout(
    () => el.$('^app-polling').$check(),
    8000
  ),
} )

app.system.polling.check = ( route, success, options={} ) => (a,x) => a['app-polling-check']( {
  $nodes: [ 'Checking...', a['app-polling-check-http'] ],
  $init: (el) => setTimeout(
    () => {
      el.$('app-polling-check-http').$nodes = [
        app.http(
          route,
          ( response, el ) => success( response, el ).catch( error => el.$('^app-polling').$wait() ),
          // ( response, el ) => {
          //   try{
          //
          //   } catch {
          //
          //   }
          // },
          {
            when: {
              503: ( response, el ) => el.$('^app-polling').$wait(),
              ...options.when
            },
            catch: ( error, el ) => {
              el.$('^app-polling').$wait()
            },
            // error: () => { debugger }
          }
        )
      ]
    },
    2000
  ),
} )
