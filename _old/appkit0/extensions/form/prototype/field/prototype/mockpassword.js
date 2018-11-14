ax.extensions.form.mockpassword = function(
  name,
  options
) {

  var f = this.factory;

  var inputOptions = {
    value: options.value,
    placeholder: options.placeholder,
    required: options.required,
    disabled: options.disabled,
    attributes: Object.assign(
      {
        _doTextSecurity() {
          if ( this.value.length == 0 ) {
            this.style.fontFamily = "inherit";
            this.style.letterSpacing = "inherit";
            this.style.fontSize = "inherit";
          } else {
            this.style.fontFamily = "text-security-disc";
            this.style.letterSpacing = "1px";
            this.style.fontSize = "1em";
          };
        },
        $init: function() { this._doTextSecurity() },
        oninput: function() { this._doTextSecurity() },
        autocomplete: "off",
      },
      options.input || {}
    ),
  };

  return f.input( name , inputOptions );

};
