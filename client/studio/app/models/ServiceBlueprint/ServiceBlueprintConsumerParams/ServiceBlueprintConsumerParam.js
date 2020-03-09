// class ServiceBlueprintConsumerParam {
//
//   constructor( consumerParams, object, id ) {
//     this.consumerParams = consumerParams
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
//       immutable: object.immutable ? true : null,
//       ask_at_build_time: object.ask_at_build_time ? true : null,
//       build_time_only: object.build_time_only ? true : null,
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
//       }
//     }
//
//   }
//
//   delete() {
//     this.consumerParams.delete( this.id )
//   }
//
//   get formObject() {
//
//     return {
//       ...this.object,
//       mandatory: this.object.mandatory ? 'on' : null,
//       immutable: this.object.immutable ? 'on' : null,
//       ask_at_build_time: this.object.ask_at_build_time ? 'on' : null,
//       build_time_only: this.object.build_time_only ? 'on' : null,
//       input: {
//         ...this.object.input,
//         collection: {
//           include_blank: this.object.input.collection.include_blank ? 'on' : null,
//           items: this.object.input.collection.items || {},
//         },
//       }
//     }
//   }
//
//   formSubmit( formObject ) {
//     this.assign( formObject )
//     if ( this.isNew ) this.consumerParams.create( this )
//   }
//
//   output() {
//     return this.object
//   }
//
// }
