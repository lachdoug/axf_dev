// class ServiceBlueprintConsumerParams {
//
//   constructor( blueprint, collection ) {
//
//     this.blueprint = blueprint
//
//     this.collection = collection.map( ( item, i ) =>
//       new ServiceBlueprintConsumerParam( this, item, i )
//     )
//
//   }
//
//   // lookup(name) {
//   //   return this.collection.find( item => item.attributes.name === name )
//   // }
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
//     let consumer_param = new ServiceBlueprintConsumerParam( this, {} )
//     consumer_param.isNew = true
//     return consumer_param
//   }
//
//   create( consumer_param ) {
//     consumer_param.id = this.collection.length
//     delete consumer_param.isNew
//     this.collection.push( consumer_param )
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
//     return this.collection.map( consumer_param => consumer_param.object )
//   }
//
// }
