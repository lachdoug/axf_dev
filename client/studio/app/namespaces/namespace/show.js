app.namespaces.namespace.show = namespace => controller => (a,x) => [

  a['div.clearfix']( [
    app.button( {
      label: app.icon( 'fa fa-caret-right', 'Definitions' ),
      title: 'Definitions',
      onclick: (e,el) => {
        controller.open( 'definitions' )
      }
    } ),
    app.button( {
      label: app.icon( 'fa fa-caret-right', 'Readme' ),
      title: 'Readme',
      onclick: (e,el) => {
        controller.open( 'readme' )
      }
    } ),
    app.button( {
      label: app.icon( 'fa fa-caret-right', 'License' ),
      title: 'License',
      onclick: (e,el) => {
        controller.open( 'license' )
      }
    } ),
    a['div.btn-group.float-right']( [
      app.button( {
        label: app.icon( 'fab fa-git-alt', 'Repo' ),
        title: 'Repo',
        onclick: (e,el) => {
          controller.open( 'repo' )
        }
      } ),
      app.up( controller, 'Return to services namespaces' ),

    ] ),
  ] ),

  a.h5( 'Services' ),

  app.http(
    `/~/namespaces/${ controller.params.namespace_id }/services`,
    ( response, el ) => {
      let services = response.content

      el.$nodes = [
        services.length == 0 ? 'None' : null,
        services.map( service => a.p( [
          app.button( {
            label: app.icon( 'fa fa-caret-right', service.name ),
            onclick: (e,el) => {
              controller.open( service.id )
            },
            title: service.remote,
          } ),
        ] ) )
      ]

    },
    {
      placeholder: a.p(
        app.icon( 'fa fa-spinner fa-spin', 'Loading namespace services' )
      )
    }
  ),


   // a.hr,
   a['div.clearfix']( a['div.btn-group.float-right'](
     app.button( {
       label: app.icon( 'fa fa-trash', 'Delete' ),
       class: 'btn btn-outline-warning',
       // confirm: 'Are you sure that you want to delete this namespace?',
       onclick: (e,el) => {
         controller.open( 'delete' )
       },
       title: 'Delete namespace',
     } ),
   ) ),


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
