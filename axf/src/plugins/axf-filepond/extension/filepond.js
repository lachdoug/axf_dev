ax.extension.filepond = ( options={} ) => {

  return ax.a['axf-filepond']( {

    $init: (el) => {

      el.$nodes = FilePond.create( { server: '/', ...options.filepond } ).element

    },

    ...options.tag

  } )

}
