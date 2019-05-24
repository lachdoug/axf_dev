app.clients.index.load.resolver.
sortable =
( r, data ) =>
app.clients.index.load.resolver.sortable.form( r, data )

app.clients.index.load.resolver.
sortable.form =
( r, data ) =>
(a,x) =>
x.appkit.form( (f) => [
  f.many( "sort", (ff) => ff.items( [
    (ffi) => x.html5sortable(
      data.clients.map( ( client, i ) => a.li( [
        f.input( { name: "order[]", value: client.name, type: "hidden" } ),
        a.p( app.btn(
          client.name,
          () => alert( "Drag to sort." )
        ) )
      ] ) ),
      {
        type: "ul",
        sortupdate: function( e, el ) { el.$("^form").$submit() }
      }
    )
  ] ) )
], {
  onsubmit: ( e, el, form ) => {
    x.appkit.http( "/api/clients/order", {
      body: form.$serialize(),
      method: "PUT",
      success: () => {},
    } )
  },
} )
