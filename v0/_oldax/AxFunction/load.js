AxFunction.load = function ( options={} ) {

  if ( options.reload || !AxFunction.instance ) {
    AxFunction.instance = new AxFunction;
    AxFunction.Extensions.Plugins.load( AxFunction.instance );
    AxFunction.Extensions.Library.Plugins.load( AxFunction.instance );
    AxFunction.Cellbase.Plugins.load( AxFunction.instance );
  };

};
