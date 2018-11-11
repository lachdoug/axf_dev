AxFunction.Extensions.prototype.codemirror = function( content, options={} ) {

  var a = this.axFunction.tags;

  var codemirrorOptions = Object.assign(
    {
      lineNumbers: true,
      readOnly: true,
    },
    options
  );

  return a.codemirror(
    a.textarea(
      null,
      {
        value: content,
        style: "display: none;",
      }
    ),
    {
      $value: function() {
        return this.$codemirror.getValue();
      },
      $init: function() {
        this.$codemirror = CodeMirror.fromTextArea( this.querySelector("textarea"), codemirrorOptions );
      }
    }
  );

};
// alias
AxFunction.Extensions.prototype.code = AxFunction.Extensions.prototype.codemirror;
