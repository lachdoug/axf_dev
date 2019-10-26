ax.extension.report.field.dependent.shim.
dependent = function( options ) {

  let a = ax.a
  let x = ax.x

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

  let dependentTag = {
    $init: function () {
      if( this.$dependable() ) {
        let dependency = this.$dependency()
        // dependency.$registerDependent( this )
      }
      this.$check()
    },
    // $registerDependent: function( dependent ) {
    //   this.$dependents.push( dependent )
    // },
    $hide: function() {
      this.style.display = 'none'
    },
    $show: function() {
      this.style.display = 'block'
    },
    // $dependents: [],
    $dependable: function() {
      return options.name || options.selector
    },
    $dependency: function() {
      return x.report.field.dependent.shim.dependent.dependency( this, options )
    },
    $value: function() {
      return this.$('|appkit-report-control').$value()
    },
    $match: function() {
      return x.report.field.dependent.shim.dependent.match( this, options )
    },
    $check: function() {
      if ( this.$match() ) {
        if ( options.animate ) {
          x.lib.animate.fade.in( this )
        } else {
          this.$show()
        }
      } else {
        this.$hide()
      }
    },
    // $checkDependents: function() {
    //   for ( let dependent of this.$dependents ) {
    //     dependent.$check( { animate: true } )
    //   }
    // },
    ...options.dependentTag,
    style: {
      display: 'none',
      ...( options.dependentTag || {} ).style,
    },
    // $on: {
    //   'axf.appkit.report.control.change': (e,el) => {
    //     el.$checkDependents()
    //   },
    //   ...( options.dependentTag || {} ).$on,
    // },
  }

  return a['|appkit-report-field-dependent']( options.body, dependentTag )

}
