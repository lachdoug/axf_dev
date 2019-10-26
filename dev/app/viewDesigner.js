app.viewDesigner = ( viewSpec ) => (a,x) => app.form( {
  object: viewSpec,
  url: '/dev',
  form: (f) => [

    f.field( {
      key: 'components',
      label: false,
      as: 'many',
      item: 'view component',
      form: app.viewDesigner.component,
      layout: 'vertical',
    } ),

    f.field( {
      key: 'tests',
      item: 'test',
      as: 'many',
      layout: 'vertical',
      form: (ff) => a['div.card']( a['div.card-body']( [

        ff.field( {
          key: 'params',
          label: 'Parameters',
          as: 'json',
          value: '{}',
          // layout: 'compact',
          // json: {
          //   stringify: false
          // }
        } ),

        a.p( [

          app.button( {
            label: app.icon( 'fa fa-flask', 'Run test' ),
            onclick: (e,el) => {

              let form = el.$('^form')

              if ( !form.checkValidity() ) {
                form.reportValidity()
                return false
              }

              let target = el.$('^|appkit-form-nest-item formdesigner-test-target')

              let paramsJson = el.$('^|appkit-form-nest-item |appkit-form-control').$value()

              let params
              try {
                params = JSON.parse( paramsJson )
              } catch(error) {
                target.$nodes = a['div.alert.alert-danger']( error.message )
                return false
              }

              target.$nodes = a['formdesigner-test-result']( [
                a.hr,
                ...app.viewBuilder( el.$('^form').$object(), params ),
                app.button( {
                  label: app.icon( 'fa fa-times', 'Clear test result' ),
                  // buttonTag: {
                  //   class: 'btn btn-secondary',
                  // },
                  onclick: (e,el) => {
                    x.lib.animate.fade.out( target.$('formdesigner-test-result') )
                  },
                } ),
              ] )

            }
          } ),

        ] ),

        a['formdesigner-test-target'](),

      ] ) )
    } ),

    a.p( [
      f.buttons(),
    ] ),

  ]
} )
