ax.extension.report.field.shim = function() {

  let x = ax.x

  return {
    // report:  ( r, target ) => ( options={} ) => target( {
    //   ...options,
    //   reportTag: {
    //     $controls: function() {
    //       return x.lib.unnested( this, '|appkit-report-control' )
    //     },
    //     $buttons: function() {
    //       return this.$$('button').$$
    //     },
    //     $disable: function() {
    //       let controls = [ ...this.$controls(), ...this.$buttons() ]
    //       for ( let i in controls ) {
    //         controls[i].$disable && controls[i].$disable()
    //       }
    //     },
    //     $enable: function() {
    //       let controls = [ ...this.$controls(), ...this.$buttons() ]
    //       for ( let i in controls ) {
    //         controls[i].$enable && controls[i].$enable()
    //       }
    //     },
    //     ...options.reportTag
    //   },
    // } ),
    // button: ( r, target ) => ( options={} ) => target( {
    //   ...options,
    //   buttonTag: {
    //     $disable: function() {
    //       this.disabled = 'disabled'
    //       // debugger
    //     },
    //     $enable: function() {
    //       this.removeAttribute( 'disabled' )
    //     },
    //     ...options.buttonTag
    //   },
    // } ),
    field: ( r, target ) => ( options={} ) => this.shim.field( r, options ),
    label: ( r, target ) => ( options={} ) => this.shim.label( options ),
    help: ( r, target ) => ( options={} ) => this.shim.help( options ),
    helpbutton: ( r, target ) => ( options={} ) => this.shim.helpbutton( options ),
    hint: ( r, target ) => ( options={} ) => this.shim.hint( options ),
    control: ( r, target ) => ( options={} ) => this.shim.control( r, options ),
    controls: {
      output: ( r, target ) => ( options={} ) => this.shim.controls.output( r, options ),
      boolean: ( r, target ) => ( options={} ) => this.shim.controls.boolean( r, options ),
      json: ( r, target ) => ( options={} ) => this.shim.controls.json( r, options ),
      // number: ( r, target ) => ( options={} ) => this.shim.controls.select( r, options ),
      // preformatted: ( r, target ) => ( options={} ) => this.shim.controls.preformatted( r, options ),
      // markdown: ( r, target ) => ( options={} ) => this.shim.controls.markdown( r, options ),
      // checkbox: ( r, target ) => ( options={} ) => this.shim.controls.checkbox( r, options ),
    }

  }

}
