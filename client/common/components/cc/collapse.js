cc.collapse = ( options ) => (a,x) => a['app-collapse']( [
  cc.button( {
    label: a['app-collapse-indicator']( {
      $state: options.display,
      $iconClass: function() {
        return this.$state ? 'fa fa-caret-down' : 'fa fa-caret-right'
      },
      $nodes: ( el, display ) => cc.icon( el.$iconClass(), options.label )
    } ),
    onclick: (e,el) => el.$('^').$toggle(),
    class: 'btn btn-outline-secondary app-btn',
  } ),
  a['app-collapse-body'](
    options.body,
    { style: { display: options.display ? 'unset': 'none' } }
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
      if ( ax.is.not.function( firstControl.$focus ) ) debugger
      if ( firstControl ) firstControl.$focus()
    } else {
      x.lib.animate.fade.out( body )
    }
  },
  ...options.collapseTag
} )
