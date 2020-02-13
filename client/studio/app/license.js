app.license = ( parent, path ) => controller => (a,x) => [

  app.entryHeadings(path),

  app.http(
    `/~/${ path }/license`,
    ( response, el ) => {
      let license = response.json()

      el.$nodes = [

        a.h5( 'License' ),

        app.form( {
          url: `/~/${ path }/license`,
          object: license,
          scope: 'license',
          form: (f) => [
            f.field( {
              as: 'code',
              key: 'content',
              layout: 'vertical',
              label: false,
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
        app.icon( 'fa fa-spinner fa-spin', `Loading ${ parent } license` )
      )
    }
  )



]
