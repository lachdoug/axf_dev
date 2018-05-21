ACellDslFormBuilder.prototype.help = function( content, helpBuilderOptions ) {

  var a = this.cellBuilder;
  var f = this;

  if ( typeof content === "string" ) {
    return a.help(
      [
        a.helpbutton(
          "?",
          {
            style: "cursor: pointer;",
            onclick: function() {
              if ( this.nextSibling.style.display === 'none' ) {
                this.$html = "&#x25BE; ?"
                f.fadeIn( this.nextSibling );
              } else {
                this.$html = "?"
                f.fadeOut( this.nextSibling );
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
    return a.span();
  };

};
