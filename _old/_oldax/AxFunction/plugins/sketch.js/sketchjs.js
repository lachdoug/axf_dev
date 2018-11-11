AxFunction.Extensions.prototype.sketchjs = function ( config, options={} ) {

  var a = this.axFunction.tags;

  var sketchjsOptions = function ( container ) {
    return Object.assign(
      {
        fullscreen: false,
        width: 500,
        height: 500,
        container: container,
      },
      config
    )
  };

  return a.sketchjs(
    a.canvas( {
      $init: function() {
        this.$sketchjs = Sketch.create( sketchjsOptions( this ) );
      }
    } ),
    options.attributes
  );

};
