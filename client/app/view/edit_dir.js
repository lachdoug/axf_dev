app.view.edit_dir = ( r, data ) => (a,x) => {

  let fields = data.fields || {}

  return [
    a.h4( `Edit ${ data.key }` ),
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
        text: `Update ${ data.key }`,
        buttonTag: { class: "btn btn-primary" },
      } ),
      // x.appkit.put( data ),
    ], {
      data: data,
      action: `/api/${ data.path }`,
      scope: "dir",
      success: function( data, el ) {
        r.open( `/${ data.path }` )
      },
      error: function( error, el, request ) {
        el.$nodes = [
          a.p( `Failed to update ${ data.key }. ${ JSON.parse( request.responseText ).message }` ),
          app.btn(
            app.fa( "check", "OK" ),
            () => r.open( `${ data.path }/edit` ),
            "primary"
          )
        ]
      },
    } )
  ]


}
