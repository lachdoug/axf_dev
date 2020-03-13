app.applications.branch.show = controller => (a,x) => [

  app.http(
    `/~/applications/${ controller.params.application_id }/branch`,
    ( branches, el ) => el.$nodes = [

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
        app.close( controller, 'Return to application' ),

      ] ),

      a.h3('Branch'),

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
