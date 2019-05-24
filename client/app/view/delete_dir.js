app.view.delete_dir = ( r, data ) => (a,x) => [
  a.h4( `Delete ${ data.key }` ),
  a.p( `Are you sure that you want to delete ${ data.name }?`),
  x.appkit.form( (f) => [
    f.button( {
      icon: "fa fa-times",
      text: "Cancel",
      buttonTag: { class: "btn btn-secondary" },
      onclick: (e, el, form) => r.open( `/${ data.path }` ),
    } ),
    " ",
    f.submit( {
      icon: "fa fa-check",
      text: `Delete ${ data.key }`,
      buttonTag: { class: "btn btn-primary" },
    } ),
    // x.appkit.put( data ),
  ], {
    method: 'DELETE',
    action: `/api/${ data.path }`,
    success: function( data, el ) {
      r.open( `/${ data.path }` )
    }
  } )
]
