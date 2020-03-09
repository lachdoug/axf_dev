app.container.show.metrics = container => (a,x) => {

  if( container.status.state === 'running' ) {

    let path = `/~/~/containers/${
      container.type === 'service' ? 'service' : 'engine'
    }/${ container.name }`

    return app.http(
      [
        `${ path }/metrics/memory`,
        `${ path }/metrics/network`,
      ],
      ( [ memory, network ], el ) => el.$nodes = [
        a.hr,
        a.p( 'Memory' ),
        app.charts.containers( { [name]: memory } ),
        a.hr,
        a.p( 'Rx/Tx' ),
        app.charts.network( { '': { rx: network.in, tx: network.out } } ),
      ]
    )

  } else {

    return null

  }

}
