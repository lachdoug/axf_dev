app.container.show.uptime = path => (a,x) => app.http(
  `${ path }/uptime`,
  ( uptime, el ) => {

    let seconds = Number( uptime.match(/\d+/) )

    el.$nodes = a.small( a.i (
      ( el, seconds ) => app.secondsToWords( seconds ),
      {
        $state: seconds,
        title: 'Uptime',
        $init: el => setInterval( () => el.$state++, 1000),
      }
    ) )

  }
)
