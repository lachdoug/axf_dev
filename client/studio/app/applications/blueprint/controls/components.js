app.applications.blueprint.controls.components = blueprint => controller =>
(a,x) => {

  let control = blueprint.controls.find( controller.params.control_id )

  return [

    a.h5( `Control ${ control.id + 1 } components` ),
    a.hr,

    app.blueprintForm(
      controller,
      blueprint,
      control.components,
      cc.control.designer
    ),

  ]

}
