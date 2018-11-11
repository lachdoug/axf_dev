// Options
// attributes - <input> tag attributes
// value - field value

AxFunctionExtensionsFormBuilder.prototype.textarea = function( name, options = {} ) {

  var attributes;

  var a = this.axFunction.tags;

  attributes = Object.assign(
    {
      name: name,
      id: options.id,
      required: options.required,
      readonly: options.readonly,
      disabled: options.disabled,

      $options: options,

      $dependentValue: function() {
        return this.value;
      },
      $labelOnclick: function(e) {

        var input = this.querySelector("textarea");
        if ( e.target === input ) {
          return true;
        } else {
          input.focus();
          return false;
        };

      },
      oninput: function(e) {
        this.closest("field") && this.closest("field").$fieldChanged();
      },
    },
    options.attributes || {}
  );

  return a.textarea( options.value, attributes )

};
