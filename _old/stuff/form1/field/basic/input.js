AxDslFormBuilder.prototype.input = function(
  nameOrGeneOptions,
  geneOptionsOrBuilderOptions,
  builderOptions ) {

  var geneOptions;
  var value;

  var a = this.cellBuilder;
  
  // Assign arguments depending on the data type of the first argument
  if ( typeof nameOrGeneOptions === "string" ) {
    geneOptions = Object.assign( { name: nameOrGeneOptions }, ( geneOptionsOrBuilderOptions || {} ) );
    builderOptions = builderOptions || {};
  } else {
    geneOptions = nameOrGeneOptions;
    builderOptions = geneOptionsOrBuilderOptions || {};
  };

  // // Populate the value from data, if it exists, otherwise from builder options.
  // // debugger;
  // var dataValue = this.formDataValueFor( geneOptions.name );
  // if ( dataValue ) {
  //   value = dataValue;
  // } else {
  //   value = builderOptions.value;
  // };

  geneOptions = Object.assign( { value: value }, geneOptions );

  // stash the oninput function for use below
  // var oninputFunction = geneOptions.oninput;

  // determine the message for when there is a pattern mismatch
  var invalidPatternMessage = builderOptions.invalidPatternMessage || ( 'Must match pattern ' + geneOptions.pattern )

  // Add custom behavior.
  var geneOptions = Object.assign(
    {
      // this is used by dependent fields feature in field wraper
      _dependentValue: function() {
        return this.value;
      },
      oninput: function(e) {
        this._checkPatternValidity() &&
        this.closest("dependentfield")._fieldChanged();
      },
      _checkPatternValidity: function() {
        if(this.validity.patternMismatch) {
          this.setCustomValidity(
            invalidPatternMessage
          );
        } else {
          this.setCustomValidity('')
        };
      },
    },
    geneOptions
  );

  if ( builderOptions.datalist ) {
    var datalistId = geneOptions.id + "-datalist";
    geneOptions.list = datalistId;
    var datalistOptions = builderOptions.datalist.map( function ( datalistOption ) {
      return a.option( { value: datalistOption } );
    } );
    return a.inputdatalist([
      a.input( geneOptions ),
      a.datalist( datalistOptions, { id: datalistId } )
    ] );
  } else {
    return a.input( geneOptions );
  };

};
