AxFunction.Factory.prototype.process = function ( components, attributes ) {

  if ( components instanceof Array ) return this.array( components, attributes );
  if ( typeof components === "object" ) return this.object( components, attributes );
  if ( typeof components === "function" ) return this.function( components, attributes );
  return this.literal( components, attributes );

};
