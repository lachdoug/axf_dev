AxFunction.Factory.prototype.literal = function ( components, attributes ) {

  return this.pack( Object.assign( {
    // $type: "span",
    $text: components,
  }, attributes ) );

};
