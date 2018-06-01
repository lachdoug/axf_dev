AcellBuilderExtensionsFormBuilder.prototype.wrapper = function(
  field,
  fieldName,
  fieldOptions
) {

  var a = this.cellBuilder.tagBuilder;
  var f = this;

  var wrapperOptions = Object.assign(
    {
      // id: fieldOptions.id + "_wrapper",
    },
    fieldOptions.wrapper || {}
  )

  var components = [
    this.help( fieldOptions ),
    this.labeler( field, fieldName, fieldOptions ),
    this.hint( fieldOptions )
  ];

  // if ( fieldOptions.dependent ) {
    return a.wrapper( components, wrapperOptions );
  // } else {
  //   return a.fieldwrapper( components, wrapperOptions )
  // }

};
