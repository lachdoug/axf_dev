ax.extension.appkit.form = function( component, options={} ) {

  let x = ax.x

  let async = options.async === false ? false : true

  if ( ax.type.is.function( component ) ) {

    let scope = options.scope || []
    if ( ax.type.is.string( scope ) ) { scope = [ scope ] }

    component = component(
      ax.extension.appkit.form.factory( {
        scope: scope,
        data: options.data,
        layout: options.layout
      } )
    )
  }

  let asyncSubmit = function (e, el, state) {
    if ( options.onsubmit ) {
      // let form = el.$("^form")

      options.onsubmit.bind( this )( e, el, state )

    } else {

      let cleanup = function( el ) {
        // debugger
        el.$("^appkit-form-wrapper form").$enable()
        el.$("^appkit-form-submition").$nodes( null )
        return true
      }

      let successHandler = function( data, el, request ) {

        let successDefault = function( data, el, request ) {
          let successDisplay = el.$("^appkit-form-wrapper appkit-form-result")
          let errorDisplay = el.$("^appkit-form-wrapper appkit-form-error")
          errorDisplay.$nodes( null )
          successDisplay.$nodes( x.appkit.put( data ) )
          successDisplay.scrollIntoView()
          return true
        }

        return ( options.success || successDefault )( data, el, request ) && cleanup( el )

      }

      let errorHandler = function( error, el, request ) {

        let errorDefault = function( error, el, request ) {
          let errorDisplay = el.$("^appkit-form-wrapper appkit-form-error")
          errorDisplay.$nodes( request.responseText )
          errorDisplay.scrollIntoView()
          return true
        }

        return ( options.error || errorDefault )( error, el, request ) && cleanup( el )

      }

      el.$("^appkit-form-wrapper appkit-form-submition").$nodes(
        x.appkit.http( el.action, {
          body: el.$serialize(),
          method: options.method || "POST",
          success: successHandler,
          error: errorHandler
        } )
      )

      el.$("^appkit-form-wrapper form").$disable()

    }
  }


  let formTag = {
    action: options.action, // || options.url,
    method: options.method || "POST",
    $on: { submit: function( e, el, state ) {
      if (async) {
        e.preventDefault()
        asyncSubmit( e, el, state )
      }
    } },
    $init: function() {
      if ( options.focus ) this.$focus()
      if ( options.disabled ) this.$disable()
    },
    $focus: function() {

      let first
      let fields = this.$$('appkit-form-field')()
      for ( let field of fields ) {
        if ( field.$match() ) {
          first = field
          break
        }
      }

      if ( first ) {
        first.$focus()
      } else {

        for ( let element of this.$$("input,select,textarea")() ) {
          if ( ax.x.appkit.lib.element.visible( element ) ) {
            element.focus()
            break
          }
        }

      }
    },
    $disable: function() {
      this.$$('appkit-form-field-input > *').$disable()
      this.$$('appkit-form-button button').$disable()
      this.$$('appkit-form-submit button').$disable()
    },
    $enable: function() {
      if ( !options.disabled ) {
        this.$$('appkit-form-field-input > *').$enable()
        this.$$('appkit-form-button button').$enable()
        this.$$('appkit-form-submit button').$enable()
      }
    },
    $dependencies: function () {
      this.$$('appkit-form-field-dependent').$process()
    },
    $data: function () {
      return ax.extension.appkit.lib.form.data.object( this )
    },
    $valid: function () {
      return this.checkValidity()
    },
    $serialize: function () {
      return JSON.stringify( this.$data() )
    },
    $submit: function() {
      var event = new Event('submit', {
          'bubbles': true,
          'cancelable': true
      });
      this.dispatchEvent(event);
    },
    ...options.formTag
  }

  return (a,x) => a["appkit-form-wrapper"]( [
    a["appkit-form-error"]( options.errorTag ),
    a["appkit-form-result"]( options.resultTag ),
    a["appkit-form"](
      ax.a.form( component, formTag ),
    ),
    a["appkit-form-submition"]( options.submissionTag ),
  ], options.wrapperTag )

}
