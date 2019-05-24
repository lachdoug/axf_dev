app.clients.new.form = (r, client) => (a,x) => x.appkit.form( (f) => [
  app.clients.client.fields(f),
  f.button( {
    icon: "fa fa-times",
    text: "Cancel",
    buttonTag: { class: "btn btn-secondary" },
    onclick: (e, el, form) => r.open(''),
  } ),
  " ",
  f.submit( {
    icon: "fa fa-check",
    text: "Create client",
    buttonTag: { class: "btn btn-primary" },
  } ),
], {
  action: "/api/clients",
  scope: "client",
  success: function( data, el ) {
    r.open( `<clients/~${ data.client.name }` )
  }
} )
