app.views.edit = ( parent, path ) => (controller) => (a,x) => [

  a.h5( 'Edit view' ),

  app.http(
    `/~/${ path }/views/${ controller.params.view_id }`,
    ( response, el ) => {
      response.json().then( view => el.$nodes = [

        app.view.designer( controller, `/~/${ path }/views/${ controller.params.view_id }`, view )

      ] )

    },
    {
      placeholder: a.p(
        app.icon( 'fa fa-spinner fa-spin', `Loading ${ parent } view` )
      )
    }
  )

]
