ax.extension.report.field.nest.prefab.shim = function() {

  let self = this

  return {

    controls: {

      table: (f) => ( options ) => self.shim.table( f, options ),

      many: (f) => ( options ) => self.shim.many( f, options ),

      one: (f) => ( options ) => f.controls.nest( options )

    },
    
  }

}
