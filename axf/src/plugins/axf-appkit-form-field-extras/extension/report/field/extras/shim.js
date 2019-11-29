ax.extension.report.field.extras.shim = function() {

  return {
    controls: {
      language: ( f, target ) => ( options={} ) => this.controls.language( f, options ),
      timezone: ( f, target ) => ( options={} ) => this.controls.timezone( f, options ),
      country: ( f, target ) => ( options={} ) => this.controls.country( f, options ),
      // multiselect: ( f, target ) => ( options={} ) => this.controls.multiselect( f, options ),
      // selectinput: ( f, target ) => ( options={} ) => this.controls.selectinput( f, options ),
      password: ( f, target ) => ( options={} ) => this.controls.password( f, options ),
      // uri: ( f, target ) => ( options={} ) => this.controls.uri( f, options ),
    }

  }

}
