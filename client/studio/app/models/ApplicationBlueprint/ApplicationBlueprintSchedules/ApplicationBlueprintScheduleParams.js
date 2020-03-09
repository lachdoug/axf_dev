class ApplicationBlueprintScheduleParams {

  constructor( schedule, object ) {
    this.schedule = schedule
    this.assign( object )
  }

  assign( object ) {
    this.object = object
  }

  actionatorVariables() {
    let actionator = this.schedule.actionator() || {}
    return actionator.variables.output()
  }

  output() {
    return this.object
  }

  get formObject() {

    let variables = this.actionatorVariables()


variables.map( variable => enginesFieldV1( variable ) )

    let actionatorVariables = variables.map( variable => variable.name )
    let surplus = Object.keys( this.object ).filter( param =>
      !actionatorVariables.includes( param )
    )

    return {
      actionator: actionatorVariables.map( key => ( {
        name: key,
        value: this.object[key] || variables.find( variable => variable.name === key ).value
      } ) ),
      surplus: surplus.map( key => ( {
        name: key,
        value: this.object[key]
      } ) )
    }

  }

  formSubmit( formObject ) {

    let object = {}

    let params = [
      ...Object.values( formObject.actionator || {} ),
      ...Object.values( formObject.surplus || {} )
    ]

    for (let item of params ) {
      object[item.name] = item.value
    }
    this.assign( object )

  }

}
