'use strict'
ax.extension.appkit = {}

// ax.extension.appkit.loading = function( options={} ) {
//
//   let a = ax.a
//   let x = ax.x
//
//   let text = options.text ?   + options.text :  Loading
//   let wait = options.wait || 100
//
//   let component = x.appkit.cycle( [
//     `◐${ text }`, `◓${ text }`,
//     `◑${ text }`, `◒${ text }`
//   ], wait )
//
//   let loadingTag = {
//     $init: (el) => {
//       el.$('appkit-transition').$to( component )
//     },
//     ...options.loadingTag
//   }
//
//   return a['appkit-loading'](
//     x.appkit.transition.fadein( null, { time: 500 } ),
//     loadingTag
//   )
//
// }

ax.extension.appkit.transition = {};

ax.extension.appkit.put = function( variable, options={} ) {

  let indent = options.indent === false ? null : ( options.indent || 2 )
  let tag
  let component

  if ( ax.is.object( variable ) ) {
    component = JSON.stringify( variable, null, indent )
  } else {
    component = variable.toString()
  }

  return ax.a.pre( component )

}

ax.extension.appkit.widget = {};

ax.extension.appkit.report = function( component, options={} ) {

  if ( ax.is.function( component ) ) {

    let scope = options.scope || []
    if ( ax.is.string( scope ) ) { scope = [ scope ] }

    component = component(
      ax.x.appkit.report.factory( {
        scope: scope,
        data: options.data,
        layout: options.layout
      } )
    )

  }

  return ax.a['appkit-report']( component, options.reportTag )

}

ax.extension.appkit.lib = {}

ax.extension.appkit.form = function( options={} ) {

  let a = ax.a
  let x = ax.x

  let params = options.params || {}
  let dataParam = options.dataParam
  let data = options.data || params[dataParam] || {}
  let proxy = options.proxy
  let formFn = options.form || ( () => [] )
debugger
  let f = ax.x.appkit.form.factory( {
    scope: options.scope,
    data: data,
    params: params,
    layout: options.layout,
    proxy: proxy,
  } )

  let component

  if ( proxy ) {
    component = formFn( proxy(f) )
  } else {
    component = formFn(f)
  }

  let formTagOptions = {
    id: options.id,
    class: options.class,
    style: options.style,
    title: options.title,
    action: options.action,
    method: options.method || 'post',
    enctype: options.enctype,
    // $on: {
    //   'submit: disable form controls after submit': (e,el) => {
    //     e.preventDefault()
    //     el.submit()
    //     x.appkit.form.factory.control.childControls( el ).forEach(
    //       ( child ) => child.$disable()
    //     )
    //   },
    //   ...( options.formTag || {} ).$on
    // },

    $focus: function() {
      let first = this.$controls()[0]
      if ( first ) first.$focus()
    },

    $value: function() {
      result = {}
      this.$controls().forEach(
        ( child ) => {
          if ( child.$key) result[child.$key] = child.$value()
        }
      )
      return result
    },

    $disable: function() {
      this.$controls().forEach(
        ( child ) => child.$disable()
      )
    },

    $enable: function() {
      this.$controls().forEach(
        ( child ) => child.$enable()
      )
    },

    $controls: function() {
      return x.appkit.form.factory.control.childControls( this )
    },

    // $fields: function() {
    //   return x.appkit.form.factory.control.childControls( this )
    // },

    $dependencies: function() {
      this.$$( 'appkit-form-field-dependent' ).$process()
    },



    ...options.formTag
  }

  return a['appkit-form-wrapper']( a['appkit-form-section'](
    a.form( component, formTagOptions )
  ), options.formWrapperTag )

}

ax.extension.appkit.cycle = function( collection, period, options={} ) {

  let a = ax.a
  let x = ax.x

  period = period || 500

  let max = collection.length - 1

  let component = {
    $state: 0,
    $nodes: function() { return collection[this.$state] },
    $init: function() {
      let cycle = function() {
        setTimeout( function() {
          if ( this.$state === max ) {
            this.$state = 0
          } else {
            this.$state++
          }
          cycle()
        }, period )
      }
      cycle()
    }
  }

  return a['appkit-cycle']( component, options.cycleTag )

}

ax.extension.appkit.list = function( object, options={} ) {

  let a = ax.a
  let x = ax.x

  let functions = options.functions || false

  // object = JSON.parse( x.appkit.lib.inspect(
  //   object, { functions: functions }
  // ) )

  return a['appkit-list'](
    x.appkit.list.element( object ),
    options.listTag
  )

}

ax.extension.appkit.router =
( routes, options={} ) =>
( a,x ) => {

  let config = {
    scope: options.scope || '',
    default: options.default,
    home: options.home,
  }

  if ( options.home ) {
    if ( window.location.pathname.match( /^$|^\/$/ ) ) {
      window.history.replaceState( {}, 'Home', options.home )
    }
  }

  let routerTag = {

    id: options.id,

    $init: (el) => {

      const pop = function() {

        let location = this.$location()
        this.$load(
          location.path, location.query, location.anchor
        )

      }.bind( el )

      window.addEventListener( 'popstate', pop )

//       let startLocation = el.$location()
//       let anchored = document.getElementById( startLocation.anchor )
// // ax.log( 'HTML', el.innerHTML )
//       if ( !anchored ) debugger
//       if ( anchored ) anchored.scrollIntoView()
    },

    $nodes: function() {

      if ( ax.is.function( routes ) ) {

        let controller = x.appkit.router.controller ( {
          router: [ this ],
          ...config,
        } )( this.$location() )

        return routes( controller )

      } else {

        return routes

      }

    },

    $config: config,

    $open: function( path, query, anchor ) {

      if ( path[0] === '/' ) {
        this.$locate( path, query, anchor )
      // } else if ( path[0] === '!' ) {
      //   path = path.slice(1)
      //   if ( path[0] === '/' ) {
      //     this.$load( path, query, anchor )
      //   } else {
      //     path = config.scope + `/${ path }`
      //     this.$load( path, query, anchor )
      //   }
      } else {
        path = config.scope + ( path ? `/${ path }` : '' )
        this.$locate( path, query, anchor )
      }

    },

    $locate: function( path, query, anchor ) {
      query = x.appkit.lib.query.from.object( query )
      path = ( path || '/' ) + ( query ? '?' + query : '' ) + ( anchor ? '#' + anchor : '' )
      history.pushState( { urlPath: path },'', path )
      let event = new PopStateEvent( 'popstate', { urlPath: path } )
      dispatchEvent( event )
    },

    $location: function() {
      let location = window.location

      return {
        href: `${ location.pathname }${ location.search }${ location.hash }`,
        path: location.pathname,
        query: x.appkit.lib.query.to.object(
          location.search.slice(1)
        ),
        anchor: location.hash.slice(1)
      }

    },

    $load: function( path, query, anchor ) {
      let routes = this.$$('appkit-router-routes').$$

      routes.forEach( (r) => {
        if ( r.$config.router.length === 1 ) {
          r.$load( path, query, anchor )
        }
      } )
    },

    ...options.routerTag

  }

  return a['appkit-router']( routerTag )

}

ax.extension.appkit.icon = function( klass, text, options={} ) {

// Options:
// tag: tagOptions added to fontawesome tag.
// itag: tagOptions added to i.
// spanTag: tagOptions added to span.
// reverse: true to put icon after text.
// compact: true to have no space between icon and text.

  let a = ax.a
  let x = ax.x

  var component = [
    ax.a.span( { class: klass } )
  ]

  if ( text ) {
    if ( !options.compact ) component.push( '' )
    component.push( text )
  }

  if ( options.reverse ) {
    component.reverse()
  }

  let iconTag = {
    style: { whiteSpace: 'nowrap' },
    ...options.iconTag
  }

  return ax.a['appkit-icon']( component, iconTag )

}

ax.extension.appkit.time = function( options={} ) {

  const a = ax.a

  let timeTag = Object.assign(
    {
      $init: function() {
        this.$tock()
        setInterval( this.$tock, 1000)
      },
      $tock: function() {
        this.$text = ( new Date ).toLocaleTimeString()
      }
    },
    options.timeTag
  )

  return a.time( null, timeTag )

}

ax.extension.appkit.table = function ( contents, options={} ) {

  // let a = ax.a
  // let x. = ax.x

  // let table = this

  let component = []

  let trTag = function( i, row ) {
    if ( ax.is.function( options.trTag ) ) {
      return options.trTag( i, row )
    } else {
      return options.trTag
    }
  }

  let thTag = function( i, j, content ) {
    if ( ax.is.function( options.thTag ) ) {
      return options.thTag( i, j, content )
    } else {
      return options.thTag
    }
  }

  let tdTag = function( i, j, content ) {
    if ( ax.is.function( options.tdTag ) ) {
      return options.tdTag( i, j, content )
    } else {
      return options.tdTag
    }
  }

  let headers
  if ( options.headers === false ) {
    headers = { rows: [], cols: [] }
  } else if ( options.headers === true || !options.headers ) {
    headers = { rows: [ 0 ], cols: [] }
  } else {
    headers = {
      rows: options.headers.rows || [],
      cols: options.headers.cols || []
    }
  }

  let tableCellFor = function( i, j, content ) {
    if ( headers.rows.includes( i ) ) {
      let attributes = {
        scope: col,
        ...thTag( i, j, content )
      }
      return ax.a.th( content, attributes )
    } else if ( headers.cols.includes( j ) ) {
      let attributes = {
        scope: row,
        ...thTag( i, j, content )
      }
      return ax.a.th( content, attributes )
    } else {
      return ax.a.td( content, tdTag( i, j, content ) )
    }
  }

  contents.map( function( row, i ) {
    component.push(
      ax.a.tr(
        row.map( function( content, j) {
          return tableCellFor( i, j, content )
        } ),
        trTag( i, row ) )
    )
  } )

  // let tableTag = options.tableTag

  return ax.a.table( component, options.tableTag )
}

ax.extension.appkit.
http = function( url, options={} ) {

  let a = ax.a
  let x = ax.x

  let successFallback = ( result, el ) => el.$nodes = a['appkit-http-result']( [ result ] )
  let errorFallback = ( result, el ) => el.$nodes = a['appkit-http-result.error']( [ result ] )

  let contentHandlers = options.handlers || {}

  let handleResult = function( result, el, response ) {

    let callback
    let statusCallbacks = options.status || {}
    let statusCallback = statusCallbacks[ response.status ]
    let status = response.status

    if ( status >= 200 && status < 300 ) {
      el.$send( 'axfAppkitHttpSuccess')
      callback = statusCallback || options.success || successFallback
    } else {
      el.$send( 'axfAppkitHttpError')
      callback = statusCallback || options.error || errorFallback
    }

    callback( result, el, response )
    el.$send( 'axfAppkitHttpComplete')

  }

  return a['appkit-http']( {
    $nodes: options.placeholder || null,
    $init: (el) => {
      el.$send( 'axfAppkitHttpStart')
      fetch( url, {
        method: options.method,
        body: options.body,
        headers: {
          // 'Accept': 'application/json',
          // 'Content-Type': 'application/json'
        }
      } )
      .then( response => {

        let contentType = response.headers.get('content-type')

        if ( contentType ) {

          contentType = contentType.split(';')[0]

          let contentHandler = contentHandlers[ contentType ]

          if ( contentHandler ) {
            contentHandler.bind(el)( response, el )
          } else {

            switch( contentType ) {

              case 'application/json':
              response.json().then( result => {
                handleResult( result, el, response )
              } )
              break

              case 'text/plain':
              case 'text/html':
              response.text().then( result => {
                handleResult( result, el, response )
              } )
              break

              default:
              ax.throw( `Unhandled content-type '${ contentType }'.` )

            }

          }

        } else {

          handleResult( null, el, response )

        }


      } ).catch( error => {

        ax.log.error( 'Ax appkit http error.', error.message )
        if ( options.catch ) options.catch( error, el )

      } )

    }
  }, options.httpTag )

}

// ax.extension.appkit.document = {};

ax.extension.appkit.fieldForm = function( options={} ) {

  let a = ax.a
  let x = ax.x
// debugger

  // let proxy = options.proxy
  // let formFn = options.form || ( () => [] )
  //
  // let f = this.fieldForm.factory( {
  //   scope: options.scope,
  //   data: data,
  //   params: params,
  //   layout: options.layout,
  //   proxy: proxy,
  // } )
  //
  // if ( proxy ) {
  //   component = formFn( proxy(f) )
  // } else {
  //   component = formFn(f)
  // }


  return a['appkit-field-form']( this.form( {
    ...options,
    proxy: this.fieldForm.factory
  } ) )


}

// app.form = function( options={} ) {
//   return ax.x.appkit.form( {
//     action: options.url,
//     // proxy: app.form.factory,
//     ...options
//   } )
// }

ax.extension.appkit.button = function( component, onclick, options = {} ) {

  let buttonTag = {

    id: options.id,
    class: options.class,
    type: options.type || 'button',
    name: options.name,
    value: options.value,
    disabled: options.disabled,
    style: options.style,
    title: options.title,

    $on: { click: function(e) {
      onclick.bind( this )( e, this, this.$state )
    } },

    ...options.buttonTag

  }

  // let icon_class
  //
  // if ( options.icon ) {
  //   if ( ax.is.string( options.icon ) ) {
  //     icon_class = options.icon
  //   } else {
  //     icon_class = options.icon.class
  //   }
  //   component = ax.x.appkit.icon( icon_class, component, options.icon )
  // }
  return ax.a.button( component, buttonTag )

}

ax.extension.appkit.router.controller = ( config ) => ( location ) => {

    config = { ...config }

    config.scope = config.scope || ''
    config.match = config.match  || {}
    config.splat = config.splat || []
    config.slash = config.slash || ''

    return {
      href: location.href,
      path: location.path,
      query: location.query,
      anchor: location.anchor,
      scope: config.scope,
      match: config.match ,
      splat: config.splat,
      slash: config.slash,
      params: {
        ...config.match,
        ...location.query,
      },
      routes: ax.x.appkit.router.controller.routes( config, location ),
      open: ax.x.appkit.router.controller.open( config ),
    }

}

ax.extension.appkit.form.dependencies = function( options ) {

  return function () {

    let dependents = this.$$( 'appkit-form-field-dependent' ).$$

    dependents.forEach( function( el1 ) {
      let nested
      dependents.forEach( function( el2 ) {
        if ( !el1.isSameNode( el2 ) && el2.contains( el1 ) ) {
          nested = true
        }
      } )
      if ( !nested ) {
        el1.$process()
      }
    } )

    let nests = this.$$( 'appkit-form-one, appkit-form-field-many' ).$$

    nests.forEach( function( el1 ) {
      let nested
      nests.forEach( function( el2 ) {
        if ( !el1.isSameNode( el2 ) && el2.contains( el1 ) ) {
          nested = true
        }
      } )
      if ( !nested ) {
        if ( ax.is.not.function( el1.$dependencies ) ) debugger
        el1.$dependencies()
      }
    } )

  }

}

ax.extension.appkit.form.lib = {}

ax.extension.appkit.form.proxy = {}

ax.extension.appkit.form.factory = function( options ) {

  return new Proxy(
    ax.extension.appkit.form.proxy.function( options ),
    ax.extension.appkit.form.proxy.shim
  )

}

ax.extension.appkit.report.item = function( component, options={} ) {

  if ( ax.is.function( component ) ) {

    let scope = options.scope || []
    if ( ax.is.string( scope ) ) { scope = [ scope ] }

    component = component(
      ax.x.appkit.report.factory( {
        scope: scope,
        data: options.data,
        layout: options.layout
      } )
    )

  }

  return ax.a['appkit-report-item']( component, options.itemTag )

}

// ax.extension.appkit.report.item.index = function( component, options={} ) {
//
//   let before = options.before
//   let after = options.after
//
//   if ( ax.is.function( before ) ) {
//     before = before( {
//       data
//     } )
//   }
//
//   // if ( ax.is.function( component ) ) {
//   //
//   //   let scope = options.scope || []
//   //   if ( ax.is.string( scope ) ) { scope = [ scope ] }
//   //
//   //   component = component(
//   //     ax.extension.appkit.report.factory( {
//   //       scope: scope,
//   //       data: options.data,
//   //       layout: options.layout
//   //     } )
//   //   )
//   //
//   // }
//   //
//   // return ax.a['appkit-report-index']( component, options.indexTag )
//
// }

ax.extension.appkit.report.proxy = {}

ax.extension.appkit.report.factory = function( options ) {

  return new Proxy(
    ax.extension.appkit.report.proxy.object( options ),
    ax.extension.appkit.report.proxy.shim
  )

}

// ax.extension.appkit.document.stylesheet = {}

// ax.extension.appkit.document.insert = function(
//   selector,
//   type,
//   content,
//   options={}
// ) {
//   let method = options.method || 'appendChild'
//   var tag = document.createElement( type )
//   Object.assign( tag, options.tag )
//   var target = document.querySelector( selector )
//   tag.innerHTML = content
//   target[ method ]( tag )
// }

// ax.extension.appkit.document.script = function( script, options={} ) {
//
//   ax.document.insert(
//     'head',
//     'script',
//     script,
//     { tag: options.scriptTag }
//   )
//
// }

// ax.extensions.tabulate = function ( data, properties, options={} ) {
//
//   var a = this.a;
//   var x = this;
//
//   properties = properties || Object.keys( data );
//
//   var head = properties.map( function( property ) { return x.lib.labelize( property ) } )
//
//   var rows = data.map( function( row ) {
//     result = [];
//     properties.forEach( function( property ) {
//       result.push( row[property] );
//     } );
//     return result;
//   } );
//
//   return x.table( rows, head, options.tableOptions );
// };
//
// //
// // .table = function ( data, options={} ) {
// //   var a = this.a;
// //   var x = this;
// //   var components = [];
// //
// //   var trAttributes = function( i ) {
// //     if ( ax.is.function( options.trAttributes ) ) {
// //       return options.trAttributes( i );
// //     } else {
// //       return options.trAttributes;
// //     }
// //   };
// //
// //   var thAttributes = function( j ) {
// //     if ( ax.is.function( options.thAttributes ) ) {
// //       return options.thAttributes( j );
// //     } else {
// //       return options.thAttributes;
// //     }
// //   };
// //
// //   var tdAttributes = function( j ) {
// //     if ( ax.is.function( options.tdAttributes ) ) {
// //       return options.tdAttributes( j );
// //     } else {
// //       return options.tdAttributes;
// //     }
// //   };
// //
// //   var properties = options.properties || Object.keys( data[0] );
// //   var labels = options.labels || {};
// //   var head = properties.map( function( property ) { return labels[property] || x.lib.titleize( property ); } );
// //
// //   components.push( a.tr( head.map( function( th, i ) { return a.th( th, thAttributes( i ) ); } ) ) );
// //   data.map( function( row, i ) {
// //     components.push(
// //       a.tr(
// //         row instanceof Array ?
// //           row.map( function(td, j) { return a.td(td, tdAttributes( j ) ); } ) :
// //           properties.map( function(property) { return a.td(row[property]); } ),
// //         trAttributes( row, i ) )
// //     )
// //   } );
// //
// //   return a.table( components, options.tableAttributes );
// //
// // } );

ax.extension.appkit.transition.
crossfade = function( options={} ) {

  let a = ax.a
  let x = ax.x

  let time = ( options.time || 500 ) / 2
  let component = options.initial

  return a['appkit-transition']( {
    $init: function () {
      this.style.display = 'none'
      if( component ) {
        this.$component = component
        this.$in()
      }
    },
    $in: function () {

      this.$nodes = this.$component
      x.appkit.lib.animate.fade.in( this, {
        time: time,
      } )
    },
    $to: function( component ) {

      component = ax.factory( component )

      // if ( options.regulate && component.isEqualNode( this.$component ) ) {
        // Do nothing. Keep existing content.
      // } else {
        this.$component = component
        if ( this.style.display === 'none' ) {
          this.$in()
        } else {
          x.appkit.lib.animate.fade.out( this, {
            time: time,
            complete: this.$in.bind( this )
          } )
        }
      // }
    },
  } )

}

ax.extension.appkit.transition.
fadein = function( options={} ) {

  let a = ax.a
  let x = ax.x

  let time = ( options.time || 500 ) / 2
  let component = options.initial

  return a['appkit-transition']( {
    $init: function () {
      this.style.display = 'none'
      if( component ) {
        this.$component = component
        this.$in()
      }
    },
    $in: function () {

      this.$nodes = this.$component
      x.appkit.lib.animate.fade.in( this, {
        time: time,
      } )
    },
    $to: function( component ) {

      component = ax.factory( component )
      this.$component = component
      this.$in()

    },
  } )

}

ax.extension.appkit.widget.clock = function( options={} ) {

  const a = ax.a

  let timeTag = Object.assign(
    {
      $init: function() {
        this.$tock()
        setInterval( this.$tock.bind( this ), 1000)
      },
      $tock: function() {
        this.$text = ( new Date ).toLocaleString()
      }
    },
    options.timeTag
  )

  return a['appkit-widget-time']( timeTag )

}

ax.extension.appkit.list.element = function( object ) {

  let a = ax.a
  let x = ax.x

  if ( ax.is.array( object ) ) {
    return a.ol( object.map(
      ( element ) => a.li( x.appkit.list.element( element ) )
    ) )
  } else if ( ax.is.null( object ) ) {
    return a['appkit-list-type-null']( null )
  } else if ( ax.is.function( object ) ) {
    return a['appkit-list-type-null']( `𝑓 ${ object }` )
  } else if ( ax.is.object( object ) ) {
    return a.ul(
      Object.keys( object ).map( ( key ) => {
        return a.li( [
          a.label( key ), ' ',
          x.appkit.list.element( object[ key ] )
        ] )
      } )
    )
  } else if ( ax.is.number( object ) ) {
    return a['appkit-list-type-number']( object )
  } else {
    return a['appkit-list-type-text']( object )
  }

}

ax.extension.appkit.fieldForm.factory = function(f) {

  let x = ax.x
// debugger
  return new Proxy(
    x.appkit.fieldForm.factory.object(f),
    x.appkit.fieldForm.factory.shim(f)
  )

}

ax.extension.appkit.lib.url = {}

ax.extension.appkit.lib.field = {}

ax.extension.appkit.lib.text = {}

ax.extension.appkit.lib.uuid = {}

// ax.extension.appkit.lib.inspect = function( variable, options={} ) {
//
//   let result
//   let functions = options.functions === false ? false : true
//
//   if ( ax.is.object( variable ) ) {
//     result = ax.x.appkit.lib.object.inspect( variable, { functions: functions } )
//   } else {
//     result = variable
//   }
//
//   return result
//
// }

ax.extension.appkit.lib.object = {}

// ax.extension.appkit.lib.style = function( styles, scope ) {
//
//   if ( ax.is.array( styles ) ) {
//     return styles.map( ( styles ) => this.style( styles, scope ) ).join( "\n" )
//   } else if ( ax.is.object( styles ) ) {
//     return this.style.rules( styles, scope ? [ scope ] : [] )
//   }
//
//   // return  styles
//
// }

// ax.extension.appkit.lib.event = function( element, type, options={} ) {
// // debugger
//   return element.dispatchEvent(
//     new CustomEvent( type, {
//       detail: options.detail || {},
//       bubbles: options.bubbles == false ? false : true,
//       cancelable: options.cancelable == false ? false : true
//     } )
//   )
//
// }

ax.extension.appkit.lib.coerce = {}

// ax.extension.appkit.lib.oldForm = {}

ax.extension.appkit.lib.query = {}

ax.extension.appkit.lib.element = {}

ax.extension.appkit.lib.animate = {}

ax.extension.appkit.lib.array = {}

ax.extension.appkit.lib.tabable = function( element ) {
  if ( element.tabIndex >= 0 && ax.x.appkit.lib.element.visible( element ) ) {
    // if ( !element.$ ) debugger
    // use .closest to find element, rather than .$('^'), because element may
    // not have been created by ax and won't have the Traversal Tool.
    let dependent = element.closest('appkit-form-field appkit-form-field-dependent')
    if ( dependent ) {
      return dependent.$match()
    } else {
      return true
    }
  } else {
    return false
  }
}

ax.extension.appkit.lib.date = {}

ax.css(
  {
    // '*': {
    //   boxSizing: border-box,
    // },

    'appkit-form-field': {
      display: 'block',
      // marginTop: 0,
      // marginBottom: '1rem'
    },

    // 'appkit-form-field-help-wrapper': {
    //   display: 'block',
    // },

    'appkit-form-field-helpbutton': {
      cursor: 'pointer',
    },

  }
)

ax.extension.appkit.router.controller.
open = (config) => function( locator, query={}, anchor=null ) {

  let match
  let target
  let load
  let path

  if ( locator[0] === '!' ) {
    load = true
    locator = locator.slice(1)
  }

  if ( match = locator.match( /^(>+)(.*)/) ) {

    let forward = match[1].length
    path = match[2]
    target = config.router[ forward ]

  } else if ( match = locator.match( /^(<+)(.*)/) ) {

    let backward = match[1].length
    path = match[2]
    target = config.router[ config.router.length - backward - 1 ]

  } else if ( locator[0] === '/' ) {

    path = locator
    target = config.router[0]

  } else if ( locator[0] === '%' ) {

    path = this.scope + locator.slice(1)
    target = config.router[0]

  } else {

    path = this.path + locator
    target = config.router[0]

  }

  if ( load ) {
    target.$load( path, query, anchor )
  } else {
    target.$open( path, query, anchor )
  }

}

ax.extension.appkit.router.controller.
routes = ( config, startLocation ) => function( routes, options={} ) {

  config = { ...config }

  config.default = options.default || config.default
  config.routes = routes

  let init
  let component
  let transition = ax.x.appkit.router.controller.routes.transition( options.transition )
  let view = ax.x.appkit.router.controller.routes.view( config )

  if ( transition ) {
    init = function() {
      let locatedView = view( this, startLocation )
      this.$scope = locatedView.scope
      this.$('appkit-transition').$to( locatedView.component )
    }
    component = [ transition ]
  } else {
    // init = function() {
    //   if ( startLocation.anchor ) {
    //     let anchored = document.getElementById( startLocation.anchor )
    //     if ( !anchored ) ax.log.warn( `Appkit router view cannot find #${ startLocation.anchor }` )
    //     if ( anchored ) anchored.scrollIntoView()
    //   }
    // }
    component = function() {
      let locatedView = view( this, startLocation )
      this.$scope = locatedView.scope
      // debugger
      return locatedView.component
    }

  }

  let routesTag = {
    id: options.id,
    $config: config,
    $init: init,
    $nodes: component,

    $open: function( path, query, anchor ) {
      ax.log( toLocation )

      if ( path[0] === '/' ) {
        config.router[0].$open( path, query, anchor )
      } else {
        path = this.$scope + ( path ? `/${ path }` : '' )
        config.router[0].$open( path, query, anchor )
      }

    },

    // $pick: function( location ) {
    //
    //   const locatedView = view( this, location )
    //
    //   const component = routes( locatedView.component )
    //
    //   if ( ax.is.undefined(  locatedView.component ) ) {
    //     ax.log.warn( 'Not found:', location )
    //   }
    //
    //   return locatedView
    //
    // },


    $load: function( path, query, anchor ) {

      let toLocation = {
        path: path,
        query: query,
        anchor: anchor
      }

      let locatedView = view( this, toLocation )
      // debugger

      if ( options.lazy && this.$scope === locatedView.scope ) {

        let location = toLocation
        let routes = this.$$('appkit-router-routes').$$

        routes.forEach( (r) => {
          // Call $locate on top-level routes only.
          // Other routes will be replaced when top-level re-renders.
          if ( r.$config.router.length === this.$config.router.length + 1 ) {
            r.$load(
              location.path, location.query, location.anchor
            )
          }
        } )

      } else {

        this.$scope = locatedView.scope

        if ( transition ) {
          this.$('appkit-transition').$to( locatedView.component )
        } else {
          this.$nodes = locatedView.component
        }

        // if ( anchor ) {
        //   let anchored = document.getElementById( anchor )
        //   if ( !anchored ) ax.log.warn( `Appkit router view cannot find #${ startLocation.anchor }` )
        //   if ( anchored ) anchored.scrollIntoView()
        // }

      }

    },

    ...options.routesTag

  }

  return (a,x) => a['appkit-router-routes'](
    routesTag
  )

}

ax.extension.appkit.form.proxy.shim = {
  get: ( target, property, receiver ) => {
// debugger
//     if ( property.match(
//       /^scope|data|params|layout|proxy|index$/
//     ) ) {
//       return target[property]
//     } else

    if ( ax.is.function( target[ property ] ) ) {
      return target[ property ]( receiver )
    } else if ( target.hasOwnProperty(property) ) {
      return target[ property ]
    } else {
      debugger
      ax.log.error( `The appkit form factory does not have property '${ property }'.` )
    }

  }
}

ax.extension.appkit.form.proxy.
function = function( options ) {
  return {
    scope: options.scope || [],
    data: options.data || {},
    params: options.params || {},
    layout: options.layout || {},
    proxy: options.proxy,
    ...ax.x.appkit.form.factory,
  }
}

ax.extension.appkit.form.factory.
control = (f) => function( options={} ) {

  let a = ax.a

  let as = options.as
  let control

  if ( as ) {
    as = as.split(':')
    control = as[0] || options.control || 'input'
    options.type = as[1] || options.type
  } else {
    control = options.control || 'input'
  }

  // let controlTagOptions = {
  //
  //
  //   // DEV
  //   if ( !this.$('appkit-form-control > *').$enable ) debugger
  //
  //
  //
  // }

  options.label = options.control

  return a['appkit-form-control'](
    f[ control ]( {
      // ...options,

      key: options.key,

      name: options.name,
      value: options.value,
      type: options.type,
      autocomplete: options.autocomplete,
      disabled: options.disabled,
      readonly: options.readonly,
      style: options.style,
      title: options.title,
      placeholder: options.placeholder, // consumed by input, select, textarea

      required: options.required,

      multiple: options.multiple, // consumed by select

      pattern: options.pattern, // consumed by input
      maxlength: options.maxlength, // consumed by input
      minlength: options.minlength, // consumed by input
      max: options.max, // consumed by input
      min: options.min, // consumed by input
      invalid: options.invalid, // consumed by input
      confirm: options.confirm, // consumed by input
      datatype: options.datatype,
      collection: options.collection, // consumed by select, radios and checkboxes

      checked: options.checked, // consumed by check
      unchecked: options.unchecked, // consumed by check
      label: options.epithet, // :epithet is synonym control label, consumed by check

      form: options.form, // consumed by one and many
      item: options.item, // consumed by many
      layout: options.layout, // consumed by one and many

      ...options[ control ]

    } ),
    options.controlTag
  )

}

ax.extension.appkit.form.factory.lib = {}

ax.extension.appkit.form.factory.
element = function(f) {

  return new Proxy(
    ax.extension.appkit.form.factory.element.proxy.object,
    ax.extension.appkit.form.factory.element.proxy.shim
  )

}

ax.extension.appkit.report.proxy.
object = function( options ) {
  return {
    scope: options.scope || [],
    data: options.data || {},
    params: options.params || {},
    layout: options.layout,
    ...ax.extension.appkit.report.factory,
  }
}

ax.extension.appkit.report.proxy.shim = {
  get: ( target, property, receiver ) => {

    if ( fixregex && property.match(/^scope|data|params|layout|index|toJSON|toString$/) ){
      return target[property]
    } else if ( ax.is.function( target[ property ] ) ) {
      return target[ property ]( receiver )
    } else {
      ax.log.error( `The appkit report factory does not have property '${ property }'` )
    }

  }
}

// ax.extension.appkit.document.stylesheet.proxy = {}

// ax.extension.appkit.form.factory.field.
// scopedName = ( f, options ) => {
//
//   if ( !options.key ) return ''
//
//   let keys = f.scope.concat( options.key )
//
//   let primary = keys.shift()
//
//   if ( keys.length ) {
//     return primary + '[' + keys.join('][') + ']'
//   } else {
//     return primary
//   }
//
// }

ax.extension.appkit.fieldForm.factory.object = function(f) {

  return {

    // field: function( options ) { return app.form.field( this, options ) },
    //
    // button: function( options ) { return app.form.button( this, options ) },
    // submit: function( options ) { return app.form.submit( this, options ) },
    //
    // row: function( options ) { return app.form.row( this, options ) },
    //
    // color: function( options ) { return this.input( { ...options, type: 'color' } ) },
    // date: function( options ) { return this.input( { ...options, type: 'date' } ) },
    // email: function( options ) { return this.input( { ...options, type: 'email' } ) },
    // number: function( options ) { return this.input( { ...options, type: 'number' } ) },
    // tel: function( options ) { return this.input( { ...options, type: 'tel' } ) },
    // string: function( options ) { return this.input( { ...options, type: 'text' } ) },
    // time: function( options ) { return this.input( { ...options, type: 'time' } ) },
    // url: function( options ) { return this.input( { ...options, type: 'url' } ) },
    //
    // text: function( options ) { return this.textarea( options ) },

    // tel: function( options ) { return this.input( { type: 'tel' }, options ) },
    // tel: function( options ) { return this.input( { type: 'tel' }, options ) },

  }

}

ax.extension.appkit.fieldForm.factory.shim = function(f) {

  return {
    get: ( target, property, receiver ) => {

      if ( target.hasOwnProperty( property ) ){
        return target[property]
      } else {
        return f[property]
      }

    }
  }

}

// ax.extension.appkit.lib.field.name = {}

// ax.extension.appkit.lib.field.collection = {}

// ax.extension.appkit.lib.style.atRule = function( styleSpec, selectors ) {
//
//   let atRule = selectors.shift()
//   let rules = this.rules( styleSpec, selectors )
//   rules = '\t' + rules.split('\n').join('\n\t')
//   return `${ atRule } {\n${ rules }\n}\n\n`
//
// }

// ax.extension.appkit.lib.style.
// rules = function( styleSpec, selectors ) {
//
//   let style = this
//
//   if ( selectors[0] && selectors[0][0] == '@' ) {
//     return style.atRule( styleSpec, selectors )
//   } else if ( ax.is.array( styleSpec ) ) {
//     // debugger
//     return "?"
//   } else if ( ax.is.object( styleSpec ) ) {
//     let result = style.rules.rule( styleSpec, selectors )
//     Object.keys( styleSpec).forEach( function( selector ) {
//       var selected = styleSpec[selector]
//       selector.split(',').forEach( function( selectorPart ) {
//         selectorPart = selectorPart.trim()
//         // debugger
//         result += style.rules( selected, selectors.concat( selectorPart ) )
//       } )
//     } )
//     // ax.log( result )
//     return result
//   } else {
//     return ''
//   }
//
//
// }

ax.extension.appkit.lib.element.visible = function ( element ) {

  return !!(
    element.offsetWidth ||
    element.offsetHeight ||
    element.getClientRects().length
  )
}

// ax.extension.appkit.lib.oldForm.data = {}

ax.extension.appkit.lib.query.from ={}

ax.extension.appkit.lib.query.to = {}

ax.extension.appkit.lib.date.now = {}

// AxFunction.extension.Appkit.Library.prototype.titleize = function(string) {
//   return this.capitalize( string.replace(/_/g,  ) );
// };
//
// // AxFunction.extension.Library.prototype.titleize = function(string) {
// //   return this.capitalize( string.replace(/_/g,  ) );
// // };
//
ax.extension.appkit.lib.text.humanize = function(string='') {
  return string.toString().replace(/_/g,  );
};

// AxFunction.extension.Appkit.Library.prototype.titleize = function(string) {
//   return this.capitalize( string.replace(/_/g,  ) );
// };
//
// // AxFunction.extension.Library.prototype.titleize = function(string) {
// //   return this.capitalize( string.replace(/_/g,  ) );
// // };
//
ax.extension.appkit.lib.text.labelize = function(string='') {
  return this.capitalize( string.toString().replace(/_/g, ' ' ) );
};

ax.extension.appkit.lib.text.capitalize = function(string='') {
  return string.toString().charAt(0).toUpperCase() + string.slice(1);
};

ax.extension.appkit.lib.uuid.generate = function() {

  return '00000000-0000-4000-0000-000000000000'.replace(
    /0/g,
    c => ( c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )

}

ax.extension.appkit.lib.animate.fade = {}

// ax.extension.appkit.lib.object.inspect =
// function( object, options={} ) {
//
//   let indent = options.indent === false ? null : ( options.indent || 2 )
//   let functions = options.functions
//   let seen = new WeakSet()
//
//   return JSON.stringify( object, function (key, value) {
//
//     if ( ax.is.object( value ) && ax.is.not.null( value ) ) {
//
//       if ( seen.has(value) ) {
//         try {
//          return JSON.parse( JSON.stringify( value, indent ) )
//         }
//         catch (err) {
//           return `⚠ ${ err.message }`
//         }
//       } else {
//         seen.add(value)
//         return value
//       }
//
//     } else if ( functions && ax.is.function( value ) ) {
//
//       return '𝑓 ' + value
//
//     } else {
//
//       return value
//
//     }
//
//   }, indent )
//
// }

ax.extension.appkit.lib.object.dig = function( object, keys) {

  let result = object

  for (let key in keys) {
    if ( result  == null ) {
      return null
    } else {
      result = result [ keys[key] ] || null
    }
  }

  return result

}

ax.extension.appkit.lib.object.assign = function(object, keys, value) {

  let key = keys[0]
  let depth = keys.length

  if (depth === 1) {
    // Assign the value if no nesting.

    if (key === '') {
      object.push(value)
    } else {
      object[key] = value
    }

  } else {
    // Assign nested value

    // Look ahead to next key
    let next = keys[1]

    if (key === '') {
      // Build a collection
      let index = object.length - 1
      let current = object[index]
      if ( ax.is.object(current) &&
        ( depth > 2 || ax.is.undefined( current[next] ) )
      ) {
        // Add to current item
        key = index
      } else {
        // Start building next item
        key = index + 1
      }
    }

    // Create empty object if needed
    if ( ax.is.undefined( object[key] ) ) {
      if (next === '') {
        object[key] = []
      } else {
        object[key] = {}
      }
    }

    // Do next layer of nesting
    this.assign(object[key], keys.slice(1), value)
  }

}

ax.extension.appkit.lib.object.
sort = function( object, options={} ) {

  let result = {}

  Object.keys(object).sort().forEach(function(key) {
    result[key] = object[key]
  })

  return result

}

ax.extension.appkit.lib.coerce.number = function( value ) {
  return Number( value )
}

ax.extension.appkit.lib.coerce.boolean = function( value ) {
  value = value || false
  let string = value.toString().toLowerCase()
  return value &&
    string !== 'false' &&
    string !== 'off' &&
    string !== '0'
}

ax.extension.appkit.lib.coerce.string = function( value ) {
  return ax.is.undefined( value ) ? '' : String( value )
}

ax.extension.appkit.lib.tabable.previous = function( element ) {

  let elements = Array.from( document.querySelectorAll( '*' ) )

  let index = elements.indexOf( element )
  let count = elements.length
  let target
  let tabable

  let i = index
  do {
    i--
    if ( i === 0 ) i = count - 1
    if ( i === index ) return element
    target = elements[ i ]
    tabable = this( target )
  } while ( !tabable );

  return target

}

ax.extension.appkit.lib.tabable.next = function( element ) {

  let elements = Array.from( document.querySelectorAll( '*' ) )

  // start search at last child element
  element = Array.from( element.querySelectorAll( '*' ) ).slice(-1)[0] || element

  let index = elements.indexOf( element )
  let count = elements.length
  let target
  let tabable

  let i = index
  do {
    i++
    if ( i === count ) i = 0
    if ( i === index ) return element
    target = elements[ i ]
    tabable = this( target )
  } while ( !tabable );

  return target

}

// ax.extension.appkit.lib.array.compact = function( array ) {
//   return array.filter( (el) => el )
// }

ax.extension.appkit.router.controller.routes.
view = ( config ) => ( routesElement, location ) => {

  let scope = config.scope || ''
  let scopedpath = location.path.slice( scope.length )
  let component = config.default
  let match = config.match || []
  let splat = config.splat || []
  let slash
  let index

  let routesKeys = Object.keys( config.routes )

  for ( let i in routesKeys ) {

    let routesKey = routesKeys[i]

    let matched = ax.x.appkit.router.controller.routes.matcher(
      routesKey,
      scopedpath,
    )

    if ( matched ) {
      // ax.log.info( `Matched:`, routesKey, scopedpath )

      component = config.routes[routesKey]
      splat = [
        ...splat,
        ...matched.splat,
      ]
      match = {
        ...match,
        ...matched.params,
      }
      slash = matched.slash
      scope = scope + matched.scope
      index = i

      break

    // } else {
      // ax.log.info( `Not matched:`, routesKey, scopedpath )
    }

  }

  scope = scope.replace( /\/$/, '' )

  if ( ax.is.function( component ) ) {
    let controller = ax.x.appkit.router.controller( {
      router: [ ...config.router, routesElement ],
      scope: scope,
      match: match,
      splat: splat,
      slash: slash,
      default: config.default,
      transition: config.transition,
    } )( location )
    component = ax.a['appkit-router-view'](
      component( controller ),
      {
        // $on: {
        //   'axfAppkitRouterViewRenderComplete': function() {
        //     // let location.anchor
        //     if ( location.anchor ) {
        //       // setTimeout( () => {
        //
        //         let anchored = document.getElementById( location.anchor )
        //         //
        //         if ( !anchored ) debugger
        //         if ( anchored ) anchored.scrollIntoView()
        //
        //         // debugger
        //         // anchored.scrollIntoView()
        //
        //       // }, 200 )
        //     }
        //   }
        // },



        $init: function() {
          // debugger
          // ax.log( '1' )
          // setTimeout( () => {
            // ax.log( '2' )
            if ( location.anchor ) {
              let anchored = document.getElementById( location.anchor )
              if ( !anchored ) ax.log.warn( `Appkit router view cannot find #${ location.anchor }` )
              if ( anchored ) anchored.scrollIntoView()
            }

          // }, 100 )

        }
      }
    )

  }

  if ( ax.is.undefined(  component ) ) {
    ax.log.warn( 'Not found:', location )
  }

  return {
    component: component,
    scope: scope
  }

}

ax.extension.appkit.router.controller.routes.
transition = (
  transition
) => {

  if( ax.is.string( transition ) ) {
    return ax.x.appkit.transition[ transition ]()
  } else if( ax.is.array( transition ) ) {
    let name = transition[0]
    // let initialContent = transition[1]
    let options = transition[1]
    return ax.x.appkit.transition[ name ](
      // initialContent,
      options )
  } else {
    return transition
  }

}

ax.extension.appkit.router.controller.routes.
regexp = ( route ) => {

  let routeRegexp = route.
    replace( /\*$/, '&&catchall&&' ).
    replace( /\*/g, '&&wildcard&&' ).
    replace( /\/\?/, '&&slash&&' )

  let captures = routeRegexp.match(/(:\w+|&&wildcard&&|&&catchall&&|&&slash&&)/g) || []
  let paramKeys = []

  captures.forEach( function( capture ) {
    let paramKey
    let pattern
    if ( capture === '&&wildcard&&' ) {
      paramKey = '*'
      pattern = "([^\\/|^\\.]*)"
    } else if ( capture === '&&catchall&&' ) {
      paramKey = '**'
      pattern = "(.*)"
    } else if ( capture === '&&slash&&' ) {
      paramKey = '?'
      pattern = "(\\/?)"
    } else {
      paramKey = capture.slice(1)
      pattern = "([^\\/|^\\.]*)"
    }
    paramKeys.push( paramKey )
    routeRegexp = routeRegexp.replace( capture, pattern )
  } )

  routeRegexp = '^' + routeRegexp + '$'

  return {
    string: routeRegexp,
    keys: paramKeys,
  }

}

ax.extension.appkit.router.controller.routes.
matcher = (
  routesKey,
  scopedpath
) => {

  let params = {}
  let splat = []
  let slash

  let regexp = ax.x.appkit.router.controller.routes.regexp( routesKey )
  let routeRegex = new RegExp( regexp.string )
  let match = scopedpath.match( routeRegex )

  if ( match ) {

    let paramKeys = regexp.keys
    let remove = 0

    paramKeys.forEach( function( paramKey, i ) {

      let matched = match[ i + 1 ]

      if ( paramKey === '*' ) {
        splat.push( matched )
      } else if ( paramKey == '**' ) {
        remove = remove + matched.length
        splat.push( matched )
      } else if ( paramKey == '?' ) {
        remove = remove + matched.length
        slash = matched
      } else {
        params[paramKey] = matched
      }

    } )

    let keep = scopedpath.length - remove
    let scope = scopedpath.substring( 0, keep )

    return {
      params: params,
      splat: splat,
      slash: slash,
      scope: scope
    }

  } else {

    return null

  }

}

ax.extension.appkit.form.factory.element.
textarea = ( options ) => {

  let a = ax.a
  let x = ax.x

  return a['appkit-form-element-wrapper'](
    a.textarea( options.value, {

      // ...options,

      name: options.name,

      class: options.class,
      data: options.data,
      disabled: options.disabled,
      id: options.id,
      placeholder: options.placeholder,
      readonly: options.readonly,
      required: options.required,
      style: options.style,
      title: options.title,

    }, options.textareaTag ),
    options.elementWrapperTag
  )

}

ax.extension.appkit.form.factory.element.
check = ( options ) => {

  let a = ax.a
  let x = ax.x

  return a['appkit-form-element-wrapper'](
    [
      a.input( {
        // ...options,
        type: options.type || 'checkbox',
        name: options.name,
        value: options.value,

        checked: options.checked,

        class: options.class,
        data: options.data,
        disabled: options.disabled,
        id: options.id,
        readonly: options.readonly,
        required: options.required,
        style: options.style,
        title: options.title,

        // // Prevent user from changing a readonly check
        // $on: {
        //   'click: do nothing when readonly': (e) => { if ( options.readonly ) e.preventDefault() },
        //   ...( options.inputTag || {} ).$on
        // },

        ...options.inputTag
      } ),
      a.label( options.label, {
        $on: {
          'click: click input': (e,el) => {
            el.previousSibling.click()
          },
          ...( options.labelTag || {} ).$on
        },
        ...options.labelTag
      } )
    ],
    options.elementWrapperTag
  )

}

ax.extension.appkit.form.factory.element.
input = ( options ) => {

  let a = ax.a
  let x = ax.x

  // let name = options.name
  // if ( options.multiple ) {
  //   name = x.appkit.lib.collection.name( name )
  // }

  return a['appkit-form-element-wrapper'](

    a.input( {
      // ...options,
      name: options.name,
      value: options.value,

      type: options.type,
      id: options.id,
      class: options.class,
      style: options.style,
      title: options.title,
      placeholder: options.placeholder,
      data: options.data,
      disabled: options.disabled,
      readonly: options.readonly,
      multiple: options.multiple,
      autocomplete: options.autocomplete,
      required: options.required,
      pattern: options.pattern,
      maxlength: options.maxlength,
      minlength: options.minlength,

      ...options.inputTag

    } ),

    options.elementWrapperTag

  )

}

ax.extension.appkit.form.factory.element.proxy = {}

ax.extension.appkit.form.factory.element.
select = ( options ) => {

  let a = ax.a
  let x = ax.x

  let optionTags = x.appkit.form.factory.element.select.options( options )

  return a['appkit-form-element-wrapper'](
    a.select(
      optionTags,
      {

        // ...options,

        name: options.name,

        class: options.class,
        data: options.data,
        disabled: options.disabled,
        readonly: options.readonly,
        id: options.id,
        multiple: options.multiple,
        required: options.required,
        style: options.style,
        title: options.title,

        ...options.selectTag
      },
    ),
    options.elementWrapperTag
  )

}

ax.extension.appkit.form.factory.element.
button = ( options ) => {

  let a = ax.a
  let x = ax.x

  return a['appkit-form-element-wrapper'](
    a.button( options.label, {

      // ...options,

      name: options.name,

      class: options.class,
      data: options.data,
      disabled: options.disabled,
      id: options.id,
      readonly: options.readonly,
      required: options.required,
      style: options.style,
      title: options.title,

    }, options.buttonTag ),
    options.elementWrapperTag
  )

}

ax.extension.appkit.form.factory.
one = (f) => function( options={} ) {

  let a = ax.a
  let x = ax.x

  // options.name = options.name || x.appkit.form.factory.control.scopedName( f, options )

  let component

  if ( ax.is.function( options.form ) ) {

    let scope = options.scope || options.key ? f.scope.concat( options.key ) : f.scope
    let data = options.value || {}
    let params = options.params || f.params
    let layout = options.layout || f.layout
    let proxy = options.proxy || f.proxy

    let factory = x.appkit.form.factory( {
      scope: scope,
      data: data,
      params: params,
      layout: layout,
      proxy: proxy,
    } )

    if ( proxy ) {
      factory = proxy( factory )
    }

    component = options.form( factory )

  } else {

    component = options.form

  }

  component = a['appkit-form-control-one'](
    a['appkit-form-section'](
      component,
      options.controlOneTag
  ) )

  // component = a['appkit-form-control-nest']( component, options.controlNestTag )

  let controlOneWrapperTagOptions = {

    $focus: function() {
      let first = this.$controls()[0]
      if ( first ) first.$focus()
    },

    $value: function() {
      result = {}
      this.$controls().forEach(
        ( child ) => {
          if ( child.$key) result[child.$key] = child.$value()
        }
      )
      return result
    },

    $disable: function() {
      this.$controls().forEach(
        ( child ) => child.$disable()
      )
    },

    $enable: function() {
      this.$controls().forEach(
        ( child ) => child.$enable()
      )
    },

    $controls: function() {
      return x.appkit.form.factory.control.childControls( this )
    },

    ...options.controlOneWrapperTag
  }

  return a['appkit-form-control-one-wrapper'](
    component,
    controlOneWrapperTagOptions
  )

}

ax.extension.appkit.form.factory.
checkboxes = (f) => ( options={} ) => {

  let a = ax.a
  let x = ax.x

  options.name = x.appkit.form.factory.lib.collectionName( options.name )

  let collection = x.appkit.form.factory.lib.collection( options.collection )

  let component = collection.map( function( member, i ) {

    let value = options.value
    let checked

    if ( ax.is.array( value ) ) {
      checked = options.value.some( function( value ) { return value == member.value } )
    } else {
      checked = value == member.value
    }

    return f.element.check( {
      value: member.value,
      name: options.name,
      label: member.label,
      // ...( checked ? { checked: 'checked' } : {} ),
      checked: checked || undefined,
      ...member.checkTag,
    } )

  } )

  component = a['appkit-form-control-checkboxes'](
    component,
    options.controlCheckboxesTag
  )

  let controlCheckboxesWrapperTagOptions = {

    // $key: options.key,

    $value: function() {
      return this.$$('input:checked').value.$$
    },

    $focus: function () {
      this.$('input').focus()
    },

    $disable: function() {
      this.$$('input').setAttribute( 'disabled', 'disabled' )
    },

    $enable: function() {
      if ( !options.disabled ) {
        this.$$('input').removeAttribute('disabled')
      }
    },

    $on: {
      'click: do nothing when readonly': (e) => { if ( options.readonly ) e.preventDefault() },
      ...( options.controlCheckboxesWrapperTag || {} ).$on
    },

    ...options.controlCheckboxesWrapperTag
  }

  return a['appkit-form-control-checkboxes-wrapper'](
    component,
    controlCheckboxesWrapperTagOptions
  )

}

ax.extension.appkit.form.factory.
textarea = (f) => ( options={} ) => {

  let a = ax.a
  let x = ax.x

  let component = f.element.textarea( options )

  component = a['appkit-form-control-textarea'](
    component,
    options.controlTextareaTag
  )

  let controlTextareaWrapperTagOptions = {

    // $key: options.key,

    $value: function() {
      return this.$('textarea').value
    },

    $focus: function () {
      this.$('textarea').focus()
    },

    $disable: function() {
      this.$('textarea').setAttribute( 'disabled', 'disabled' )
    },

    $enable: function() {
      if ( !options.disabled ) {
        this.$('textarea').removeAttribute('disabled')
      }
    },

    ...options.controlTextareaWrapperTag
  }

  return a['appkit-form-control-textarea-wrapper'](
    component,
    controlTextareaWrapperTagOptions
  )

}

ax.extension.appkit.form.factory.
field = (f) => ( options ) => {

  let a = ax.a
  let x = ax.x
  let field = x.appkit.form.factory.field
  let lib = x.appkit.lib.field

  options.name = options.name || x.appkit.form.factory.lib.scopedName( f, options )

  if ( options.key ) {
    options.value = f.data[ options.key ] || options.value
  }

  let component = a["appkit-form-control-field"]( [
    // a['appkit-form-field-control-header']( [
      field.header( options ),
    // ], options.headerTag ),
    // a['appkit-form-field-control-body']( [
      field.help( options.help ),
      // field.control(f)( options ),
      f.control( options ),
      field.hint( options.hint ),
    // ], options.bodyTag ),
  ], options.controlFieldTag )



  if ( options.dependent !== false ) {
    component = field.dependent(f)(
      component,
      options.dependent
    )
  }

  return a["appkit-form-field"]( component, {
    name: options.name,
    $key: options.key,
    $match: function() {
      let dependent = this.$('appkit-form-field-dependent')
      if ( dependent ) {
        return dependent.$match()
      } else {
        return true
      }
    },
    // $data: function() {
    //   // ax.log( this.$('appkit-form-control > *') )
    //   return this.$('appkit-form-control > *').$data()
    // },
    $value: function() {
      return this.$('appkit-form-control > *').$value()
    },
    $focus: function() {
      this.$('appkit-form-control > *').$focus()
    },
    ...options.fieldWrapperTag
  } )

}

// ax.extension.appkit.oldForm.factory.
// fields = (f) => function( ...components ) {
//
//   let options
//
//   if ( ax.is.array( components[0] ) ) {
//     // Components have been passed as an array.
//     options = components[1] || {}
//     components = components[0]
//   } else {
//     options = {}
//   }
//
//   return (a,x) => a['appkit-fields']( {
//     $nodes: components.map( function( component ) {
//       return f.field( component )
//     } ),
//     ...options.fieldsTag
//   } )
//
// }

ax.extension.appkit.form.factory.
many = (f) => ( options={} ) => {

  let a = ax.a
  let x = ax.x

  // options.name = options.name || x.appkit.form.factory.control.scopedCollectionName( f, options )

  let component = f.element.many( options )

  component = a['appkit-form-control-many'](
    a['appkit-form-section']( component ),
    options.controlManyTag
  )

  let controlWrapperTagOptions = {

    $value: function() {
      return this.$('many').value
    },

    $focus: function () {
      this.$('many').focus()
    },

    $disable: function() {
      this.$('many').setAttribute( 'disabled', 'disabled' )
    },

    $enable: function() {
      if ( !options.disabled ) {
        this.$('many').removeAttribute('disabled')
      }
    },

    ...options.controlWrapperTag

  }

  return a['appkit-form-control-many-wrapper'](
    component,
    controlWrapperTagOptions
  )

}

ax.extension.appkit.form.factory.
input = (f) => ( options={} ) => {

  let a = ax.a
  let x = ax.x

  if ( options.type == 'file' && options.multiple ) {
    options.name = x.appkit.form.factory.lib.collectionName( options.name )
  }

  let component = f.element.input( options )

  component = a['appkit-form-control-input'](
    component,
    options.controlInputTag
  )

  if ( options.confirm ) {

    let confirmationInputOptions = {
      ...options,
      id: null,
      name: null,
      title: options.title ? `${ options.title } confirmation` : null,
      ...options.confirmationInput
    }

    component = a['appkit-form-input-confirmation-wrapper'](
      [
        component,
        a['appkit-form-input-confirmation']( f.element.input( confirmationInputOptions ), options.confirmationTag )
      ],
      {
        $on: {
          'input: check confirmation match': function(e,el) {
            let inputs = el.$$('input')
            if ( inputs[0].value == inputs[1].value ) {
              inputs[1].setCustomValidity( '' )
            } else {
              inputs[1].setCustomValidity( 'Confirmation must match.' )
            }
          },
          ...( options.confirmationWrapperTag | {} ).$on
        },
        ...options.confirmationWrapperTag
      },
    )

  }

  let controlInputWrapperTagOptions = {

    $init: function () { this.$valid() },

    // $key: options.key,

    $value: function() {
      return this.$('input').value
    },

    $focus: function () {
      this.$('input').focus()
    },

    $disable: function() {
      let input
      let inputs = this.$$('input').$$
      for ( input of inputs ) {
        input.setAttribute( 'disabled', 'disabled' )
      }
    },

    $enable: function() {
      if ( !options.disabled ) {
        let input
        let inputs = this.$$('input').$$
        for ( input of inputs ) {
          input.removeAttribute('disabled')
        }
      }
    },

    $validity: function() {
      return this.$('input').validity
    },

    $valid: function() {
      this.$('input').setCustomValidity('')
      if(this.$validity.valid) {
        return true
      } else {
        if ( options.invalid ) {
          if ( ax.is.function( options.invalid ) ) {
            let invalidMessage = options.invalid( this.$value, this.$validity )
            if ( invalidMessage ) {
              this.$('input').setCustomValidity( invalidMessage )
            }
          } else {
            this.$('input').setCustomValidity( options.invalid )
          }
        }
        return false
      }
    },

    $on: {
      'input: check field depenencies': (e,el) => {
        let form = el.$('^form')
        if ( form ) { form.$dependencies() }
      },
      ...( options.controlInputWrapperTag || {} ).$on
    },

    ...options.controlInputWrapperTag
  }

  return a['appkit-form-control-input-wrapper'](
    component,
    controlInputWrapperTagOptions
  )

}

ax.extension.appkit.form.factory.
checkbox = (f) => ( options={} ) => {

  let a = ax.a
  let x = ax.x

  let checked = ax.is.not.undefined( options.checked ) ? options.checked : 'on'

  let component = f.element.check( {
    ...options,
    value: checked,
    checked: options.value == checked,
    // disabled: options.disabled || options.readonly,
    ...options.checkTag,
  } )

  if ( ax.is.not.undefined( options.unchecked ) ) {
    component = [
      f.input( {
        name: options.name,
        value: options.unchecked,
        type: 'hidden',
      } ),
      component,
    ]
  }

  component = a['appkit-form-control-checkbox'](
    component,
    options.controlCheckboxTag
  )

  let controlCheckboxWrapperTagOptions = {

    // $key: options.key,

    $value: function() {
      if ( this.$('input[type=checkbox]').checked ) {
        return options.checked || 'on'
      } else {
        return options.unchecked
      }
    },

    $focus: function () {
      this.$('input[type=checkbox]').focus()
    },

    $disable: function() {
      this.$('input[type=checkbox]').setAttribute( 'disabled', 'disabled' )
      this.$('input[type=hidden]') && this.$('input[type=hidden]').setAttribute( 'disabled', 'disabled' )
    },

    $enable: function() {
      if ( !options.disabled ) {
        this.$('input[type=checkbox]').removeAttribute('disabled')
        this.$('input[type=hidden]') && this.$('input[type=hidden]').removeAttribute('disabled')
      }
    },

    $on: {
      'click: do nothing when readonly': (e) => { if ( options.readonly ) e.preventDefault() },
      ...( options.controlCheckboxWrapperTag || {} ).$on
    },

    ...options.controlCheckboxWrapperTag
  }

  return a['appkit-form-control-checkbox-wrapper'](
    component,
    controlCheckboxWrapperTagOptions
  )

}

ax.extension.appkit.form.factory.
submit = (f) => function( options={} ) {

  let a = ax.a
  let x = ax.x

  options.label = options.label || 'Submit'
  options.disableWith = ax.is.not.undefined( options.disableWith ) ? options.disableWith : 'Submitting...'

  let component = a['appkit-form-submit'](
    f.element.button( {
      ...options,
      $nodes: options.label,
      type: 'submit',
      ...options.buttonTag
    } ),
    options.submitTag,
  )

  let controlTagOptions = {
    $focus: function() {
      this.$('button').focus()
    },
    $disable: function() {
      this.$('button').setAttribute( 'disabled', 'disabled' )
      this.$('button').$nodes = options.disableWith
    },
    $enable: function() {
      this.$('button').removeAttribute('disabled')
      this.$('button').$nodes = options.label
    },
    ...options.controlTag
  }

  return a['appkit-form-control'](
    component,
    controlTagOptions
  )

};

ax.extension.appkit.form.factory.
radios = (f) => ( options={} ) => {

  let a = ax.a
  let x = ax.x

  let collection = x.appkit.form.factory.lib.collection( options.collection )

  let component = collection.map( function( member, i ) {

    let checked = options.value == member.value

    return f.element.check( {
      type: 'radio',
      name: options.name,
      value: member.value,
      label: member.label,
      checked: checked || undefined,
      // ...( checked ? { checked: 'checked' } : {} ),
      ...member.checkTag,
    } )
  } )

  component = a['appkit-form-control-radios'](
    component,
    options.controlRadiosTag
  )

  let controlRadiosWrapperTagOptions = {

    // $key: options.key,

    $value: function() {
      return this.$$('input:checked').value.$$
    },

    $focus: function () {
      this.$('input').focus()
    },

    $disable: function() {
      this.$$('input').setAttribute( 'disabled', 'disabled' )
    },

    $enable: function() {
      if ( !options.disabled ) {
        this.$$('input').removeAttribute('disabled')
      }
    },

    $on: {
      'click: do nothing when readonly': (e) => { if ( options.readonly ) e.preventDefault() },
      ...( options.controlRadiosWrapperTag || {} ).$on
    },

    ...options.controlRadiosWrapperTag
  }

  return a['appkit-form-control-radios-wrapper'](
    component,
    controlRadiosWrapperTagOptions
  )

}

ax.extension.appkit.form.factory.
select = (f) => ( options={} ) => {

  let a = ax.a
  let x = ax.x

  if ( options.multiple ) {
    options.name = x.appkit.form.factory.lib.collectionName( options.name )
  }

  options.value = options.value || ( options.multiple ? [] : '' )

  options.collection = x.appkit.form.factory.lib.collection( options.collection )

  if ( ax.is.not.undefined( options.placeholder ) ) {
    options.collection.unshift( { value: '', label: options.placeholder } )
  } else if ( !options.required ) {
    options.collection.unshift( { value: '', label: '' } )
  }

  let component = f.element.select( {
    disabled: options.disabled || options.readonly,
    ...options
  } )

  // Insert hidden field(s) when readonly (and select tag is disabled )
  if ( options.readonly ) {
    let hidden
    if ( options.multiple ) {
      hidden = a.span( options.value.map( ( optionValue ) => a.input( {
        type: 'hidden',
        name: options.name,
        value: optionValue
      } ) ) )
    } else {
      hidden = a.input( {
        type: 'hidden',
        name: options.name,
        value: options.value
      } )
    }
    component = [ component, hidden ]
  }

  component = a['appkit-form-control-select'](
    component,
    options.controlSelectTag
  )

  let controlSelectWrapperTagOptions = {

    // $key: options.key,

    $value: function() {
      if ( options.multiple ) {
        return this.$$('option:checked').value.$$
      } else {
        return this.$('select').value
      }
    },

    $focus: function () {
      this.$('select').focus()
    },

    $disable: function() {
      this.$('select').setAttribute( 'disabled', 'disabled' )
      // this.$('input').setAttribute( 'disabled', 'disabled' )
    },

    $enable: function() {
      if ( !options.disabled ) {
        this.$('select').removeAttribute('disabled')
        // this.$('input').removeAttribute('disabled')
      }
    },

    $on: {
      'click: do nothing when readonly': (e) => { if ( options.readonly ) e.preventDefault() },
      ...( options.controlSelectWrapperTag || {} ).$on
    },

    ...options.controlSelectWrapperTag
  }

  return a['appkit-form-control-select-wrapper'](
    component,
    controlSelectWrapperTagOptions
  )

}

ax.extension.appkit.form.factory.lib.
collectionName = function( name ) {

  if ( name && name.slice(-2) != '[]' ) {
    name = name + '[]'
  }

  return name

}

ax.extension.appkit.form.factory.lib.
childControls = function( el ) {

  let controls = el.$$('appkit-form-control').$$
  let result = []

  controls.forEach( function( el1, i ) {
    let nested
    controls.forEach( function( el2 ) {
      if ( !el1.isSameNode( el2 ) && el2.contains( el1 ) ) {
        nested = true
      }
    } )
    if ( !nested ) {
      result.push(el1)
    }
  } )

  return result

}

// ax.extension.appkit.form.factory.field.
// value = ( f, options ) => {
//
//   if ( options.key ) {
//     return f.data[ options.key ]
//   } else {
//     return options.value
//   }
//
// }

ax.extension.appkit.form.factory.lib.
collection = function( collection ) {

  if ( !collection ) {
    return []
  } else if ( ax.is.array( collection ) ) {
    return collection.map( function(item) {
      if ( ax.is.array( item ) ) {
        return { value: item[0], label: item[1] }
      } else if ( ax.is.object( item ) ) {
        return item
      } else {
        return { value: item, label: item }
      }
    } )
  } else {
    return Object.keys( collection ).map(function( key ) {
      let label = collection[key]
      return { value: key , label: label }
    } )
  }

}

ax.extension.appkit.form.factory.lib.
scopedName = function( f, options ) {

  if ( !options.key ) return ''

  let keys = f.scope.concat( options.key )

  let primary = keys.shift()

  if ( keys.length ) {
    return primary + '[' + keys.join('][') + ']'
  } else {
    return primary
  }

}

ax.extension.appkit.report.factory.
one = (r) => function( key, component, options={} ) {

  let a = ax.a
  let x = ax.x

  if ( ax.is.function( component ) ) {

    component = component(
      x.appkit.report.factory( {
        data: options.data || r.data[ key ],
        scope: options.scope || r.scope.concat( [ key ] ),
        layout: options.layout || r.layout
      } )
    )

  }

  return a['appkit-report-field-one']( component )

}

ax.extension.appkit.report.factory.
many = (r) => function( name, component, options={} ) {

  let a = ax.a
  let x = ax.x

  if ( ax.is.function( component ) ) {

    let data = options.data || r.data[ options.key || name ] || []
    let scope = options.scope || r.scope.concat( [ name, '' ] )
    let layout = options.layout || r.layout

    let factory = x.appkit.report.factory( {
      data: data,
      scope: scope,
      layout: layout
    } )
    factory.items = (rr) => x.appkit.report.factory.many.items( rr )
    factory.add = (rr) => x.appkit.report.factory.many.add( rr )

    component = component( factory )

  }

  return a['appkit-report-field-many']( component )

}

ax.extension.appkit.report.factory.
field = (r) => function( keyOrOptions={}, options={} ) {

  if ( ax.is.string( keyOrOptions ) ) {
    options.key = keyOrOptions
  } else {
    options = keyOrOptions
  }

  let a = ax.a
  let x = ax.x
  let field = x.appkit.report.factory.field
  let lib = x.appkit.lib.field

  let name = lib.name.build( r.scope, options.key )

  let component = a['appkit-report-field-group']( [
    field.caption( options ),
    field.help( options.help ),
    field.control(r)( options ),
    field.hint( options.hint ),
  ], options.groupTag )

  if ( options.dependent !== false ) {
    component = field.dependent(r)( component, options.dependent )
  }

  return a['appkit-report-field']( component, {
    name: name,
    $match: function() {
      let dependent = this.$('appkit-report-field-dependent')
      if ( dependent ) {
        return dependent.$match()
      } else {
        return true
      }
    },
    $value: function() {
      return this.$('appkit-report-field-control > *').$value()
    },
    ...options.fieldTag
  } )

}

ax.extension.appkit.report.factory.
fields = (r) => function( ...components ) {

  return ax.a['appkit-report-fields']( components.map( function( component ) {
    return r.field( component )
  } ) )

}

ax.extension.appkit.report.factory.
checkboxes = (r) => function(
  options={}
) {

  let a = ax.a
  let x = ax.x

  let lib = ax.x.appkit.lib.field

  let name = lib.collection.name( options.name )
  let value = lib.collection.value( options.value )
  let collection = lib.collection.from( options.collection )

  let checkboxes = collection.map( function( checkbox, i ) {

    let checkOptions = options.check
    if ( ax.is.function( checkOptions ) ) {
      checkOptions = checkOptions( checkbox, i )
    }

    return r.check( {
      name: name,
      value: lib.collection.includes( value, checkbox.value ) ? checkbox.value : '',
      checked: checkbox.value,
      label: checkbox.label,
      ...checkOptions
    } )

  } )

  // Add <input> for dependent value matching
  checkboxes.unshift(
    a.span( {
      name: name,
      $value: function () {
        return options.value
      },
    } )
  )

  let checkboxesTag = {
    $value: function() {
      return options.value
    },

    ...options.checkboxesTag
  }

  return a['appkit-report-checkboxes']( checkboxes, checkboxesTag )

}

/**
 * Creates ax object for an <input type=(checkbox|radio)>.
 *
 * @example
 * r.check( {
 *   checked: true,
 *   value: true,
 *   label: Accept?
 * } ),
 * @param {object} options
 * @param {string} options.checked The value for the value= attribute. This is the value that the field will submit when it has been checked.
 * @param {string} options.class The value for the class= attribute. (Convenience mapping)
 * @param {string} options.data The value for the data= attribute. (Convenience mapping)
 * @param {string} options.disabled The default value for the disabled= attribute. Note that the disabled attribute can be changed by the $disable method. The $enable method, when it's called, refers to options.disabled and if not set the disabled attribute is removed from the element.
 * @param {string} options.id The value for the id= attribute. (Convenience mapping)
 * @param {object} options.inputTag Options for <input> ax object.
 * @param {ax_component} options.label Content component for <label> ax object.
 * @param {object} options.labelTag Options for <label> ax object.
 * @param {string} options.multiple The value for the multiple= attribute. If set, the name attribute will have [] appended, if not already present in the value from options.name .
 * @param {string} options.name The value for the name= attribute.
 * @param {string} options.readonly The value for the readonly= attribute. (Convenience mapping)
 * @param {string} options.required The value for the required= attribute. (Convenience mapping)
 * @param {boolean} options.reverse Put label before check, if true and options.label.
 * @param {string} options.style The value for the style= attribute. (Convenience mapping)
 * @param {string} options.title The value for the title= attribute. (Convenience mapping)
 * @param {string} options.type The value for the type= attribute. (Convenience mapping)
 * @param {(object|array)} options.value If value matches options.checked, the <input> will be set to 'checked'.
 *
 * @return {object} ax object
 */
ax.extension.appkit.report.factory.
check = (r) => function( options={} ) {

  let checkedValue = options.checked || on

  let input = ax.a.input( {

    name: options.name,
    value: checkedValue,

    checked: options.value == checkedValue,
    class: options.class,
    data: options.data,
    disabled: true,
    id: options.id,
    readonly: options.readonly,
    required: options.required,
    style: options.style,
    title: options.title,
    type: options.type || checkbox,

    $value: function() {
      return this.checked ? this.value : ''
    },

    ...options.inputTag

  } )

  if ( options.label ) {
    let labelTag = {
      $value: function() {
        return this.$('input').$value()
      },
      ...options.labelTag
    }
    let nodes = [ input, options.label ]
    if ( options.reverse ) nodes.reverse()
    return ax.a.label( nodes, labelTag )
  } else {
    return input
  }

}

/**
 * Creates ax object for an <input type=(checkbox|radio)>.
 *
 * @example
 * r.check( {
 *   checked: true,
 *   value: true,
 *   label: Accept?
 * } ),
 * @param {object} options
 * @param {string} options.class The value for the class= attribute. (Convenience mapping)
 * @param {string} options.data The value for the data= attribute. (Convenience mapping)
 * @param {string} options.id The value for the id= attribute. (Convenience mapping)
 * @param {object} options.tag Options for <input> ax object.
 * @param {ax_component} options.label Content component for <label> ax object.
 * @param {object} options.labelTag Options for <label> ax object.
 * @param {string} options.multiple The value for the multiple= attribute. If set, the name attribute will have [] appended, if not already present in the value from options.name .
 * @param {string} options.name The value for the name= attribute.
 * @param {string} options.readonly The value for the readonly= attribute. (Convenience mapping)
 * @param {string} options.required The value for the required= attribute. (Convenience mapping)
 * @param {boolean} options.reverse Put label before check, if true and options.label.
 * @param {string} options.style The value for the style= attribute. (Convenience mapping)
 * @param {string} options.title The value for the title= attribute. (Convenience mapping)
 * @param {string} options.type The value for the type= attribute. (Convenience mapping)
 * @param {(object|array)} options.value If value matches options.checked, the <input> will be set to 'checked'.
 *
 * @return {object} ax object
 */
ax.extension.appkit.report.factory.
link = (r) => function( options={} ) {

  let a = ax.a

  return a['appkit-report-link'](
    a.a(
      options.label || options.value,
      {
        href: options.value,
        ...options.aTag
      }
    ),
    {

      name: options.name,

      class: options.class,
      data: options.data,
      id: options.id,
      style: options.style,
      title: options.title,

      $value: function() {
        return options.value
      },

      ...options.tag

    }

  )

}

/**
 * Creates ax object for an <appkit-report-text>.
 *
 * @example
 * r.text( {
 *   name: score,
 *   value: 12,
 * } ),
 * @param {object} options
 * @param {(object|string)} options.class The value for the class= attribute. (Convenience mapping)
 * @param {(object|string)} options.data The value for the data= attribute. (Convenience mapping)
 * @param {string} options.id The value for the id= attribute. (Convenience mapping)
 * @param {object} options.textTag Options for <appkit-report-text> ax object.
 * @param {string} options.name The value for the name= attribute.
 * @param {string} options.placeholder The value for the placeholder= attribute. (Convenience mapping)
 * @param {string} options.style The value for the style= attribute. (Convenience mapping)
 * @param {string} options.title The value for the title= attribute. (Convenience mapping)
 * @param {(object|array)} options.value The content for <appkit-report-text>.
 *
 * @return {object} ax object
 */
ax.extension.appkit.report.factory.
text = (r) => function( options={} ) {

  let a = ax.a
  let x = ax.x

  let value = options.value

  if ( value && options.type ) {
    let prototype = ax.is.function( options.type ) ? options.type : x.appkit.lib.text.capitalize( options.type )
    value = new window[ prototype ]( value )
    if ( options.stringify ) {
      if ( ax.is.string( options.stringify ) ) {
        value = value[ options.stringify ]()
      } else {
        value = value[ options.stringify.method || 'toString' ]( ...( options.stringify.arguments || [] ) )
      }
    } else {
      value = value.toString()
    }
  }

  if ( ax.is.object( value ) ) {
    value = JSON.stringify( value )
  } else {
    value = value.toString()
  }

  return a['appkit-report-text']( {

    name: options.name,

    class: options.class,
    data: options.data,
    id: options.id,
    // placeholder: options.placeholder,
    style: options.style,
    title: options.title,

    $value: function() {
      return value
    },

    ...( value ?
      { $text: value } :
      { $nodes: a['appkit-report-placeholder'](
        options.placeholder
      ) }
    ),

    ...options.textTag

  } )

}

/**
 * Creates ax object for an <appkit-report-object>.
 *
 * @example
 * r.object( {
 *   name: score,
 *   value: 12,
 * } ),
 * @param {object} options
 * @param {(object|string)} options.class The value for the class= attribute. (Convenience mapping)
 * @param {(object|string)} options.data The value for the data= attribute. (Convenience mapping)
 * @param {string} options.id The value for the id= attribute. (Convenience mapping)
 * @param {object} options.objectTag Options for <appkit-report-object> ax object.
 * @param {string} options.name The value for the name= attribute.
 * @param {string} options.placeholder The value for the placeholder= attribute. (Convenience mapping)
 * @param {string} options.style The value for the style= attribute. (Convenience mapping)
 * @param {string} options.title The value for the title= attribute. (Convenience mapping)
 * @param {(object|array)} options.value The content for <appkit-report-object>.
 *
 * @return {object} ax object
 */
ax.extension.appkit.report.factory.
object = (r) => function( options={} ) {

  let a = ax.a
  let x = ax.x

  return a['appkit-report-object']( {

    name: options.name,

    class: options.class,
    data: options.data,
    id: options.id,
    placeholder: options.placeholder,
    style: options.style,
    title: options.title,

    $value: function() {
      return value
    },

    $nodes: x.appkit.put( options.value ),

    ...options.objectTag

  } )

}

/**
 * Creates ax object for an <appkit-report-text>.
 *
 * @example
 * r.text( {
 *   name: score,
 *   value: 12,
 * } ),
 * @param {object} options
 * @param {(object|string)} options.class The value for the class= attribute. (Convenience mapping)
 * @param {(object|string)} options.data The value for the data= attribute. (Convenience mapping)
 * @param {string} options.id The value for the id= attribute. (Convenience mapping)
 * @param {object} options.textTag Options for <appkit-report-text> ax object.
 * @param {string} options.name The value for the name= attribute.
 * @param {string} options.placeholder The value for the placeholder= attribute. (Convenience mapping)
 * @param {string} options.style The value for the style= attribute. (Convenience mapping)
 * @param {string} options.title The value for the title= attribute. (Convenience mapping)
 * @param {(object|array)} options.value The content for <appkit-report-text>.
 *
 * @return {object} ax object
 */
ax.extension.appkit.report.factory.
list = (r) => function( options={} ) {

  let a = ax.a
  let x = ax.x
  let lib = ax.x.appkit.lib.field

  let name = lib.collection.name( options.name )
  let value = lib.collection.value( options.value )
  let type = options.type || 'ul'

  let item

  if ( options.item ) {
    item = options.item
  } else {
    item = ( item ) => a.li( item, liTagOptions( item ) )
  }

  let liTagOptions = options.liTag

  if ( !ax.is.function( liTagOptions ) ) {
    liTagOptions = () => liTagOptions
  }

  return a['appkit-report-list']( a[ type ]( {

    name: name,

    class: options.class,
    data: options.data,
    id: options.id,
    placeholder: options.placeholder,
    style: options.style,
    title: options.title,

    $value: function() {
      return value
    },

    $nodes: value.map( item ),

    ...options.textTag

  } ) )

}

ax.extension.appkit.report.factory.
radios = (r) => function(
  options={}
) {

  let a = ax.a
  let x = ax.x
  let lib = ax.x.appkit.lib.field

  let collection = lib.collection.from( options.collection )

  let radios = collection.map( function( radio, i ) {

    let checkOptions = options.check
    if ( ax.is.function( checkOptions ) ) {
      checkOptions = checkOptions( checkbox, i )
    }

    return r.check( {
      name: options.name,
      type: 'radio',
      value: options.value === radio.value ? radio.value : '',
      checked: radio.value,
      label: radio.label,
      inputTag: {
        $value: function () {
          return this.$('^appkit-report-radios').$value()
        }
      },
      ...checkOptions
    } )

  } )

  let radiosTag = {
    $value: function() {
      let checked = this.$('input:checked')
      return checked ? checked.value : ''
    },
    ...options.radiosTag
  }

  return a['appkit-report-radios']( radios, radiosTag )

}

/**
 * Creates ax object for an <appkit-report-image>.
 *
 * @example
 * r.image( {
 *   name: score,
 *   value: 12,
 * } ),
 * @param {object} options
 * @param {(object|string)} options.class The value for the class= attribute on <img>. (Convenience mapping)
 * @param {(object|string)} options.data The value for the data= attribute on <img>. (Convenience mapping)
 * @param {string} options.id The value for the id= attribute on <img>. (Convenience mapping)
 * @param {object} options.imageTag Options for <appkit-report-image> ax object.
 * @param {string} options.name The value for the name= attribute.
 * @param {string} options.placeholder The value for the placeholder= attribute on <img>. (Convenience mapping)
 * @param {string} options.style The value for the style= attribute on <img>. (Convenience mapping)
 * @param {object} options.tag Options for a['appkit-report-image']().
 * @param {string} options.title The value for the title= attribute on <img>. (Convenience mapping)
 * @param {(object|array)} options.value The content for <appkit-report-image>.
 *
 * @return {object} ax object
 */
ax.extension.appkit.report.factory.
media = (r) => function( options={} ) {

  let a = ax.a

  let value = options.value
  let type = options.type || img

  let content

  if ( value ) {
    if ( type === video || type === audio) {
      content = { $nodes: a.source( {
        src: value
      } ) }
    } else {
      content = { src: value }
    }
  } else {
    content = { $nodes: a['appkit-report-placeholder'](
      options.placeholder
    ) }
  }

  return a['appkit-report-media']( a[ type ]( {

    name: options.name,

    class: options.class,
    data: options.data,
    id: options.id,
    placeholder: options.placeholder,
    style: options.style,
    title: options.title,

    $value: function() {
      return value
    },

    ...( options.controls === false ? {} : { controls: controls } ),

    ...content,

    ...options[ type + 'Tag' ]

  }, options.tag ) )

}

// ax.extension.appkit.document.stylesheet.proxy.shim = {
//   get: ( target, property ) => function ( rules, options={} ) {
//
//     return target( rules, { scope: property, ...options } )
//
//   }
// }

// ax.extension.appkit.document.stylesheet.proxy.
// function = function( styles, options={} ) {
//
//   let a = ax.a
//   let x = ax.x
//
//   x.appkit.document.insert(
//     'head',
//     'style',
//     x.appkit.lib.style( styles, options.scope ),
//     { tag: options.styleTag }
//   )
//
//   return null
//
// }

// ax.extension.appkit.lib.field.collection.value = function( value ) {
//
//   if ( ax.is.array( value ) ) {
//     return value
//   } else if ( value ) {
//     return [ value ]
//   } else {
//     return []
//   }
//
// }

// ax.extension.appkit.lib.field.collection.name = function(name) {
//
//   if ( name && name.slice(-2) != [] ) {
//     name = name + [];
//   };
//
//   return name;
//
// };

// ax.extension.appkit.lib.field.collection.from = function( collection ) {
//
//   if ( !collection ) {
//     return []
//   } else if ( ax.is.array( collection ) ) {
//     return collection.map( function(item) {
//       if ( ax.is.array( item ) ) {
//         return { value: item[0], epithet: item[1] }
//       } else if ( ax.is.object( item ) ) {
//         return item
//       } else if ( item == '—————' ) {
//         return { value: '__DIVIDER__', epithet: '—————', disabled: true }
//       } else {
//         return { value: item, epithet: item }
//       }
//     } )
//   } else {
//     return Object.keys( collection ).map(function( key ) {
//       let epithet = collection[key]
//       let disabled = collection[key] == '—————'
//       return { value: key , epithet: epithet, disabled: disabled }
//     } )
//   }
//
// }

// ax.extension.appkit.lib.field.collection.includes = function( array, value ) {
//
//   // if ( value === undefined || value === null ) value = ''
//   return array.some( function( el ) { return el.toString() === value.toString(); } );
//
// };

// ax.extension.appkit.lib.field.name.
// build = function( scope, key ) {
//   let keys = this.dismantle( scope )
//   keys.push( key )
//   debugger
//   return this.assemble( ...keys )
// }

// ax.extension.appkit.lib.field.name.
// dismantle = function(name) {
//
//   if ( name == '' ) return []
//
//   return name.split('[').map( function( string ) {
//     if ( string.slice(-1) === ']' ) {
//       return string.slice( 0, string.length - 1 )
//     }
//       return string
//   } )
//
// }

// ax.extension.appkit.lib.field.name.
// assemble = function( ...keys ) {
//
//   let primary = keys.shift()
//
//   if ( keys.length ) {
//     return primary + '[' + keys.join('][') + ']'
//   } else {
//     return primary
//   }
//
// }

// ax.extension.appkit.lib.style.rules.rule = function( object, selectors ) {
//
//   var result = ''
//   Object.keys( object ).forEach( function(property) {
//     if ( !ax.is.object( object[property] ) ) {
//       // Convert property from camelCase to kebab-case
//       var kebab =  ( property[0].match(/[A-Z]/) ? '-' : '' ) + property.
//         replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
//       result += ('\t' + kebab + ': ' + object[property] + ';\n')
//     }
//   } )
//
//   if ( result === '' ) {
//     return result
//   } else {
//     return selectors.join(' ').replace(/\s*&\s*/g, '') +
//           ' {\n' + result + '}\n'
//   }
//
// }

// ax.extension.appkit.lib.oldForm.data.object = function( form ) {
//
//   let lib = ax.x.appkit.lib
//   let result = {};
//
//   for( let el of form.elements ) {
//
//     if ( el.disabled ) continue
//
//     let name = el.name
//
//     if ( name ) {
//
//       let value
//
//       // Form elements created by Ax
//       // have a $data function that returns a typed value.
//       // Use this in preference to raw value.
//       if ( el.$data ) {
// // ax.log( el )
//         value = el.$data()
//
//       } else {
//
//         value = el.value
//
//         if ( el.type === checkbox || el.type === radio ) {
//           value = el.checked ? el.value : null
//         } else {
//           value = el.value
//         }
//
//       }
//
//       // Don't include empty fields
//       if ( value !== null ) {
//         let keys = lib.field.name.dismantle( name )
//         lib.object.assign( result, keys, value )
//       }
//
//     }
//   }
//
//
//  return result
//
// }

ax.extension.appkit.lib.query.from.
object = function( object, options={} ) {

  var queryString = []
  var property;

  for (property in object) {
    if (object.hasOwnProperty(property)) {
      var k = options.prefix ? options.prefix + '[' + property + ']' : property,
        v = object[property];
      queryString.push((v !== null && ax.is.object( v )) ?
        this.objectToQueryString(v, k) :
        encodeURIComponent(k) + '=' + encodeURIComponent(v));
    };
  };
  return queryString.join('&');

};

ax.extension.appkit.lib.query.to.
object = function( queryString ) {

  var result = {}

  if ( queryString ) {
    queryString.split('&').map( function( pair ) {
      pair = pair.split('=')
      result[ pair[0] ] = decodeURIComponent( pair[1] )
    } )
  }

  return result

}

ax.extension.appkit.lib.date.now.
value = function() {
  var date = new Date();
  return  date.getFullYear() + '-' +
          date.getMonth() + '-' +
          date.getDate()
}

ax.extension.appkit.lib.animate.fade.out = function(element, options={}) {

  if ( element.style.display != 'none' ) {
    this.toggle( element, options )
  }

};

ax.extension.appkit.lib.animate.fade.in = function(element, options={}){

  if ( element.style.display === 'none' ) {
    this.toggle( element, options )
  }

};

ax.extension.appkit.lib.animate.fade.toggle = function(element, options={}) {

  let shown

  if ( element.style.display === 'none' ) {
    shown = false
    element.style.opacity = 0
    element.style.display = null;
  } else {
    shown = true
    element.style.opacity = 1
  }

  let last = +new Date()
  let time = options.time || 250
  let step = function() {
    element.style.opacity = +element.style.opacity + ( shown ? -1 : 1 ) * (new Date() - last) / time
    last = +new Date()
    if ( shown ? +element.style.opacity > 0 : +element.style.opacity < 1 ) {
      (window.requestAnimationFrame && requestAnimationFrame(step)) || setTimeout(step, 16)
    } else {
      if ( shown ) element.style.display = 'none'
      if ( options.complete ) options.complete(element)
    }
  }

  step()

}

ax.extension.appkit.form.factory.element.select.
options = function( options ) {

  let a = ax.a
  let x = ax.x

  return options.collection.map( function ( member ) {

    let value = options.value
    let selected

    if ( ax.is.array( value ) ) {
      selected = value.some( function( value ) { return value == member.value } )
    } else {
      selected = value == member.value
    }

    return a.option( member.label, {
      value: member.value,
      selected: selected || undefined,
      // ...( selected ? { selected: 'selected' } : {} ),
      ...options.optionTag,
      ...member.optionTag
    } )

  } )

}

ax.extension.appkit.form.factory.element.proxy.
object = {}

ax.extension.appkit.form.factory.element.proxy.
shim = {

  get: ( target, property, receiver ) => {

    let x = ax.x

    return ( options ) => x.appkit.form.factory.element[ property ]( options )

  }
}

// ax.extension.appkit.form.factory.field.
// control = (f) => function( options ) {
//
//   let a = ax.a
//   let x = ax.x
//
//   let control = options.control || 'input'
//   let value
//   let collection
//
//   if (
//     // ax.is.object( f.data ) &&
//     ax.is.not.undefined( f.data[ options.key ] )
//   ) {
//     value = f.data[ options.key ]
//   } else {
//     value = options.value
//   }
// // if ( options.key == 'colours' ) debugger
//
//   if ( options.collection_param ) {
//     // debugger
//     collection = f.params[ options.collection_param ]
//   } else {
//     collection = options.collection
//   }
// // debugger
//   return a['appkit-form-field-control'](
//     f[ control ]( {
//
//       key: options.key,
//
//       name: options.name,
//       value: value,
//       type: options.type,
//       autocomplete: options.autocomplete,
//       disabled: options.disabled,
//       readonly: options.readonly,
//       style: options.style,
//       title: options.title,
//       placeholder: options.placeholder, // consumed by input, select, textarea
//
//       required: options.required,
//
//       multiple: options.multiple, // consumed by select
//
//       pattern: options.pattern, // consumed by input
//       maxlength: options.maxlength, // consumed by input
//       minlength: options.minlength, // consumed by input
//       max: options.max, // consumed by input
//       min: options.min, // consumed by input
//       invalid: options.invalid, // consumed by input
//       confirm: options.confirm, // consumed by input
//       datatype: options.datatype,
//       collection: collection, // consumed by select, radios and checkboxes
//
//       checked: options.checked, // consumed by check
//       unchecked: options.unchecked, // consumed by check
//       epithet: options.epithet, // consumed by check
//
//       form: options.form, // consumed by one and many
//       item: options.item, // consumed by many
//       layout: options.layout, // consumed by one and many
//
//       ...options[ control ],
//
//     } ),
//
//     options.controlTag
//
//   )
//
// }

ax.extension.appkit.form.factory.field.
dependent = (f) => function( component, options ) {

  let a = ax.a
  let x = ax.x
  let dependent = x.appkit.form.factory.field.dependent


  ax.extension.appkit.form.factory.field.dependent.dependency.
  previous


  if ( ax.is.string( options ) ) {
    options = { key: options }
  } else if ( options == true ) {
    options = { traverse: x.appkit.form.factory.field.dependent.dependency.previous }
  } else if ( ax.is.object( options ) ) {

    if ( !( options.key || options.name || options.selector ) ) {
      options = {
        traverse: x.appkit.form.factory.field.dependent.dependency.previous,
        ...options
      }
    }

  } else {
    options = {}
  }

  let dependentTag = {
    style: "display: none;",
    $init: function () { this.$process() },
    $dependable: function() {
      return options.key || options.name || options.selector || options.traverse
    },
    $dependency: function() {
      return dependent.dependency(f).bind( this )( options )
    },
    $match: function() {
      return dependent.match.bind( this )( options )
    },
    $process: function () {
      return dependent.process.bind( this )( options )
    },
    ...options.dependentTag
  }

  return a["appkit-form-field-dependent"]( component, dependentTag )

};

ax.extension.appkit.form.factory.field.
header = function( options={} ) {

  if (
    options.header == false ||
    (
      ax.is.undefined( options.header ) &&
      options.type == "hidden"
    )
  ) {

    return null

  } else {

    let component

    if ( options.header == true ) {
      options.header = null
    }

    if ( options.header ) {
      component = header
    } else {
      let caption = this.header.label( options )
      if ( options.help ) {
        component = [ caption, this.header.helpbutton( options ) ]
      } else {
        component = caption
      }
    }

    return ax.a["appkit-form-field-header"](
      component,
      {
        ...options.headerTag
      }
    )

  }



}

ax.extension.appkit.form.factory.field.
help = function( component ) {

  let a = ax.a
  let x = ax.x

  return a["appkit-form-field-help-wrapper"](
    a["appkit-form-field-help"]( component, {
      $toggle: function () {
        x.appkit.lib.animate.fade.toggle( this )
      },
      style: { display: "none" }
    } )
  )

}

ax.extension.appkit.form.factory.field.
hint = function( component ) {

  return ax.a["appkit-form-field-hint"]( component )

};

ax.extension.appkit.report.factory.many.
items = ( f ) => function( component, options={} ) {

  let a = ax.a
  let x = ax.x

  if ( ax.is.function( component ) ) {

    let data = options.data || f.$data
    let scope = options.scope || f.$scope
    let layout = options.layout || f.$layout
    let template = component

    component = data.map( function( datum, i ) {
      let factory = x.appkit.report.factory( {
        data: datum,
        scope: scope,
        layout: layout
      } )
      factory.remove = (f) => x.appkit.report.factory.many.remove( f )

      return a['appkit-report-field-many-item']( component( factory, i ) )
    } )

    return a['appkit-report-field-many-items']( component, {
      $add: function( addOptions ) {

        let data = ( options.new && options.new() ) || {}

        let factory = x.appkit.report.factory( {
          data: data,
          scope: scope,
          layout: layout
        } )
        factory.remove = (f) => x.appkit.report.factory.many.remove( f )

        let item = a['appkit-report-field-many-item']( template( factory, null ) )

        this[ addOptions.insert || 'append' ]( item )

      },
    } )

  } else {

    return a['appkit-report-field-items']( component )

  }


}

ax.extension.appkit.report.factory.many.
add = ( r ) => function( component, options={} ) {

  let a = ax.a
  let x = ax.x

  return x.appkit.button( component || '➕ Add', function () {
    this.$('^appkit-report-field-many appkit-report-field-many-items').$add( options )
  } )

}

ax.extension.appkit.report.factory.many.
remove = ( f ) => function( component, options={} ) {

  let a = ax.a
  let x = ax.x

  return x.appkit.button( component || '➖ Remove', function () {
    let confirmed = confirm( 'Are you sure that you want to remove this item?' )
    if ( confirmed ) this.$('^appkit-report-field-many-item').remove()
  } )

}

ax.extension.appkit.report.factory.field.
control = (r) => function( options ) {

  let a = ax.a
  let x = ax.x

  let as = options.as || 'text'
  let value = (
    r.data &&
    (
      r.data[ options.key ] ||
      ( r.data[ options.key ] === 0 ? 0 : null )
    )
   ) || options.value

 if ( options.collectionParam ) {
   collection = f.params[ options.collectionParam ]
 } else {
   collection = options.collection
 }

  return a['appkit-report-field-control'](
    r[ as ]( {
      name: options.name,
      value: value,
      type: options.type,
      collection: options.collection,
      stringify: options.stringify,
      ...options[ as ],
    } ),
    options.controlTag
  )

}

ax.extension.appkit.report.factory.field.
dependent = (r) => function( component, options={} ) {

  let a = ax.a
  let x = ax.x
  let dependent = x.appkit.report.factory.field.dependent

  if ( ax.is.string( options ) ) {
    options = { key: options }
  }

  let dependentTag = {
    style: 'display: none;',
    $init: function () { this.$process() },
    $on: { 'change: check field dependencies': function() {
      this.$('^appkit-report').$$('appkit-report-field-dependent').$process()
    } },
    $dependable: function() {
      return options.key || options.name || options.selector || options.traverse
    },
    $dependency: function() {
      return dependent.dependency(r).bind( this )( options )
    },
    $match: function() {
      return dependent.match.bind( this )( options )
    },
    $process: function () {
      return dependent.process.bind( this )( options )
    },
    ...options.dependentTag
  }

  return a['appkit-report-field-dependent']( component, dependentTag )

};

ax.extension.appkit.report.factory.field.
help = function( component ) {

  let a = ax.a
  let x = ax.x

  return a['appkit-report-field-help-wrapper'](
    a['appkit-report-field-help']( component, {
      $toggle: function () {
        x.appkit.lib.animate.fade.toggle( this )
      },
      style: { display: 'none' }
    } )
  )

}

ax.extension.appkit.report.factory.field.
caption = function( options={} ) {

  let component

  if ( options.caption ) {
    component = caption
  } else {
    let label = this.caption.label( options )
    if ( options.help ) {
      component = [ label, this.caption.helpbutton( options ) ]
    } else {
      component = label
    }
  }

  return ax.a['appkit-report-field-caption'](
    component,
    {
      ...options.captionTag
    }
  )

}

ax.extension.appkit.report.factory.field.
hint = function( component ) {

  return ax.a['appkit-report-field-hint']( component )

};

// ax.extension.appkit.document.css = new Proxy(
//   ax.extension.appkit.document.stylesheet.proxy.function,
//   ax.extension.appkit.document.stylesheet.proxy.shim
// )

ax.extension.appkit.form.factory.field.header.
label = function( options ) {

  let a = ax.a
  let x = ax.x
  let lib = x.appkit.lib

  if ( options.label == false ) return null

  let label = options.label || lib.text.labelize( options.key )
  let component = a.label( label, options.labelTag )

  let labelWrapperTag = {
    $on: { 'click: focus on input': function() {
      let target = this.$(
        '^appkit-form-field-control',
        'appkit-form-field > *'
      )
      if ( target ) target.$focus()
    } },
    ...options.labelWrapperTag
  }

  return a['appkit-form-field-label-wrapper']( component, labelWrapperTag )

}

ax.extension.appkit.form.factory.field.header.
helpbutton = function( options ) {

  let a = ax.a
  let x = ax.x

  return a['appkit-form-field-helpbutton']( {
    $state: false,
    $nodes: function() {
      return a["appkit-form-field-helpbutton-text"](
        { $text: this.$state ? " ❓ ✖ " : " ❓ " }
      )
    },
    $on: { 'click: toggle help': function() {
      this.$state = !this.$state
      this.$('^appkit-form-field', 'appkit-form-field-help').$toggle()
    } },
    ...options.helpbuttonTag
  } )

}

ax.extension.appkit.form.factory.field.
dependent.process = function( options ) {

  let x = ax.x
  let lib = x.appkit.lib.animate
  if ( this.$match() ) {
    if ( options.onmatch ? options.onmatch( this ) : true ) {
      lib.fade.in( this )



      // let all = this.$$('appkit-form-nest').$$
      // let nested = this.$$('appkit-form-nest appkit-form-nest').$$
      //
      // all.forEach( function( el ) {
      //   if ( nested.indexOf( el ) < 0 ) {
      //     el.$dependencies()
      //   }
      // } )


      this.$('appkit-form-control > *').$enable()


    }
  } else {
    if ( options.onmismatch ? options.onmismatch( this ) : true ) {

this.style.display = 'none'

      // lib.fade.out( this )
// debugger
// DEV
if ( !this.$('appkit-form-control > *').$disable ) debugger


      this.$('appkit-form-control > *').$disable()
    }
  }

}

ax.extension.appkit.form.factory.field.
dependent.dependency = (f) => function( options ) {

  let lib = ax.x.appkit.lib.field

  let selected

  if ( options.traverse ) {

    selected = options.traverse.bind( this )( this )

  } else {

    let selector

    if ( options.selector ) {
      selector = options.selector
    } else {
      let name
      if ( options.key ) {
        name = lib.name.assemble( ...f.scope, options.key )
      } else if ( options.name ) {
        name = options.name
      } else {
        ax.log.error( `Field \`options.dependent\` needs a \`key\`, \`name\`, \`selector\` or \`traverse\`.` )
      }
      selector = `appkit-form-field[name='${ name }']`
    }

    let search = options.search || '^appkit-form'
// debugger
    selected = this.$( search ).$( selector )

  }

  if ( selected ) {
    if ( selected.$tag !== 'appkit-form-field' ) {
      selected = selected.$('^appkit-form-field')
    }
    if ( selected ) {
      return selected
    } else {
      ax.log.error( `Form field failed to find <appkit-form-field> for its dependency using options:`,  options )
    }
  } else {
    ax.log.error( `Form field failed to select its dependency using options:`, options )
  }

}

ax.extension.appkit.form.factory.field.
dependent.match = function( options ) {
// debugger
  if ( this.$dependable() ) {

    let dependency = this.$dependency()

    // if ( !dependency ) debugger

    if ( dependency.$match() ) {

      let dependencyValue = dependency.$value()

      // if ( ax.is.array( dependencyValue ) ) {
      //   dependencyValue = dependencyValue.join(' ')
      // }

// ax.log( dependencyValue )
// ax.log( options )

      if ( options.value ) {
        return dependencyValue == options.value
      } else if ( options.pattern ) {
        // if ( options.pattern == '^(select|radios|checkboxes|multiselect|selectinput)$' ) debugger
        return new RegExp( options.pattern || "" ).
          test( dependencyValue.toString() )
      } else {
        return !!dependencyValue
      }

    } else {
      return false
    }

  } else {
    return true
  }

}

ax.extension.appkit.report.factory.field.
dependent.process = function( options ) {

  let x = ax.x
  let lib = x.appkit.lib.animate
  if ( this.$match() ) {
    if ( options.onmatch ? options.onmatch( this ) : true ) {
      lib.fade.in( this )
    }
  } else {
    if ( options.onmismatch ? options.onmismatch( this ) : true ) {
      lib.fade.out( this )
    }
  }

}

ax.extension.appkit.report.factory.field.
dependent.dependency = (r) => function( options ) {

  let lib = ax.x.appkit.lib.field

  let selected

  if ( options.traverse ) {

    field = this.$('^')
    selected = options.traverse.bind( field )( field )

  } else {

    let selector

    if ( options.selector ) {
      selector = options.selector
    } else {
      let name
      if ( options.key ) {
        name = lib.name.assemble( ...r.scope, options.key )
      } else if ( options.name ) {
        name = options.name
      } else {
        ax.log.error( `Field \`options.dependent\` needs a \`key\`, \`name\`, \`selector\` or \`traverse\`.` )
      }
      selector = `appkit-report-field[name='${ name }']`
    }
    let search = options.search || 'appkit-report'
    selected = this.$(`^${ search }`).$( selector )

  }

  if ( selected ) {
    if ( selected.$tag !== 'appkit-report-field' ) {
      selected = selected.$('^appkit-report-field')
    }
    if ( selected ) {
      return selected
    } else {
      ax.log.error( `Report field failed to find <appkit-report-field> for its dependency using ${ JSON.stringify( options ) }.` )
    }
  } else {
    ax.log.error( `Report field failed to select its dependency using ${ JSON.stringify( options ) }.` )
  }

}

ax.extension.appkit.report.factory.field.
dependent.match = function( options ) {

  if ( this.$dependable() ) {

    let dependency = this.$dependency()

    if ( dependency.$match() ) {

      let value = dependency.$value()

      if ( ax.is.array( value ) ) {
        value = value.join(' ')
      }

      if ( options.value ) {
        return value == options.value
      } else if ( options.pattern ) {
        return new RegExp( options.pattern || '' ).
          test( value )
      } else {
        return !!value
      }

    } else {
      return false
    }

  } else {
    return true
  }

}

ax.extension.appkit.report.factory.field.caption.
label = function(
  options
) {

  let a = ax.a
  let x = ax.x
  let lib = x.appkit.lib

  if ( options.label === false ) return

  let component = [ options.label || lib.text.labelize( options.key ) ]

  let wrapperTag = {
    $on: { 'click: focus on input': function() {
      let target = this.$(
        '^appkit-form-field-group',
        'appkit-form-field-control > *'
      )
      if ( target ) target.$focus()
    } },
    ...options.wrapperTag
  }

  return a['appkit-report-field-label-wrapper']( component, options.wrapperTag )

}

ax.extension.appkit.report.factory.field.caption.
helpbutton = function( options ) {

  let a = ax.a
  let x = ax.x

  return a['appkit-report-field-helpbutton']( {
    $state: false,
    $nodes: function() {
      return a['appkit-report-field-helpbutton-text'](
        { $text: this.$state ? ' ❓ ✖ ' : ' ❓ ' }
      )
    },
    $on: { 'click: toggle help': function() {
      this.$state = !this.$state
      this.$('^appkit-report-field', 'appkit-report-field-help').$toggle()
    } },
    ...options.helpbuttonTag
  } )

}

ax.extension.appkit.form.factory.field.dependent.dependency.
previous = function( field ) {

  let form = field.$('^appkit-form-section')
  let fields = form.$$( 'appkit-form-field' ).$$

  field = field.$('^appkit-form-field')
  let index = fields.indexOf( field )
  let count = fields.length

  if ( index == 0 || count < 2 ) {
    return field
  } else {
    return fields[ index - 1 ]
  }

}

ax.extension.appkit.form.factory.field.dependent.dependency.
next = function( field ) {

  let form = field.$('^appkit-form-section')
  let fields = form.$$( 'appkit-form-field' ).$$

  field = field.$('^appkit-form-field')
  let index = fields.indexOf( field )
  let count = fields.length

  if ( index == count - 1 || count < 2 ) {
    return field
  } else {
    return fields[ index + 1 ]
  }

}

ax.extension.xtermjs = ( options={} ) => (a,x) =>

a['axf-xtermjs']( {
  // style: { display: 'block' },
  $nodes: [
    a['axf-xtermjs-toolbar'](
      [
        a['axf-xtermjs-toolbar-left']( options.label ),
        a['axf-xtermjs-toolbar-right'](
          a['axf-xtermjs-fullscreen'](
            a.button( { $text: '🗖' }, {
              type: 'button',
              $on: {
                'click: toggle full screen': function() {
                  let terminal = this.$('^axf-xtermjs')
                  terminal.$fullscreen = !terminal.$fullscreen
                  if ( terminal.$fullscreen ) {
                    this.$text = '🗗'
                    this.$('^body').style.overflowY = 'hidden'
                    this.$('^body').querySelectorAll('axf-xtermjs').forEach( (el) => {
                      if ( el != this.$('^axf-xtermjs') ) el.$('axf-xtermjs-container').style.display = 'none'
                    } )
                    terminal.$('^axf-xtermjs').classList.add('fullscreen')
                  } else {
                    this.$text = '🗖'
                    this.$('^body').style.overflowY = 'auto';
                    this.$('^body').querySelectorAll('axf-xtermjs').forEach( (el) => {
                      el.$('axf-xtermjs-container').style.display = ''
                    } )
                    terminal.$('^axf-xtermjs').classList.remove('fullscreen')
                  }
                  terminal.$xterm.toggleFullScreen( terminal.$fullscreen )
                  terminal.$xterm.fit()
                  // Fit called twice as hack for bug where resizing is
                  // terminal.$xterm.fit() // wrong after exiting fullscreen.
                },
              },
            } )
          )
        ),
      ],
      options.toolbarTag
    ),
    a['axf-xtermjs-container']
  ],
  $init: function() {

    const resizeFn = function() {
      this.$xterm.fit()
      // Fit called twice as hack for bug where resizing is
      // this.$xterm.fit() // wrong after some page zoom changes.
    }.bind( this )

    window.addEventListener( 'resize', resizeFn )

    Terminal.applyAddon( fullscreen )
    Terminal.applyAddon( fit )
    this.$xterm = new Terminal( options.terminal )
    this.$xterm.open( this.$('axf-xtermjs-container') )
    this.$xterm.write( options.text || '' )
    resizeFn()

  },
  $on: {
    // 'keyup: check for escape fullscreen': function(e) {
    //   if ( e.keyCode == 27 ) {
    //     this.$('^axf-xtermjs').$xterm.toggleFullScreen(false)
    //   }
    // },
    // 'onblur: close fullscreen': function(e) {
    //   this.$('^axf-xtermjs').$xterm.toggleFullScreen(false)
    // },
  },
  $write: function( text ) {
    this.$xterm.write( text )
    // this.$xterm.fit()
  },
  ...options.terminalTag
} )

// ax.extension.xtermjs.report = {}

ax.css( {

  'axf-xtermjs': {

    display: 'block',
    height: 'calc( 300px + 1.8rem )',
    // width: '100%',

    '&.fullscreen': {
      // height: 'unset',
      height: 'calc( 100vh - 1.8rem - 3px )',
      marginTop: 'calc( 1.8rem + 4px )',
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1,
      // height: '100vh',
      // width: '100%',
      'axf-xtermjs-toolbar': {
        zIndex: '257',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
      },
      'axf-xtermjs-container': {
        height: '100%',
        '.xterm-screen': {
          marginTop: '1.8rem',
        }
      },
    },

    'axf-xtermjs-container': {
      display: 'block',
      height: '300px',
      // width: '100%',
      // padding: '30px',
    },

    'axf-xtermjs-toolbar': {
      display: 'block',
      overflow: 'auto',
      backgroundColor: 'white',
      border: '1px solid #e6e6e6',
      borderBottom: 'none',
      button: {
        fontSize: '1.2rem',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer'
      },
    },

    'axf-xtermjs-toolbar-right': {
      float: 'right',
    },

    'axf-xtermjs-toolbar-left': {
      lineHeight: '1.8',
      paddingLeft: '5px',
    },

  }

} )

// ax.extension.appkit.report.factory.
// markdown = (r) => function ( options={} ) {
//   return ax.x.xtermjs.report.terminal( r, options )
// }

// /**
//  * Creates ax object for a xtermjs Markdown report output.
//  *
//  * @example
//  * r.markdown( {
//  *   key: mymarkedtext,
//  *   value: Hello\n===\n
//  * } ),
//  * @param {object} options
//  * @param {string} options.name The value for the name= attribute on the wrapper.
//  * @param {(object|array)} options.value The markdown text.
//  *
//  * @return {object} ax object
//  */
//
// ax.extension.xtermjs.report.markdown = function(
//   r, options={}
// ) {
//
//   let a = ax.a
//   let x = ax.x
//
//   return a['appkit-report-xtermjs-markdown'](
//     x.xtermjs.markdown( options.value ),
//     {
//
//       name: options.name,
//
//       $value: function() {
//         return options.value
//       },
//
//       ...options.markdownTag
//
//     }
//   )
//
// }

ax.extension.chartjs = function( chartjsOptions, options={} ) {

  var a = ax.a;

  var chartTag = Object.assign(
    { style: 'display: block;' },
    options.chartTag || {}
  );

  var canvasTag = Object.assign(
    { style: 'display: block;' },
    options.canvasTag || {}
  );

  return a.chart( [
    a.div( null, {
      $init: function() {
        this.parentElement.$chart = new Chart( this.nextSibling.getContext('2d'), chartjsOptions );
      }
    } ),
    a.canvas( null, canvasTag ),
  ], chartTag );

};

// .chart alias
ax.extension.chart = ax.extension.chartjs;

ax.extension.panes = function ( proximateComponent, adjacentComponent, options={} ) {

  const a = ax.a

  const orientation = options.vertical ? 'vertical' : 'horizontal'

  function move(e) {

    const el = e.target.$('^axf-panes')

    let percent,
        vertical = options.vertical

    if ( vertical ) {
      const position = el.clientHeight - ( e.clientY - el.offsetTop )
      percent = 100 * position / el.clientHeight
    } else {
      const position = el.clientWidth - ( e.clientX - el.offsetLeft )
      percent = 100 * ( 1 - position / el.clientWidth )
    }

    resize( el, percent, vertical )

  }

  function resize( el, percent, vertical ) {

    const proximate = el.$('axf-panes-proximate'),
          adjacent = el.$('axf-panes-adjacent'),
          drag = el.$('axf-panes-drag')

    percent = Number( percent || 50 )
    if ( Number.isNaN( percent ) ) percent = 50
    if ( percent > 90 ) percent = 90
    if ( percent < 10 ) percent = 10

    if ( vertical ) {
      proximate.style.bottom = `calc( ${ 100 - percent }% + 2px )`
      adjacent.style.top = `calc( ${ percent }% + 2px )`
      drag.style.top = `calc( ${ percent }% - 2px )`
    } else {
      proximate.style.right = `calc( ${ 100 - percent }% + 2px )`
      adjacent.style.left = `calc( ${ percent }% + 2px )`
      drag.style.left = `calc( ${ percent }% - 2px )`
    }

    el.$send( 'resize', { detail: { percent: percent } } )
  }

  function clear(e) {
    e.target.$('^axf-panes').classList.remove( 'dragable' )
    document.removeEventListener( 'mousemove', move )
    document.removeEventListener( 'mouseup', clear )
  }

  return a['axf-panes']( [
    a['axf-panes-proximate']( proximateComponent ),
    a['axf-panes-drag']( { $on: {
      'mousedown': (e,el) => {
        el.$('^axf-panes').classList.add( 'dragable' )
        document.addEventListener( 'mousemove', move )
        document.addEventListener( 'mouseup', clear )
      },
    } } ),
    a['axf-panes-adjacent']( adjacentComponent ),
  ], {
    class: orientation,
    $init: function() {
      resize( this, options.percent, options.vertical )
    },
    ...options.panesTag
  } )

}

ax.css( {

  'axf-panes': {

    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    'axf-panes-proximate': {
      display: 'block',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      right: 'calc( 50% + 2px )',
      overflowY: 'auto',
      overflowX: 'hidden',
    },

    'axf-panes-adjacent': {
      display: 'block',
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      left: 'calc( 50% + 2px )',
      // paddingLeft: '2px',
      overflowY: 'auto',
      overflowX: 'hidden',
      // color: '#fff',
    },

    'axf-panes-drag': {
      display: 'block',
      position: 'absolute',
      left: 'calc( 50% - 2px )',
      top: 0,
      bottom: 0,
      width: '4px',
      background: '#0001',
      '&:hover': {
        background: '#ddd',
      }
    },

    '&.dragable': {
      cursor: 'grabbing',
      'axf-panes-drag': {
        background: '#aaa',
      },
    },

    '&:not(.dragable)': {
      'axf-panes-drag': {
        cursor: 'ew-resize',
      },
    },

    '&.vertical': {

      'axf-panes-proximate': {
        bottom: 'calc( 50% + 2px )',
        right: 0,
        // overflowY: 'hidden',
        // overflowX: 'auto',
      },

      'axf-panes-adjacent': {
        // width: '100%',
        left: 0,
        top: 'calc( 50% + 2px )',
        // paddingTop: '2px',
        // overflowY: 'hidden',
        // overflowX: 'auto',
      },

      'axf-panes-drag': {
        display: 'block',
        position: 'absolute',
        top: 'calc( 50% - 2px )',
        left: 0,
        right: 0,
        height: '4px',
        width: '100%',
        background: '#eee',
      },

      '&:not(.dragable)': {
        'axf-panes-drag': {
          cursor: 'ns-resize',
        },
      },

    }

  }

} )

if ( typeof Dropzone != 'undefined' ) { Dropzone.autoDiscover = false }

ax.extension.dropzone = ( options={} ) => {

  let url = options.url || '/'

  return ax.a['axf-dropzonejs']( {
    class: 'dropzone',
    $init: (el) => {
      el.$dropzone = new Dropzone( el , { url: url, ...options.dropzone } )
    },
    ...options.tag
  } )

}

ax.css( {

  'axf-dropzonejs': {

    display: 'block',

    '&.dropzone': {

      '&.dz-clickable': {
        minHeight: '250px',
      },

      '.dz-preview.dz-file-preview': {
        display: 'block',
        margin: 0,

        '.dz-error-message': {
          width: '50%',
          left: 0,
          top: '250px',
        },

        '&:after': {
          left: '5px',
        },

        '.dz-image': {
          minHeight: '250px',
          width: '100%',
          background: 'linear-gradient(to bottom, #4488dd80, #48d)',

        },

        '.dz-progress': {
          width: 'calc( 100% - 40px )',
          marginTop: '-15px',
          left: '60px',
          height: '30px',

          '.dz-upload': {
            background: '#48d',
          },
        },

        '.dz-details': {

          '.dz-size': {
            marginBottom: '160px',

          },
        },

      },

    },

  }
  
} )
