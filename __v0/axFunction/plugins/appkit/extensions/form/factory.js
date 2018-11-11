ax.extensions.form.factory = function( options ){
  this.factory.object.set( options.object )
  this.factory.layout = options.layout
  return this.factory
};
