app.container.show = {}

//  type => controller => (a,x) => {
//
//   const name = controller.params.name
//
//   let path = `/~/~/containers/${
//     type === 'service' ? 'service' : 'engine'
//   }/${ name }`
//
//   return app.http(
//     [
//       `${ path }/status`,
//       `${ path }/websites`,
//       `${ path }/icon_url`,
//     ],
//     ( [ status, websites, icon_url ], el ) => {
//       let container = {
//         ...status,
//         websites: websites,
//         icon_url: icon_url,
//       }
//       el.$nodes = a['app-container-state'](
//
//         ( el, container ) => [
//           a['div.float-right']( a.img( null, { src: container.icon_url, height: 48, width: 48 } ) ),
//           app.container.show.state( path, container ),
//           app.container.show.instructions( controller, type, name, container ),
//           app.container.show.websites( container ),
//           app.container.show.metrics( path ),
//         ],
//         {
//           $state: container,
//           name: name,
//         }
//       )
//     },
//     {
//       placeholder: app.hourglass( 'Loading container' )
//     }
//   )
//
// }
