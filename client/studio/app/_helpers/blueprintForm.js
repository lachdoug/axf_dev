app.blueprintForm = (
  controller,
  blueprint,
  entry,
  fields,
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

    let data = submition.data,
        form = submition.formEl,
        result = submition.resultEl,
        complete = submition.completeFn

    let isNew = entry.isNew
    entry.formSubmit( data )
    let path = isNew ? `../${ entry.id }` : '..'

    result.$nodes = app.http(
      blueprint.apiEndpoint,
      () => controller.open( path ),
      {
        complete: complete,
        method: 'POST',
        placeholder: app.hourglass( `Saving blueprint...` ),
        headers: { 'Content-type': 'application/json' },
        body:  JSON.stringify( blueprint.output, null, 2 )
      }
    )


  },

} )
