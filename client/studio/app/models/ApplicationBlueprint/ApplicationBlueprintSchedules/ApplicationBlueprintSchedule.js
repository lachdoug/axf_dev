class ApplicationBlueprintSchedule {

  constructor( schedules, object, id ) {
    this.schedules = schedules
    this.id = id
    this.assign( object )
    let actionator = object.actionator || {}
    this.params = new ApplicationBlueprintScheduleParams( this, actionator.params || {} )
  }

  assign( object ) {

    let timepsec = object.timespec || {}
    let actionator = object.actionator || {}

    this.object = {
      label: object.label,
      timespec: {
        minute: timepsec.minute,
        hour: timepsec.hour,
        day_of_month: timepsec.day_of_month,
        month: timepsec.month,
        day_of_week: timepsec.day_of_week,
      },
      instruction: object.instruction,
      actionator: {
        name: actionator.name,
      },
    }

  }

  actionator() {
    let name = this.object.actionator.name
    return this.schedules.blueprint.actionators.lookup( name ) || {}
  }

  delete() {
    this.schedules.delete( this.id )
  }

  get isAction() {
    return this.object.instruction === 'action'
  }

  actionatorSelections() {
    return this.schedules.blueprint.actionators.map( item => item.object.name )
  }

  get formObject() {
    return this.object
  }

  formSubmit( formObject ) {
    this.assign( formObject )
    if ( this.isNew ) this.schedules.create( this )
  }

  output() {
    return {
      ...this.object,
      ...( this.isAction ? {
        actionator: {
          name: this.object.actionator.name,
          params: this.params.output(),
        }
      } : {} ),
    }
  }

}
