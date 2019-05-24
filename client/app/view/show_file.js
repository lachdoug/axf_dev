app.view.show_file = ( r, data ) => (a,x) => [

  a.h4( [
    data.name,
    ' ',
    a.small( a.i( data.description ) ),
  ] ),

  a.p( [

    data.item ? app.btn(
      app.fa( "tag", `Edit ${ data.key }` ),
      () => r.open( `${ r.path }/edit` )
    ) : null,

    data.item ? app.btn(
      app.fa( "trash", `Delete ${ data.key }` ),
      () => r.open( `${ r.path }/delete` )
    ) : null,

    app.btn(
      app.fa( "file-text-o", `Raw` ),
      () => r.open( `${ r.path }/raw` )
    ),

    app.btn(
      app.fa( "code", `Editor` ),
      () => r.open( `${ r.path }/raw/edit` )
    ),

  ] ),

  app.view.show_file.as( r, data ),

]
