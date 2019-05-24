app.view.new_dir = ( r, data ) => (a,x) => {

  // let fields = data.fields || {}

  return [
    a.h4( `New ${ data.key }` ),
    x.appkit.form( (f) => [
      data.index ? null : f.fields( { key: "name" } ), //, ...fields.name } ),
      data.description ? f.one( "metadata", (ff) =>
        ff.fields( { key: "description", ...fields.description } )
      ) : null,
      f.button( {
        icon: "fa fa-times",
        text: "Cancel",
        buttonTag: { class: "btn btn-secondary" },
        onclick: (e, el, form) => r.open( `/${ data.path }` ),
      } ),
      " ",
      f.submit( {
        icon: "fa fa-check",
        text: `Create ${ data.key }`,
        buttonTag: { class: "btn btn-primary" },
      } ),
    ], {
      action: `/api/${ data.path }/subdir`,
      scope: "dir",
      success: function( data, el ) {
        r.open( `/${ data.path }` )
      },
      error: function( error, el, request ) {
        el.$nodes = [
          a.p( `Failed to create ${ data.key }. ${ JSON.parse( request.responseText ).message }` ),
          app.btn( app.fa( "check", "OK" ), () => r.open( `${ data.path }/subdir/new` ), "primary" )
        ]
      },
    } )
  ]

}
