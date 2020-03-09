ax.extension.dropzone = ( options={} ) => {

  let url = options.url || '/'

  return ax.a['axf-dropzonejs']( null, {
    class: 'dropzone',
    $init: (el) => {
      el.$dropzone = new Dropzone( el , { url: url, ...options.dropzone } )
    },
    ...options.tag
  } )

}
