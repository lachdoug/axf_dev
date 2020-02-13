class ApplicationBlueprintActionatorVariable {

  constructor( variables, object, id ) {

    this.variables = variables
    this.id = id
    this.assign( object )
  }

  assign( object ) {

    let input = object.input || {}
    let validation = input.validation || {}
    let collection = input.collection || {}

    this.object = {
      name: object.name,
      value: object.value,
      mandatory: object.mandatory ? true : null,
      input: {
        type: input.type,
        label: input.label,
        title: input.title,
        comment: input.comment,
        hint: input.hint,
        placeholder: input.placeholder,
        validation: {
          pattern: validation.pattern,
          message: validation.message,
        },
        collection: {
          include_blank: collection.include_blank ? true : null,
          items: collection.items || {},
        },
      },
    }

  }

  delete() {
    this.variables.delete( this.id )
  }

  get actionator() {
    return this.variables.actionator
  }

  get formObject() {

    return {
      ...this.object,
      mandatory: this.object.mandatory ? 'on': null,
      input: {
        ...this.object.input,
        collection: {
          items: this.object.input.collection.items,
          include_blank: this.object.input.collection.include_blank ? 'on' : null,
        },
      },
    }

  }

  formSubmit( formObject ) {

    formObject.input = formObject.input || {}
    formObject.input.collection = formObject.input.collection || {}
    let items = formObject.input.collection.items || {}
    formObject.input.collection.items = Object.values( items )

    this.assign( formObject )

    if ( this.isNew ) this.variables.create( this )

  }

  output() {
    return this.object
  }

}
