ax.factory = function( components, attributes ) {

  if ( components instanceof Array ) return ax.factory.array( components, attributes );
  if ( typeof components === "object" ) return ax.factory.object( components, attributes );
  if ( typeof components === "function" ) return ax.factory.function( components, attributes );
  return ax.factory.literal( components, attributes );

}
