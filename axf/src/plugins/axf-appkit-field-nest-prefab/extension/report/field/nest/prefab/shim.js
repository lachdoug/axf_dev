ax.extension.report.field.nest.prefab.shim = function() {

  return {

    controls: {
      table: r => options => this.shim.table( r, options ),
      many: r => options => this.shim.many( r, options ),
      one: r => options => r.controls.nest( options )
    },

  }

}
