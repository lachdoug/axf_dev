ax.extension.report.field.dependent.shim = function() {

  let x = ax.x

  return {

    field: ( r, target ) => ( options={} ) => {
      return this.shim.dependent( {
        body: target( options ),
        scope: r.scope,
        ...options.dependent
      } )
    },

    dependent: ( r, target ) => ( options={} ) => {
      return this.shim.dependent( {
        scope: r.scope,
        ...options
      } )
    },


  }

}
