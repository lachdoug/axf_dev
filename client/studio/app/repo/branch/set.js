app.repo.branch.set = path => controller => (a,x) => app.http(
  `/~/${ path }/repo/branch`,
  ( response, el ) => {
    let branch = response.json()

    el.$nodes = [
      a.h5( 'Set branch' ),
      app.form( {
        url: `/~/${ path }/repo/branch/set`,
        form: (f) => [
          f.field( {
            key: 'name',
            value: branch.current,
            as: 'selectinput',
            label: false,
            layout: 'vertical',
            selections: branch.all,
            required: true,
            selectinput: {
              customValueLabel: 'New branch',
            },
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
