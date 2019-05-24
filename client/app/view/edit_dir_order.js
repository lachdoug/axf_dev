app.view.edit_dir_order = ( r, data ) => (a,x) => {

  return [
    a.h4( `Order ${ data.key }` ),
    a.p( [
      app.btn(
        app.fa( "check", `Done` ),
        () => r.open( `/${ data.path }` )
      ),
    ] ),
    a[".order-dir"](
      x.appkit.form( (f) => [
        f.many( "sort", (ff) => ff.items( [
          (ffi) => x.html5sortable(
            data.entries.map( ( entry, i ) => a.li( [
              f.input( { name: "dir[order][]", value: entry.id, type: "hidden" } ),
              a["p.order-dir-item"]( [
                app.fa( entry.type === "file" ? "file-o" : "folder", entry.name ),
                a.i( entry.description ),
              ] )
            ] ) ),
            {
              type: "ul",
              sortupdate: function( e, el ) { el.$("^form").$submit() }
            }
          )
        ] ) )
      ], {
        // scope: 'dir',
        onsubmit: ( e, el, form ) => {
          x.appkit.http( `/api/${ data.path }/order`, {
            body: form.$serialize(),
            method: "POST",
            success: () => {},
          } )
        },
      } )
    ),
    // x.appkit.put( data )
  ]

  // let fields = data.config.fields || {}



  // return [
  //   a.h4( `Edit ${ data.config.key }` ),
  //   x.appkit.form( (f) => [
  //     data.config.index ? null : f.fields( { key: "name", ...fields.name } ),
  //     data.config.description ? f.one( "metadata", (ff) =>
  //       ff.fields( { key: "description", ...fields.description } )
  //     ) : null,
  //     f.button( {
  //       icon: "fa fa-times",
  //       text: "Cancel",
  //       buttonTag: { class: "btn btn-secondary" },
  //       onclick: (e, el, form) => r.open( `/${ data.path }` ),
  //     } ),
  //     " ",
  //     f.submit( {
  //       icon: "fa fa-check",
  //       text: `Update ${ data.config.key }`,
  //       buttonTag: { class: "btn btn-primary" },
  //     } ),
  //     x.appkit.put( data ),
  //   ], {
  //     data: data,
  //     action: `/api/${ data.path }/meta`,
  //     scope: "dir",
  //     success: function( data, el ) {
  //       r.open( `/${ data.path }` )
  //     },
  //     error: function( error, el, request ) {
  //       el.$nodes = [
  //         a.p( `Failed to update ${ data.config.key }. ${ JSON.parse( request.responseText ).message }` ),
  //         app.btn( app.fa( "check", "OK" ), () => r.open( `${ data.path }/meta/edit` ), "primary" )
  //       ]
  //     },
  //   } )
  // ]


}
