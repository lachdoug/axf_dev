// class ApplicationBlueprintServiceConfigurationVariables {
//
//   constructor( serviceConfiguration, object ) {
//     this.serviceConfiguration = serviceConfiguration
//     this.assign( object )
//   }
//
//   assign( object ) {
//     let result = {}
//     for ( let variable of this.actionatorVariables() ) {
//       result[variable.object.name] = object[variable.object.name]
//     }
//     this.object = result
//   }
//
//   actionatorVariables() {
//     let actionator = this.serviceConfiguration.actionator() || {}
//     let variables = actionator.variables || {}
//     return variables.collection || []
//   }
//
//   output() {
//     return this.object
//   }
//
//   get formObject() {
//     let object = this.object
//     return { params: Object.keys( object ).map( key => ( {
//       name: key,
//       value: object[key]
//     } ) ) }
//   }
//
//   formSubmit( formObject ) {
//     let object = {}
//     for (let item of Object.values( formObject.params ) ) {
//       object[item.name] = item.value
//     }
//     this.assign( object )
//   }
//
// }
