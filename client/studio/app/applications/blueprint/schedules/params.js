app.applications.blueprint.schedules.params = blueprint => controller => (a,x) => {

  let schedule = blueprint.schedules.find( controller.params.schedule_id )

  return [

    a.h5( `Schedule ${ schedule.id + 1 } params` ),
    a.hr,

    app.blueprintForm(
      controller,
      blueprint,
      schedule.params,
      (f) => [
        f.field( {
          key: 'params',
          as: 'many',
          layout: 'vertical',
          label: false,
          form: (ff) => [
            ff.field( {
              key: 'name',
              as: 'input/hidden',
            } ),
            ff.field( {
              key: 'value',
              label: ff.object.name,
            } ),
          ]
        } ),
      ]

    ),

  ]

}
