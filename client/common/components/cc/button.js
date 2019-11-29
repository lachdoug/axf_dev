cc.button = ( options={} ) => (a,x) => x.button( {
  ...options,
  buttonTag: {
    id: options.id,
    class: options.class || 'btn btn-outline-primary',
    disabled: options.disabled,
    title: options.title,
    ...options.buttonTag,
  }
} )
