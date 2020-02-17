app.namespaces.show = controller => (a,x) => [

  app.http(
    `/~/namespaces/${ controller.params.namespace_id }/readme`,
    ( response, el ) => {
      response.json().then( readme => {
        el.$nodes = [

          a['div.clearfix']( [
            app.button( {
              label: app.icon( 'fa fa-caret-right', 'License' ),
              title: 'License',
              onclick: (e,el) => {
                controller.open( 'license' )
              }
            } ),
            app.button( {
              label: app.icon( 'fa fa-caret-right', 'Definitions' ),
              title: 'Definitions',
              onclick: (e,el) => {
                controller.open( 'definitions' )
              }
            } ),
            app.button( {
              label: app.icon( 'fa fa-caret-right', 'Workspace' ),
              title: 'Workspace',
              onclick: (e,el) => {
                controller.open( 'workspace' )
              }
            } ),
            a['div.btn-group.float-right']( [
              app.button( {
                label: app.icon( 'fas fa-file-download', 'Pull' ),
                title: 'Pull namespace',
                onclick: (e,el) => {
                  controller.open( 'pull' )
                }
              } ),
              app.up( controller, 'Return to namespaces' ),

            ] ),
          ] ),

          a.p( readme.content ?
            app.md( readme.content ) :
            a['.error']( 'No readme!' ),
            { class: 'border border-light p-2' }
          ),

          a['div.clearfix']( a['div.btn-group.float-right'](
            app.button( {
              label: app.icon( 'fa fa-trash', 'Delete' ),
              class: 'btn btn-outline-danger app-btn',
              // confirm: 'Are you sure that you want to delete this namespace?',
              onclick: (e,el) => {
                controller.open( 'delete' )
              },
              title: 'Delete namespace',
            } ),
          ) ),
        ]
      } )
    },
    {
      placeholder: a.p(
        app.icon( 'fa fa-spinner fa-spin', 'Loading namespace' )
      )
    }
  ),




  // a['div.clearfix']( [
  //   a['div.btn-group.float-right']( [
  //     app.button( {
  //       label: app.icon( 'fab fa-git-alt', 'Repo' ),
  //       title: 'Repo',
  //       onclick: (e,el) => {
  //         controller.open( 'repo' )
  //       }
  //     } ),
  //     app.button( {
  //       label: app.icon( 'fas fa-code-branch', 'Branch' ),
  //       title: 'Branch',
  //       onclick: (e,el) => {
  //         controller.open( 'branch' )
  //       }
  //     } ),
  //   ] ),
  //   a.h5( namespace.branch ),
  // ] ),
  //
  //
  //
  //
  // // a.p( app.namespaces.branch( controller ) ),
  // // a.hr,
  // app.report( {
  //   object: namespace,
  //   report: (r) => [
  //     r.field( {
  //       key: 'readme',
  //       as: 'markdown',
  //       label: false,
  //       layout: 'vertical',
  //       placeholder: a['p.error']( 'No readme!' ),
  //     } ),
  //     app.collapse( {
  //       label: 'Blueprint',
  //       body: r.field( {
  //         key: 'blueprint',
  //         as: 'json',
  //         label: false,
  //         layout: 'vertical',
  //       } ),
  //     } )
  //   ]
  // } ),
  // a.hr,
  // a['div.clearfix']( a['div.btn-group.float-right'](
  //   app.button( {
  //     label: app.icon( 'fa fa-trash', 'Delete' ),
  //     class: 'btn btn-danger',
  //     confirm: 'Are you sure that you want to delete this namespace?',
  //     onclick: (e,el) => {
  //       controller.open( 'delete', { name: namespace.name } )
  //     },
  //     title: 'Delete namespace',
  //   } ),
  // ) ),


]
