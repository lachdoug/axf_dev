// Options
// attributes - <input> tag attributes
// value - field value

ax.extensions.form.factory.textarea = function(
  // name,
  options = {} ) {

  // var attributes;

  var a = ax.a;

  let attributes = Object.assign(
    {
      name: options.name,
      // id: options.id,
      // required: options.required,
      // readonly: options.readonly,
      // disabled: options.disabled,

      $value: function() {
        return this.value;
      },
      $focus: function () {
        this.focus()
      },
      $disable: function() {
        this.disabled = 'disabled'
      },
      $enable: function() {
        if ( !options.disabled ) this.removeAttribute('disabled')
      },


      // $options: options,

      // $dependentValue: function() {
      //   return this.value;
      // },
      // $labelOnclick: function(e) {
      //
      //   var input = this.querySelector("textarea");
      //   if ( e.target === input ) {
      //     return true;
      //   } else {
      //     input.focus();
      //     return false;
      //   };
      //
      // },
      // oninput: function(e) {
      //   if ( this._controlChanged ) { this._controlChanged() }
      //   // this.closest("field") && this.closest("field").$fieldChanged();
      // },
    },
    options.textareaTag
  );

  return a.textarea( options.value, attributes )

};
