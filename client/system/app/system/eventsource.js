app.system.eventsource = (a,x) => a['app-system-eventsource'](
  {
    $digest: function(e) {
      let serializedData = e.data
      console.info( `Container events stream ${ this.$started } - Container event data: '${ serializedData }'` )
      if ( serializedData ) {
        let data = JSON.parse( serializedData )
        if ( data.type == 'timeout' ) {
          this.$close()
          this.$send( 'app.timeout' )
        // } else if ( data.type == 'eot' ) {
        //   this.$close()
        } else if ( data.type == 'error' ) {
          this.$close()
          console.warn( `Event error.\n\n${ data.error }` )
          this.$send( 'app.disconnected' )
        } else if ( data.type == 'container_status_update' ) {
          let container_status_update = data.container_status_update
          this.$send( 'app.container.status.update', { detail: container_status_update } )
        } else if ( data.type == 'system_status_update' ) {
          let system_status_update = data.system_status_update
          this.$send( 'app.system.status.update', { detail: system_status_update } )
        }
      }
    },
    $run: function() {
      if ( !this.$eventsource  ) {
        const now = new Date();
        this.$started = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        console.info( `Container events stream ${ this.$started } - Container events stream open.` )
        this.$eventsource = new EventSource( '/~/eventsource/containers' )
        this.$eventsource.onmessage = (e) => this.$digest(e)
        this.$eventsource.onerror = function(e) {
          // An event stream error is thrown when the page reloads.
          // The error is shown at the start of the console of freshly loaded page.
          // The timeout below gives a potential reload a moment to do its thing, which
          // will mean that timeout function will not be called and no error will be thrown.
          // If the page does not reload, the timeout will complate and the function will execute as normal.
          setTimeout( () => {
            console.error( `Container events stream ${ this.$started } - Unexpected error.` )
            this.$send( 'app.disconnected' )
            this.$close()
          }, 1000 )
        }.bind( this )
      }
    },
    $close: function() {
      if ( this.$eventsource ) {
        this.$eventsource.close()
        this.$eventsource = null
        console.info( `Container events stream ${ this.$started } - Container events stream closed.` )
      }
    },
  }
)





//
// // Container events stream 9:19:47 - Container event data:
// //'{"type":"unhandled_event","unhandled_event":
// //   {
// //     "status":"installing",
// //     "id":"system",
// //     "from":"system",
// //     "Type":"container",
// //     "Action":"install",
// //     "Actor":{
// //       "ID":"system",
// //       "Attributes":{
// //         "container_name":"navphp2343",
// //         "container_type":"app"
// //       }
// //     },
// //     "state":"installing"
// //   }
// // }'
// //
// // 5app.js:2907 Container events stream 9:19:47 - Container event data:
// //'{}'
// //
// // app.js:2907 Container events stream 9:19:47 - Container event data:
// //'{"type":"unhandled_event","unhandled_event":
// {
// // "status":"tag",
// "id":"sha256:c3041789c3c9e54e811a72ca4d595d0b7dfdbbc5d868183cc8e710dd288e6440",
// "Type":"container",
// "Action":"tag",
// "Actor":{
//   "ID":"sha256:c3041789c3c9e54e811a72ca4d595d0b7dfdbbc5d868183cc8e710dd288e6440",
//   "Attributes":{"name":"navphp2343:latest"}
// },
// "time":1576017014,
// "timeNano":1576017014811601400,
// "container_name":null,
// "container_type":null,
// "state":"tag"}}'
// //
// // app.js:2907 Container events stream 9:19:47 - Container event data:
// //'{}'
// //
// // app.js:2907 Container events stream 9:19:47 - Container event data:
// //'{"type":"container_status_update","container_status_update":{"type":"application","name":"navphp2343","status":{"state":"stopped","set_state":"running","progress_to":null,"error":true,"oom":false,"why_stop":null,"had_oom":false,"restart_required":false}}}'
// //
// // app.js:2907 Container events stream 9:19:47 - Container event data:
// //'{"type":"unhandled_event","unhandled_event":{
// "status":"installed",
// "id":"system",
// "from":"system",
// "Type":"container",
// "Action":"install",
// "Actor":{
//   "ID":"system",
//   "Attributes":{
//     "container_name":"navphp2343","container_type":"app"
//   }
// },"state":"installed"}}'
// //
// // app.js:2907 Container events stream 9:19:47 - Container event data:
// //'{"type":"container_status_update","container_status_update":{"type":"application","name":"navphp2343","status":{"state":"running","set_state":"running","progress_to":null,"error":false,"oom":false,"why_stop":null,"had_oom":false,"restart_required":false}}}'
// //
// // app.js:2907 Container events stream 9:19:47 - Container event data:
// //'{"type":"unhandled_event","unhandled_event":
// {
// "status":"create",
// "id":"d2770df006995e78a5406b60af855b1157aae1fd2006d11bc39417438f19ac1a",
// "from":"engines/fsconfigurator:master",
// "Type":"container",
// "Action":"create",
// "Actor":{
//   "ID":"d2770df006995e78a5406b60af855b1157aae1fd2006d11bc39417438f19ac1a",
//   "Attributes":{
//     "container_name":"fsconfigurator",
//     "container_type":"utility",
//     "image":"engines/fsconfigurator:master",
//     "name":"fsconfigurator"
//   }
// },
// "time":1576017017,
// "timeNano":1576017017802437913,
// "container_name":"fsconfigurator",
// "container_type":"utility","state":"create"}}'
// // app.js:2907 Container events stream 9:19:47 - Container event data:
// //'{"type":"unhandled_event","unhandled_event":
// {
// "status":"start",
// "id":"d2770df006995e78a5406b60af855b1157aae1fd2006d11bc39417438f19ac1a",
// "from":"engines/fsconfigurator:master",
// "Type":"container",
// "Action":"start",
// "Actor":{
//   "ID":"d2770df006995e78a5406b60af855b1157aae1fd2006d11bc39417438f19ac1a",
//   "Attributes":{
//     "container_name":"fsconfigurator",
//     "container_type":"utility",
//     "image":"engines/fsconfigurator:master",
//     "name":"fsconfigurator"
//   }
// },
// "time":1576017018,
// "timeNano":1576017018978148388,
// "container_name":"fsconfigurator",
// "container_type":"utility",
// "state":"running"}
// }'
//
// // app.js:2907 Container events stream 9:19:47 - Container event data:
// //'{"type":"unhandled_event","unhandled_event":
// {
// "status":"die",
// "id":"d2770df006995e78a5406b60af855b1157aae1fd2006d11bc39417438f19ac1a",
// "from":"engines/fsconfigurator:master",
// "Type":"container",
// "Action":"die",
// "Actor":{
//   "ID":"d2770df006995e78a5406b60af855b1157aae1fd2006d11bc39417438f19ac1a",
//   "Attributes":{
//     "container_name":"fsconfigurator",
//     "container_type":"utility",
//     "exitCode":"0",
//     "image":"engines/fsconfigurator:master",
//     "name":"fsconfigurator"
//   }
// },
// "time":1576017019,
// "timeNano":1576017019208767150,
// "container_name":"fsconfigurator",
// "container_type":"utility",
// "state":"stopped"}
// }'
//
// // app.js:2907 Container events stream 9:19:47 - Container event data:
// //'{"type":"unhandled_event","unhandled_event":
// {
// "status":"destroy",
// "id":"d2770df006995e78a5406b60af855b1157aae1fd2006d11bc39417438f19ac1a",
// "from":"engines/fsconfigurator:master",
// "Type":"container",
// "Action":"destroy",
// "Actor":{
//   "ID":"d2770df006995e78a5406b60af855b1157aae1fd2006d11bc39417438f19ac1a",
//   "Attributes":{
//     "container_name":"fsconfigurator",
//     "container_type":"utility",
//     "image":"engines/fsconfigurator:master",
//     "name":"fsconfigurator"
//   }
// },
// "time":1576017019,
// "timeNano":1576017019478345938,
// "container_name":"fsconfigurator",
// "container_type":"utility
// ",
// "state":"nocontainer"
// }}'
// // app.js:2907 Container events stream 9:19:47 - Container event data:
// //'{}'
// //
