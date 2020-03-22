app.applications.blueprint.controls.tests.perform = options => {

  let blueprint = options.blueprint
  let controller = options.controller
  let submition = options.submition

  let control_id = controller.params.control_id
  let test_id = submition.data.test_id

  let control = blueprint.controls.find( control_id )
  let test = control.tests.find( submition.data.test_id )

  let component = (a,x) => a['view.designer.form-test-result']( [
    ...cc.control.builder(
      control.components.collection,
      test.parameters || {}
    ),
  ] )

  modal.$open( {
    size: 'lg',
    title: `Control ${ control.id + 1 } test ${ Number( test_id ) + 1 }: ${ test.label }`,
    body: component,
  } )

  submition.complete()

}
