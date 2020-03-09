ax.extension.form.factory.
form = ( f, options={} ) => {

  let a = ax.a
  let x = ax.x

  let form = options.form || ( () => null )

  let formTagOptions = {
    method: options.method || 'POST',
    action: options.url || options.action,
    $data: function() {
      return new FormData( this )
    },
    $object: function() {
      return x.form.object( this.$data() )
    },
    ...options.formTag
  }

  return a.form( form(f), formTagOptions )

}
