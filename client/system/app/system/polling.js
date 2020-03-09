app.system.polling = ( route, success, options={} ) => (a,x) => a['app-polling']( null, {
  $init: function() { this.$check() },
  $wait: function() { this.$nodes = [ app.system.polling.wait() ] },
  $check: function() { this.$nodes = [ app.system.polling.check( route, success, options ) ] }
} )

app.system.polling.wait = () => (a,x) => a['app-polling-wait'](
  [
    app.hourglass( 'Waiting for system' )
  ],
  {
    $init: (el) => setTimeout(
      () => el.$('^app-polling').$check(),
      8000
    ),
  }
)

app.system.polling.check = ( route, success, options={} ) => (a,x) => a['app-polling-check'](
  [
    app.icon( 'fas fa-network-wired', 'Checking system status' ),
    a['app-polling-check-http']
  ],
  {
    $init: (el) => setTimeout(
      () => {
        el.$('app-polling-check-http').$nodes = [
          app.http(
            route,
            ( response, el ) => success( response, el ),
            {
              when: {
                404: ( response, el ) => el.$('^app-polling').$wait(),
                503: ( response, el ) => el.$('^app-polling').$wait(),
                ...options.when
              },
              catch: ( error, el ) => {
                el.$('^app-polling').$wait()
              },
            }
          )
        ]
      },
      2000
    ),
  }
)
