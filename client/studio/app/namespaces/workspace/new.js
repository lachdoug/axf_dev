app.namespaces.workspace.new = controller => (a,x) => [

  a.p( 'Create a workspace?'),

  app.button( {
    label: app.icon( 'fa fa-times', 'Cancel' ),
    class: 'btn btn-secondary',
    onclick: () => controller.open( '../..' )
  } ),

  ' ',

  app.button( {
    label: app.icon( 'fa fa-check', 'OK' ),
    class: 'btn btn-primary',
    onclick: (e,el) => {
      el.$('^').$nodes = [
        app.http(
          `/~/namespaces/${ controller.params.namespace_id }/workspace`,
          () => controller.open( '..' ),
          {
            method: 'POST',
            placeholder: a.p(
              app.icon( 'fa fa-spinner fa-spin', 'Creating workspace' )
            )
          }
        )
      ]
    }
  } ),

// ] ),
//
//   a['app-namespace-workspace-create']( [
//

]
