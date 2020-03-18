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
