app.namespaces.workspace.branch.remove = controller => (a,x) => [

  a.h3('Remove branch'),

  app.http(
    `/~/namespaces/${ controller.params.namespace_id }/workspace/branch`,
    ( branch, el ) => {

      let removeable = branch.all.filter( name => name != branch.current )

      el.$nodes = [

        removeable.length ?
        app.form( {
          url: `/~/namespaces/${ controller.params.namespace_id }/workspace/branch`,
          method: 'DELETE',
          form: (f) => [
            f.field( {
              key: 'name',
              as: 'select',
              label: false,
              required: true,
              layout: 'vertical',
              selections: removeable,
              placeholder: 'Select branch to remove',
            } ),
            f.buttons( {
              cancel: {
                onclick: () => controller.open( '..' )
              }
            } ),
          ],
          success: ( result, el ) => el.$('^|appkit-asyncform').$nodes = [
            a.pre( result.message ),
            a['div.clearfix']( [
              app.button( {
                label: app.icon( 'fa fa-check', 'OK' ),
                onclick: (e,el) => controller.open( '..' ),
                title: 'Return to branch',
              } ),
            ] ),
          ],
        } ) :
        [
          a.p( a['i.error']('No branches to remove.') ),
          app.button( {
            label: app.icon( 'fa fa-check', 'OK' ),
            onclick: (e,el) => controller.open( '..' ),
            title: 'Return to branch',
          } ),
        ],

      ]
    },
    {
      placeholder: a.p(
        app.hourglass( 'Loading branch' )
      )
    }
  ),

]
