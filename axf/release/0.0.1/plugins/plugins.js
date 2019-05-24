'use strict'
ax.extension.appkit = {}

ax.extension.appkit.loading = function( options={} ) {

  let a = ax.a
  let x = ax.x

  let text = options.text ? " " + options.text : " Loading"
  let wait = options.wait || 100

  let component = x.appkit.cycle( [
    `◐${ text }`, `◓${ text }`,
    `◑${ text }`, `◒${ text }`
  ], wait )

  let loadingTag = {
    $init: (el) => {
      el.$('appkit-transition').$to( component )
    },
    ...options.loadingTag
  }

  return a['appkit-loading'](
    x.appkit.transition.fade( {}, { time: 500 } ),
    loadingTag
  )

}

ax.extension.appkit.transition = {};

ax.extension.appkit.put = function( variable, options={} ) {

  let zealous = options.zealous || false

  let tag = ax.type.is.object( variable ) ? "pre" : "span"

  return ax.a[ tag ]( ax.x.appkit.lib.inspect( variable, { zealous: zealous } ) )

}

ax.extension.appkit.widget = {};

ax.extension.appkit.report = function( component, options={} ) {

  if ( ax.type.is.function( component ) ) {

    let scope = options.scope || []
    if ( ax.type.is.string( scope ) ) { scope = [ scope ] }

    component = component(
      ax.extension.appkit.report.factory( {
        scope: scope,
        data: options.data,
        layout: options.layout
      } )
    )

  }

  return ax.a["appkit-report"]( component, options.reportTag )

}

// ax.extension.appkit.fetch = function( action, options={} ) {
//
//   let a = ax.a
//   let x = ax.x
//
//   if ( ax.type.is.function( options ) ) {
//     options = { success: options }
//   }
//
//   let method = options.method || 'GET'
//
//   let successFunction = options.success ||
//     function( result ) {
//       if ( ax.type.is.object( result ) ) {
//         this.$nodes = x.appkit.put( result )
//       } else {
//         this.$text = result
//       }
//     }
//
//   let errorFunction = options.error ||
//     function( response, target ) {
//       target.$text = response.failed || "Failed to load"
//     }
//
//   // Build XMLHttp request function
//   let httpRequest = function( target ) {
//
//     let request = new XMLHttpRequest()
//     request.onreadystatechange = function() {
//       if (this.readyState == 4) {
//         let result
//         if ( this.status >= 200 && this.status < 300 ) {
//           if( this.getResponseHeader("Content-Type") === "application/json" ) {
//             result = JSON.parse( this.responseText )
//           } else {
//             result = this.responseText
//           }
//           target.$success.bind( target )( result, this )
//         } else {
//           result = this.statusText || "Request error"
//           target.$error.bind( target )( result, this )
//         }
//       }
//     }
//     request.open( method, action, true)
//     request.setRequestHeader('Accept', 'application/json')
//     request.send()
//
//   }
//
//   let fetchTag = Object.assign(
//     {
//       $init: function() { httpRequest( this ) },
//       $success: function( result, request ) { successFunction.call( this, result, this, request ) },
//       $error: function( result, request ) { errorFunction.call( this, result, this, request ) }
//     },
//     options.fetchTag
//   )
//
//   let component = a.loading( options.loading || x.appkit.loading() )
//
//   return a['appkit-fetch']( component, fetchTag )
//
// }

ax.extension.appkit.window = {};

// ax.extension.appkit.
// get = function( url, options={} ) {
//
//   let a = ax.a
//   let x = ax.x
//
//   let request = new XMLHttpRequest()
//
//   let success = function( data, element, request ) {
//     if ( options.success ) {
//       options.success.bind(element)( data, element, request )
//     } else {
//       element.$nodes = x.appkit.put( data )
//     }
//   }
//
//   let error = function( data, element, request ) {
//     if ( options.error ) {
//       options.error.bind(element)( data, element, request )
//     } else {
//       element.$nodes = x.appkit.put( data )
//     }
//   }
//
//   let resolver = options.resolver || function( element, promise ) {
//     promise.then( function( data ) {
//       success.bind(element)( data, element, request )
//     } ).catch( function( data ) {
//       error.bind(element)( data, element, request )
//     } )
//   }
//
// 	let promise = new Promise(function (resolve, reject) {
// 		request.onreadystatechange = function () {
// 			if (request.readyState !== 4) return
// 			if (request.status >= 200 && request.status < 300) {
//         if( request.getResponseHeader("Content-Type") === "application/json" ) {
//           resolve( JSON.parse( request.responseText ) )
//         } else {
//           resolve( request.responseText )
//         }
// 			} else {
// 				reject( {
// 					status: request.status,
// 					statusText: request.statusText
// 				} )
// 			}
//
// 		}
//
// 		request.open( options.method || 'GET', url, true )
// 		request.send()
//
// 	})
//
//   let getTag = Object.assign(
//     {
//       $init: function( element ) { resolver( element, promise ) },
//     },
//     options.getTag
//   )
//
//   let component = options.loading || x.appkit.loading()
//
//   return a['appkit-get']( component, getTag )
//
// }
// //
// // resolver = resolver || function( element, promise ) {
// //   promise.then( function( data ) {
// //     element.$nodes = x.appkit.put( data )
// //   } ).catch( function(error) {
// //     element.$nodes = x.appkit.put( error )
// //   } )
// // }


ax.extension.appkit.lib = {}

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

ax.extension.appkit.cycle = function( collection, period, options={} ) {

  let a = ax.a
  let x = ax.x

  let max = collection.length - 1

  let component = {
    $state: 0,
    $nodes: (el,i) => collection[i],
    $init: (el) => {
      let cycle = function() {
        setTimeout( function() {
          if ( el.$state() === max ) {
            el.$state( 0 )
          } else {
            el.$state( el.$state() + 1 )
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

  return a["appkit-list"](
    x.appkit.list.element( object ),
    options.listTag
  )

}

ax.extension.appkit.router =
( component, options={} ) =>
( a,x ) => {

  let routerTag = {
    $open: function( path, query={}, hash=null ) {
      // debugger
      query = x.appkit.lib.query.from.object( query )
      path = path + ( query ? "?" + query : '' ) + ( hash ? "#" + hash : '' )
      history.pushState( { urlPath: path },"", path )
      let event = new PopStateEvent( 'popstate', { urlPath: path } )
      dispatchEvent( event )
    },
    $init: (el) => {
      window.addEventListener( 'popstate', function( event ) {
        el.$locate()
      } )
    },
    // $state: ,
    $scope: options.scope || '',
    $nodes: (el) => {

      if ( ax.type.is.function( component ) ) {

        let factory = ax.extension.appkit.router.factory( {
          router: [ el ],
          scope: options.scope,
          path: window.location.pathname,
          query: x.appkit.lib.query.to.object(
            window.location.search.slice(1)
          ),
          anchor: window.location.hash.slice(1),
          params: options.params,
          default: options.default,
          transition: options.transition,
        } )

        component = component( factory )

      }

      return component

    },
    $locate: function() {
      this.$$("appkit-router-routes").$open(
        window.location.pathname,
        x.appkit.lib.query.to.object(
          window.location.search.slice(1)
        ),
        window.location.hash.slice(1)
      )
    },
    ...options.routerTag
  }

  return a['appkit-router']( routerTag )

}

ax.extension.appkit.icon = function( klass, text, options = {} ) {

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
// debugger
  if ( text ) {
    if ( !options.compact ) component.push( '' )
    component.push( ax.a.span( text ) )
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

  const a = ax.a;

  let timeTag = Object.assign(
    {
      $init: function() {
        this.$tock();
        setInterval( this.$tock, 1000);
      },
      $tock: function() {
        this.$text = ( new Date ).toLocaleTimeString();
      }
    },
    options.timeTag
  )

  return a.time( null, timeTag );

};

ax.extension.appkit.table = function ( contents, options={} ) {

  // let a = ax.a
  // let x. = ax.x

  // let table = this

  let component = []

  let trTag = function( i, row ) {
    if ( ax.type.is.function( options.trTag ) ) {
      return options.trTag( i, row )
    } else {
      return options.trTag
    }
  }

  let thTag = function( i, j, content ) {
    if ( ax.type.is.function( options.thTag ) ) {
      return options.thTag( i, j, content )
    } else {
      return options.thTag
    }
  }

  let tdTag = function( i, j, content ) {
    if ( ax.type.is.function( options.tdTag ) ) {
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
        scope: "col",
        ...thTag( i, j, content )
      }
      return ax.a.th( content, attributes )
    } else if ( headers.cols.includes( j ) ) {
      let attributes = {
        scope: "row",
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

  let method = options.method || "GET"

  let success = function( data, element, request ) {
    if ( options.success ) {
      options.success.bind(element)( data, element, request )
    } else {
      element.$nodes = x.appkit.put( data )
    }
  }

  let error = function( err, element, request ) {
    ax.log( err )
    if ( options.error ) {
      options.error.bind(element)( err, element, request )
    } else {
      let message = request.responseText
      let content_type = request.getResponseHeader( "content-type" )
      if ( content_type === "application/json" ) {
        message = JSON.parse( message )
      }
      element.$nodes = x.appkit.put( message )
    }
  }

  let request = new XMLHttpRequest()

  let resolver
  if ( options.resolver ) {
    resolver = options.resolver( request )
  } else {
    resolver = function( element, promise ) {
      promise.then( function( data ) {

        success.bind( element )( data, element, request )
      } ).catch( function( err ) {
        error.bind( element )( err, element, request )
      } )
    }
  }

	let promise = new Promise(function (resolve, reject) {
		request.onreadystatechange = function () {
			if (request.readyState !== 4) return
			if (request.status >= 200 && request.status < 300) {
        if( request.getResponseHeader("Content-Type") === "application/json" ) {
          resolve( JSON.parse( request.responseText ) )
        } else {
          resolve( request.responseText )
        }
			} else {
        if( request.getResponseHeader("Content-Type") === "application/json" ) {
          reject( new Error( JSON.parse( request.responseText ) ) )
        } else {
          reject( new Error( request.responseText ) )
        }
			}
		}

		request.open( method, url, true )
		request.send( options.body )

	})

  let httpTag = Object.assign(
    {
      $init: function( element ) { resolver( element, promise ) },
    },
    options.httpTag
  )

  let component = options.loading || x.appkit.loading()

  return a['appkit-http']( component, httpTag )

}

ax.extension.appkit.document = {};

ax.extension.appkit.button = function( content, onclick, options = {} ) {

  let buttonTag = {
    type: "button",
    $on: { click: function(e) {
      onclick.bind( this )( e, this, this.$state() )
    } },
    ...options.buttonTag
  }

  let icon_class

  if ( options.icon ) {
    if ( ax.type.is.string( options.icon ) ) {
      icon_class = options.icon
    } else {
      icon_class = options.icon.class
    }
    content = ax.x.appkit.icon( icon_class, content, options.icon )
  }
  return ax.a.button( content, buttonTag )

}

ax.extension.appkit.router.proxy = {}

ax.extension.appkit.router.factory = function( options ) {

  return new Proxy(
    ax.extension.appkit.router.proxy.object( options ),
    ax.extension.appkit.router.proxy.shim
  )

}

ax.extension.appkit.form.proxy = {}

ax.extension.appkit.form.factory = function( options ) {

  return new Proxy(
    ax.extension.appkit.form.proxy.object( options ),
    ax.extension.appkit.form.proxy.shim
  )

}

ax.extension.appkit.report.item = function( component, options={} ) {

  if ( ax.type.is.function( component ) ) {

    let scope = options.scope || []
    if ( ax.type.is.string( scope ) ) { scope = [ scope ] }

    component = component(
      ax.extension.appkit.report.factory( {
        scope: scope,
        data: options.data,
        layout: options.layout
      } )
    )

  }

  return ax.a['appkit-report-item']( component, options.itemTag )

}

ax.extension.appkit.report.item.index = function( component, options={} ) {

  let before = options.before
  let after = options.after

  if ( ax.type.is.function( before ) ) {
    before = before( {
      data
    } )
  }

  // if ( ax.type.is.function( component ) ) {
  //
  //   let scope = options.scope || []
  //   if ( ax.type.is.string( scope ) ) { scope = [ scope ] }
  //
  //   component = component(
  //     ax.extension.appkit.report.factory( {
  //       scope: scope,
  //       data: options.data,
  //       layout: options.layout
  //     } )
  //   )
  //
  // }
  //
  // return ax.a['appkit-report-index']( component, options.indexTag )

}

ax.extension.appkit.report.proxy = {}

ax.extension.appkit.report.factory = function( options ) {

  return new Proxy(
    ax.extension.appkit.report.proxy.object( options ),
    ax.extension.appkit.report.proxy.shim
  )

}

ax.extension.appkit.document.stylesheet = {}

ax.extension.appkit.document.focus = {}

ax.extension.appkit.document.insert = function(
  selector,
  type,
  content,
  options={}
) {
  let method = options.method || 'appendChild'
  var tag = document.createElement( type )
  Object.assign( tag, options.tag )
  var target = document.querySelector( selector )
  tag.innerHTML = content
  target[ method ]( tag )
}

ax.extension.appkit.document.script = function( script, options={} ) {

  ax.document.insert(
    'head',
    'script',
    script,
    { tag: options.scriptTag }
  )

}

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
// //     if ( ax.type.is.function( options.trAttributes ) ) {
// //       return options.trAttributes( i );
// //     } else {
// //       return options.trAttributes;
// //     }
// //   };
// //
// //   var thAttributes = function( j ) {
// //     if ( ax.type.is.function( options.thAttributes ) ) {
// //       return options.thAttributes( j );
// //     } else {
// //       return options.thAttributes;
// //     }
// //   };
// //
// //   var tdAttributes = function( j ) {
// //     if ( ax.type.is.function( options.tdAttributes ) ) {
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

// ax.extensions.appkit.transitions.crossfade = function( components, options={} ) {
//
//   let a = ax.a
//   let x = ax.x
//
//   let time = ( options.time || 250 )
//
//   return a['appkit-transition']( components, {
//     $shift: function () {
//       this.$nodes = this.$nodes.slice(1)
//       this.$complete()
//     },
//     $complete: function () {
//       debugger
//       [ ...this.$nodes ].forEach( function( element ) { element.style.position = "" } )
//       this.style.minHeight = '0px'
//       options.complete && options.complete( this )
//     },
//     $child: function( view, complete ) {
//       return a.div( view, {
//         style: "display: none; position: absolute; width: 100%;",
//         $init: function() {
//           x.appkit.lib.fadeIn( this, { time: time, complete: complete } )
//           this.parentElement.style.minHeight =
//               this.offsetHeight + 'px'
//         }
//       } )
//     },
//     $to: function( view ) {
//       let transition = this
//       if ( this.$nodes.length ) {
//         x.appkit.lib.fadeOut( this.$('div')[0], { time: time } )
//         this.$nodes.splice( 1, 0,
//           this.$child( view, transition.$shift )
//         )
//       } else {
//         this.$nodes = [
//           this.$child( view, transition.$complete )
//         ]
//       }
//     },
//     style: `
// display: block; position: relative; width: 100%;
// -webkit-transition: min-height 0.25s;
// transition: min-height 0.25s;
// transition-timing-function: ease-out;
// `
//   } )
//
// };

ax.extension.appkit.transition.fade = function( content, options={} ) {

  let a = ax.a
  let x = ax.x

  let time = ( options.time || 500 ) / 2

  return a['appkit-transition']( content, {
    $init: function () {
      this.style.display = 'none'
      if( content ) {
        this.$view = content
        this.$in()
      }
    },
    $in: function () {
      this.$nodes = this.$view
      x.appkit.lib.animate.fade.in( this, {
        time: time,
        // complete: options.complete
      } )
    },
    $to: function( view ) {
      // debugger
      view = ax.factory( view )

      // ax.log( view.isEqualNode( this.$view ) )
      if ( options.regulate && view.isEqualNode( this.$view ) ) {
        // Do nothing. Keep existing content.
      } else {
        this.$view = view
        if ( this.style.display === 'none' ) {
          this.$in()
        } else {
          x.appkit.lib.animate.fade.out( this, {
            time: time,
            complete: this.$in.bind( this )
          } )
        }
      }
    },
  } )

}

// ax.extension.appkit.transition.popfade = function( component, options={} ) {
//
//   let a = ax.a
//   let x = ax.x
//
//   let time = options.time || 500
//
//   return a['appkit-transition']( component, {
//     $complete: function () {
//       // debugger
//       this.$nodes = this.$nodes.slice(1)
//     },
//     $to: function( view ) {
//       view = ax.factory( view )
//       if ( options.regulate && view.isEqualNode( this.$view ) ) {
//         // Do nothing. Keep existing content.
//       } else {
//         this.$view = view
//         if ( this.style.display === 'none' ) {
//           this.$nodes = [ view ]
//         } else {
//           debugger
//           this.style.position = "relative"
//           this.firstChild.style.position = 'absolute'
//           x.appkit.lib.animate.fadeOut( this.firstChild, { time: time, complete: this.$complete.bind( this ) } )
//           // debugger
//           this.$nodes = this.$nodes.concat( [ view ]  )
//         }
//       }
//     },
//   } )
//
// };

ax.extension.appkit.widget.clock = function( options={} ) {

  const a = ax.a;

  let timeTag = Object.assign(
    {
      $init: function() {
        this.$tock();
        setInterval( this.$tock.bind( this ), 1000);
      },
      $tock: function() {
        this.$text = ( new Date ).toLocaleString();
      }
    },
    options.timeTag
  )

  return a['appkit-widget-time']( timeTag );

};

ax.extension.appkit.list.element = function( object ) {

  let a = ax.a
  let x = ax.x

  if ( ax.type.is.array( object ) ) {
    return a.ol( object.map(
      ( element ) => a.li( x.appkit.list.element( element ) )
    ) )
  } else if ( ax.type.is.null( object ) ) {
    return a["appkit-list-type-null"]( "null" )
  } else if ( ax.type.is.object( object ) ) {
    return a.ul(
      Object.keys( object ).map( ( key ) => {
        return a.li( [
          a.label( key ), ' ',
          x.appkit.list.element( object[ key ] )
        ] )
      } )
    )
  } else if ( ax.type.is.number( object ) ) {
    return a["appkit-list-type-number"]( object )
  } else {
    return a["appkit-list-type-text"]( object )
  }

}

ax.extension.appkit.window.history = {}

// ax.extension.appkit.window.to = function( path ) {
//
//   if ( path[0] !== '/' ) {
//     let pathname = window.location.pathname
//     // debugger
//     if ( pathname.substr(-1) === '/' ) {
//       path = pathname + path
//     } else {
//       // path = pathname + '/' + path
//
//       let directories = pathname.substr(1).split('/')
//       directories.pop()
//       directories.push( path )
//       // debugger
//       // if ( scope ) directories.unshift( scope )
//       path = '/' + directories.join('/')
//     }
//   }
// ax.log( path )
//   history.pushState( { urlPath: path },"", path )
//   // history.go()
//   let event = new PopStateEvent( 'popstate', { urlPath: path } )
//   dispatchEvent( event )
//
// }

ax.extension.appkit.lib.url = {}

ax.extension.appkit.lib.field = {}

ax.extension.appkit.lib.text = {}

ax.extension.appkit.lib.uuid = {}

ax.extension.appkit.lib.inspect = function( variable, options={} ) {

  let result
  let zealous = options.zealous === false ? false : true

  if ( ax.type.is.object( variable ) ) {
    result = ax.x.appkit.lib.object.inspect( variable, { zealous: zealous } )
  } else if ( ax.type.is.function( variable ) ) {
    result = '𝑓 ' + variable
  } else {
    result = variable
  }

  return result
  
}

ax.extension.appkit.lib.object = {}

ax.extension.appkit.lib.style = function( styles, scope ) {

  if ( ax.type.is.array( styles ) ) {
    styles = styles.map( ( styles ) => this.style( styles ) ).join( "\n" )
  } else if ( ax.type.is.object( styles ) ) {
    styles = this.style.rules( styles, scope ? [ scope ] : [] )
  }

  return  styles

}

ax.extension.appkit.lib.coerce = {}

ax.extension.appkit.lib.form = {}

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

ax.extension.appkit.router.proxy.
object = function( config ) {

  //
  // ax.log( {
  //   router: config.router,
  //   scope: config.scope
  // } )


  return {
    router: config.router,
    scope: config.scope || '',
    // matched: config.matched,
    params: config.params || {},
    path: config.path,
    query: config.query,
    anchor: config.anchor,
    default: config.default,
    transition: config.transition,

    ...ax.extension.appkit.router.factory,
  }
}

ax.extension.appkit.router.proxy.shim = {
  get: ( target, property, receiver ) => {

    if ( property.match(/^router|locator|scope|params|path|query|anchor|default|transition|toJSON$/) ){
      return target[property]
    } else if ( ax.type.is.function( target[ property ] ) ) {
      return target[ property ]( receiver )
    } else {
      ax.throw( `The appkit router factory does not have property '${ property }'.` )
    }

  }
}

ax.extension.appkit.router.factory.
locate = (r) => function( locator='' ) {

  let match
  let scopedpath
  let target

  if ( match = locator.match( /^(>+)(.*)/) ) {

    let forward = match[1].length
    scopedpath = "/" + match[2]
    target = this.router[ forward ]

  } else if ( match = locator.match( /^\^(.*)/) ) {

      scopedpath = "/" + match[1]
      target = this.router[0]

  } else {

    match = locator.match( /^(<*)(.*)/)
    let backward = match[1].length
    scopedpath = "/" + match[2]
    target = this.router[ this.router.length - backward - 1 ]

  }

  let scope = target.$scope
  let path = scope + scopedpath
  return { path: path, scope: scope, target: target }

}

ax.extension.appkit.router.factory.
open = (r) => function( locator='', query={}, anchor=null ) {

  locator = '' + locator

  if ( locator[0] === "%" ) {

    this.router[0].$open(
      r.scope + "/" + locator.slice(1),
      query,
      anchor
    )

  } else if ( locator[0] === "/" ) {

    this.router[0].$open(
      locator,
      query,
      anchor
    )

  } else {

    let located = this.locate( locator )
    let path = located.path
    located.target.$open( path, query, anchor )

  }
}

ax.extension.appkit.router.factory.
routes = (r) => function( routes, options={} ) {
// debugger
  let scope = r.scope + ( options.scope || "" )
  let path = r.path
  let params = r.params
  let query = r.query
  let anchor = r.anchor
  let defaultView = options.default || r.default
  let transition = options.transition || r.transition

  let scopedpathFor = function( path ) {
    let lengthScope = scope.length
    let lengthPath = path.length
    if ( path.slice( 0, lengthScope ) === scope ) {
      return path.slice( lengthScope )
    } else {
      return null
    }
  }

  let component = ax.extension.appkit.router.factory.routes.
  component( r.router, scope, params, { default: defaultView } )

  let init
  let nodes
  let update

  if ( transition ) {
    init = function( el, state ) {
      el.$update( el, state )
    }
    nodes = [ transition ]
    update = function( el, state ) {
      // debugger
      el.$('appkit-transition').$to( component( el, state ) )
      return false
    }
  } else {
    init = () => {}
    nodes = component
    update = () => { return true }
  }


  let routesTag = {
    $scope: scope,
    $state: {
      scopedpath: scopedpathFor( path ),
      query: query
    },
    $anchor: anchor,
    $init: init,
    $nodes: nodes,
    $update: update,
    $open: function( path, query, anchor ) {
      // debugger
      this.$state = {
        scopedpath: scopedpathFor( path ),
        query: query
      }
      this.$anchor = anchor
      if ( anchor ) {
        let anchored = document.getElementById( anchor )
        if ( anchored ) anchored.scrollIntoView()
      }
    },
    $views: ax.extension.appkit.router.factory.routes.
    views( routes ),
    ...options.routesTag
  }

  return (a,x) => a["appkit-router-routes"](
    routesTag
  )

}

ax.extension.appkit.form.proxy.
object = function( options ) {
  return {
    scope: options.scope || '',
    data: options.data || {},
    layout: options.layout,
    ...ax.extension.appkit.form.factory,
  }
}

ax.extension.appkit.form.proxy.shim = {
  get: ( target, property, receiver ) => {

    if ( property.match(/^scope|data|layout|toJSON$/) ){
      return target[property]
    } else if ( ax.type.is.function( target[ property ] ) ) {
      return target[ property ]( receiver )
    } else {
      ax.throw( `The appkit form factory does not have property '${ property }'.` )
    }

  }
}

ax.extension.appkit.report.proxy.
object = function( options ) {
  return {
    scope: options.scope,
    data: options.data,
    layout: options.layout,
    ...ax.extension.appkit.report.factory,
  }
}

ax.extension.appkit.report.proxy.shim = {
  get: ( target, property, receiver ) => {

    if ( fixregex && property.match(/^scope|data|toJSON$/) ){
      return target[property]
    } else if ( ax.type.is.function( target[ property ] ) ) {
      return target[ property ]( receiver )
    } else {
      ax.throw( `The appkit report factory does not have property '${ property }'` )
    }

  }
}

// ax.extension.appkit.document.focus.after = function( element ) {
//
//   let elements = Array.from( document.querySelectorAll( '*' ) )
//
//   // start search at last child element
//   element = element.$$('*')().slice(-1)[0] || element
//
//   let index = elements.indexOf( element )
//   let count = elements.length
//   let target
//   let tabable
//
//   let i = index
//   do {
//     i++
//     if ( i === count ) i = 0
//     if ( i === index ) return element
//     target = elements[ i ]
//     tabable = target.tabIndex >= 0 && (   ax.x.appkit.lib.element.visible( target ) )
//   } while ( !tabable );
//
//   target.focus()
//
//   return target
//
// }

ax.extension.appkit.document.stylesheet.proxy = {}

ax.extension.appkit.lib.field.name = {}

ax.extension.appkit.lib.field.previous = function( field ) {

  let form = field.$('^form')
  let fields = Array.from( form.querySelectorAll( 'appkit-form-field, appkit-form-submit' ) )

  field = field.$('^appkit-form-field')
  let index = fields.indexOf( field )
  let count = fields.length

  if ( index == 0 || count < 2 ) {
    return field
  } else {
    return fields[ index - 1 ]
  }

}

ax.extension.appkit.lib.field.collection = {}

ax.extension.appkit.lib.field.next = function( field ) {

  let form = field.$('^form')
  let fields = Array.from( form.querySelectorAll( 'appkit-form-field, appkit-form-submit' ) )

  field = field.$('^appkit-form-field')
  let index = fields.indexOf( field )
  let count = fields.length

  if ( index == count - 1 || count < 2 ) {
    return field
  } else {
    return fields[ index + 1 ]
  }

}

ax.extension.appkit.lib.style.rules = function( object, selectors ) {

  let style = this

  var result = ""
  if ( ax.type.is.object( object ) ) {
    result += style.rules.rule( object, selectors )
    Object.keys( object).forEach( function( selector ) {
      var selected = object[selector]
      selector.split(",").forEach( function( selectorPart ) {
        selectorPart = selectorPart.trim()
        result += style.rules( selected, selectors.concat( selectorPart ) )
      } )
    } )
  }
  return result

}

ax.extension.appkit.lib.element.visible = function ( element ) {


  // console.log( element )
  // console.log( element.offsetWidth )
  // if ( element.offsetHeight ) debugger
  // console.log( element.getClientRects().length )
// let ref = document.querySelector("input[name='member[first_name]']")
// if ( ref == element ) debugger

  return !!(
    element.offsetWidth ||
    element.offsetHeight ||
    element.getClientRects().length
  )
}

ax.extension.appkit.lib.form.data = {}

ax.extension.appkit.lib.query.from ={}

ax.extension.appkit.lib.query.to ={}

ax.extension.appkit.lib.date.now = {}

// AxFunction.extension.Appkit.Library.prototype.titleize = function(string) {
//   return this.capitalize( string.replace(/_/g, " ") );
// };
//
// // AxFunction.extension.Library.prototype.titleize = function(string) {
// //   return this.capitalize( string.replace(/_/g, " ") );
// // };
//
ax.extension.appkit.lib.text.humanize = function(string='') {
  return string.toString().replace(/_/g, " ");
};

// AxFunction.extension.Appkit.Library.prototype.titleize = function(string) {
//   return this.capitalize( string.replace(/_/g, " ") );
// };
//
// // AxFunction.extension.Library.prototype.titleize = function(string) {
// //   return this.capitalize( string.replace(/_/g, " ") );
// // };
//
ax.extension.appkit.lib.text.labelize = function(string='') {
  return this.capitalize( string.toString().replace(/_/g, " ") );
};

ax.extension.appkit.lib.text.capitalize = function(string='') {
  return string.toString().charAt(0).toUpperCase() + string.slice(1);
};

// ax.extension.appkit.lib.url.search = {}
// // 

// ax.extension.appkit.lib.url.extractParamsFromPath = function( pathWithQueryString ) {
//
//   var result = {};
// // debugger
//   pathWithQueryString = pathWithQueryString.split("?");
//   result.path = pathWithQueryString[0];
//   var queryString = pathWithQueryString[1];
//   if ( queryString ) {
//     result.params = this.queryStringToObject( queryString );
//   } else {
//     result.params = {};
//   };
//   return result;
//
// };

// ax.extension.appkit.lib.url.locator = function( path, options={} ) {
//
//   var result = {}
//   let parts  = path.split("#")
//   result.anchor = parts[1]
//   parts = parts[0].split("?")
//   // locator.pathname = locator.pathname.replace( options.scope, '' )
//   result.route = parts[0] //.replace( options.namespace, '' )
//   // debugger
//   let search = parts[1] ? ax.x.appkit.lib.url.search.object( parts[1] ) : {}
//   if ( search ) {
//     result.search = search
//   }
//   // result.variables = {}
//   // result.splat = []
//   // result.splats = []
//   // result.scope = options.scope
//   // debugger
//
//   // var queryString = path[1]
//   // if ( queryString ) {
//   //   result.params = this.queryStringToObject( queryString )
//   // } else {
//   //   result.params = {}
//   // }
//   return result
//
// }

// ax.extension.appkit.lib.url.objectToQueryString = function( object, prefix ) {
//
//   var queryString = []
//   var property;
//
//   for (property in object) {
//     if (object.hasOwnProperty(property)) {
//       var k = prefix ? prefix + "[" + property + "]" : property,
//         v = object[property];
//       queryString.push((v !== null && ax.type.is.object( v )) ?
//         this.objectToQueryString(v, k) :
//         encodeURIComponent(k) + "=" + encodeURIComponent(v));
//     };
//   };
//   return queryString.join("&");
//
// }

// ax.extension.appkit.lib.url.queryStringToObject = function( queryString ) {
//
//   var result = {}
//
//   queryString.split("&").map( function( pair ) {
//     pair = pair.split("=");
//     result[ pair[0] ] = decodeURIComponent( pair[1] );
//   } )
//
//   return result;
//
// };

ax.extension.appkit.lib.uuid.generate = function() {

  return "00000000-0000-4000-0000-000000000000".replace(
    /0/g,
    c => ( c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )

}

ax.extension.appkit.lib.animate.fade = {}

ax.extension.appkit.lib.object.inspect =
function( object, options={} ) {

  let indent = options.indent === false ? null : ( options.indent || 2 )
  let zealous = options.zealous
  let cache = new Set()

  return JSON.stringify( object, function (key, value) {

    if ( ax.type.is.object( value ) && ax.type.is.not.null( value ) ) {
      if (cache.has(value)) {
        // Cyclic reference
        try {
          // If this value does not reference a parent it can be deduped
         return JSON.parse( JSON.stringify(value) )
        }
        catch (err) {
          if ( zealous ) {
            return '' + value
          } else {
            return
          }
        }
      }
      cache.add(value)
    } else if ( zealous && ax.type.is.function( value ) ) {
      value = '𝑓 ' + value
    }
    return value

  }, indent )

}

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
      if ( ax.type.is.object(current) &&
        ( depth > 2 || ax.type.is.undefined( current[next] ) )
      ) {
        // Add to current item
        key = index
      } else {
        // Start building next item
        key = index + 1
      }
    }

    // Create empty object if needed
    if ( ax.type.is.undefined( object[key] ) ) {
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

ax.extension.appkit.lib.coerce.number = function( value ) {
  return Number( value )
}

ax.extension.appkit.lib.coerce.boolean = function( value ) {
  let string = value.toString().toLowerCase()
  return value && string !== 'false' && string !== '0'
}

ax.extension.appkit.lib.coerce.string = function( value ) {
  return ax.type.is.undefined( value ) ? '' : String( value )
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

// ax.extensions.appkit.lib.compactArray = function( array ) {
//
//   return array.filter( function(n) { return n != undefined } );
//
// };

ax.extension.appkit.router.factory.routes.
component = (
  router,
  scope,
  params,
  options={} ) =>
( el, location ) => {

  let defaultView = options.default
  let scopedpath = location.scopedpath
  let query = location.query

  if ( ax.type.is.string( scopedpath ) ) {

    let matched = ax.extension.appkit.
    router.factory.routes.
    matcher( el.$views, scope, scopedpath, params )

    matched.view = matched.view || defaultView

    if ( ax.type.is.function( matched.view ) ) {

      let factory = ax.extension.appkit.router.factory( {
        router: [ ...router, el ],
        scope: matched.scope,
        params: matched.params,
        query: location.query,
        anchor: el.$anchor,
        path: scope + scopedpath,
        default: defaultView,
        // transition: options.transition,
      } )

      return matched.view( factory )

    } else {

      return matched.view

    }
  } else {

    return null

  }

}

ax.extension.appkit.router.factory.routes.views =
function ( routes ) {

  let result = []

  Object.keys( routes ).forEach( function( path ) {

    // Distinguish splats and ends, so no double matches in regex
    let pathRegex = path.
      replace( /\*\*/g, "&&splats&&" ).
      replace( /\*/g, "&&splat&&" ).
      replace( /%%$/g, "&&stubs&&" ).
      replace( /%$/g, "&&stub&&" )

    // if ( pathRegex === "&&stub&&" ) {
    //   pathRegex = "##empty##"
    // }

    let routeVariableNames = pathRegex.match(/(:\w+|&&splat&&|&&splats&&|&&stubs&&|&&stub&&)/g) || []
    let paramKeys = []

    routeVariableNames.forEach( function( routeVariableName ) {
      let paramKey
      let pattern
      if ( routeVariableName === "&&splat&&" ) {
        paramKey = "*"
        pattern = "([^\/]*)"
      } else if ( routeVariableName === "&&splats&&" ) {
        paramKey = "**"
        pattern = "(.*)"
      } else if ( routeVariableName === "&&stub&&" ) {
        paramKey = "%"
        pattern = "(\/?)"
      } else if ( routeVariableName === "&&stubs&&" ) {
        paramKey = "%%"
        pattern = "(\/?|\/.+)"
      } else {
        paramKey = routeVariableName.slice(1)
        pattern = "([^\/]*)"
      }
      paramKeys.push( paramKey )
      pathRegex = pathRegex.replace( routeVariableName, pattern )
    } )

    pathRegex = "^" + pathRegex.replace( /\//g, "\\/" ) + "$"

    let component = routes[path]
    result.push( {
      regex: pathRegex,
      keys: paramKeys,
      component: component, 
      path: path
    } )

  } )

  return result

}

ax.extension.appkit.router.factory.routes.
matcher = (
  views,
  scope,
  scopedpath,
  params={},
  options={}
) => {

  let component
  let matchedScope
  params.splat = params.splat || []

  for ( let i in views ) {
    let view = views[i]
    let pathRegex = new RegExp( view.regex )
    let match = scopedpath.match( pathRegex )

    matchedScope = scope + scopedpath

    if ( match ) {

// if ( ax.type.is.undefined( view.component ) ) debugger

      let paramNames = view.keys
      component = ax.type.is.null( view.component ) ? () => '' : view.component // set a component when view is otherwise empty, because router will show default otherwise.

      paramNames.forEach( function( paramName, i ) {

        let matched = match[ i + 1 ]

        if ( paramName === '*' ) {
          params.splat.push( matched )
        } else if ( paramName == '**' ) {
          let keep = scopedpath.length - matched.length
          matchedScope = scope + scopedpath.substring( 0, keep )
          params.splat.push( matched )
        } else if (
          paramName === '%' ||
          paramName == '%%'
        ) {
          let keep = scopedpath.length - matched.length
          matchedScope = scope + scopedpath.substring( 0, keep )
          params.splat.push( matched )
        } else {
          params[paramName] = matched
        }

      } )

      break

    }

  }

  return {
    params: params,
    view: component,
    scope: matchedScope
  }

}

ax.extension.appkit.form.factory.
submit = (f) => function(
  options={}
) {

  let a = ax.a
  let x = ax.x

  let buttonTag = {
    $nodes: [
      options.icon ?
      x.appkit.icon( options.icon, options.text ) :
      ( options.text || 'Submit' )
    ],
    type: "submit",
    ...options.buttonTag
  }

  return a['appkit-form-submit']( a.button( buttonTag, {
    $focus: function() {
      this.focus()
    },
    $disable: function() {
      this.disabled = 'disabled'
    },
    $enable: function() {
      if ( !options.disabled ) this.removeAttribute('disabled')
    },
    ...options.submitTag
  } ) )

};

ax.extension.appkit.form.factory.
button = (f) => function(
  options={}
) {

  let a = ax.a
  let x = ax.x

  let onclick = function (e, el, state) {
    let form = el.$("^form")
    if ( options.onclick ) {
      options.onclick.bind( this )( e, el, form, state )
    } else {
      ax.log( form.$data() )
      alert( "Form data has been logged to the console." )
    }
  }

  let buttonTag = {
    $nodes: [
      options.icon ?
      x.appkit.icon( options.icon, options.text ) :
      ( options.text || 'OK' )
    ],
    $on: { click: onclick },
    type: "button",
    id: options.id,
    class: options.class,
    ...options.buttonTag
  }

  return a['appkit-form-button']( a.button( buttonTag, {
    $focus: function() {
      this.focus()
    },
    $disable: function() {
      this.disabled = 'disabled'
    },
    $enable: function() {
      if ( !options.disabled ) this.removeAttribute('disabled')
    },
    ...options.formButtonTag
  } ) )

};

ax.extension.appkit.form.factory.
one = (f) => function( key, component, options={} ) {

  let a = ax.a

  if ( ax.type.is.function( component ) ) {

    component = component(
      ax.extension.appkit.form.factory( {
        data: options.data || f.data[ key ] || {},
        scope: options.scope || f.scope.concat( [ key ] ),
        layout: options.layout || f.layout
      } )
    )

  }

  return a['appkit-form-field-one']( component )

}

ax.extension.appkit.form.factory.
many = (f) => function( key, component, options={} ) {

  let a = ax.a

  if ( ax.type.is.function( component ) ) {

    let data =
      options.data ||
      ( f.data && f.data[ options.key || key ] ) ||
      []
    let scope = options.scope || f.scope.concat( [ key, '' ] )
    let layout = options.layout || f.layout

    let factory = ax.extension.appkit.form.factory( {
      data: data,
      scope: scope,
      layout: layout
    } )
    factory.items = (ff) => ax.extension.appkit.form.factory.many.items( ff )
    factory.add = (ff) => ax.extension.appkit.form.factory.many.add( ff )

    component = component( factory )
    //
    // data.map( function( datum, i ) {
    //   let
    //   return a['appkit-form-field-many-item']( component( factory, i ) )
    // } )

  }

  return a['appkit-form-field-many']( component )

}

ax.extension.appkit.form.factory.
field = (f) => function( keyOrOptions={}, options={} ) {

  if ( ax.type.is.string( keyOrOptions ) ) {
    options.key = keyOrOptions
  } else {
    options = keyOrOptions
  }

  let a = ax.a
  let x = ax.x
  let field = x.appkit.form.factory.field
  let lib = x.appkit.lib.field

  options.name = options.name || lib.name.assemble( ...f.scope, options.key )

  let component = a["appkit-form-field-body"]( [
    field.caption( options ),
    field.help( options.help ),
    field.input(f)( options ),
    field.hint( options.hint ),
  ], options.bodyTag )

  if ( options.dependent !== false ) {
    component = field.dependent(f)( component, options.dependent )
  }

  return a["appkit-form-field"]( component, {
    name: options.name,
    $match: function() {
      let dependent = this.$('appkit-form-field-dependent')
      if ( dependent ) {
        return dependent.$match()
      } else {
        return true
      }
    },
    $value: function() {
      return this.$('appkit-form-field-input > *').$value()
    },
    $focus: function() {
      this.$('appkit-form-field-input > *').$focus()
    },
    ...options.fieldTag
  } )

}

ax.extension.appkit.form.factory.
fields = (f) => function( ...components ) {

  let options

  if ( ax.type.is.array( components[0] ) ) {
    // Components have been passed as an array.
    options = components[1] || {}
    components = components[0]
  } else {
    options = {}
  }

  return {
    $tag: "appkit-fields",
    $nodes: components.map( function( component ) {
      return f.field( component )
    } ),
    ...options.fieldsTag
  }

}

ax.extension.appkit.form.factory.
checkboxes = (f) => function(
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
    if ( ax.type.is.function( checkOptions ) ) {
      checkOptions = checkOptions( checkbox, i )
    }

    return f.check( {
      name: name,
      value: lib.collection.includes( value, checkbox.value ) ? checkbox.value : "",
      disabled: options.disabled || checkbox.disabled,
      readonly: options.readonly || checkbox.readonly,
      datatype: options.datatype,
      checked: checkbox.value,
      label: checkbox.label,
      // inputTag: {
      //   $value: function () {
      //     return this.$('^appkit-form-checkboxes').$value()
      //   },
      //   $data: function () {
      //     return this.$('^appkit-form-checkboxes').$data()
      //   },
      // },
      ...checkOptions
    } )

  } )

  // Add <input> for dependent value matching
  checkboxes.unshift(
    f.input( {
      name: name,
      type: "hidden",
      disabled: true,
      inputTag: {
        $value: function () {
          return this.$('^appkit-form-checkboxes').$value()
        },
        $data: function () {
          debugger
          return this.$('^appkit-form-checkboxes').$data()
        },
      },
    } )
  )

  let checkboxesTag = {
    $data: function() {
      debugger
      return this.$$('input:checked').$data()
      // let values =
      // debugger
      // if ( options.datatype ) {
      //   values = values.map( function( value ) {
      //     return ax.x.appkit.lib.coerce[ options.datatype ]( value )
      //   } )
      // }
      // return values
    },
    $value: function() {
      return this.$data.join(' ')
    },
    $focus: function () {
      this.$('input').focus()
    },
    $disable: function() {
      this.querySelectorAll('input').
        forEach( function( check ) { check.$disable() } )
    },
    $enable: function() {
      if ( !options.disabled ) this.querySelectorAll('input').
        forEach( function( check ) { check.$enable() } )
    },
    ...options.checkboxesTag
  }

  return a['appkit-form-checkboxes']( checkboxes, checkboxesTag )

}

/**
 * Creates ax object for a <textarea>.
 *
 * @example
 * f.textarea( {
 *   name: "detail",
 *   placeholder: "Please provide detail",
 * } ),
 * @param {object} options
 * @param {string} options.disabled The default value for the disabled= attribute. Note that the disabled attribute can be changed by the $disable method. The $enable method, when it's called, refers to options.disabled and if not set the disabled attribute is removed from the element.
 * @param {(object)} options.textareaTag Options for <textarea> ax object.
 * @param {string} options.name The value for the name= attribute.
 * @param {string} options.placeholder The value for the placeholder= attribute. (Convenience mapping)
 * @param {string} options.readonly The value for the readonly= attribute. (Convenience mapping)
 * @param {string} options.required The value for the required= attribute. (Convenience mapping)
 * @param {(object|array)} options.value The value for the value= attribute.
 *
 * @return {object} ax object
 */
 // * @param {(object|string)} options.class The value for the class= attribute. (Convenience mapping)
 // * @param {(object|string)} options.data The value for the data= attribute. (Convenience mapping)
 // * @param {string} options.id The value for the id= attribute. (Convenience mapping)
 // * @param {string} options.style The value for the style= attribute. (Convenience mapping)
 // * @param {string} options.title The value for the title= attribute. (Convenience mapping)
ax.extension.appkit.form.factory.
textarea = (f) => function( options = {} ) {

  return ax.a.textarea( options.value, {

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

    $value: function() {
      return this.value
    },

    $data: function() { return this.$value() },

    $focus: function () {
      this.focus()
    },

    $disable: function() {
      this.disabled = 'disabled'
    },

    $enable: function() {
      if ( !options.disabled ) this.removeAttribute('disabled')
    },

    ...options.textareaTag

  } )

}

/**
 * Creates ax object for an <input type="(checkbox|radio)">.
 *
 * @example
 * f.check( {
 *   checked: "true",
 *   value: "true",
 *   label: "Accept?"
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
ax.extension.appkit.form.factory.
check = (f) => function( options={} ) {

  let checkedValue = options.checked || "on"

  let input = ax.a.input( {

    name: options.name,
    value: checkedValue,

    checked: options.value == checkedValue,
    class: options.class,
    data: options.data,
    disabled: options.disabled,
    id: options.id,
    readonly: options.readonly,
    required: options.required,
    style: options.style,
    title: options.title,
    type: options.type || "checkbox",

    // Prevent user from changing a readonly check
    onclick: options.readonly ? "return false;" : null,

    $value: function() {
      return this.checked ? checkedValue : ( !ax.type.is.undefined( options.unchecked ) ? options.unchecked : null )
    },

    $data: function() {
      let value = this.$value()
      if ( value === null ) {
        return null
      } else if ( options.datatype ) {
        return ax.x.appkit.lib.coerce[ options.datatype ]( value )
      } else {
        return value
      }
    },

    $focus: function () {
      this.focus()
    },

    $disable: function() {
      this.disabled = 'disabled'
      if ( !ax.type.is.undefined( options.unchecked ) ) {
        this.previousSibling.disabled = 'disabled'
      }
    },

    $enable: function() {
      if ( !options.disabled ) {
        this.removeAttribute('disabled')
        if ( !ax.type.is.undefined( options.unchecked ) ) {
          this.previousSibling.removeAttribute('disabled')
        }
      }
    },

    ...options.inputTag

  } )

  let inputs;
  if ( !ax.type.is.undefined( options.unchecked ) ) {
    inputs = [
      ax.a.input( {
        name: options.name,
        value: options.unchecked.toString(),
        type: "hidden",
        $value: function() {
          return this.nextSibling.$value()
        },
        $focus: function() {
          return this.nextSibling.$focus()
        },
        $disable: function() {
          this.disabled = 'disabled'
          this.nextSibling.disabled = 'disabled'
        },
        $enable: function() {
          if ( !options.disabled ) {
            this.removeAttribute('disabled')
            this.nextSibling.removeAttribute('disabled')
          }
        },
      } ),
      input
    ]
  } else {
    inputs = input
  }

  if ( options.label ) {
    let labelTag = {
      $disable: function() {
        this.$('input').$disable()
      },
      $enable: function() {
        this.$('input').$enable()
      },
      $value: function() {
        return this.$('input').$value()
      },
      $focus: function () {
        this.$('input').$focus()
      },

      ...options.labelTag
    }
    let nodes = [ inputs, options.label ]
    if ( options.reverse ) nodes.reverse()
    return ax.a.label( nodes, labelTag )
  } else {
    return inputs
  }

}

/**
 * Creates ax object for an <input>.
 *
 * @example
 * f.input( {
 *   name: "score",
 *   type: "number"
 *   value: 12,
 * } ),
 * @param {object} options
 * @param {string} options.autocomplete The value for the autocomplete= attribute. (Convenience mapping)
 * @param {(object|string)} options.class The value for the class= attribute. (Convenience mapping)
 * @param {(object|string)} options.data The value for the data= attribute. (Convenience mapping)
 * @param {string} options.disabled The default value for the disabled= attribute. Note that the disabled attribute can be changed by the $disable method. The $enable method, when it's called, refers to options.disabled and if not set the disabled attribute is removed from the element.
 * @param {string} options.id The value for the id= attribute. (Convenience mapping)
 * @param {object} options.inputTag Options for <input> ax object.
 * @param {(string|function)} options.invalid The custom validation message, shown when options.pattern does not match. Can be a function that returns a string. The function is called when the field is changed with two arguments: the input value, and the element.validity object.
 * @param {string} options.multiple The value for the multiple= attribute. If set, the name attribute will have [] appended, if not already present in the value from options.name .
 * @param {string} options.name The value for the name= attribute.
 * @param {string} options.pattern The value for the pattern= attribute. (Convenience mapping)
 * @param {string} options.placeholder The value for the placeholder= attribute. (Convenience mapping)
 * @param {string} options.readonly The value for the readonly= attribute. (Convenience mapping)
 * @param {string} options.required The value for the required= attribute. (Convenience mapping)
 * @param {string} options.style The value for the style= attribute. (Convenience mapping)
 * @param {string} options.title The value for the title= attribute. (Convenience mapping)
 * @param {string} options.type The value for the type= attribute. (Convenience mapping)
 * @param {(object|array)} options.value The value for the value= attribute.
 *
 * @return {object} ax object
 */
ax.extension.appkit.form.factory.
input = (f) => function( options={} ) {
// debugger
  let name = options.name
  // Ensure name ends in '[]' when multiple
  if ( options.multiple ) {
    name = lib.field.collection.name( name )
  }

  let value = ax.x.appkit.lib.coerce.string( options.value )

  return ax.a.input( {

    name: name,
    value: value,

    type: options.type,
    autocomplete: options.autocomplete,
    class: options.class,
    data: options.data,
    disabled: options.disabled,
    id: options.id,
    multiple: options.multiple,
    placeholder: options.placeholder,
    readonly: options.readonly,
    required: options.required,
    style: options.style,
    title: options.title,

    maxlength: options.maxlength,

    $init: function () { this.$valid() },

    $on: {

      'input: check field depenencies': function(e) {
        // Field dependencies are normally checked when the
        // `change` event is fired.
        // However inputs need field dependencies checked before the
        // `change` event, so that normal TAB and ENTER behaviours on
        // inputs are preserved. That is, if TAB is pressed, focus should
        // go to the next field. The problem is that the next field may
        // be dependent and not visible until after dependencies are checked.
        // By checking dependencies when an input fires an `input` event,
        // The next field will be vissible ( or not ) when focus moves.
        let form = this.$('^form')
        if ( form ) { form.$dependencies() }

        // if ( this.$valid() ) {
        //
        //   // let code = e.charCode || e.keyCode || e.which
        //
        //   // if ( code === 9 ) {
        //   //   // TAB pressed
        //     // let dependent = this.$('^appkit-form-field appkit-form-field-dependent')
        //
        //
        //
        //   //
        //   //   // debugger
        //   //
        //   // }
        //
        //   // 'keyup: handle TAB and ENTER': function (e) {
        //     if ( e.keyCode === 13 ) {
        //       // RETURN pressed
        //       // debugger
        //       // e.preventDefault()
        //       // ax.x.appkit.lib.field.next( this ).$focus()
        //     }
        //   // },
        //   //
        //   //
        //   //
        //   // if ( code == 13 ) {
        //   //   let dependents = this.$('^form').$$('appkit-form-field-dependent')().length
        //   //   if ( dependents ) {
        //   //     // If form has dependent fields
        //   //     // and field is valid, just blur and stop.
        //   //     // Otherwise continue as normal, which will
        //   //     // show validation message.
        //   //     this.blur()
        //   //     // debugger
        //   //     e.preventDefault()
        //   //     return false
        //   //   } else {
        //   //     return true
        //   //   }
        //   // }
        //
        //
        // } else {
        //   return true
        // }


      },

      'input: check validity': function(e) {
        this.$valid()
      },

    },

    $value: function() {
      return this.value
    },

    $data: function() {
      if ( this.value === "" ) {
        return null
      } else if ( options.datatype ) {
        return ax.x.appkit.lib.coerce[ options.datatype ]( this.value )
      } else {
        if ( options.type === "number" ) {
          return ax.x.appkit.lib.coerce.number( this.value )
        } else {
          return this.value
        }
      }
    },

    $focus: function () {
      // debugger
      this.focus()
    },

    $disable: function() {
      this.disabled = 'disabled'
    },

    $enable: function() {
      if ( !options.disabled ) this.removeAttribute('disabled')
    },

    $valid: function() {
      this.setCustomValidity('')
      if(this.validity.valid) {
        return true
      } else {
        if ( options.invalid ) {
          if ( ax.type.is.function( options.invalid ) ) {
            let invalidMessage = options.invalid( this.value, this.validity )
            if ( invalidMessage ) {
              this.setCustomValidity( invalidMessage )
            }
          } else {
            this.setCustomValidity( options.invalid )
          }
        }
        return false
      }
    },

    ...options.inputTag

  } )

}

ax.extension.appkit.form.factory.
radios = (f) => function(
  options={}
) {

  let a = ax.a
  let x = ax.x
  let lib = ax.x.appkit.lib.field

  let collection = lib.collection.from( options.collection )

  let radios = collection.map( function( radio, i ) {

    let checkOptions = options.check
    if ( ax.type.is.function( checkOptions ) ) {
      checkOptions = checkOptions( checkbox, i )
    }

    return f.check( {
      name: options.name,
      type: 'radio',
      value: options.value === radio.value ? radio.value : null,
      disabled: options.disabled || radio.disabled,
      readonly: options.readonly || radio.readonly,
      datatype: options.datatype,
      checked: radio.value,
      label: radio.label,
      inputTag: {
        $value: function () {
          return this.$('^appkit-form-radios').$value()
        },
        $data: function () {
          return this.$('^appkit-form-radios').$data()
        },
      },
      ...checkOptions
    } )

  } )

  let radiosTag = {
    $value: function() {
      let checked = this.$('input:checked')
      let value = checked ? checked.value : null
      return value
    },
    $data: function() {
      let data = this.$value()
      if ( data === null ) {
        return null
      } else if ( options.datatype ) {
        data = ax.x.appkit.lib.data.
          coerce[ options.datatype ]( data )
      }
      return data
    },
    $focus: function () {
      this.$('input').focus()
    },
    $disable: function() {
      this.querySelectorAll('input').
        forEach( function( check ) { check.$disable() } )
    },
    $enable: function() {
      if ( !options.disabled ) this.querySelectorAll('input').
        forEach( function( check ) { check.$enable() } )
    },
    ...options.radiosTag
  }

  return a['appkit-form-radios']( radios, radiosTag )

}

/**
 * Creates ax object for a <select>.
 *
 * @example
 *  f.select( {
 *    name: "thing",
 *    collection: [
 *      "foo",
 *      {
 *        html: "&mdash;&mdash;&mdash;&mdash;&mdash;",
 *        disabled: true
 *      },
 *      { value: "bar", display: "Bar" }
 *    ],
 *    value: "bar",
 *  } ),
 * @param {object} options
 * @param {(object|array)} options.collection The collection for the <option> tags. If object, keys are submit values and values are display values. If array, an item can be a string, in which case it will be used as the submit value and labelized for the display value, or an array, where the first element is the submit value and the second value is the display value, or an object, with keys value, label, html, disabled.
 * @param {string} options.disabled The default value for the disabled= attribute. Note that the disabled attribute can be changed by the $disable method. The $enable method, when it's called, refers to options.disabled and if not set the disabled attribute is removed from the element.
 * @param {string} options.multiple The value for the multiple= attribute. If set, the name attribute will have [] appended, if not already present in the value from options.name .
 * @param {string} options.name The value for the name= attribute.
 * @param {string} options.placeholder If set, the collection will have an option added as the first item that has the placeholder text with an empty value. If options.required is also set, the option will be disabled.
 * @param {string} options.readonly If set, the <select> will be disabled and a hidden field will be added to with same name and value, so that a form param is a submitted.
 * @param {string} options.required The value for the required= attribute. If not set and options.placeholder not set, the collection will have an empty option added as the first item.
 * @param {object} options.selectTag Options for <select> ax object.
 * @param {(object|array)} options.value The value of the selected option. If set, the corresponding <option> will be set to 'selected'.
 *
 * @return {object} ax object
 */
 // * @param {(object|string)} options.class The value for the class= attribute. (Convenience mapping)
 // * @param {(object|string)} options.data The value for the data= attribute. (Convenience mapping)
 // * @param {string} options.id The value for the id= attribute. (Convenience mapping)
 // * @param {string} options.style The value for the style= attribute. (Convenience mapping)
 // * @param {string} options.title The value for the title= attribute. (Convenience mapping)
ax.extension.appkit.form.factory.
select = (f) => function( options = {} ) {

  let a = ax.a
  let x = ax.x
  let lib = x.appkit.lib.field

  // let lib = x.appkit.lib
  let selectOptions = x.appkit.form.factory.select.options( options )
// debugger
  let name = options.name
  // Ensure name ends in '[]' when multiple
  if ( options.multiple ) {
    name = lib.collection.name( name )
  }

  // Insert hidden field when readonly (and therefore disabled )
  if ( options.readonly ) {
    selectOptions.unshift( ax.a.input( {
      type: "hidden",
      name: name,
      value: options.value
    } ) )
  }

  return ax.a.select( selectOptions, {

    name: name,

    class: options.class,
    data: options.data,
    disabled: options.disabled || options.readonly,
    id: options.id,
    multiple: options.multiple,
    required: options.required,
    style: options.style,
    title: options.title,

    $value: function() {
      if ( this.multiple ) {
        return this.$data().join(' ')
      } else {
        return this.value
      }
    },

    $data: function() {
      if ( this.multiple ) {
        let values = []
        let selected = this.querySelectorAll('option:checked')
        selected.forEach( function( option ) {
          let value = option.value
          let datatype = options.datatype
          if ( datatype ) {
            value = ax.x.appkit.lib.coerce[ datatype ]( value )
          }
          values.push( value )
        } )
        return values
      } else {
        return this.value
      }
    },

    $focus: function () {
      this.focus()
    },

    $disable: function() {
      this.disabled = 'disabled'
    },

    $enable: function() {
      if ( !options.disabled ) this.removeAttribute('disabled')
    },

    ...options.selectTag

  } )

}

ax.extension.appkit.report.factory.
one = (r) => function( key, component, options={} ) {

  let a = ax.a

  if ( ax.type.is.function( component ) ) {

    component = component(
      ax.extension.appkit.report.factory( {
        data: options.data || r.data[ key ],
        scope: options.scope || r.scope.concat( [ key ] ),
        layout: options.layout || r.layout
      } )
    )

  }
// debugger
  return a['appkit-report-field-one']( component )

}

ax.extension.appkit.report.factory.
many = (r) => function( name, component, options={} ) {

  let a = ax.a

  if ( ax.type.is.function( component ) ) {

    let data = options.data || r.data[ options.key || name ] || []
    let scope = options.scope || r.scope.concat( [ name, '' ] )
    let layout = options.layout || r.layout

    let factory = ax.extension.appkit.report.factory( {
      data: data,
      scope: scope,
      layout: layout
    } )
    factory.items = (rr) => ax.extension.appkit.report.factory.many.items( rr )
    factory.add = (rr) => ax.extension.appkit.report.factory.many.add( rr )

    component = component( factory )
    //
    // data.map( function( datum, i ) {
    //   let
    //   return a['appkit-report-field-many-item']( component( factory, i ) )
    // } )

  }

  return a['appkit-report-field-many']( component )

}

ax.extension.appkit.report.factory.
field = (r) => function( keyOrOptions={}, options={} ) {

  if ( ax.type.is.string( keyOrOptions ) ) {
    options.key = keyOrOptions
  } else {
    options = keyOrOptions
  }

  let a = ax.a
  let x = ax.x
  let field = x.appkit.report.factory.field
  let lib = x.appkit.lib.field

  let name = lib.name.assemble( ...r.scope, options.key )

  let component = a["appkit-report-field-body"]( [
    field.caption( options ),
    field.help( options.help ),
    field.output(r)( options ),
    field.hint( options.hint ),
  ], options.bodyTag )

  if ( options.dependent !== false ) {
    component = field.dependent(r)( component, options.dependent )
  }

  return a["appkit-report-field"]( component, {
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
      return this.$('appkit-report-field-output > *').$value()
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
    if ( ax.type.is.function( checkOptions ) ) {
      checkOptions = checkOptions( checkbox, i )
    }

    return r.check( {
      name: name,
      value: lib.collection.includes( value, checkbox.value ) ? checkbox.value : "",
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
 * Creates ax object for an <input type="(checkbox|radio)">.
 *
 * @example
 * r.check( {
 *   checked: "true",
 *   value: "true",
 *   label: "Accept?"
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

  let checkedValue = options.checked || "on"

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
    type: options.type || "checkbox",

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
 * Creates ax object for an <input type="(checkbox|radio)">.
 *
 * @example
 * r.check( {
 *   checked: "true",
 *   value: "true",
 *   label: "Accept?"
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
 *   name: "score",
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
    let prototype = ax.type.is.function( options.type ) ? options.type : x.appkit.lib.text.capitalize( options.type )
    value = new window[ prototype ]( value )
    if ( options.stringify ) {
      if ( ax.type.is.string( options.stringify ) ) {
        value = value[ options.stringify ]()
      } else {
        value = value[ options.stringify.method || 'toString' ]( ...( options.stringify.arguments || [] ) )
      }
    } else {
      value = value.toString()
    }
  }

  if ( ax.type.is.object( value ) ) {
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
 *   name: "score",
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
 *   name: "score",
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

  if ( !ax.type.is.function( liTagOptions ) ) {
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
    if ( ax.type.is.function( checkOptions ) ) {
      checkOptions = checkOptions( checkbox, i )
    }

    return r.check( {
      name: options.name,
      type: 'radio',
      value: options.value === radio.value ? radio.value : "",
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
 *   name: "score",
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
  let type = options.type || "img"

  let content

  if ( value ) {
    if ( type === "video" || type === "audio") {
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

    ...( options.controls === false ? {} : { controls: "controls" } ),

    ...content,

    ...options[ type + 'Tag' ]

  }, options.tag ) )

}

ax.extension.appkit.document.stylesheet.proxy.shim = {
  get: ( target, property ) => function ( rules, options={} ) {

    return target( rules, { scope: property, ...options } )

  }
}

ax.extension.appkit.document.stylesheet.proxy.
function = function( styles, options={} ) {

  let a = ax.a
  let x = ax.x

  x.appkit.document.insert(
    'head',
    'style',
    x.appkit.lib.style( styles, options.scope ),
    { tag: options.styleTag }
  )

  return null

}

ax.extension.appkit.lib.field.collection.value = function( value ) {

  if ( ax.type.is.array( value ) ) {
    return value
  } else if ( value ) {
    return [ value ]
  } else {
    return []
  }

}

ax.extension.appkit.lib.field.collection.name = function(name) {

  if ( name && name.slice(-2) != "[]" ) {
    name = name + "[]";
  };

  return name;

};

ax.extension.appkit.lib.field.collection.from = function( collection ) {

  if ( !collection ) {
    return []
  } else if ( ax.type.is.array( collection ) ) {
    return collection.map( function(item) {
      if ( ax.type.is.array( item ) ) {
        return { value: item[0], label: item[1] }
      } else if ( ax.type.is.object( item ) ) {
        return item
      } else {
        return { value: item, label: ax.x.appkit.lib.text.labelize( item.toString() ) }
      }
    } )
  } else {
    return Object.keys( collection ).map(function( key ) {
      return { value: key , label: collection[key] }
    } )
  }

}

ax.extension.appkit.lib.field.collection.includes = function( array, value ) {

  if ( value === undefined || value === null ) value = ''
  return array.some( function( el ) { return el.toString() === value.toString(); } );

};

ax.extension.appkit.lib.field.name.
dismantle = function(name) {

  return name.split('[').map( function( string ) {
    if ( string.slice(-1) === "]" ) {
      return string.slice( 0, string.length - 1 )
    }
      return string
  } )

}

ax.extension.appkit.lib.field.name.
assemble = function( ...keys ) {

  let primary = keys.shift()

  if ( keys.length ) {
    return primary + '[' + keys.join('][') + ']'
  } else {
    return primary
  }

}

// ax.extension.appkit.lib.field.name.
// assemble = function( keys ) {
//
//
//   return
//
// }

ax.extension.appkit.lib.style.rules.rule = function( object, selectors ) {

  var result = ""
  Object.keys( object ).forEach( function(property) {
    if ( !ax.type.is.object( object[property] ) ) {
      // Convert property from camelCase to kebab-case
      var kebab =  ( property[0].match(/[A-Z]/) ? "-" : "" ) + property.
        replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
      result += ("\t" + kebab + ": " + object[property] + ";\n")
    }
  } )

  if ( result === "" ) {
    return result
  } else {
    return selectors.join(" ").replace(/\s*&\s*/g, '') +
      " {\n" + result + "\n}\n"
  }

}

ax.extension.appkit.lib.form.data.object = function( form ) {

  let lib = ax.extension.appkit.lib
  let result = {};

  for( let el of form.elements ) {

    if ( el.disabled ) continue

    let name = el.name

    if ( name ) {

      let value

      // Form elements created by Ax
      // have a $value function. Use
      // this in preference.
      if ( el.$data ) {

        value = el.$data()

      } else {

        value = el.value

        if ( el.type === "checkbox" || el.type === "radio" ) {
          value = el.checked ? el.value : null
        } else {
          value = el.value
        }

      }

      // Don't include empty fields
      if ( value !== null ) {
        let keys = lib.field.name.dismantle( name )
        lib.object.assign( result, keys, value )
      }

    }
  }

 return result

}

ax.extension.appkit.lib.query.from.
object = function( object, options={} ) {

  var queryString = []
  var property;

  for (property in object) {
    if (object.hasOwnProperty(property)) {
      var k = options.prefix ? options.prefix + "[" + property + "]" : property,
        v = object[property];
      queryString.push((v !== null && ax.type.is.object( v )) ?
        this.objectToQueryString(v, k) :
        encodeURIComponent(k) + "=" + encodeURIComponent(v));
    };
  };
  return queryString.join("&");

};

ax.extension.appkit.lib.query.to.
object = function( queryString ) {

  var result = {}

  queryString.split("&").map( function( pair ) {
    pair = pair.split("=")
    result[ pair[0] ] = decodeURIComponent( pair[1] )
  } )

  return result

}

ax.extension.appkit.lib.date.now.
value = function() {
  var date = new Date();
  return  date.getFullYear() + '-' +
          date.getMonth() + '-' +
          date.getDate()
}

// ax.extension.appkit.lib.url.search.object = function( string='' ) {
//
//   var result = {}
//
//   string.split("&").map( function( pair ) {
//     pair = pair.split("=")
//     result[ pair[0] ] = decodeURIComponent( pair[1] )
//   } )
//
//   return result
//
// }

ax.extension.appkit.lib.animate.fade.out = function(element, options={}) {

  if ( element.style.display !== "none" ) {
    this.toggle( element, options )
  }

};

ax.extension.appkit.lib.animate.fade.in = function(element, options={}){

  if ( element.style.display === "none" ) {
    this.toggle( element, options )
  }

};

ax.extension.appkit.lib.animate.fade.toggle = function(element, options={}) {

  let shown

  if ( element.style.display === 'none' ) {
    shown = false
    element.style.opacity = 0
    element.style.display = "unset";
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
      if ( options.complete ) options.complete()
    }
  }

  step()

}

ax.extension.appkit.form.factory.many.
items = ( f ) => function( component, options={} ) {

  let a = ax.a
  let x = ax.x

  if ( ax.type.is.function( component ) ) {

    let data = options.data || f.data
    let scope = options.scope || f.scope
    let layout = options.layout || f.layout
    let template = component

    component = data.map( function( datum, i ) {

      let fi = ax.extension.appkit.form.factory.many.items.factory(f, data, scope, layout )

      return a['appkit-form-field-many-item']( component( fi, i ) )
    } )

    return a['appkit-form-field-many-items']( component, {
      $add: function( addOptions ) {

        let data = ( options.new && options.new() ) || {}

        let fi = ax.extension.appkit.form.factory.many.items.factory(f, data, scope, layout )

        let item = a['appkit-form-field-many-item']( template( fi, null ) )

        this[ addOptions.insert || 'append' ]( item )

      },
    } )

  } else {

    return a['appkit-form-field-items']( component )

  }


}

ax.extension.appkit.form.factory.many.
add = ( f ) => function( component, options={} ) {

  let a = ax.a
  let x = ax.x

  return x.appkit.button( component || "➕ Add", function () {
    this.$('^appkit-form-field-many appkit-form-field-many-items').$add( options )
  } )

}

ax.extension.appkit.form.factory.many.
moveup = ( fi ) => function( component, options={} ) {

  let a = ax.a
  let x = ax.x

  return x.appkit.button( component || "⇡ Move up", function (e, el) {
    var target = el.$('^appkit-form-field-many-item')
    var previous = target.previousSibling
    var parent = target.parentElement
    previous && parent.insertBefore( target, previous )
  } )

}

ax.extension.appkit.form.factory.many.
remove = ( fi ) => function( component, options={} ) {

  let a = ax.a
  let x = ax.x

  return x.appkit.button( component || "➖ Remove", function () {
    let confirmed = confirm( 'Are you sure that you want to remove this item?' )
    if ( confirmed ) this.$('^appkit-form-field-many-item').remove()
  } )

}

ax.extension.appkit.form.factory.many.
movedown = ( fi ) => function( component, options={} ) {

  let a = ax.a
  let x = ax.x

  return x.appkit.button( component || "⇡ Move down", function (e, el) {
    var target = el.$('^appkit-form-field-many-item')
    var next = target.nextSibling
    var parent = target.parentElement
    next && parent.insertAfter( target, previous )
  } )

}

ax.extension.appkit.form.factory.field.
input = (f) => function( options ) {

  let a = ax.a
  let x = ax.x

  let as = options.as || 'input'
  let value

  if ( !ax.type.is.undefined( options.value ) ) {
    value = options.value
  } else if (
    ax.type.is.object( f.data ) &&
    !ax.type.is.undefined( f.data[ options.key ] )
  ) {
    value = f.data[ options.key ]
  }

  return a['appkit-form-field-input'](
    f[ as ]( {
      name: options.name,
      value: value,
      type: options.type,
      datatype: options.datatype,
      collection: options.collection,

      autocomplete: options.autocomplete,
      disabled: options.disabled,
      multiple: options.multiple,
      placeholder: options.placeholder,
      readonly: options.readonly,
      required: options.required,
      style: options.style,
      title: options.title,

      maxlength: options.maxlength,
      minlength: options.minlength,

      ...options[ as ],
    } ) )

}

ax.extension.appkit.form.factory.field.
dependent = (f) => function( component, options={} ) {

  let a = ax.a
  let x = ax.x
  let dependent = x.appkit.form.factory.field.dependent

  if ( ax.type.is.string( options ) ) {
    options = { key: options }
  } else if ( options === true ) {
    options = { traverse: function() {
      return x.appkit.lib.field.previous( this )
    } }
  } else if ( options === null ) {
    options = {}
  }

  let dependentTag = {
    style: "display: none;",
    $init: function () { this.$process() },
    $on: {
      'change: check field dependencies': function() {
        this.$('^form').$dependencies()
      },

    },
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
caption = function( options={} ) {

  if (
    options.caption === false ||
    (
      ax.type.is.undefined( options.caption ) &&
      options.type === "hidden"
    )
  ) {

    return null

  } else {

    let component

    if ( options.caption === true ) {
      options.caption = null
    }

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

    return ax.a["appkit-form-field-caption"](
      component,
      {
        ...options.captionTag
      }
    )

  }



}

ax.extension.appkit.form.factory.field.
hint = function( component ) {

  return ax.a["appkit-form-field-hint"]( component )

};

ax.extension.appkit.form.factory.
select.options = function( options ) {


  let lib = ax.x.appkit.lib

  let value = lib.field.collection.value( options.value )
  let collection = lib.field.collection.from( options.collection, { value: value } )

  collection = collection.map( function( item ) {
    return ax.a.option( item.label, {
      value: item.value,
      disabled: item.disabled,
      // ...( item.label ? { $text: item.label } : {} ),
      // ...( item.html ? { $html: item.html } : {} ),
    } )
  })

  // Mark each select options as selected if in field value.
  collection = collection.map( function( option ) {
    if ( option.value && lib.field.collection.includes( value, option.value ) ) {
      option.selected = "selected"
    }
    return option
  } )

  // include blank option with any placeholder text, and select it if no other value
  if ( options.placeholder || options.placeholder === "" ) {

    let optionTag = {
      value: "",
      disabled: options.required,
      ...( value ? {} : { selected: true } )
    }

    collection.unshift(
      ax.a.option( options.placeholder, optionTag )
    )

  }

  return collection

}

ax.extension.appkit.report.factory.many.
items = ( f ) => function( component, options={} ) {

  let a = ax.a
  let x = ax.x


  if ( ax.type.is.function( component ) ) {

    let data = options.data || f.$data
    let scope = options.scope || f.$scope
    let layout = options.layout || f.$layout
    let template = component

    component = data.map( function( datum, i ) {
      let factory = ax.extension.appkit.report.factory( {
        data: datum,
        scope: scope,
        layout: layout
      } )
      factory.remove = (f) => ax.extension.appkit.report.factory.many.remove( f )

      return a['appkit-report-field-many-item']( component( factory, i ) )
    } )

    return a['appkit-report-field-many-items']( component, {
      $add: function( addOptions ) {

        let data = ( options.new && options.new() ) || {}

        let factory = ax.extension.appkit.report.factory( {
          data: data,
          scope: scope,
          layout: layout
        } )
        factory.remove = (f) => ax.extension.appkit.report.factory.many.remove( f )

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

  return x.appkit.button( component || "➕ Add", function () {
    this.$('^appkit-report-field-many appkit-report-field-many-items').$add( options )
  } )

}

ax.extension.appkit.report.factory.many.
remove = ( f ) => function( component, options={} ) {

  let a = ax.a
  let x = ax.x

  return x.appkit.button( component || "➖ Remove", function () {
    let confirmed = confirm( 'Are you sure that you want to remove this item?' )
    if ( confirmed ) this.$('^appkit-report-field-many-item').remove()
  } )

}

ax.extension.appkit.report.factory.field.
dependent = (r) => function( component, options={} ) {

  let a = ax.a
  let x = ax.x
  let dependent = x.appkit.report.factory.field.dependent

  if ( ax.type.is.string( options ) ) {
    options = { key: options }
  }

  let dependentTag = {
    style: "display: none;",
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

  return a["appkit-report-field-dependent"]( component, dependentTag )

};

ax.extension.appkit.report.factory.field.
help = function( component ) {

  let a = ax.a
  let x = ax.x

  return a["appkit-report-field-help-wrapper"](
    a["appkit-report-field-help"]( component, {
      $toggle: function () {
        x.appkit.lib.animate.fade.toggle( this )
      },
      style: { display: "none" }
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

  return ax.a["appkit-report-field-caption"](
    component,
    {
      ...options.captionTag
    }
  )

}

ax.extension.appkit.report.factory.field.
hint = function( component ) {

  return ax.a["appkit-report-field-hint"]( component )

};

ax.extension.appkit.report.factory.field.
output = (r) => function( options ) {

  let a = ax.a
  let x = ax.x

  let as = options.as || 'text'
  let value = (
    r.data &&
    (
      r.data[ options.key ] ||
      ( r.data[ options.key ] === 0 ? "0" : null )
    )
   ) || options.value

  return a['appkit-report-field-output']( r[ as ]( {
    name: options.name,
    value: value,
    type: options.type,
    collection: options.collection,
    stringify: options.stringify,
    ...options[ as ],
  } ) )

}

ax.extension.appkit.document.css = new Proxy(
  ax.extension.appkit.document.stylesheet.proxy.function,
  ax.extension.appkit.document.stylesheet.proxy.shim
)

ax.extension.appkit.form.factory.many.items.
factory = (f, data, scope, layout ) => {

  let factory = ax.extension.appkit.form.factory( {
    data: data,
    scope: scope,
    layout: layout
  } )

  factory.remove = (f) => ax.extension.appkit.form.factory.many.remove( f )
  factory.moveup = (f) => ax.extension.appkit.form.factory.many.moveup( f )
  factory.movedown = (f) => ax.extension.appkit.form.factory.many.movedown( f )

  return factory

}

ax.extension.appkit.form.factory.field.
dependent.process = function( options ) {

  let x = ax.x
  let lib = x.appkit.lib.animate
  if ( this.$match() ) {
    if ( options.onmatch ? options.onmatch( this ) : true ) {
      lib.fade.in( this )
// DEV
if ( !this.$('appkit-form-field-input > *').$enable ) debugger
      this.$('appkit-form-field-input > *').$enable()
    }
  } else {
    if ( options.onmismatch ? options.onmismatch( this ) : true ) {

      lib.fade.out( this )
      this.$('appkit-form-field-input > *').$disable()
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
        ax.throw( `Field \`options.dependent\` needs a \`key\`, \`name\`, \`selector\` or \`traverse\`.` )
      }
      selector = `appkit-form-field[name='${ name }']`
    }

    let search = options.search || 'form'
    selected = this.$(`^${ search }`).$( selector )

  }

  if ( selected ) {
    if ( selected.$tag !== 'appkit-form-field' ) {
      selected = selected.$('^appkit-form-field')
    }
    if ( selected ) {
      return selected
    } else {
      debugger
      ax.throw( `Form field failed to find <appkit-form-field> for its dependency using ${ JSON.stringify( options ) }.` )
    }
  } else {
    ax.throw( `Form field failed to select its dependency using ${ JSON.stringify( options ) }.` )
  }

}

ax.extension.appkit.form.factory.field.
dependent.match = function( options ) {

  if ( this.$dependable() ) {

    let dependency = this.$dependency()

    // if ( !dependency ) debugger

    if ( dependency.$match() ) {

      let dependencyValue = dependency.$value()

      // if ( ax.type.is.array( dependencyValue ) ) {
      //   dependencyValue = dependencyValue.join(' ')
      // }

      if ( options.value ) {
        return dependencyValue == options.value
      } else if ( options.pattern ) {
        return new RegExp( options.pattern || "" ).
          test( dependencyValue )
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

ax.extension.appkit.form.factory.field.caption.
label = function( options ) {

  let a = ax.a
  let x = ax.x
  let lib = x.appkit.lib

  if ( options.label === false ) return

  let component = [ options.label || lib.text.labelize( options.key ) ]

  let labelTag = {
    $on: { 'click: focus on input': function() {
      this.$( "^appkit-form-field-body", 'appkit-form-field-input > *').$focus()
    } },
    ...options.labelTag
  }

  return a["appkit-form-field-label"]( component, labelTag )

}

ax.extension.appkit.form.factory.field.caption.
helpbutton = function( options ) {

  let a = ax.a
  let x = ax.x

  return a['appkit-form-field-helpbutton']( {
    $state: false,
    $nodes: function() {
      return a["appkit-form-field-arrow"](
        { $text: this.$state() ? " ? ▴ " : " ? ▾ " }
      )
    },
    $on: { 'click: toggle help': function() {
      this.$state = !this.$state()
      this.$('^appkit-form-field', 'appkit-form-field-help').$toggle()
    } },
    ...options.helpbuttonTag
  } )

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
        ax.throw( `Field \`options.dependent\` needs a \`key\`, \`name\`, \`selector\` or \`traverse\`.` )
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
      ax.throw( `Report field failed to find <appkit-report-field> for its dependency using ${ JSON.stringify( options ) }.` )
    }
  } else {
    ax.throw( `Report field failed to select its dependency using ${ JSON.stringify( options ) }.` )
  }

}

ax.extension.appkit.report.factory.field.
dependent.match = function( options ) {

  if ( this.$dependable() ) {

    let dependency = this.$dependency()

    if ( dependency.$match() ) {

      let value = dependency.$value()

      if ( ax.type.is.array( value ) ) {
        value = value.join(' ')
      }

      if ( options.value ) {
        return value == options.value
      } else if ( options.pattern ) {
        return new RegExp( options.pattern || "" ).
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

  // let labelTag = {
  //   $on: { 'click: focus on input': function() {
  //     this.$( "^appkit-report-field", 'appkit-report-field-input > *').$focus()
  //   } },
  //   ...
  // }

  return a["appkit-report-field-label"]( component, options.labelTag )

}

ax.extension.appkit.report.factory.field.caption.
helpbutton = function( options ) {

  let a = ax.a
  let x = ax.x

  return a['appkit-report-field-helpbutton']( {
    $state: false,
    $nodes: function() {
      return a["appkit-report-field-arrow"](
        { $text: this.$state() ? " ? ▴ " : " ? ▾ " }
      )
    },
    $on: { 'click: toggle help': function() {
      this.$state = !this.$state()
      this.$('^appkit-report-field', 'appkit-report-field-help').$toggle()
    } },
    ...options.helpbuttonTag
  } )

}

ax.extension.appkit.form.factory.
password = (f) => function( options={} ) {

  let a = ax.a

  let secure = function ( element ) {
    if ( element.value ) {
      element.style.fontFamily = "text-security-disc"
    } else {
      element.style.fontFamily = "unset"
    }
  }

  let placeholder_primary
  let placeholder_secondary

  if ( ax.type.is.array( options.placeholder ) ) {
    placeholder_primary = options.placeholder[0]
    placeholder_secondary = options.placeholder[1]
  } else {
    placeholder_primary = options.placeholder
    placeholder_secondary = "Confirm password"
  }

  let component = [
    a["appkit-form-textsecurity-password-input"](
      f.input( {
        name: options.name,
        value: options.value,
        autocomplete: "off",
        placeholder: placeholder_primary,
        readonly: options.readonly,
        required: options.required,
        inputTag: {
          $on: { 'input: secure text': function () {
            secure( this )
          } },
          $init: function () { secure( this ) },
        },
        ...options.input
      } )
    ),
    options.confirm === false ? null : a["appkit-form-textsecurity-password-confirmation"](
      f.input( {
        value: options.value,
        autocomplete: "off",
        placeholder: placeholder_secondary,
        readonly: options.readonly,
        required: options.required,
        inputTag: {
          $on: { 'input: secure text': function () {
            secure( this )
          } },
          $init: function () { secure( this ) },
        },
        ...options.confirmation
      } )
    ),
   ]

  return a["appkit-form-textsecurity-password"](
    component, {
      $value: function() {
        return this.$('input').$value()
      },
      $disable: function() {
        this.$('input').$disable()
      },
      $enable: function() {
        this.$('input').$enable()
      },
      $focus: function () {
        this.$('input').focus()
      },
      $on: {
        'input: check validity': function () {
          if ( options.confirm !== false ) {
            let inputs = this.$("input")()
            let values = this.$("input").value()
            if ( values[0] === values[1] ) {
              inputs[1].setCustomValidity('')
            } else {
              inputs[1].setCustomValidity('Passwords must match.')
            }
          }
        }
      },
    }
  )

}

ax.extension.appkit.form.factory.confirm = (f) => function(
  options={}
) {

  let a = ax.a
  let x = ax.x
  let confirm = x.appkit.form.factory.confirm

  debugger

  

}

// f.confirm( {
//
// } )
//
// f.field( key: "password", as: "confirm", fieldTag: {}, input: {} )

ax.extension.appkit.form.factory.
multiselect = (f) => function( options={} ) {

  let a = ax.a
  let x = ax.x
  let form = x.appkit.form
  let lib = ax.x.appkit.lib.field

  options.name = lib.collection.name( options.name )
  options.value = lib.collection.value( options.value )
  options.collection = lib.collection.from( options.collection )

  return a['appkit-form-multiselect'](
    [
      form.factory.multiselect.select( f, options ),
      form.factory.multiselect.selected( f, options )
    ],
    {
      $init: function() { this.$preselect(); },

      $value: function() {
        return this.$('appkit-form-multiselect-selected').$state().
          map( function(item) { return item.value } )
      },

      $focus: function () {
        this.$('select').focus()
      },

      $disable: function() {
        this.$$('input').$disable()
      },

      $enable: function() {
        if ( !options.disabled ) this.$$('input').$enable()
      },

      $preselect: function () {
        var items = []
        options.value.map( (itemValue) => {

          var select = this.$("select")
          var selections = select.options

          for (var i=0, n=selections.length; i<n ; i++) {
            if ( selections[i].value.toString() === itemValue.toString() ) {
              items.push( {
                index: i,
                value: itemValue,
                label: selections[i].text,
              } )
              selections[i].disabled = "disabled"
            }
          }

        } )
        this.$("appkit-form-multiselect-selected").$state = items
      },

      ...options.multiselectTag

    }
  )

}

ax.extension.appkit.form.factory.
language = (f) => function( options={} ) {

  let a = ax.a
  let x = ax.x
  // let f = this
  let language = x.appkit.form.factory.language

  var selectOptions = Object.assign(
    {
      name: options.name,
      value: options.value,

      class: options.class,
      data: options.data,
      disabled: options.disabled,
      readonly: options.readonly,
      id: options.id,
      multiple: options.multiple,
      placeholder: options.placeholder || "Select language...",
      required: options.required,
      style: options.style,
      title: options.title,

      collection: language.collection,
    },
    options.select
  )

  return a['appkit-form-language'](
    f.select( selectOptions ),
    {
      $value: function() {
        // TODO set value
        return this.$('select').$value()
      },
      $disable: function() {
        this.$('select').$disable()
      },
      $enable: function() {
        this.$('select').$enable()
      },
      $focus: function () {
        this.$('select').focus()
      },
      ...options.languageTag
    }
  )

}

ax.extension.appkit.form.factory.country = (f) => function(
  options={}
) {

  let a = ax.a
  let x = ax.x
  let country = x.appkit.form.factory.country

  var selectOptions = Object.assign(
    {
      name: options.name,
      value: options.value,

      class: options.class,
      data: options.data,
      disabled: options.disabled,
      readonly: options.readonly,
      id: options.id,
      multiple: options.multiple,
      required: options.required,
      style: options.style,
      title: options.title,

      collection: country.collection,
    },
    options.select
  )

  return a['appkit-form-country'](
    f.select( selectOptions ),
    {
      $value: function() {
        return this.$('select').$value()
      },
      $disable: function() {
        this.$('select').$disable()
      },
      $enable: function() {
        this.$('select').$enable()
      },
      $focus: function () {
        this.$('select').focus()
      },
      ...options.countryTag
    }
  )

}

ax.extension.appkit.form.factory.selectinput = (f) => function(
  options={}
) {

  let a = ax.a
  let x = ax.x
  let lib = ax.x.appkit.lib

  let collection = lib.field.collection.from( options.collection || { 0: "Off", 1: "On" } )
  collection.push( { label: "—————", disabled: true } )
  collection.push( { value: "__USE_INPUT__", label: "Enter a value" } )

  let selectValue
  let inputValue

  if ( options.value ) {
    let valueInCollection = collection.some( option => option.value == options.value )
    selectValue = valueInCollection ? options.value : "__USE_INPUT__"
    inputValue = valueInCollection ? null : options.value
  } else {
     // If no value and no placeholder then show the input
    selectValue = options.placeholder === undefined ? "__USE_INPUT__" : ""
  }

  let selectinputTag = {
    $value: function() {
      return this.$('appkit-form-selectinput-hiddeninput input').value
    },
    $focus: function () {
      let select = this.$('select')
      if ( select.value === "__USE_INPUT__" ) {
        this.$('appkit-form-selectinput-input input').focus()
      } else {
        select.focus()
      }
    },
    $disable: function() {
      let hiddeninput = this.$('appkit-form-selectinput-hiddeninput input')
      hiddeninput.$disable()
    },
    $enable: function() {
      if ( !options.disabled ) {
        let hiddeninput = this.$('appkit-form-selectinput-hiddeninput input')
        hiddeninput.$enable()
      }
    },
    $on: { change: function () {
      let select = this.$('select')
      let input = this.$('appkit-form-selectinput-input input')
      let hiddeninput = this.$('appkit-form-selectinput-hiddeninput input')
      if ( select.value === "__USE_INPUT__" ) {
        input.style.display = ""
        hiddeninput.value = input.value
        if ( options.required ) {
          select.removeAttribute("required")
          input.required = 'required'
        }
        if ( select == document.activeElement ) {
          input.focus()
        }
      } else {
        input.style.display = "none"
        hiddeninput.value = select.value
        if ( options.required ) {
          input.removeAttribute("required")
          select.required = 'required'
        }
      }
    } }
  }

  return a['appkit-form-selectinput'](
    [
      a['appkit-form-selectinput-hiddeninput']( f.input(
        {
          name: options.name,
          value: options.value,
          type: "hidden",
          ...options.hiddeninput
        }
      ) ),
      a['appkit-form-selectinput-select']( f.select(
        {
          collection: collection,
          placeholder: options.placeholder,
          required: options.required,
          value: selectValue,
          ...options.select
        }
      ) ),
      a['appkit-form-selectinput-input']( f.input( {
        style: inputValue ? "" : "display: none",
        value: inputValue,
        ...options.input
      } ) )
    ],
    selectinputTag
  )

}

// options - goes to f.select with collection added

ax.extension.appkit.form.factory.timezone = (f) => function(
  options={}
) {

  let a = ax.a
  let x = ax.x
  // let f = this
  let timezone = ax.extension.appkit.form.factory.timezone

  var selectOptions = Object.assign(
    {
      name: options.name,
      value: options.value,

      class: options.class,
      data: options.data,
      disabled: options.disabled,
      readonly: options.readonly,
      id: options.id,
      multiple: options.multiple,
      required: options.required,
      style: options.style,
      title: options.title,

      collection: timezone.collection,
    },
    options.select
    //   placeholder: options.placeholder,
    //   // required: options.required,
    //   // disabled: options.disabled,
    //   selectTag: options.selectTag || {},
    // }
  )

  return a['appkit-form-timezone'](
    f.select( selectOptions ),
    {
      $value: function() {
        return this.$('select').$value()
      },
      $disable: function() {
        this.$('select').$disable()
      },
      $enable: function() {
        this.$('select').$enable()
      },
      $focus: function () {
        this.$('select').focus()
      },
      ...options.timezoneTag
    }
  )
}

ax.extension.appkit.form.factory.country.collection = {
  AF: "Afghanistan",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AQ: "Antarctica",
  AG: "Antigua and Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia",
  BA: "Bosnia and Herzegovina",
  BW: "Botswana",
  BV: "Bouvet Island",
  BR: "Brazil",
  IO: "British Indian Ocean Territory",
  BN: "Brunei Darussalam",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  CV: "Cape Verde",
  KY: "Cayman Islands",
  CF: "Central African Republic",
  TD: "Chad",
  CL: "Chile",
  CN: "China",
  CX: "Christmas Island",
  CC: "Cocos (Keeling) Islands",
  CO: "Colombia",
  KM: "Comoros",
  CG: "Congo",
  CD: "Congo, The Democratic Republic of The",
  CK: "Cook Islands",
  CR: "Costa Rica",
  CI: "CÔte D'ivoire",
  HR: "Croatia",
  CU: "Cuba",
  CY: "Cyprus",
  CZ: "Czech Republic",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  ET: "Ethiopia",
  FK: "Falkland Islands (Malvinas)",
  FO: "Faroe Islands",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  GF: "French Guiana",
  PF: "French Polynesia",
  TF: "French Southern Territories",
  GA: "Gabon",
  GM: "Gambia",
  GE: "Georgia",
  DE: "Germany",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GN: "Guinea",
  GW: "Guinea Bissau",
  GY: "Guyana",
  HT: "Haiti",
  HM: "Heard Island and Mcdonald Islands",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran, Islamic Republic of",
  IQ: "Iraq",
  IE: "Ireland",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KP: "Korea, Democratic People's Republic of",
  KR: "Korea, Republic of",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Lao People's Democratic Republic",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libyan Arab Jamahiriya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macao",
  MK: "Macedonia, The Former Yugoslav Republic of",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",
  MX: "Mexico",
  FM: "Micronesia, Federated States of",
  MD: "Monaco",
  MN: "Mongolia",
  MS: "Montserrat",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands",
  AN: "Netherlands Antilles",
  NC: "New Caledonia",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Norfolk Island",
  MP: "Northern Mariana Islands",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestinian Territory, Occupied",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines",
  PN: "Pitcairn",
  PL: "Poland",
  PR: "Puerto Rico",
  QA: "Qatar",
  RE: "RÉunion",
  RO: "Romania",
  RU: "Russian Federation",
  RW: "Rwanda",
  SH: "Saint Helena",
  KN: "Saint Kitts and Nevis",
  LC: "Saint Lucia",
  PM: "Saint Pierre and Miquelon",
  VC: "Saint Vincent and The Grenadines",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome and Principe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  CS: "Serbia and Montenegro",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  GS: "South Georgia and The South Sandwich Islands",
  ES: "Spain",
  LK: "Sri Lanka",
  SD: "Sudan",
  SR: "Suriname",
  SJ: "Svalbard and Jan Mayen",
  SZ: "Swaziland",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syrian Arab Republic",
  TW: "Taiwan, Province of China",
  TJ: "Tajikistan",
  TZ: "Tanzania, United Republic of",
  TH: "Thailand",
  TL: "Timor Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad and Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TC: "Turks and Caicos Islands",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  GB: "United Kingdom",
  US: "United States",
  UM: "United States Minor Outlying Islands",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VE: "Venezuela",
  VN: "Viet Nam",
  VG: "Virgin Islands, British",
  VI: "Virgin Islands, U.S.",
  WF: "Wallis and Futuna",
  EH: "Western Sahara",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe"
}

ax.extension.appkit.document.css["appkit-form-textsecurity-password"](
  {
    display: 'inline-block',
    width: "100%",
    verticalAlign: "top",
    '>*': {
      display: "block",
    },
    input: {
      fontSize: "1.1em",
      lineHeight: "1em",
      padding: "0.5px",
      verticalAlign: "top",
    }
  }
)

ax.extension.appkit.document.css["appkit-form-multiselect"](
  {
    display: "inline-block",
    verticalAlign: "top",
    'appkit-form-multiselect-selected': {
      display: "block",
      padding: "5px",
      border: "1px solid #b3b3b3",
      borderBottomLeftRadius: "4px",
      borderBottomRightRadius: "4px",
      borderTop: "none",
    },
    'appkit-form-multiselect-selected-item': {
      display: "block",
      overflow: "auto",
    },
    'appkit-form-multiselect-selected-item-label': {
      verticalAlign: "baseline"
    },
    'appkit-form-multiselect-selected-item-remove': {
      display: "inline-block",
      padding: "0.125em",
      float: "right",
      cursor: "pointer",
      fontSize: "0.75em",
      color: "#666",
    },

  }
)

ax.extension.appkit.form.factory.
multiselect.selected = function(
  f, options={}
) {

  let a = ax.a

  return a['appkit-form-multiselect-selected']( {

    $state: [],

    $remove: function ( item ) {
      let state = this.$state()
      let index = state.indexOf( item )
      state.splice(index, 1)
      if (index !== -1) this.$state = state
    },

    $add: function ( item, index ) {
      this.$state = [ item ].concat( this.$state() )
    },

    $update: function() {

      if ( this.$state().length === 0 ) {
        this.style.display = "none"
        this.$( "^appkit-form-multiselect-selected" ).previousSibling.required = options.required
        this.$nodes = [
          f.input( {
            name: options.name,
            disabled: true,
            inputTag: { type: "hidden" },
          } )
        ]
      } else {
        this.style.display = ""
        this.$( "^appkit-form-multiselect-selected" ).
          previousSibling.removeAttribute( "required" )
        this.$nodes = this.$state().map( function( item ) {
          return a['appkit-form-multiselect-selected-item']( [
            a['appkit-form-multiselect-selected-item-label']( item.label ),
            a['appkit-form-multiselect-selected-item-remove'](
              "🗙",
              {
                $on: { 'click: remove item from selection': function(e) {
                  this.$( "^appkit-form-multiselect" ).
                    $("select").$enableDeselected( item.index )
                  this.$( "^appkit-form-multiselect-selected" ).$remove( item )
                }
              } }
            ),
            f.input( {
              name: options.name,
              required: options.required,
              value: item.value,
              inputTag: { type: "hidden" },
            } )
          ] )
        } )
      }
    },

  } )




}

ax.extension.appkit.form.factory.
multiselect.select = function(
  f, options={}
) {

  let a = ax.a

  return f.select(
    // No name on select. Field name goes on hidden inputs.
    {
      placeholder: options.placeholder || "Add to selection",
      collection: options.collection,
      selectTag: {
        $on: { 'change: add item to selection': function () {
          this.nextSibling.$add( {
            index: this.selectedIndex,
            value: this.value,
            label: this.options[this.selectedIndex].text,
          } )
          this.$disableSelected()
        } },

        $disableSelected: function () {
          this.options[this.selectedIndex].disabled = "disabled"
          this.selectedIndex = 0
          this.$checkForEnabledOptions()
        },

        $enableDeselected: function ( index ) {
          this.options[index].removeAttribute('disabled')
          this.$checkForEnabledOptions()
        },

        $checkForEnabledOptions: function() {
          var anyEnabled
          for (var i=0, n=this.options.length; i<n ; i++) {
            if ( i > 0 && !this.options[i].disabled ) { anyEnabled = true; }
          }
          if ( anyEnabled ) { this.removeAttribute('disabled'); } else { this.disabled = "disabled"; }
        },

      }
    }
  )



}

ax.extension.appkit.document.css["appkit-form-selectinput"](
  {
    display: "inline-block",
    verticalAlign: "top",
    'appkit-form-selectinput-select': {
      display: "block",
      select: {
        width: "100%",
      }
    },
    'appkit-form-selectinput-input': {
      display: "block",
      input: {
        width: "100%",
      }
    },
  }
)

ax.extension.appkit.form.factory.language.collection = {
  ab:  'Abkhazian',
  aa:  'Afar',
  af:  'Afrikaans',
  sq:  'Albanian',
  am:  'Amharic',
  ar:  'Arabic',
  hy:  'Armenian',
  as:  'Assamese',
  ay:  'Aymara',
  az:  'Azerbaijani',
  ba:  'Bashkir',
  eu:  'Basque',
  bn:  'Bengali (Bangla)',
  dz:  'Bhutani',
  bh:  'Bihari',
  bi:  'Bislama',
  br:  'Breton',
  bg:  'Bulgarian',
  my:  'Burmese',
  be:  'Byelorussian (Belarusian)',
  km:  'Cambodian',
  ca:  'Catalan',
  'zh-Hans':  'Chinese (Simplified)',
  'zh-Hant':  'Chinese (Traditional)',
  co:  'Corsican',
  hr:  'Croatian',
  cs:  'Czech',
  da:  'Danish',
  nl:  'Dutch',
  en:  'English',
  eo:  'Esperanto',
  et:  'Estonian',
  fo:  'Faeroese',
  fa:  'Farsi',
  fj:  'Fiji',
  fi:  'Finnish',
  fr:  'French',
  fy:  'Frisian',
  gl:  'Galician',
  gd:  'Gaelic (Scottish)',
  gv:  'Gaelic (Manx)',
  ka:  'Georgian',
  de:  'German',
  el:  'Greek',
  kl:  'Greenlandic',
  gn:  'Guarani',
  gu:  'Gujarati',
  ha:  'Hausa',
  he:  'Hebrew',
  hi:  'Hindi',
  hu:  'Hungarian',
  is:  'Icelandic',
  id:  'Indonesian',
  ia:  'Interlingua',
  ie:  'Interlingue',
  iu:  'Inuktitut',
  ik:  'Inupiak',
  ga:  'Irish',
  it:  'Italian',
  ja:  'Japanese',
  kn:  'Kannada',
  ks:  'Kashmiri',
  kk:  'Kazakh',
  rw:  'Kinyarwanda (Ruanda)',
  ky:  'Kirghiz',
  rn:  'Kirundi (Rundi)',
  ko:  'Korean',
  ku:  'Kurdish',
  lo:  'Laothian',
  la:  'Latin',
  lv:  'Latvian (Lettish)',
  li:  'Limburgish ( Limburger)',
  ln:  'Lingala',
  lt:  'Lithuanian',
  mk:  'Macedonian',
  mg:  'Malagasy',
  ms:  'Malay',
  ml:  'Malayalam',
  mt:  'Maltese',
  mi:  'Maori',
  mr:  'Marathi',
  mo:  'Moldavian',
  mn:  'Mongolian',
  na:  'Nauru',
  ne:  'Nepali',
  no:  'Norwegian',
  oc:  'Occitan',
  or:  'Oriya',
  om:  'Oromo (Afan, Galla)',
  ps:  'Pashto (Pushto)',
  pl:  'Polish',
  pt:  'Portuguese',
  pa:  'Punjabi',
  qu:  'Quechua',
  rm:  'Rhaeto-Romance',
  ro:  'Romanian',
  ru:  'Russian',
  sm:  'Samoan',
  sg:  'Sangro',
  sa:  'Sanskrit',
  sr:  'Serbian',
  sh:  'Serbo-Croatian',
  st:  'Sesotho',
  tn:  'Setswana',
  sn:  'Shona',
  sd:  'Sindhi',
  si:  'Sinhalese',
  ss:  'Siswati',
  sk:  'Slovak',
  sl:  'Slovenian',
  so:  'Somali',
  es:  'Spanish',
  su:  'Sundanese',
  sw:  'Swahili (Kiswahili)',
  sv:  'Swedish',
  tl:  'Tagalog',
  tg:  'Tajik',
  ta:  'Tamil',
  tt:  'Tatar',
  te:  'Telugu',
  th:  'Thai',
  bo:  'Tibetan',
  ti:  'Tigrinya',
  to:  'Tonga',
  ts:  'Tsonga',
  tr:  'Turkish',
  tk:  'Turkmen',
  tw:  'Twi',
  ug:  'Uighur',
  uk:  'Ukrainian',
  ur:  'Urdu',
  uz:  'Uzbek',
  vi:  'Vietnamese',
  vo:  'Volapük',
  cy:  'Welsh',
  wo:  'Wolof',
  xh:  'Xhosa',
  yi:  'Yiddish',
  yo:  'Yoruba',
  zu:  'Zulu'
}

ax.extension.appkit.form.factory.timezone.collection = {
  "Pacific/Pago_Pago": "(GMT-11:00) American Samoa",
  "Pacific/Midway": "(GMT-11:00) Midway Island",
  "Pacific/Honolulu": "(GMT-10:00) Hawaii",
  "America/Juneau": "(GMT-09:00) Alaska",
  "America/New_York": "(GMT-05:00) Eastern Time (US & Canada)",
  "America/Tijuana": "(GMT-08:00) Tijuana",
  "America/Phoenix": "(GMT-07:00) Arizona",
  "America/Chihuahua": "(GMT-07:00) Chihuahua",
  "America/Mazatlan": "(GMT-07:00) Mazatlan",
  "America/Guatemala": "(GMT-06:00) Central America",
  "America/Mexico_City": "(GMT-06:00) Mexico City",
  "America/Monterrey": "(GMT-06:00) Monterrey",
  "America/Regina": "(GMT-06:00) Saskatchewan",
  "America/Bogota": "(GMT-05:00) Bogota",
  "America/Indiana/Indianapolis": "(GMT-05:00) Indiana (East)",
  "America/Lima": "(GMT-05:00) Quito",
  "America/Halifax": "(GMT-04:00) Atlantic Time (Canada)",
  "America/Caracas": "(GMT-04:00) Caracas",
  "America/Guyana": "(GMT-04:00) Georgetown",
  "America/La_Paz": "(GMT-04:00) La Paz",
  "America/Santiago": "(GMT-04:00) Santiago",
  "America/St_Johns": "(GMT-03:30) Newfoundland",
  "America/Sao_Paulo": "(GMT-03:00) Brasilia",
  "America/Argentina/Buenos_Aires": "(GMT-03:00) Buenos Aires",
  "America/Godthab": "(GMT-03:00) Greenland",
  "America/Montevideo": "(GMT-03:00) Montevideo",
  "Atlantic/South_Georgia": "(GMT-02:00) Mid-Atlantic",
  "Atlantic/Azores": "(GMT-01:00) Azores",
  "Atlantic/Cape_Verde": "(GMT-01:00) Cape Verde Is.",
  "Africa/Casablanca": "(GMT+00:00) Casablanca",
  "Europe/Dublin": "(GMT+00:00) Dublin",
  "Europe/London": "(GMT+00:00) London",
  "Europe/Lisbon": "(GMT+00:00) Lisbon",
  "Africa/Monrovia": "(GMT+00:00) Monrovia",
  "Etc/UTC": "(GMT+00:00) UTC",
  "Europe/Amsterdam": "(GMT+01:00) Amsterdam",
  "Europe/Belgrade": "(GMT+01:00) Belgrade",
  "Europe/Berlin": "(GMT+01:00) Berlin",
  "Europe/Zurich": "(GMT+01:00) Zurich",
  "Europe/Bratislava": "(GMT+01:00) Bratislava",
  "Europe/Brussels": "(GMT+01:00) Brussels",
  "Europe/Budapest": "(GMT+01:00) Budapest",
  "Europe/Copenhagen": "(GMT+01:00) Copenhagen",
  "Europe/Ljubljana": "(GMT+01:00) Ljubljana",
  "Europe/Madrid": "(GMT+01:00) Madrid",
  "Europe/Paris": "(GMT+01:00) Paris",
  "Europe/Prague": "(GMT+01:00) Prague",
  "Europe/Rome": "(GMT+01:00) Rome",
  "Europe/Sarajevo": "(GMT+01:00) Sarajevo",
  "Europe/Skopje": "(GMT+01:00) Skopje",
  "Europe/Stockholm": "(GMT+01:00) Stockholm",
  "Europe/Vienna": "(GMT+01:00) Vienna",
  "Europe/Warsaw": "(GMT+01:00) Warsaw",
  "Africa/Algiers": "(GMT+01:00) West Central Africa",
  "Europe/Zagreb": "(GMT+01:00) Zagreb",
  "Europe/Athens": "(GMT+02:00) Athens",
  "Europe/Bucharest": "(GMT+02:00) Bucharest",
  "Africa/Cairo": "(GMT+02:00) Cairo",
  "Africa/Harare": "(GMT+02:00) Harare",
  "Europe/Helsinki": "(GMT+02:00) Helsinki",
  "Asia/Jerusalem": "(GMT+02:00) Jerusalem",
  "Europe/Kaliningrad": "(GMT+02:00) Kaliningrad",
  "Europe/Kiev": "(GMT+02:00) Kyiv",
  "Africa/Johannesburg": "(GMT+02:00) Pretoria",
  "Europe/Riga": "(GMT+02:00) Riga",
  "Europe/Sofia": "(GMT+02:00) Sofia",
  "Europe/Tallinn": "(GMT+02:00) Tallinn",
  "Europe/Vilnius": "(GMT+02:00) Vilnius",
  "Asia/Baghdad": "(GMT+03:00) Baghdad",
  "Europe/Istanbul": "(GMT+03:00) Istanbul",
  "Asia/Kuwait": "(GMT+03:00) Kuwait",
  "Europe/Minsk": "(GMT+03:00) Minsk",
  "Europe/Moscow": "(GMT+03:00) St. Petersburg",
  "Africa/Nairobi": "(GMT+03:00) Nairobi",
  "Asia/Riyadh": "(GMT+03:00) Riyadh",
  "Europe/Volgograd": "(GMT+03:00) Volgograd",
  "Asia/Tehran": "(GMT+03:30) Tehran",
  "Asia/Muscat": "(GMT+04:00) Muscat",
  "Asia/Baku": "(GMT+04:00) Baku",
  "Europe/Samara": "(GMT+04:00) Samara",
  "Asia/Tbilisi": "(GMT+04:00) Tbilisi",
  "Asia/Yerevan": "(GMT+04:00) Yerevan",
  "Asia/Kabul": "(GMT+04:30) Kabul",
  "Asia/Yekaterinburg": "(GMT+05:00) Ekaterinburg",
  "Asia/Karachi": "(GMT+05:00) Karachi",
  "Asia/Tashkent": "(GMT+05:00) Tashkent",
  "Asia/Kolkata": "(GMT+05:30) New Delhi",
  "Asia/Colombo": "(GMT+05:30) Sri Jayawardenepura",
  "Asia/Kathmandu": "(GMT+05:45) Kathmandu",
  "Asia/Almaty": "(GMT+06:00) Almaty",
  "Asia/Dhaka": "(GMT+06:00) Dhaka",
  "Asia/Urumqi": "(GMT+06:00) Urumqi",
  "Asia/Rangoon": "(GMT+06:30) Rangoon",
  "Asia/Bangkok": "(GMT+07:00) Hanoi",
  "Asia/Jakarta": "(GMT+07:00) Jakarta",
  "Asia/Krasnoyarsk": "(GMT+07:00) Krasnoyarsk",
  "Asia/Novosibirsk": "(GMT+07:00) Novosibirsk",
  "Asia/Shanghai": "(GMT+08:00) Beijing",
  "Asia/Chongqing": "(GMT+08:00) Chongqing",
  "Asia/Hong_Kong": "(GMT+08:00) Hong Kong",
  "Asia/Irkutsk": "(GMT+08:00) Irkutsk",
  "Asia/Kuala_Lumpur": "(GMT+08:00) Kuala Lumpur",
  "Australia/Perth": "(GMT+08:00) Perth",
  "Asia/Singapore": "(GMT+08:00) Singapore",
  "Asia/Taipei": "(GMT+08:00) Taipei",
  "Asia/Ulaanbaatar": "(GMT+08:00) Ulaanbaatar",
  "Asia/Tokyo": "(GMT+09:00) Tokyo",
  "Asia/Seoul": "(GMT+09:00) Seoul",
  "Asia/Yakutsk": "(GMT+09:00) Yakutsk",
  "Australia/Adelaide": "(GMT+09:30) Adelaide",
  "Australia/Darwin": "(GMT+09:30) Darwin",
  "Australia/Brisbane": "(GMT+10:00) Brisbane",
  "Australia/Melbourne": "(GMT+10:00) Melbourne",
  "Pacific/Guam": "(GMT+10:00) Guam",
  "Australia/Hobart": "(GMT+10:00) Hobart",
  "Pacific/Port_Moresby": "(GMT+10:00) Port Moresby",
  "Australia/Sydney": "(GMT+10:00) Sydney",
  "Asia/Vladivostok": "(GMT+10:00) Vladivostok",
  "Asia/Magadan": "(GMT+11:00) Magadan",
  "Pacific/Noumea": "(GMT+11:00) New Caledonia",
  "Pacific/Guadalcanal": "(GMT+11:00) Solomon Is.",
  "Asia/Srednekolymsk": "(GMT+11:00) Srednekolymsk",
  "Pacific/Auckland": "(GMT+12:00) Wellington",
  "Pacific/Fiji": "(GMT+12:00) Fiji",
  "Asia/Kamchatka": "(GMT+12:00) Kamchatka",
  "Pacific/Majuro": "(GMT+12:00) Marshall Is.",
  "Pacific/Chatham": "(GMT+12:45) Chatham Is.",
  "Pacific/Tongatapu": "(GMT+13:00) Nuku'alofa",
  "Pacific/Apia": "(GMT+13:00) Samoa",
  "Pacific/Fakaofo": "(GMT+13:00) Tokelau Is.",
}

ax.extension.appkit.document.css(
  {
    '*': {
      boxSizing: "border-box",
    },

    'appkit-form-field': {
      display: "block",
      marginTop: "0",
      marginBottom: "1rem"
    },

    'appkit-form-field-help-wrapper': {
      // display: "inline-block",
    },

    'appkit-form-field-helpbutton': {
      cursor: "pointer",
    },

  }
)

ax.extension.codemirror = {}

ax.extension.codemirror.code = function( content, options={} ) {
  return ax.a.textarea(
    content,
    {
      $init: function() {
        this.$codemirror = CodeMirror.fromTextArea( this, {
          lineNumbers: true,
          readOnly: true,
          mode: options.mode
        } )
        this.$codemirror.setSize("100%", "100%")
        setTimeout( function() {
          this.$codemirror.refresh()
        }.bind( this ), 1 )
      }
    }
  )
}

ax.extension.codemirror.report = {}

ax.extension.appkit.document.css["*"](
  {

    'div.CodeMirror': {
      minHeight: "2em",
      borderRadius: "unset",
      padding: "unset",
      fontFamily: "monospace",
      zIndex: "1",
      'div.CodeMirror-scroll': {
        minHeight: "unset",
      }
    }

  }
)

ax.extension.codemirror.form = {}

/**
 * Creates ax object for a CodeMirror instance.
 *
 * @example
 * f.codemirror( {
 *   key: "myscript",
 *   mode: "ruby",
 *   value: "[1,2,3].map &:to_s"
 * } ),
 * @param {object} options
 * @param {(string|boolean)} options.disabled The default value for the disabled= attribute. Note that the disabled attribute can be changed by the $disable method. The $enable method, when it's called, refers to options.disabled and if not set the disabled attribute is removed from the element.
 * @param {(string|object)} options.mode The CodeMirror language mode. If string, the mode will be set to the value. If object, used as options for a mode <select>.
 * @param {string} options.name The value for the name= attribute on the CodeMirror <textarea>.
 * @param {(string|boolean)} options.required The value for the required= attribute on the CodeMirror <textarea>.
 * @param {(object|array)} options.value The content of the <textarea>.
 *
 * @return {object} ax object
 */

ax.extension.codemirror.form.code = function(
  f, options={}
) {

  let a = ax.a
  let x = ax.x
  let form = x.codemirror.form

  return a['appkit-form-codemirror-code'](
    [
      form.code.toolbar( f, options ),
      form.code.editor( f, options ),
    ],
    {
      $setMode: function() {
        this.$('textarea').$codemirror.setOption(
          "mode",
          this.$( "appkit-form-codemirror-code-mode" ).$value()
        )
      },
      $value: function() {
        return this.$('textarea').$codemirror.getValue()
      },
      $focus: function () {
        this.$('textarea').$codemirror.focus()
      },
      $disable: function() {
        this.$$('textarea').setAttribute('disabled', 'disabled')
      },
      $enable: function() {
        this.$('appkit-form-codemirror-code-editor textarea').$refresh()
        if ( !options.disabled ) {
          this.$$('textarea').removeAttribute('disabled')
        }
      },

      ...options.codeTag

    }
  )

}

/**
 * Creates ax object for a CodeMirror instance.
 *
 * @example
 * r.code( {
 *   key: "myscript",
 *   mode: "ruby",
 *   value: "[1,2,3].map &:to_s"
 * } ),
 * @param {object} options
 * @param {string} options.name The value for the name= attribute on the wrapper.
 * @param {(object|array)} options.value The content of the <textarea>.
 *
 * @return {object} ax object
 */

ax.extension.codemirror.report.code = function(
  r, options={}
) {

  let a = ax.a
  let x = ax.x
  let report = x.codemirror.report

  return a['appkit-report-codemirror-code'](
    [
      report.code.toolbar( options ),
      report.code.editor( options ),
    ],
    {

      name: options.name,

      $value: function() {
        return options.value
      },

      ...options.codeTag

    }
  )

}

ax.extension.codemirror.form.code.editor = function(
  f, options={}
) {

  let a = ax.a

  return a['appkit-form-codemirror-code-editor'](
    f.textarea(
      {
        name: options.name,
        value: options.value,
        textareaTag: {
          // style: "display: none",
          $init: function() {
            this.$setup()
          },
          $refresh: function () {
            setTimeout( function() {
              this.$codemirror.refresh()
            }.bind( this ), 1 )
          },
          $setup: function() {

            this.$codemirror = CodeMirror.fromTextArea( this, {
              lineNumbers: true,
              placeholder: options.placeholder,
            } )

            // this.$codemirror.on("change", function(codemirror){
            //   codemirror.getTextArea().$required()
            // })

            this.$( "^appkit-form-codemirror-code" ).$setMode()

            this.$codemirror.setSize("100%", "100%")

            this.$required()
            this.$refresh()

            this.$codemirror.on("keyup", function( codemirror, e ) {
              codemirror.getTextArea().$required()

            })

          },
          $required: function () {
            let value = this.$codemirror.getValue()
            let textarea = this.$('^appkit-form-codemirror-code').$$('textarea')[1]
            if ( !value && options.required ) {
              // debugger
              textarea.setAttribute( 'required', true )

            } else {
              // debugger
              textarea.removeAttribute('required')
            }
          },
        },
      }
    ),
    {
      $on: {
        'keyup: check field depenencies': function(e) {
          let form = this.$('^form')
          if ( form ) { form.$dependencies() }
        },
        'keyup: update textarea value': function(e) {
          this.$('textarea').$codemirror.save()
        },
        'keydown: check for editor exit': function(e) {

          let container = this.$( "^appkit-form-codemirror-code" )

          if ( container.classList.contains( "fullscreen" ) ) {
            if (e.keyCode == 27) {
              // ESC pressed - close full screen
              container.$('appkit-form-codemirror-code-fullscreen button').click()
            }
          } else {

            if ( e.keyCode == 9 && e.altKey && e.shiftKey ) {
              // alt+shift+TAB pressed - move focus backward
              ax.x.appkit.lib.tabable.previous( e.target ).focus()
            }

            if ( e.keyCode == 27 ) {
              // ESC pressed - move focus forward
              ax.x.appkit.lib.tabable.next( e.target ).focus()
            }

          }

        }
      }
    }
  )

}

ax.extension.appkit.document.css["appkit-form-codemirror-code"](
  {
    display: "block",
    border: "1px solid #b3b3b3",
    'appkit-form-codemirror-code-toolbar': {
      display: "block",
      overflow: "auto",
      backgroundColor: "white",
      borderBottom: "1px solid #e6e6e6",
      button: {
        fontSize: "1.2em",
        border: "none",
        backgroundColor: "transparent",
        cursor: "pointer"
      },
      select: {
        padding: "2px",
        border: "none",
        backgroundColor: "transparent",
      }
    },
    'appkit-form-codemirror-code-mode': {
      'select': {
        padding: "4px",
      },
      'label': {
        margin: "2px 5px",
      }
    },
    'appkit-form-codemirror-code-toolbar-right': {
      float: "right",
    },
    '&.fullscreen': {
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      border: "none",
      borderRadius: "0px",
      zIndex: "999",
    },
    'appkit-form-codemirror-code-editor': {
      'div.CodeMirror': {
        minHeight: "2em",
        border: "unset",
        borderRadius: "unset",
        padding: "unset",
        fontFamily: "monospace",
        zIndex: "1",
        'div.CodeMirror-scroll': {
          minHeight: "unset",
        }
      }
    },



  }
)

ax.extension.codemirror.form.code.mode = function(
  f, options={}
) {

  let a = ax.a

  let mode
  let component
  let value

  if ( ax.type.is.string( options ) ) {

    component = a.label( options )
    value = () => options

  } else if ( ax.type.is.object( options ) ) {

    let collection = options.collection
    if ( collection === undefined ) {

      collection = Object.keys( CodeMirror.modes ) // List of installed language modes
      collection.shift(); // remove null
      collection = collection.map( ( mode ) => [ mode, mode ] ) // Keep collection label lowercase
    }

    component = f.select( {
      placeholder: "⌨",
      collection: collection,
      selectTag: {
        $on: { 'change: set CodeMirror mode': function () {
          this.$("^appkit-form-codemirror-code").$setMode()
        } },
      },
      ...options
    } )

    value = function() {
      return this.$('select').$value()
    }

  } else {

    component = null
    value = () => ''

  }

  return a['appkit-form-codemirror-code-mode']( component, {
    $value: value
  } )


}

ax.extension.codemirror.form.code.toolbar = function(
  f, options={}
) {

  let a = ax.a

  return a['appkit-form-codemirror-code-toolbar'](
    [
      this.mode( f, options.mode ),
      a['appkit-form-codemirror-code-toolbar-right'](
        a['appkit-form-codemirror-code-fullscreen'](
          a.button( { $text: "🗖" }, {
            type: "button",
            $on: {
              'click: toggle full screen': function() {
                let container = this.$( "^appkit-form-codemirror-code" )
                let editor = container.$("appkit-form-codemirror-code-editor")
                let codemirror = editor.$("textarea").$codemirror
                if ( container.classList.contains( "fullscreen" ) ) {
                  this.$text = "🗖"
                  container.classList.remove("fullscreen")
                  editor.style.height = ""
                  codemirror.focus()
                } else {
                  this.$text = "🗗"
                  container.classList.add("fullscreen")
                  codemirror.focus()
                }
              }
            }
          } )
        )
      ),
    ],
  )

}

ax.extension.codemirror.report.code.editor = function(
  options={}
) {

  let a = ax.a

  return a['appkit-report-codemirror-code-editor'](
    ax.x.codemirror.code(
      options.value,
      {
        mode: options.mode,
      }
    )

  )

}

ax.extension.appkit.document.css["appkit-report-codemirror-code"](
  {
    display: "block",
    border: "1px solid #b3b3b3",
    'appkit-report-codemirror-code-toolbar': {
      display: "block",
      overflow: "auto",
      backgroundColor: "white",
      borderBottom: "1px solid #e6e6e6",
      button: {
        fontSize: "1.2em",
        border: "none",
        backgroundColor: "transparent",
        cursor: "pointer"
      },
      select: {
        padding: "2px",
        border: "none",
        backgroundColor: "transparent",
      }
    },
    'appkit-report-codemirror-code-mode': {
      'select': {
        padding: "4px",
      },
      'label': {
        margin: "2px 5px",
      }
    },
    'appkit-report-codemirror-code-toolbar-right': {
      float: "right",
    },
    '&.fullscreen': {
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      border: "none",
      borderRadius: "0px",
      zIndex: "999",
    },
    'appkit-report-codemirror-code-editor': {
      'div.CodeMirror': {
        border: "unset",
      }
    },



  }
)

ax.extension.codemirror.report.code.toolbar = function(
  options={}
) {

  let a = ax.a

  return a['appkit-report-codemirror-code-toolbar'](
    [
      a['appkit-report-codemirror-code-mode'](
        a.label( options.mode ),
      ),
      a['appkit-report-codemirror-code-toolbar-right'](
        a['appkit-report-codemirror-code-fullscreen'](
          a.button( { $text: "🗖" }, {
            type: "button",
            $on: {
              'click: toggle full screen': function() {
                let container = this.$( "^appkit-report-codemirror-code" )
                let editor = container.$("appkit-report-codemirror-code-editor")
                let codemirror = editor.$("textarea").$codemirror
                if ( container.classList.contains( "fullscreen" ) ) {
                  this.$text = "🗖"
                  container.classList.remove("fullscreen")
                  editor.style.height = ""
                  codemirror.focus()
                } else {
                  this.$text = "🗗"
                  container.classList.add("fullscreen")
                  codemirror.focus()
                }
              }
            }
          } )
        )
      ),
    ],
  )

}

ax.extension.appkit.form.factory.
code = (f) => function ( options={} ) {
  return ax.x.codemirror.form.code( f, options )
}

ax.extension.appkit.report.factory.
code = (r) => function ( options={} ) {
  return ax.x.codemirror.report.code( r, options )
}

ax.extension.markedjs = {}


// ax.extension.markdown = ax.extension.markedjs
ax.extension.md = function() {
  return ax.extension.markedjs.markdown( ...arguments )
}

ax.extension.markedjs.report = {}

ax.extension.markedjs.markdown = function ( content, options={} ) {


  // if ( ax.type.is.function( markdown ) ) {
  //   markdown = markdown()
  // }

  let a = ax.a

  let html

  let processMarkdown = function( string ) {
    string = ( string || '').toString()
    if ( options.inline ) {
      return marked.inlineLexer( string, [] )
    } else {
      return marked( string )
    }
  }

  if ( content instanceof Array ) {
    let result = []
    content.forEach( function( item ) {
      result.push( processMarkdown( item ) )
    } )
    html = result.join('')
  } else {
    html = processMarkdown( content )
  }

  return a['axf-markedjs-markdown']( { '$html': html }, options.markdownTag )

}

/**
 * Creates ax object for a Markedjs Markdown report output.
 *
 * @example
 * r.markdown( {
 *   key: "mymarkedtext",
 *   value: "Hello\n===\n"
 * } ),
 * @param {object} options
 * @param {string} options.name The value for the name= attribute on the wrapper.
 * @param {(object|array)} options.value The markdown text.
 *
 * @return {object} ax object
 */

ax.extension.markedjs.report.markdown = function(
  r, options={}
) {

  let a = ax.a
  let x = ax.x

  return a['appkit-report-markedjs-markdown'](
    x.markedjs.markdown( options.value ),
    {

      name: options.name,

      $value: function() {
        return options.value
      },

      ...options.markdownTag

    }
  )

}

ax.extension.appkit.report.factory.
markdown = (r) => function ( options={} ) {
  return ax.x.markedjs.report.markdown( r, options )
}

ax.extension.simplemde = {}

ax.extension.simplemde.form = {}

ax.extension.simplemde.form.markdown = function(
  f, options
) {

  let a = ax.a
  // let f = this.factory

  let toolbarIcons = [
    {
      name: "bold",
      action: SimpleMDE.toggleBold,
      className: "fa fa-bold",
      title: "Bold",
    },
    {
      name: "italic",
      action: SimpleMDE.toggleItalic,
      className: "fa fa-italic",
      title: "Italic",
    },
    {
      name: "heading",
      action: SimpleMDE.toggleHeadingSmaller,
      className: "fa fa-header",
      title: "Heading",
    },
    "|",
    {
      name: "quote",
      action: SimpleMDE.toggleBlockquote,
      className: "fa fa-quote-left",
      title: "Quote",
    },
    {
      name: "unordered-list",
      action: SimpleMDE.toggleUnorderedList,
      className: "fa fa-list-ul",
      title: "Generic List",
    },
    {
      name: "ordered-list",
      action: SimpleMDE.toggleOrderedList,
      className: "fa fa-list-ol",
      title: "Numbered List",
    },
    "|",
    {
      name: "link",
      action: SimpleMDE.drawLink,
      className: "fa fa-link",
      title: "Create Link",
    },
    {
      name: "image",
      action: SimpleMDE.drawImage,
      className: "fa fa-picture-o",
      title: "Insert Image",
    },
    {
      name: "table",
      action: SimpleMDE.drawTable,
      className: "fa fa-table",
      title: "Insert Table"
    },
    "|",
    {
      name: "preview",
      action: SimpleMDE.togglePreview,
      className: "fa fa-eye no-disable",
      title: "Toggle Preview",
    },
    {
      name: "side-by-side",
      action: SimpleMDE.toggleSideBySide,
      className: "fa fa-columns no-disable",
      title: "Toggle Side by Side",
    },
    {
      name: "fullscreen",
      action: SimpleMDE.toggleFullScreen,
      className: "fa fa-arrows-alt no-disable",
      title: "Toggle Fullscreen",
    }
  ]

  return a['appkit-form-simplemde-markdown'](
    f.textarea( {
        name: options.name,
        value: options.value,
        ...options.textareaTag,
    } ),
    {

      $init: function() {
        this.$setup()
      },

      $setup: function() {

        this.$simplemde = new SimpleMDE( {
          element: this.$('textarea'),
          toolbar: toolbarIcons,
          placeholder: options.placeholder,
          autoDownloadFontAwesome: false,
        } )

        // Set required attribute on the CodeMirror textarea
        let checkRequired = ( value ) => {
          let textarea = this.$( "^appkit-form-simplemde-markdown .CodeMirror textarea" )
          if ( options.required && !value ) {
            // debugger
            textarea.required = options.required
          } else {
            textarea.removeAttribute( 'required' )
          }
        }

        checkRequired( options.value )

        this.$refresh()

        this.$simplemde.codemirror.on("change", (e) => {
          checkRequired( this.$simplemde.value() )
        })

      },
      $refresh: function () {
        setTimeout( function() {
          this.$simplemde.codemirror.refresh()
        }.bind( this ), 1 )
      },
      $value: function() {
        // Initial value is needed by dependent fields, before simplemde is setup.
        return this.$simplemde ? this.$simplemde.value() : options.value
      },
      $disable: function() {
        this.$$('textarea').setAttribute('disabled', 'disabled')
      },
      $enable: function() {
        this.$refresh()
        this.$$('textarea').removeAttribute('disabled')
      },
      $focus: function () {
        this.$simplemde.codemirror.focus()
      },

      $on: {
        'keyup: check field depenencies': function(e) {
          let form = this.$('^form')
          if ( form ) { form.$dependencies() }
        },
        'keydown: check for editor exit': function(e) {

          if ( this.$( "div.CodeMirror" ).classList.contains( "CodeMirror-fullscreen" ) ) {
            // SimpleMDE closes fullscreen when ESC pressed.
            this.$simplemde.codemirror.focus()
          } else {

            if ( e.target.nodeName === "TEXTAREA" ) {

              if ( e.keyCode == 9 && e.altKey && e.shiftKey ) {
                // alt+shift+TAB pressed - move focus backward
                ax.x.appkit.lib.tabable.previous( e.target ).focus()
              }

              if ( e.keyCode == 27 ) {
                // ESC pressed - move focus forward
                ax.x.appkit.lib.tabable.next( e.target ).focus()
              }

            }

          }

        },

      },

      ...options.markdownTag
    }
  )

}

ax.extension.appkit.form.factory.
markdown = (f) => function ( options={} ) {
  return ax.extension.simplemde.form.markdown( this, options )
}

ax.extension.appkit.document.css["appkit-form-simplemde-markdown"](
  {
    '.CodeMirror': {
      borderColor: '#b3b3b3',
      borderTop: '1px solid #ccc',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      minHeight: "unset",
    },
    '.CodeMirror-scroll': {
      minHeight: "unset",
    },
    '.editor-toolbar': {
      border: '1px solid #b3b3b3',
      borderBottom: 'none',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      opacity: 1,
    },
  }
)

ax.extension.quilljs = {}

ax.extension.quilljs.form = {}

ax.extension.quilljs.form.richedit = function(
  f, options
) {

  let a = ax.a
  let x = ax.x

  return a['appkit-form-quilljs-richedit']( [
    a['appkit-form-quilljs-richedit-container']( a( options.value || '' ), {

      $on: {
        'keyup: check field depenencies': function(e) {
          let form = this.$('^form')
          if ( form ) { form.$dependencies() }
          this.$('^').$focus()
        },
        'keydown: check for editor exit': function(e) {

          if ( e.keyCode == 9 && e.altKey && e.shiftKey ) {
            // alt+shift+TAB pressed - move focus to last button on toolbar
            this.$('^appkit-form-quilljs-richedit').$$('appkit-form-quilljs div.ql-toolbar button')().slice(-1)[0].focus()
          }

          if ( e.keyCode == 27 ) {
            // ESC pressed - move focus forward
            ax.x.appkit.lib.tabable.next( this ).focus()
          }

        },
      },

    } ),
    a['appkit-form-quilljs-richedit-textarea']( a.textarea( {
      name: options.name,
      // value: options.value,
      disabled: options.disabled,
      required: options.required,
      tabIndex: -1,
    } ) ),
    // a['appkit-form-quilljs-richedit-textarea']
  ], {
    $value: function() {
      let value
      if ( this.$quill ) {
        value = this.$quill.getContents()
      } else {
        ax.throw("Quill not initialized.")
        options.value
      }
      if ( JSON.stringify( value ) === "{\"ops\":[{\"insert\":\"\\n\"}]}" ) {
        value = ""
      }
      console.log( value )
      return value
    },
    $init: function() {
      let container = this.$('appkit-form-quilljs-richedit-container')
      this.$quill = new Quill( container, {
        modules: {
          toolbar: [
            ['bold', 'italic'],
            ['link', 'blockquote', 'code-block', 'image'],
            [{ list: 'ordered' }, { list: 'bullet' }]
          ]
        },
        theme: options.theme || "snow",
        placeholder: options.placeholder,
        readOnly: options.readonly,
        ...options.quill
      } )

      // this.$quill.setText( options.value )
      this.$update()

      this.$quill.on('text-change', () => {
        // debugger
        this.$update()
      } )


    },

    $disable: function() {
      // this.$quill.disable()
      this.$('textarea').setAttribute('disabled', 'disabled')
    },
    $enable: function() {
      if ( !options.disabled ) {
        // this.$quill.enable()
        this.$('textarea').removeAttribute('disabled')
      }
    },
    $focus: function() {
      this.$quill.focus()
    },

    $update: function () {
      let value = this.$value()
      let textarea = this.$( "appkit-form-quilljs-richedit-textarea textarea" )
      if ( value ) {
        textarea.value = JSON.stringify( { text: this.$quill.getText(), ...value } )
      } else {
        textarea.value = ''
      }
    },
    ...options.quilljsTag
  } )

}

ax.extension.appkit.form.factory.
richedit = (f) => function ( options={} ) {
  return ax.extension.quilljs.form.richedit( this, options )
}

ax.extension.appkit.document.css["appkit-form-quilljs-richedit"](
  {
    position: "relative",
    border: "1px solid #b3b3b3",
    backgroundColor: "white",
    display: "block",
    'appkit-form-quilljs-richedit-textarea': {
      position: "absolute",
      top: "0",
      zIndex: "-1",
      display: "block",
      width: "100%",
      height: "100%",
      textarea: {
        width: "100%",
        height: "100%",
      }
    },
    '.ql-container.ql-snow': {
      border: 'none',
    },
    '.ql-toolbar.ql-snow': {
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none",
    },
    '.ql-editor.ql-blank': {
      position: "relative",
    }
  }
)

ax.extension.html5sortable = ( components, options={} ) => {

  return {
    $tag: options.type || "ol",
    $nodes: components,
    $init: (el) => {

      let sortableOptions = {
        forcePlaceholderSize: true,
        // placeholderClass: 'ph-class',
        // hoverClass: 'bg-maroon yellow',
        ...options
      }

      sortable( el, sortableOptions )
    },
    $on: {
      sortupdate: options.sortupdate,
      sortstart: options.sortstart,
      sortstop: options.sortstop,
    },
    ...options.tag
  }

}

ax.extension.timeago = ( milliseconds, options={} ) => {

  return {
    datetime: ( new Date( milliseconds ) ).toISOString(),
    $init: (el) => {
      timeago().render( el )
    },
    ...options.tag
  }

}
