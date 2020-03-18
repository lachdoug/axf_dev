ax.extension.form.field.dependent.shim = function() {

  let x = ax.x

  return {

    field: ( f, target ) => ( options={} ) => {
      return this.shim.dependent( {
        body: target( options ),
        scope: f.scope,
        ...options.dependent
      } )
    },

    fieldset: ( f, target ) => ( options={} ) => {
      return this.shim.dependent( {
        body: target( options ),
        scope: f.scope,
        ...options.dependent
      } )
    },

    dependent: ( f, target ) => ( options={} ) => {

      return this.shim.dependent( {
        scope: f.scope,
        ...options
      } )
    },

    form: ( f, target ) => ( options={} ) => target( {
      ...options,
      formTag: {
        ...options.formTag,
        $init: function() {
          options.formTag && options.formTag.$init && options.formTag.$init.bind( this )( arguments )
          this.$checkDependents()
        },
        $checkDependents: function() {
          let dependents = x.lib.unnested( this, '|appkit-form-field-dependent' )
          for ( let i in dependents ) {
            dependents[i].$check()
          }
        },
      },
    } ),

    items: ( f, target ) => ( options={} ) => target( {
      ...options,
      itemsTag: {
        ...options.itemsTag,
        $on: {
          'axf.appkit.form.nest.item.add: check dependents on new item': (e,el) => {
            let newItem = el.$$('|appkit-form-nest-item').$$.reverse()[0]
            let dependents = x.lib.unnested( newItem, '|appkit-form-field-dependent' )
            for ( let i in dependents ) {
              dependents[i].$check()
            }
          },
          ...( options.itemsTag || {} ).$on
        },
      },
    } ),



  }

}
