ax.extensions.codemirror = function( text, options={} ) {

  let a = ax.a

  return a.codemirror(
    a.textarea( text, {
      style: "display: none;",
    } ),
    {
      $value: function() {
        return this.$codemirror.getValue();
      },
      $init: function() {
        this.$codemirror = CodeMirror.fromTextArea(
          this.querySelector("textarea"), options.codemirror );
      }
    }
  );

};

// alias
ax.extensions.code = function( text, options={} ) {

  var codemirrorOptions = Object.assign(
    {
      lineNumbers: true,
      readOnly: true,
    },
    options.codemirror
  );

  return ax.extensions.codemirror( text, { codemirror: codemirrorOptions } );

};
