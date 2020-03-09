app.http = function( route, success, options={} ) {

  return (a,x) => x.http( {
    url: route,
    success: success,
    catch: options.catch || ( ( error, el ) => el.$send( 'app.disconnected' ) ),
    ...options,
    when: {
      401: ( response, el ) => el.$send( 'app.unauthenticated' ),
      418: ( response, el ) => el.$send( 'app.timeout' ),
      503: ( response, el ) => el.$send( 'app.disconnected' ),
      'text/terminal': ( response, el ) => response.text().then( result => {
        el.$nodes = app.xterm( {
          text: result,
          label: response.status == 500 ? a['.error']( 'Server error' ) : null,
          ...options.xterm,
        } )
      } ),
      ...options.when
      // 'application/octet-stream': ( response, el ) => {
      //   const fileStream = streamSaver.createWriteStream('export.zip')
      //   const readableStream = response.body
      //   if (window.WritableStream && readableStream.pipeTo) {
      //     return readableStream.pipeTo(fileStream)
      //       .then(() => console.log('done writing'))
      //   }
      //   window.writer = fileStream.getWriter()
      //   const reader = readableStream.getReader()
      //   const pump = () => reader.read()
      //     .then(response => response.done
      //       ? writer.close()
      //       : writer.write(response.value).then(pump))
      //   pump()
      // }
    },
  } )
}
