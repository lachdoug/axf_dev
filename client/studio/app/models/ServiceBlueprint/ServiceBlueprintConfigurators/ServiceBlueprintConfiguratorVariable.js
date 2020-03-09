// class ServiceBlueprintConfiguratorVariable {
//
//   constructor( variables, object, id ) {
//
//     this.variables = variables
//     this.id = id
//     this.assign( object )
//   }
//
//   assign( object ) {
//
//     let input = object.input || {}
//     let validation = input.validation || {}
//     let collection = input.collection || {}
//
//     this.object = {
//       name: object.name,
//       value: object.value,
//       mandatory: object.mandatory ? true : null,
//       input: {
//         type: input.type,
//         label: input.label,
//         title: input.title,
//         comment: input.comment,
//         hint: input.hint,
//         placeholder: input.placeholder,
//         validation: {
//           pattern: validation.pattern,
//           message: validation.message,
//         },
//         collection: {
//           include_blank: collection.include_blank ? true : null,
//           items: collection.items || {},
//         },
//       },
//     }
//
//   }
//
//   delete() {
//     this.variables.delete( this.id )
//   }
//
//   get configurator() {
//     return this.variables.configurator
//   }
//
//   get formObject() {
//
//     let items = []
//
//     for ( let key of Object.keys( this.object.input.collection.items ) ) {
//       items.push( {
//         value: key,
//         label: this.object.input.collection.items[key],
//       } )
//     }
//
//     return {
//       ...this.object,
//       mandatory: this.object.mandatory ? 'on': null,
//       input: {
//         ...this.object.input,
//         collection: {
//           items: items,
//           include_blank: this.object.input.collection.include_blank ? 'on' : null,
//         },
//       },
//     }
//
//   }
//
//   formSubmit( formObject ) {
//
//     formObject.input = formObject.input || {}
//     formObject.input.collection = formObject.input.collection || {}
//     let items = formObject.input.collection.items || {}
//
//     let mergedItems = {}
//     for ( let item of Object.values( items ) ) {
//       mergedItems[item.value] = item.label
//     }
//
//     formObject.input.collection.items = mergedItems
//
//     this.assign( formObject )
//
//     if ( this.isNew ) this.variables.create( this )
//
//   }
//
//   output() {
//     return this.object
//   }
//
// }
