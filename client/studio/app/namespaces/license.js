app.namespaces.license = controller => (a,x) => [

  app.http(
    `/~/namespaces/${ controller.params.namespace_id }/license`,
    ( license, el ) => el.$nodes = [

      a['div.clearfix']( [
        a['div.btn-group.float-right']( [
          app.close( controller, 'Return to namespaces' ),
        ] ),
      ] ),

      a.p( license.content ?
        a.pre( license.content ) :
        a['.error']( 'No license!' ),
        { class: 'well' }
      ),

    ],
    {
      placeholder: a.p(
        app.hourglass( 'Loading license' )
      )
    }
  ),

]
