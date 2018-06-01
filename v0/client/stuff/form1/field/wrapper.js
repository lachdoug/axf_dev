AcellDslFormBuilder.prototype.wrapper = function(
  field,
  fieldName,
  wrapperGeneOptions,
  wrapperBuilderOptions
) {

  var a = this.cellBuilder;
  var f = this;

  // Some of the wrapper options go to the labeler.
  var labelerBuilderOptions = {
    label: wrapperBuilderOptions.label,
    reverse: wrapperBuilderOptions.reverse
  };

  // And some to the dependent field wrapper.
  var dependentFieldBuilderOptions = wrapperBuilderOptions.dependent;

  var components = [
    this.help( wrapperBuilderOptions.help ),
    this.labeler( field, fieldName, labelerBuilderOptions ),
    this.hint( wrapperBuilderOptions.hint )
  ];

  return f.dependentfield(
    a.fieldwrapper( components, wrapperGeneOptions ),
    dependentFieldBuilderOptions
  );

};
