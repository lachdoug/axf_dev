app.applications.diffs = controller => (a,x) => [

  app.http(
    `/~/applications/${ controller.params.application_id }/diff`,
    ( response, el ) => {
      response.json().then( diff => el.$nodes = [

        a['div.clearfix']( [
          a['div.btn-group.float-right']( [
            app.up( controller, 'Return to applications' ),
          ] ),
        ] ),

        a.h5( 'Local' ),
        diff.local.length ? a.pre( diff.local ) : a.p( a.i( 'None' ) ),
        a.h5( 'Remote' ),
        diff.remote.length ? a.pre( diff.remote ) : a.p( a.i( 'None' ) ),

      ] )

    },
    {
      placeholder: a.p(
        app.icon( 'fa fa-spinner fa-spin', 'Loading diffs' )
      )
    }
  )

]
