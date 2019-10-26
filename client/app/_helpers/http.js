app.http = function( route, success, options={} ) {
  // debugger
  return (a,x) => x.appkit.http( {
    url: route,
    success: success,
    when: {
      401: ( response, el ) => el.$send( 'systemNotAuthenticated' ),
      418: ( response, el ) => el.$send( 'systemSessionTimeout' ),
      503: ( response, el ) => el.$send( 'systemDisconnected' ),
      'text/terminal': ( response, el ) => response.text().then( result => {
        el.$nodes = app.xterm( { text: result } )
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
    catch: ( error, el ) => el.$send( 'systemDisconnected' ),
    ...options,
  } )
}
