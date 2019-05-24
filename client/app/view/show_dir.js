app.view.show_dir = ( r, data ) => (a,x) => [

  a.h4( [
    data.name,
    ' ',
    a.small( a.i( data.description ) ),
  ] ),

  a.p( [

    data.order ?
      app.btn(
        app.fa( "sort", `Order ${ data.key }` ),
        () => r.open( `${ r.path }/order/edit` )
      ) : null,

    data.collect.dirs ?
      app.btn(
        app.fa( "plus-square", `New ${ data.collect.dirs }` ),
        () => r.open( `${ r.path }/subdir/new` )
      ) : null,

    data.collect.files ?
      app.btn(
        app.fa( "plus-square-o", `New ${ data.collect.files }` ),
        () => r.open( `${ r.path }/file/new` )
      ) : null,

    data.item ?
      app.btn(
        app.fa( "tag", `Edit ${ data.key }` ),
        () => r.open( `${ r.path }/edit` )
      ) : null,

    data.item ?
      app.btn(
        app.fa( "trash", `Delete ${ data.key }` ),
        () => r.open( `${ r.path }/delete` )
      ) : null,

  ] ),

  // x.appkit.put( data ),
  // x.appkit.put( r ),

  data.entries.map( ( entry, i ) => a.p( [
    app.btn(
      app.fa( entry.type === "file" ? "file-o" : "folder", entry.name ),
      () => r.open( `/${ entry.path }` )
    ),
    a.i( entry.description ),

  ] ) ),

]
