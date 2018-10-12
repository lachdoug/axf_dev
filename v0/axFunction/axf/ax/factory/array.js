ax.factory.array = function ( components, attributes ) {

    return ax.cell.process( Object.assign(
      {
        $type: "div",
        $components: components.
          filter( component => component ).
          map( component => this( component ) )
      },
      attributes
    ) );

};
