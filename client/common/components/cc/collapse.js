cc.collapse = ( options ) => (a,x) => a['app-collapse']( [
  cc.button( {
    label: a['app-collapse-indicator'](
      ( el ) => cc.icon( el.$iconClass(), options.label ),
      {
        $state: options.display,
        $iconClass: function() {
          return this.$state ? 'fa fa-caret-down' : 'fa fa-caret-right'
        },
      }
    ),
    onclick: (e,el) => el.$('^').$toggle(),
    class: 'btn app-btn',
    ...options.button,
  } ),
  a['app-collapse-body'](
    options.body,
    { style:
      {
        display: options.display ? 'unset': 'none',
        ...( options.body || {} ).style,
      }
    }
  ),

], {
  $state: options.display,
  $toggle: function() { this.$state = !this.$state },
  $update: (el, display) => {
    el.$('app-collapse-indicator').$state = display
    let body = el.$('app-collapse-body')
    if ( display ) {
      x.lib.animate.fade.in( body )
      let firstControl = el.$$('|appkit-form-control').$$[0]
      if ( firstControl ) {
        if ( ax.is.not.function( firstControl.$focus ) ) debugger
        firstControl.$focus()
      }
    } else {
      x.lib.animate.fade.out( body )
    }
  },
  ...options.collapseTag
} )
