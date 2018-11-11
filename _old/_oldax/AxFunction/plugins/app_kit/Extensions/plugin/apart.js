AxFunction.Extensions.prototype.apart = function ( components, options={} ) {

  if ( !components instanceof Array ) { return components };

  var a = this.a;

  return components.reduce(
    ( accumulator, el ) => accumulator.concat(
      el, options.spacer || a.span( ' ', options.attributes
    ) ),
    []
  );

};
