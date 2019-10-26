ax.extension.report.factory.
report = ( r, options={} ) => {

  let a = ax.a
  let x = ax.x

  let report = options.report || ( () => null )

  let reportTagOptions = {
    // method: 'POST',
    // action: options.url,
    // $data: function() {
    //   return new FormData( this )
    // },
    // $object: function() {
    //   return x.report.object( this.$data() )
    // },
    // $serialize: function() {
    //   return JSON.stringify( this.$object() )
    // },
    ...options.reportTag
  }

  return a['|appkit-report']( report(r), reportTagOptions )

}
