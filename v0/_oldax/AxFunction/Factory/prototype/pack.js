AxFunction.Factory.prototype.pack = function ( object ) {

  let cellbase = { $type: 'span' };

  // The 'multiple' attribute to be the first property of the Cell object.
  // This is needed so that dropdown menu on <select multiple: true> works.
  // Nasty hack!
  if ( object.multiple ) {
    cellbase.multiple = "multiple"
  };
  delete object.multiple;

  return Object.assign(
    cellbase,
    this.axFunction.cellbase,
    object
  );

};
