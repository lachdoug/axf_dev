app.view.raw_file = ( r, data ) => (a,x) => [

  a.h4( [
    data.name,
    ' ',
    a.small( a.i( data.description ) ),
  ] ),

  a.p( [

    app.btn(
      app.fa( "check", `Done` ),
      () => r.open( `/${ data.path }` )
    ),

    app.btn(
      app.fa( "code", `Editor` ),
      () => r.open( `/${ data.path }/raw/edit` )
    ),

  ] ),
  a.hr,

  x.appkit.put( data.contents ),

]
