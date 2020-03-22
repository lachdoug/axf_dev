app.applications.blueprint.controls.show = blueprint => controller => (a,x) => {

  let control = blueprint.controls.find( controller.params.control_id )

  return [

    a.h5( `Control ${ control.id + 1 }` ),
    a.hr,

    a['div.clearfix']( [
      a['div.btn-group.float-left']( [

        app.form( {
          action: submition => {
            app.applications.blueprint.controls.tests.
              perform( {
                blueprint: blueprint,
                controller: controller,
                submition: submition,
              } )
          },
          form: (f) => [
            f.select( {
              name: 'test_id',
              selections: control.tests.map(
                ( test, i ) => [ i, test.label ]
              )
            } ),
            f.submit( {
              label: app.icon( 'fas fa-flask' ),
              title: 'Run test',
            } ),
          ],
          formTag: { class: 'form-inline' },
        } )
      ] ),
      a['div.btn-group.float-right']( [
        app.button( {
          label: app.icon( 'fa fa-edit', 'Edit' ),
          title: 'Edit',
          onclick: (e,el) => {
            controller.open( 'edit' )
          },
        } ),
        app.close( controller, 'Return to controls' ),
      ] ),
    ] ),

    app.report( {
      object: control.object,
      report: r => [
        r.field( {
          key: 'name',
        } ),
        a.hr,
        app.button( {
          label: app.icon( 'fa fa-caret-right', 'Parameters' ),
          title: 'Parameters',
          onclick: (e,el) => {
            controller.open( 'parameters' )
          },
        } ),
        x.output( control.parameters.output() ),

        a.hr,
        app.button( {
          label: app.icon( 'fa fa-caret-right', 'Components' ),
          title: 'Components',
          onclick: (e,el) => {
            controller.open( 'components' )
          },
        } ),
        x.output( control.components.output() ),

        a.hr,
        app.button( {
          label: app.icon( 'fa fa-caret-right', 'Tests' ),
          title: 'Tests',
          onclick: (e,el) => {
            controller.open( 'tests' )
          },
        } ),
        x.output( control.tests.output() ),

      ]
    } ),

    a.hr,
    a['div.clearfix']( a['div.btn-group.float-right'](
      app.button( {
        label: app.icon( 'fa fa-trash', 'Delete' ),
        class: 'btn app-btn-danger',
        onclick: (e,el) => {
          controller.open( 'delete' )
        },
        title: 'Delete control',
      } ),
    ) ),

  ]

}
