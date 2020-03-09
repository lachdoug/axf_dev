app.namespaces.workspace.services.branch.show = controller => (a,x) => [

  app.http(
    `/~/namespaces/${ controller.params.namespace_id }/workspace/services/${ controller.params.service_id }/branch`,
    ( branches, el ) => el.$nodes = [

      a.h3('Branch'),

      a['div.clearfix'](
        a['div.btn-group.float-right']( [
          app.button( {
            label: app.icon( 'fas fa-code-branch', 'Set' ),
            title: 'Set',
            onclick: (e,el) => {
              controller.open( 'set' )
            }
          } ),
          app.button( {
            label: app.icon( 'fas fa-minus', 'Remove' ),
            title: 'Branch',
            onclick: (e,el) => {
              controller.open( 'remove' )
            }
          } ),
          app.up( controller, 'Return to service' ),

        ] ),
      ),

      a.ul( branches.all.map(
        branch => a.li(
          branch == branches.current ?
            a.strong( branch ) : branch )
        )
      ),
    ],
    {
      placeholder: a.p(
        app.hourglass( 'Loading branch' )
      )
    }
  ),

]
