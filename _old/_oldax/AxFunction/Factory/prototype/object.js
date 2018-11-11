AxFunction.Factory.prototype.object = function ( components, attributes ) {

  if ( !components ) return attributes;
  if ( attributes ) return Object.assign( { $components: [ components ] }, attributes );
  return this.pack( components );

};
