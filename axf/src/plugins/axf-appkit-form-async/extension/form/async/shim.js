ax.extension.form.async.shim = function() {

  let a = ax.a
  let x = ax.x

  return {

    form:  ( f, target ) => ( options={} ) => a['|appkit-asyncform']( [
      a['div|appkit-asyncform-result'](),
      a['|appkit-asyncform-body']( target( {
        ...options,
        formTag: {
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
          ...options.formTag,
          $on: {
            'submit: async submit': (e,el) => {

              e.preventDefault()

              let form = el.$('^form')
              let data = el.$data()

              let submitter = el.$('[type="submit"]:focus')
              if ( submitter && submitter.name ) {
                data.append( submitter.name, submitter.value )
              }

              el.$disable && el.$disable()

              let resultDisplay = el.$('^|appkit-asyncform |appkit-asyncform-result')

              resultDisplay.$nodes = (a,x) => x.http( {
                url: el.action,
                body: data,
                method: el.method,
                target: resultDisplay,
                when: options.when,
                success: options.success,
                error: options.error,
                catch: options.catch,
                complete: () => {

                  el.$enable && el.$enable()

                  var windowTop = $(window).scrollTop();
                  var windowBottom = windowTop + $(window).height();
                  var resultDisplayTop = $(resultDisplay).offset().top;
                  var resultDisplayBottom = resultDisplayTop + $(resultDisplay).height();

                  if ( ( resultDisplayBottom > windowBottom ) || ( resultDisplayTop < windowTop ) ) {
                    resultDisplay.scrollIntoView()
                  }

                },
              } )

            },
            ...( options.formTag || {} ).$on
          }

        },
      } ) ),
    ], options.asyncformTag ),

  }

}
