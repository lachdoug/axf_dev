AxFunction.Factory.prototype.function = function ( components, attributes={} ) {

  const a = this.axFunction.tags;
  const x = this.axFunction.extensions;
  let render;

  if ( /^class\s/.test( Function.prototype.toString.call( components ) ) ) {
    render = () => {
      components = new components( a,x );
      return components.$render( a,x );
    };
  } else {
    render = () => components( a,x );
  };

  return this.process( render(), attributes );

};
