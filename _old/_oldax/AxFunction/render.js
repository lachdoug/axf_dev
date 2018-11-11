AxFunction.render = function ( content, options={} ) {

  let nextName = function () {
    let name;
    do { name = "$ax_" + ( AxFunction.nameCounter++ ) }
    while ( window[ name ] !== undefined );
    return name;
  };

  let cell = AxFunction.instance.factory.process( content, options.attributes );
  let name = options.name || nextName();

  if ( options.cell != false ) cell.$cell = name;

  window[name] = cell;

  return name;

};
