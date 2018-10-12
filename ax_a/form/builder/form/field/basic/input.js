// Options
// attributes - <input> tag attributes
// value - field value
// invalid - Custom message, shown when invalid, can be string or function(validity)

AxFunctionExtensionsFormBuilder.prototype.input = function(
  name,
   options={}
) {

  var a = this.axFunction.tags;

  var attributes = Object.assign(
    {
      name: name,
      value: options.value,
      id: options.id,
      type: options.type,
      pattern: options.pattern,
      required: options.required,
      readonly: options.readonly,
      disabled: options.disabled,
      placeholder: options.placeholder,

      $options: options,

      $labelOnclick: function(e) {

        var input = this.querySelector("input");
        if ( e.target === input ) {
          return true;
        } else {
          input.focus();
          return false;
        };

      },

      $dependentValue: function() {
        return this.value;
      },

      $init: function () { this.$checkValidity(); },
      oninput: function(e) {
        if ( this.$checkValidity() && this.closest("field") ) {
          this.closest("field").$fieldChanged();
        };
      },
      $checkValidity: function() {
        this.setCustomValidity('');
        if(this.validity.valid) {
          return true;
        } else {
          if ( options.invalid ) {
            if ( typeof options.invalid === "string" ) {
              this.setCustomValidity( options.invalid );
            } else {
              var invalidMessage = options.invalid( this.validity );
              if ( invalidMessage ) {
                this.setCustomValidity( invalidMessage );
              };
            };
          };
          return false;
        };
      },
    },
    options.attributes || {}
  );

  return a.input( null, attributes );

};
