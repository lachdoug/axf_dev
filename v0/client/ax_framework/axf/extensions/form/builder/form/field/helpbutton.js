AxFrameworkExtensionsFormBuilder.prototype.helpbutton = function () {

  var a = this.axFramework.tags;
  var x = this.axFramework.extensions;
  var f = this;

  // var content = content.help;
// debugger
  // if ( content === "string" ) {
    return a.helpbutton( a.button(
      "?",
      {
        type: "button",
        onclick: function(e) {
          // debugger
          var helpBody = e.target.closest("field").querySelector("helpbody");
          if ( helpBody.style.display === 'none' ) {
            this.$html = "? &#x25BE;"
            x.lib.fadeIn( helpBody );
          } else {
            this.$html = "?"
            x.lib.fadeOut( helpBody );
          };
        },
      }
    ) );
  // } else if ( typeof content === "object" ) {
  //   return content;
  // } else {
  //   return null;
  // };

};
