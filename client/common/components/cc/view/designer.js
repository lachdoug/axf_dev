cc.view.designer = ( controller, url, object ) => (a,x) => app.form( {
  object: object,
  url: url,
  scope: 'view',
  success: () => controller.open( '../..' ),
  form: (f) => [

    f.field( {
      key: 'name',
      label: false,
      layout: 'vertical',
      placeholder: 'Name',
    } ),

    f.field( {
      key: 'components',
      label: false,
      as: 'many',
      item: 'view component',
      form: cc.view.designer.component,
      layout: 'vertical',
      sortable: true,
      addable: true,
      removable: true,
    } ),

    f.field( {
      key: 'tests',
      item: 'test',
      as: 'many',
      layout: 'vertical',
      sortable: true,
      addable: true,
      removable: true,
      form: (ff) => [

        ff.field( {
          key: 'parameters',
          label: false,
          layout: 'vertical',
          as: 'json',
          value: '{}',
          // layout: 'compact',
          // json: {
          //   stringify: false
          // }
        } ),

        a.p( [

          cc.button( {
            label: app.icon( 'fa fa-flask', 'Run test' ),
            onclick: (e,el) => {

              let form = el.$('^form')

              if ( !form.checkValidity() ) {
                form.reportValidity()
                return false
              }

              // let target = el.$('^|appkit-form-nest-item view.designer.form-test-target')

              let paramsJson = el.$('^|appkit-form-nest-item |appkit-form-control').$value()

              let params
              try {
                params = JSON.parse( paramsJson )
              } catch(error) {
                target.$nodes = a['div.alert.alert-danger']( error.message )
                return false
              }

              let viewSpec = el.$('^form').$object().view

              Object.values( viewSpec.components ).map( component => {
                if ( component.type == 'form' ) component.form.url = '/~/test'
              } )

              let result = a['view.designer.form-test-result']( [
                // a.hr,
                ...cc.view.builder( viewSpec, params ),
                // cc.button( {
                //   label: app.icon( 'fa fa-times', 'Clear test result' ),
                //   // buttonTag: {
                //   //   class: 'btn btn-secondary',
                //   // },
                //   onclick: (e,el) => {
                //     x.lib.animate.fade.out( target.$('view.designer.form-test-result') )
                //   },
                // } ),
              ] )

              modal.$open( {
                size: 'lg',
                title: 'View test',
                body: result,
              } )


            }
          } ),

        ] ),

        // a['view.designer.form-test-target'](),

      ]
    } ),

    a.p( [
      f.buttons( { cancel: {
        onclick: () => controller.open( '..' )
      } } ),
    ] ),

  ]
} )
