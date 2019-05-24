app.clients.client.edit.
form =
( r, client ) =>
(a,x) =>
x.appkit.form( (f) => [
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
    text: "Update client",
    buttonTag: { class: "btn btn-primary" },
  } ),
], {
  data: client,
  method: "PUT",
  action: `/api/clients/~${ client.name }`,
  scope: "client",
  success: function( data, el ) {
    r.open( `<~${ data.client.name }` )
  },
} )
