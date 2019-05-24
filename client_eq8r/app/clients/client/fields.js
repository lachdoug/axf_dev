app.clients.client.fields = (f) => (a,x) => [
  f.fields( "name" ),

  // f.many( "controllers_attributes", (ff) => [
  //   ff.add( null, { insert: "prepend" } ),
  //   a.hr,
  //   ff.items( ( ffi, i ) => [
  //     a.h3( `Item ${ i == 0 ? '0' : i || ''} - ${ ffi.data.role || 'new' }` ),
  //     a['.float-right']( ffi.remove() ),
  //     ffi.fields( "role", { key: "appointed", type: "date" } ),
  //     a.hr
  //   ], {
  //     new: function() { return {
  //       appointed: x.appkit.lib.date.now.value()
  //     }
  //   } } )
  // ], { key: "controllers" } ),


  // f.many( "controllers", (fi) => [
  //   fi.fields( "name" ),
  //   fi.moveup,
  //
  // ] )
 ]
