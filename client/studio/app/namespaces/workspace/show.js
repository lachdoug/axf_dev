app.namespaces.workspace.show = controller => (a,x) => [

  app.http(
    `/~/namespaces/${ controller.params.namespace_id }/workspace`,
    ( response, el ) => {
      response.json().then( workspace => {

        if ( workspace.exists ) {

          el.$nodes = [

            app.http(
              `/~/namespaces/${ controller.params.namespace_id }/workspace/readme`,
              ( response, el ) => {
                response.json().then( readme => {
                  el.$nodes = [

                    a.h5('Workspace'),

                    a['div.clearfix']( [
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
                      // app.button( {
                      //   label: app.icon( 'fa fa-caret-right', 'Definitions' ),
                      //   title: 'Definitions',
                      //   onclick: (e,el) => {
                      //     controller.open( 'definitions' )
                      //   }
                      // } ),
                      app.button( {
                        label: app.icon( 'fa fa-caret-right', 'Services' ),
                        title: 'Services',
                        onclick: (e,el) => {
                          controller.open( 'services' )
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
                        app.up( controller, 'Return to namespace' ),

                      ] ),
                    ] ),



                    a.p( readme.content ?
                      app.md( readme.content ) :
                      a['.error']( 'No readme!' ),
                      { class: 'border border-light p-2' }
                    ),


                  ]
                } )
              },
              {
                placeholder: a.p(
                  app.icon( 'fa fa-spinner fa-spin', 'Loading namespace' )
                )
              }
            ),

          ]

        } else {

          controller.open( 'new' )

        }
      } )

    },
    {
      placeholder: a.p(
        app.icon( 'fa fa-spinner fa-spin', 'Loading workspace' )
      )
    }
  )



  // controller.routes( {
  //   '/?': app.namespaces.services.index( namespace ),
  //   '/:service_id*': app.namespaces.services.service( namespace ),
  //   // '/delete': app.namespaces.delete,
  //   // '/repo/?*': app.repo( 'namespace', `namespaces/${ controller.params.namespace_id }` ),
  //   // '/readme/?': app.readme( 'namespace', `namespaces/${ controller.params.namespace_id }`),
  //   // '/license/?': app.license( 'namespace', `namespaces/${ controller.params.namespace_id }`),
  //   // '/definitions/?*': app.namespaces.definitions,
  //   // '/*': app.services,
  //   // '*': app.notFound
  // }, {
  //   lazy: true,
  // } ),

]
