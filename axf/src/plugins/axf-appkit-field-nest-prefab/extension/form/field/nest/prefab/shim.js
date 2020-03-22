ax.extension.form.field.nest.prefab.shim = function() {

  return {

    controls: {
      table: f => options => this.shim.table( f, options ),
      many: f => options => this.shim.many( f, options ),
      one: f => options => f.controls.nest( options )
    },

  }

}
