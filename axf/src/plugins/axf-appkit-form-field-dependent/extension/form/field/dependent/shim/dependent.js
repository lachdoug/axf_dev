ax.extension.form.field.dependent.shim.
dependent = function( options ) {

  let a = ax.a
  let x = ax.x
// debugger
// if ( options.scope == 'view[0][form][components][2][field][selections][static][1][fieldset]' ) debugger
  if ( options.target ) {
    let parts = options.target.split( '[..]' )
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

  // if ( options.pattern == '^template$' ) ax.log( this, dependency, options.name )
  // if ( options.pattern == '^template$' ) debugger

  let dependentTag = {
    $init: function () {
      if( this.$dependable() ) {
        let dependency = this.$dependency()
        dependency.$registerDependent( this )

        // let opts = options
        // options.scope


      }
      // this.$check()
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
      // console.log( [ 'hide', options.name, this ] )
    },
    $show: function() {
      // if ( !this.$('|appkit-form-control') ) debugger
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
      // this.$$( '|appkit-form-field-dependent' ).$check()
      //
      //
      //
      // ax.log( [ 'show', options.name, this ] )
    },
    $dependents: [],
    $dependable: function() {
      return options.name || options.selector
    },
    $dependency: function() {
      return x.form.field.dependent.shim.dependent.dependency( this, options )
    },
    $value: function() {
      return this.$('|appkit-form-control').$value()
    },
    $match: function() {
      return x.form.field.dependent.shim.dependent.match( this, options )
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
