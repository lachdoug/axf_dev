app.service.import = controller => (a,x) => {

  const name = controller.params.name

  return [

    a.h5( `Import` ),
    a['div.clearfix']( a['div.float-right']( app.close( controller, 'Close' ) ) ),
    a.br,

    x.filepond( {
      server: {
        url: `/~/upload/service/${ name }`,
        process: {
          headers: {
            'Content-Type': 'application/octet-stream'
          }
        }
      }
    } ),

  ]


}
