ax.extension.form.field.dependent.shim.
dependent = function( options ) {

  let a = ax.a
  let x = ax.x

  if ( options.key ) {
    let parts = options.key.split( '[..]' )
    let keys = parts.pop()
    let scope = options.scope
    for ( let i in parts ) {
      scope = scope.match( /^(.*)\[.*\]$/)[1]
    }
    let keyMatch = keys.match( /^(\[.*\])*(\w*)$/ )
    scope = `${ scope }${ keyMatch[1] || '' }`
    let key = keyMatch[2]
    options.name = scope ? `${ scope }[${ key }]` : key
  }

  let dependentTag = {
    $init: function () {
      if( this.$dependable() ) {
        this.$dependency = x.form.field.dependent.shim.dependent.dependency( this, options )
        this.$dependency.$registerDependent( this )
      }
    },
    $registerDependent: function( dependent ) {
      this.$dependents.push( dependent )
    },
    $hide: function() {
      this.style.display = 'none'
      this.$('|appkit-form-control').$disable()
      let dependents = x.lib.unnested( this, '|appkit-form-field-dependent' )
      for ( let i in dependents ) {
        dependents[i].$hide()
      }
    },
    $show: function() {
      this.$('|appkit-form-control').$enable()
      if ( !options.animate ) {
        this.style.display = 'block'
      } else {
        x.lib.animate.fade.in( this )
      }
      let dependents = x.lib.unnested( this, '|appkit-form-field-dependent' )
      for ( let i in dependents ) {
        dependents[i].$check()
      }
    },
    $dependents: [],
    $dependable: function() {
      return options.name || options.selector
    },
    $value: function() {
      return this.$('|appkit-form-control').$value()
    },
    $match: function() {
      if ( this.$dependency ) {
        return x.form.field.dependent.shim.dependent.match( this, options )
      } else {
        return true
      }
    },
    $check: function() {
      if ( this.$match() ) {
        this.$show()
      } else {
        this.$hide()
      }
    },
    $checkDependents: function() {
      for ( let dependent of this.$dependents ) {
        dependent.$check()
      }
    },
    ...options.dependentTag,
    style: {
      display: 'none',
      ...( options.dependentTag || {} ).style,
    },
    $on: {
      'axf.appkit.form.control.change': (e,el) => {
        el.$checkDependents()
      },
      ...( options.dependentTag || {} ).$on,
    },
  }

  return a['|appkit-form-field-dependent']( options.body, dependentTag )

}
