AxFunction.Extensions.Appkit.FormFactory.prototype.helpbutton = function () {

  var a = this.axFunction.tags;
  var x = this.axFunction.extensions;
  var f = this;

  // var content = content.help;
// debugger
  // if ( content === "string" ) {
    return a.helpbutton( a.button(
      "?",
      {
        type: "button",
        onclick: function(e) {
          debugger
          var helpBody = e.target.closest("outerwrapper").querySelector("helpbody");
          if ( helpBody.style.display === 'none' ) {
            this.$html = "? &#x25BE;";
            f.lib.fadeIn( helpBody );
          } else {
            this.$html = "?";
            f.lib.fadeOut( helpBody );
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
