app.applications.blueprint.schedules.
form = ( controller, blueprint, schedule ) => (a,x) => {

  let heading = schedule.isNew ?
    'New schedule':
    `Edit schedule ${ schedule.id + 1 }`

  return [

    a.h5( heading ),
    a.hr,

    app.blueprintForm(
      controller,
      blueprint,
      schedule,
      (f) => [
        f.field( {
          key: 'label',
          required: true,
        } ),
        f.field( {
          key: 'timespec',
          as: 'one',
          form: (ff) => [
            ff.field( {
              key: 'minute',
            } ),
            ff.field( {
              key: 'hour',
            } ),
            ff.field( {
              key: 'day_of_month',
            } ),
            ff.field( {
              key: 'month',
            } ),
            ff.field( {
              key: 'day_of_week',
            } ),
          ]
        } ),
        f.field( {
          key: 'instruction',
          as: 'select',
          placeholder: ' ',
          selections: {
            start: 'Start',
            stop: 'Stop',
            pause: 'Pause',
            unpause: 'Unpause',
            restart: 'Restart',
            action: 'Action',
          }
        } ),
        f.field( {
          key: 'actionator',
          as: 'one',
          form: (ff) => [
            ff.field( {
              key: 'name',
              as: 'select',
              layout: 'vertical',
              label: false,
              placeholder: 'Select actionator',
              selections: schedule.actionatorSelections(),
            } ),
          ],
          dependent: {
            key: 'instruction',
            value: 'action'
          }
        } ),

      ]

    ),

  ]

}
