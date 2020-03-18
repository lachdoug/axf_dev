ax.extension.report.field.nest.shim.
nest = function( f, options={} ) {

  let a = ax.a
  let x = ax.x

  let nestReport = options.report || ( () => null )

  let nestFactory = this.nest.factory( {
    scope: options.name, // name is the scope for child items
    object: options.value || {},
    params: f.params,
    shims: f.shims,
    item: options.item,
  } )

  // let rebasedName = function( name, scope, index ) {
  //   let pattern = `^${ scope.replace( /(\[|\])/g, '\\$1' ) }\\[\\d+\\](.*)$`
  //   let regex = new RegExp( pattern )
  //   let match = name.match( regex )
  //   return `${ scope }[${ index }]${ match[1] }`
  // }

  let nestTagOptions = {

    name: nestFactory.scope,

    // $rescopeElement: function( el, scope, index ) {
    //   el.name = rebasedName( el.name, scope, index )
    // },
    //
    // $rescope: function( scope, index ) {
    //
    //   let name = rebasedName( this.getAttribute( 'name' ), scope, index )
    //   this.setAttribute( 'name', name )
    //   nestFactory.scope = name
    //
    //   let namedElements = x.lib.unnested( this, `[name^="${ scope }"]` )
    //   namedElements.forEach( function( el ) {
    //     if ( el.tagName == 'APPKIT-FORM-NEST') {
    //       el.$rescope( scope, index )
    //     } else {
    //       this.$rescopeElement( el, scope, index )
    //     }
    //   }.bind( this ) )
    //
    // },
    //
    ...options.nestTag,

  }

  let controlTagOptions = {
    $value: function() {
      let items = this.$('|appkit-report-nest-items')
      if ( items ) {
        return this.$('|appkit-report-nest-items').$count()
      } else {
        return null
      }
    },
    // $controls: function() {
    //   return x.lib.unnested( this, '|appkit-report-control' )
    // },
    // $buttons: function() {
    //   return this.$$('button').$$
    // },
    // $disable: function() {
    //   let controls = [ ...this.$controls(), ...this.$buttons() ]
    //   for ( let i in controls ) {
    //     controls[i].$disable && controls[i].$disable()
    //   }
    // },
    // $enable: function() {
    //   let controls = [ ...this.$controls(), ...this.$buttons() ]
    //   for ( let i in controls ) {
    //     controls[i].$enable && controls[i].$enable()
    //   }
    // },
    $focus: function() {
      this.$('|appkit-report-control').$focus()
    },
    // $on: {
    //   'axf.appkit.report.nest.item.move': (e,el) =>
    //     el.$send( 'axf.appkit.report.control.change' ),
    //   'axf.appkit.report.nest.item.add': (e,el) =>
    //     el.$send( 'axf.appkit.report.control.change' ),
    //   'axf.appkit.report.nest.item.remove': (e,el) =>
    //     el.$send( 'axf.appkit.report.control.change' ),
    // },
    ...options.controlTag,

  }

  return a['|appkit-report-control'](
    a['|appkit-report-nest'](
      nestReport( nestFactory ),
      nestTagOptions
    ),
    controlTagOptions
  )

}
