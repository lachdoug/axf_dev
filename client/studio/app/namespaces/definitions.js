app.namespaces.definitions = controller => controller.routes( {
  '/?': app.namespaces.definitions.index,
  '/entry': app.namespaces.definitions.show,
  // '/edit': app.namespaces.edit,
  // '*': app.notFound
}, {
  lazy: true,
  // transition: [ 'crossfade', { time: 1000 } ],
} ),

app.namespaces.definitions.index = controller => (a,x) => [

  app.http(
    `/~/namespaces/${ controller.params.namespace_id }/definitions`,
    ( response, el ) => {
      response.json().then( definitions => {
        el.$nodes = [

          a.h5( 'Service definitions' ),

          a['div.clearfix']( [
            a['div.btn-group.float-right']( [
              app.up( controller, 'Return to namespace' ),
            ] ),
          ] ),

          definitions.map( definition => [
            app.button( {
              label: app.icon( 'fa fa-caret-right', definition.type ),
              onclick: (e,el) => {
                controller.open( 'entry', { type: definition.type } )
              },
              title: definition.type,
            } ),
          ] ),

        ]
      } )
    },
    {
      placeholder: a.p(
        app.icon( 'fa fa-spinner fa-spin', 'Loading definitions' )
      )
    }
  ),

]

app.namespaces.definitions.show = controller => (a,x) => [

  app.http(
    `/~/namespaces/${ controller.params.namespace_id }/definitions/entry`,
    ( response, el ) => {
      response.json().then( definition => {
        el.$nodes = [

          a.h3( definition.type ),

          a['div.clearfix']( [
            a['div.btn-group.float-right']( [
              app.up( controller, 'Return to namespace' ),
            ] ),
          ] ),

          a.pre( definition.content ),

        ]
      } )
    },
    {
      query: controller.query,
      placeholder: a.p(
        app.icon( 'fa fa-spinner fa-spin', 'Loading definitions' )
      )
    }
  ),

]
