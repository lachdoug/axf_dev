app2.coderunner = function( script, options={} ) {

  return (a,x) => a['app-coderunner']( [
    x.appkit.form(
      (f) => [
        f.field( {
          key: "script",
          as: "code",
          label: false,
          value: script,
          code: { mode: "javascript" },
          // help: "Hi",
        } ),

        // f.fields(
        //   { key: "first_name", required: true },
        //   { key: "last_name", dependent: true }
        // ),
        // f.selectinput( {
        //   key: "fizzbuzz",
        //   check: { reverse: true },
        //   collection: [ "fizz", "buzz" ],
        //   value: "buzz",
        //   placeholder: "Select one or another",
        //   required: true,
        // } ),


        a.p( app2.btn( app2.fa( "play", "Run" ), function () {
          // debugger
          this.disabled = true
          let script = this.$('^form appkit-form-field').$value()
          let iframe = this.$('^app-coderunner iframe').$run( script )
        }, "primary run" ) ),
        app2.coderunner.iframe( options ),
      ],
    ),
  ], { $enable: function() { this.$('button.run').removeAttribute('disabled')  } } )

}
