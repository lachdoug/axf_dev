app.container.show.state = container => (a,x) => {

  let path = `/~/~/containers/${
    container.type === 'service' ? 'service' : 'engine'
  }/${ container.name }`

  let status = container.status

  return a.h5( [
    app.container.icons.state( status ),
    status.state,
    status.state === 'running' ? app.container.show.uptime( path ) : null,
    app.container.icons.error( status ),
    a['#instructor']( null, {
      $instruct: function( instruction ) {
        this.$nodes = app.http(
          `${ path }/${ instruction }`,
          ( result, el ) => el.$nodes = a['.pl-2.pr-2']( app.hourglass() ),
          {
            method: instruction === 'destroy' ? 'DELETE' : 'GET'
          }
        )
      }
    } ),
  ] )

}
