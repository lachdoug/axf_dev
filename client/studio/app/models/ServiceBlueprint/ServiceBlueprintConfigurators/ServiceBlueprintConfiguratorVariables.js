// class ServiceBlueprintConfiguratorVariables {
//
//   constructor( configurator, collection ) {
//
//     this.configurator = configurator
//     this.collection = collection.map( ( item, i ) =>
//       new ServiceBlueprintConfiguratorVariable( this, item, i )
//     )
//
//   }
//
//   find(i) {
//     return this.collection[i]
//   }
//
//   map(fn) {
//     return this.collection.map(fn)
//   }
//
//   new() {
//     let variable = new ServiceBlueprintConfiguratorVariable( this, {} )
//     variable.isNew = true
//     return variable
//   }
//
//   create( variable ) {
//     variable.id = this.collection.length
//     delete variable.isNew
//     this.collection.push( variable )
//   }
//
//   delete(i) {
//     this.collection.splice(i, 1)
//     this.reindex()
//   }
//
//   reindex() {
//     for ( let [ i, item ] of this.collection.entries() ) {
//       item.id = i
//     }
//   }
//
//   output() {
//     return this.collection.map( variable => variable.output() )
//   }
//
// }
