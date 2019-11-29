ax.extension.report.shim = function() {

  return {

    output: (r) => ( options ) => this.factory.output( options ),
    json: (r) => ( options ) => this.factory.json( options ),
    // textarea: (r) => ( options ) => this.factory.textarea( options ),
    // check: (r) => ( options ) => this.factory.check( options ),
    // button: (r) => ( options ) => this.factory.button( options ),

    report: (r) => ( options ) => this.factory.report( r, options ),

  }

}
