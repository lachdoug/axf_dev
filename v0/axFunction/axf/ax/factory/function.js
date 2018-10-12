ax.factory.function = function ( components, attributes={} ) {

  const a = ax.tag;
  const x = ax.extensions;
  let render;

  if ( /^class\s/.test( Function.prototype.toString.call( components ) ) ) {
    render = () => {
      components = new components( a,x );
      return components.render( a,x );
    };
  } else {
    render = () => components( a,x );
  };

  return this( render(), attributes );

};
