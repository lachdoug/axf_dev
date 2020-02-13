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
  formTag: {
    $init: function() {
      this.$off( 'submit: async submit' )
    },
    $on: { 'submit: custom submit': (e,el) => {
      e.preventDefault()
      if ( el.checkValidity() ) {
        let isNew = entry.isNew
        entry.formSubmit( ax.x.lib.form.data.objectify( el.$data() ) )
        let path = isNew ? `../${ entry.id }` : '..'
        el.$disable()
        el.$nodes = app.http(
          blueprint.apiEndpoint,
          () => controller.open( path ),
          {
            method: 'POST',
            placeholder: app.hourglass( `Saving blueprint...` ),
            headers: { 'Content-type': 'application/json' },
            body:  JSON.stringify( blueprint.output, null, 2 )
          }
        )

      }
    } }
  }
} )
