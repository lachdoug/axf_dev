ax.extension.report.shim = function() {

  return {

    report: r => options => this.factory.report( r, options ),
    button: r => options => this.factory.button( options ),
    checkbox: r => options => this.factory.checkbox( options ),
    checkboxes: r => options => this.factory.checkboxes( options ),
    output: r => options => this.factory.output( options ),
    radios: r => options => this.factory.radios( options ),
    select: r => options => this.factory.select( options ),
    string: r => options => this.factory.string( options ),
    text: r => options => this.factory.text( options ),

  }

}
