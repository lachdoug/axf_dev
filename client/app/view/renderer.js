app.view.renderer = ( r, data ) => (a,x) => {

  // up.$to( data.parent )

  return app.view[ data.type ]( r, data )
// debugger
  // if ( data.type === "dir" ) {
  //   return app.view.dir( r, data )
  // } else if ( data.type === "link" ) {
  //   return app.view.link( r, data )
  // } else if ( data.type === "new_dir" ) {
  //   return app.view.new_dir( r, data )
  // } else if ( data.type === "rename_dir" ) {
  //   return app.view.rename_dir( r, data )
  // } else if ( data.type === "delete_dir" ) {
  //   return app.view.rename_dir( r, data )
  // } else {
  //   return [
  //     a.strong( "File" ),
  //     x.appkit.put( data.content )
  //   ]
  // }

}


// app.view.new_dir_label = ( dir ) => ( ( dir.dirs.new && dir.dirs.new.label ) || `New ${ dir.dirs.key }` )
// app.view.new_dir_field = ( dir ) => ( { key: "name", label: false, ...dir.dirs.field } )
