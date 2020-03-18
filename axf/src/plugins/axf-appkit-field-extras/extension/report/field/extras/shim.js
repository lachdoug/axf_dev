ax.extension.report.field.extras.shim = function() {

  return {
    controls: {
      boolean: ( r, target ) => ( options={} ) => this.controls.boolean( r, options ),
      language: ( r, target ) => ( options={} ) => this.controls.language( r, options ),
      timezone: ( r, target ) => ( options={} ) => this.controls.timezone( r, options ),
      country: ( r, target ) => ( options={} ) => this.controls.country( r, options ),
      color: ( r, target ) => ( options={} ) => this.controls.color( r, options ),
      datetime: ( r, target ) => ( options={} ) => this.controls.datetime( r, options ),
      email: ( r, target ) => ( options={} ) => this.controls.email( r, options ),
      tel: ( r, target ) => ( options={} ) => this.controls.tel( r, options ),
      url: ( r, target ) => ( options={} ) => this.controls.url( r, options ),
      number: ( r, target ) => ( options={} ) => this.controls.number( r, options ),
      password: ( r, target ) => ( options={} ) => this.controls.password( r, options ),
      preformatted: ( r, target ) => ( options={} ) => this.controls.preformatted( r, options ),
      json: ( r, target ) => ( options={} ) => this.controls.json( r, options ),
    }

  }

}
