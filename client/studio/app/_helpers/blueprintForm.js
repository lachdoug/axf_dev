app.blueprintForm = (
  controller,
  blueprint,
  entry,
  fields,
  manipulator,
) => app.form( {
  object: entry.formObject,
  form: (f) => [
    // f.object,
    fields(f),
    f.buttons( {
      cancel: {
        onclick: () => controller.open( '..' ),
      },
    } ),
  ],
  action: ( submition ) => {

    let data = manipulator ? manipulator( submition.data ) : submition.data,
        form = submition.form,
        output = submition.output,
        complete = submition.complete

    let isNew = entry.isNew
    entry.formSubmit( data )
    let path = isNew ? `../${ entry.id }` : '..'

    output.$nodes = app.http(
      blueprint.apiEndpoint,
      () => controller.open( path ),
      {
        complete: complete,
        method: 'POST',
        // placeholder: app.hourglass( `Saving blueprint...` ),
        headers: { 'Content-type': 'application/json' },
        body:  JSON.stringify( blueprint.output, null, 2 )
      }
    )


  },

} )
