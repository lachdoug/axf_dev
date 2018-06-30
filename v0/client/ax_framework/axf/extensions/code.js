AxFrameworkExtensions.prototype.code = function( content, options={} ) {

  var a = this.axFramework.tags;

  return a.codemirror(
    a.textarea( null, {
      value: content,
      $init: function() {
        this._codemirror = CodeMirror.fromTextArea( this, {
          lineNumbers: true,
          mode: options.mode,
          readOnly: true,
          // tabMode: "indent",
        } );
      },
    } )
  );

};
