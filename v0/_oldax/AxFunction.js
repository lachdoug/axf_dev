function AxFunction () {
  this.tags = AxFunction.tagsProxy( this );
  this.extensions = new AxFunction.Extensions( this );
  this.factory = new AxFunction.Factory( this );
  this.cellbase = {};
};
