// cc.http = function( route, success, options={} ) {
//
//   return (a,x) => x.http( {
//     url: route,
//     success: success,
//     catch: options.catch || ( ( error, el ) => el.$send( 'systemDisconnected' ) ),
//     ...options,
//     when: {
//       401: ( response, el ) => el.$send( 'systemNotAuthenticated' ),
//       418: ( response, el ) => el.$send( 'systemSessionTimeout' ),
//       503: ( response, el ) => el.$send( 'systemDisconnected' ),
//       'text/terminal': ( response, el ) => response.text().then( result => {
//         el.$nodes = cc.xterm( { text: result } )
//       } ),
//       ...options.when
//       // 'application/octet-stream': ( response, el ) => {
//       //   const fileStream = streamSaver.createWriteStream('export.zip')
//       //   const readableStream = response.body
//       //   if (window.WritableStream && readableStream.pipeTo) {
//       //     return readableStream.pipeTo(fileStream)
//       //       .then(() => console.log('done writing'))
//       //   }
//       //   window.writer = fileStream.getWriter()
//       //   const reader = readableStream.getReader()
//       //   const pump = () => reader.read()
//       //     .then(response => response.done
//       //       ? writer.close()
//       //       : writer.write(response.value).then(pump))
//       //   pump()
//       // }
//     },
//   } )
// }
