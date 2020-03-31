app.applications.blueprint.dialogues.show = blueprint => controller => (a,x) => {

  let dialogue = blueprint.dialogues.find( controller.params.dialogue_id )

  return [

    a.h5( `dialogue ${ dialogue.id + 1 }` ),
    a['div.clearfix']( a['div.float-right'](
      app.close( controller, 'Return to dialogues' ),
    ) ),
    a.hr,
    a['div.clearfix']( a['div.float-right'](
      app.button( {
        label: app.icon( 'fa fa-edit', 'Edit' ),
        title: 'Edit',
        onclick: (e,el) => {
          controller.open( 'edit' )
        },
      } ),
    ) ),

    dialogue.tests.collection.length ? a['div.clearfix']( [
      a['div.btn-group.float-left']( [

        app.form( {
          action: submition => {
            app.applications.blueprint.dialogues.tests.
              perform( {
                blueprint: blueprint,
                controller: controller,
                submition: submition,
              } )
          },
          form: (f) => [
            f.select( {
              name: 'test_id',
              required: true,
              selections: dialogue.tests.map(
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
    ] ) : null,

    app.report( {
      object: dialogue.object,
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
        x.output( dialogue.parameters.output() ),

        a.hr,
        app.button( {
          label: app.icon( 'fa fa-caret-right', 'Components' ),
          title: 'Components',
          onclick: (e,el) => {
            controller.open( 'components' )
          },
        } ),
        x.output( dialogue.components.output() ),

        a.hr,
        app.button( {
          label: app.icon( 'fa fa-caret-right', 'Tests' ),
          title: 'Tests',
          onclick: (e,el) => {
            controller.open( 'tests' )
          },
        } ),
        x.output( dialogue.tests.output() ),

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
        title: 'Delete dialogue',
      } ),
    ) ),

  ]

}
