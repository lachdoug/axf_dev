app.system.polling = ( route, success, options={} ) => (a,x) => a['app-polling']( {
  $nodes: app.system.polling.check( route, success, options ),
} )

app.system.polling.wait = ( route, success, options ) => () => (a,x) => a['app-polling-wait']( {
  $nodes: 'Waiting...',
  $init: (el) => setTimeout(
    () => el.$('^app-polling').$nodes = app.system.polling.check( route, success, options ),
    8000
  ),
} )

app.system.polling.check = ( route, success, options={} ) => () => (a,x) => a['app-polling-check']( {
  $nodes: [ 'Checking...', a['app-polling-check-http'] ],
  $init: (el) => setTimeout(
    () => {
      el.$('app-polling-check-http').$nodes = [
        app.http(
          route,
          success,
          {
            when: {
              503: ( response, el ) => el.$('^app-polling').$nodes = app.system.polling.wait( route, success, options ),
              ...options.when
            }
          }
        )
      ]
    },
    2000
  ),
} )
