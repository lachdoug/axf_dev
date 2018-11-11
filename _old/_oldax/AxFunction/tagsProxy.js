AxFunction.tagsProxy = function ( axFunction ) {

  const shim = {
    get: ( target, property ) => function() {

      let components = arguments[0];
      let attributes = arguments[1];

      if ( attributes ) { attributes.$type = attributes.$type || property; }
      else { attributes = { $type: property }; };
      return axFunction.factory.process( components, attributes );

    }
  };

  const htmlTag = ( html, attributes ) =>
    Object.assign( { $type: "span", $html: html }, attributes || {} );

  return new Proxy( htmlTag, shim );

};
