AxFunction.Factory.prototype.array = function ( components, attributes ) {

    return Object.assign(
      {
        $components: components.map(
          ( component ) => this.process( component )
        )
      },
      attributes
    );

};
