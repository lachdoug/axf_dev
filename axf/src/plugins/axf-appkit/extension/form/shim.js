ax.extension.form.shim = function() {

  return {

    input: f => options => this.factory.input( options ),
    select: f => options => this.factory.select( options ),
    textarea: f => options => this.factory.textarea( options ),
    checkbox: f => options => this.factory.checkbox( options ),
    checkboxes: f => options => this.factory.checkboxes( options ),
    radios: f => options => this.factory.radios( options ),
    button: f => options => this.factory.button( options ),
    form: f => options => this.factory.form( f, options ),
    submit: f => options => this.factory.submit( f, options ),
    cancel: f => options => this.factory.cancel( f, options ),

  }

}
