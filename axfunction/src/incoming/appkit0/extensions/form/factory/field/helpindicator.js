ax.extensions.form.factory.field.helpindicator = function(
  options={}
) {

  let a = ax.a
  let x = ax.x

  let buttonTag = Object.assign(
    {
      $type: "helpindicator",
      $update: function() { this.$('arrow')[0]._pointDown( this._helpVisible ) },
    },
    options.helpindicatorTag
  )

  return x.btn(
    a.arrow(
      null,
      {
        $html: " ? &#x25BE; ",
        _pointDown: function( boolean ) {
          if ( boolean ) {
            this.$html = " ? &#x25B4; "
          } else {
            this.$html = " ? &#x25BE; "
          }
        }
      }
    ),
    function() { this._toggleHelp() },
    { buttonTag: buttonTag }
  )

};
