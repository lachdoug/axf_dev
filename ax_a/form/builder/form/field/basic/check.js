// Options
// attributes - <input> tag attributes
// value - value
// checked - value when checked
// invalid - Custom message, shown when invalid, can be string or function(validity)

AxFunctionExtensionsFormBuilder.prototype.check = function(
  name,
   options={}
) {

  var a = this.axFunction.tags;

  var value = options.value;
  var checkedValue = options.checked || "on";
  var checked;

  if ( value && ( value.toString() == checkedValue.toString() )
  ) {
    checked = true;
  };

  var attributes = Object.assign(
    {
      name: name,
      type: options.type || "checkbox",
      id: options.id,
      value: checkedValue,
      checked: checked,
      required: options.required,
      readonly: options.readonly,
      disabled: options.disabled,

      $options: options,

      $dependentValue: function() {
        return this.value;
      },

      $labelOnclick: function(e) {

        var input = this.querySelector("input");
        if ( e.target.closest("helpbutton") || e.target.closest("helpbody") ) {
          input.focus();
          return false;
        } else if ( e.target === input ) {
          return true;
        } else {
          input.click();
          return false;
        };

      },

      oninput: function(e) {
        if ( this.closest("field") ) {
          this.closest("field").$fieldChanged();
        };
      },

    },
    options.attributes || {}
  );

  return a.input( null, attributes );

};
