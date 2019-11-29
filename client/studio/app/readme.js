app.readme = ( parent, path ) => controller => (a,x) => [

  app.http(
    `/~/${ path }/readme`,
    ( response, el ) => {
      let readme = response.content

      el.$nodes = [

        a.h5( 'Readme' ),

        app.form( {
          url: `/~/${ path }/readme`,
          object: readme,
          scope: 'readme',
          form: (f) => [
            f.control( {
              as: 'markdown',
              key: 'content',
            } ),
            f.buttons( {
              cancel: {
                onclick: () => controller.open( '..' )
              }
            } ),
          ],
          success: ( response, el ) => {
            controller.open( '..' )
          }
        } )

      ]

    },
    {
      placeholder: a.p(
        app.icon( 'fa fa-spinner fa-spin', `Loading ${ parent } readme` )
      )
    }
  )

]
