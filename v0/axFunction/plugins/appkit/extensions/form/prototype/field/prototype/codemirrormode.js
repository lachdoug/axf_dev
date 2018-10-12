// options.target - querySelector to find codemirror field on form. Default is 'codemirror'
// options.attributes - for <select> tag

ax.extensions.form.codemirrormode = function(
  name,
  options
) {

  // var a = this.axFunction.tags;
  var f = this.factory;

  var modes = Object.keys( CodeMirror.modes );
  modes[0] = ""; // replace null

  var selectOptions = {};

  selectOptions.value = options.value;
  selectOptions.collection = modes;
  selectOptions.attributes = Object.assign (
    {
      $init: function () { this.$setMode(); },
      onchange: function (e) { e.target.$setMode(); },
      $setMode: function () {
        this.closest("form").
          querySelector( options.target || "codemirror" ).
          $setMode( this.value );
      },
    },
    options.input || {}
  );
// debugger
  return f.select(
    name,
    selectOptions
  );

};
