app.repo.branch.remove = path => controller => (a,x) => app.http(
  `/~/${ path }/repo/branch`,
  ( response, el ) => {
    let branch = response.content

    let removeable = branch.all.filter( name => ( name != branch.current ) )

    el.$nodes = [
      a.h5( 'Remove branch' ),
      app.form( {
        url: `/~/${ path }/repo/branch/remove`,
        object: removeable,
        form: (f) => [
          f.field( {
            key: 'name',
            as: 'select',
            label: false,
            layout: 'vertical',
            selections: removeable,
            required: true,
            placeholder: ' ',
            // selectinput: {
            //   customValueLabel: 'New branch',
            // },
          } ),
          f.buttons( {
            cancel: {
              onclick: () => controller.open( '..' )
            }
          } ),
        ],
        success: ( response, el ) => {
          controller.open( '..' )
        }
      } ),
    ]

  },
  // {
  //   placeholder: a.p(
  //     app.icon( 'fa fa-spinner fa-spin', 'Loading application branch' )
  //   )
  // }
)
