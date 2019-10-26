ax.extension.form.field.nest.shim.
nest = function( f, options={} ) {

  let a = ax.a
  let x = ax.x

  let nestForm = options.form || ( () => null )

  let nestFactory = this.nest.factory( {
    scope: options.name, // name is the scope for child items
    object: options.value || {},
    params: f.params,
    shims: f.shims,
    item: options.item,
  } )

  let rebasedName = function( name, scope, index ) {
    let pattern = `^${ scope.replace( /(\[|\])/g, '\\$1' ) }\\[\\d+\\](.*)$`
    let regex = new RegExp( pattern )
    let match = name.match( regex )
    return `${ scope }[${ index }]${ match[1] }`
  }

  let nestTagOptions = {

    name: nestFactory.scope,

    $rescopeElement: function( el, scope, index ) {
      el.setAttribute( 'name', rebasedName( el.getAttribute( 'name' ), scope, index ) )
    },

    $rescope: function( scope, index ) {

      let name = rebasedName( this.getAttribute( 'name' ), scope, index )
      this.setAttribute( 'name', name )
      nestFactory.scope = name

      let namedElements = x.lib.unnested( this, `[name^="${ scope }"]` )
      namedElements.forEach( function( el ) {
        if ( el.tagName == 'APPKIT-FORM-NEST') {
          el.$rescope( scope, index )
        } else {
          this.$rescopeElement( el, scope, index )
        }
      }.bind( this ) )

    },

    ...options.nestTag,

  }

  let controlTagOptions = {
    $value: function() {
      let items = this.$('|appkit-form-nest-items')
      if ( items ) {
        return this.$('|appkit-form-nest-items').$count()
      } else {
        return null
      }
    },
    $controls: function() {
      return x.lib.unnested( this, '|appkit-form-control' )
    },
    $buttons: function() {
      return this.$$('button').$$
    },
    $disable: function() {
      let controls = [ ...this.$controls(), ...this.$buttons() ]
      for ( let i in controls ) {
        controls[i].$disable && controls[i].$disable()
      }
    },
    $enable: function() {
      let controls = [ ...this.$controls(), ...this.$buttons() ]
      for ( let i in controls ) {
        controls[i].$enable && controls[i].$enable()
      }
    },
    $focus: function() {
      this.$('|appkit-form-control').$focus()
    },
    $on: {
      'axf.appkit.form.nest.item.move': (e,el) =>
        el.$send( 'axf.appkit.form.control.change' ),
      'axf.appkit.form.nest.item.add': (e,el) =>
        el.$send( 'axf.appkit.form.control.change' ),
      'axf.appkit.form.nest.item.remove': (e,el) =>
        el.$send( 'axf.appkit.form.control.change' ),
    },
    ...options.controlTag,

  }

  return a['|appkit-form-control'](
    a['|appkit-form-nest'](
      nestForm( nestFactory ),
      nestTagOptions
    ),
    controlTagOptions
  )

}
