AcellBuilderExtensionsFormBuilder.prototype.help = function( fieldOptions ) {

  var a = this.cellBuilder.tagBuilder;
  var x = this.cellBuilder.extensionsBuilder;
  var f = this;

  var content = fieldOptions.help;

  if ( typeof content === "string" ) {
    return a.help(
      [
        a.helpbutton(
          "?",
          {
            onclick: function() {
              if ( this.nextSibling.style.display === 'none' ) {
                this.$html = "&#x25BE; ?"
                x.lib.fadeIn( this.nextSibling );
              } else {
                this.$html = "?"
                x.lib.fadeOut( this.nextSibling );
              };
            },
          }
        ),
        a.helptext(
          content,
          {
            style: "display: none;",
          }
        )
      ]
    );
  } else if ( typeof content === "object" ) {
    return content;
  } else {
    return null;
  };

};
