ax.extension.report.field.shim = function() {

  return {
    field: ( r, target ) => ( options={} ) => this.shim.field( r, options ),
    label: ( r, target ) => ( options={} ) => this.shim.label( options ),
    help: ( r, target ) => ( options={} ) => this.shim.help( options ),
    helpbutton: ( r, target ) => ( options={} ) => this.shim.helpbutton( options ),
    hint: ( r, target ) => ( options={} ) => this.shim.hint( options ),
    control: ( r, target ) => ( options={} ) => this.shim.control( r, options ),
    controls: {
      checkbox: ( r, target ) => ( options={} ) => this.shim.controls.checkbox( r, options ),
      checkboxes: ( r, target ) => ( options={} ) => this.shim.controls.checkboxes( r, options ),
      string: ( r, target ) => ( options={} ) => this.shim.controls.string( r, options ),
      select: ( r, target ) => ( options={} ) => this.shim.controls.select( r, options ),
      radios: ( r, target ) => ( options={} ) => this.shim.controls.radios( r, options ),
      text: ( r, target ) => ( options={} ) => this.shim.controls.text( r, options ),
      output: ( r, target ) => ( options={} ) => this.shim.controls.output( r, options ),

      // boolean: ( r, target ) => ( options={} ) => this.shim.controls.boolean( r, options ),
      // multiselect: ( r, target ) => ( options={} ) => this.shim.controls.multiselect( r, options ),
      // number: ( r, target ) => ( options={} ) => this.shim.controls.select( r, options ),
      // preformatted: ( r, target ) => ( options={} ) => this.shim.controls.preformatted( r, options ),
      // markdown: ( r, target ) => ( options={} ) => this.shim.controls.markdown( r, options ),
      // checkbox: ( r, target ) => ( options={} ) => this.shim.controls.checkbox( r, options ),
    }

  }

}
