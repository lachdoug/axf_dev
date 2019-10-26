'use strict'
/**
 * Creates an HTML element and inserts it in the DOM.
 * The element is described by a component and any accompanying attributes.
 * If the element has an `id`, it will replace an existing
 * DOM element that has the same `id`.
 * If the element does not have a matching `id`,
 * the element will be appended to the &lt;body&gt;.
 *
 * @since 0.0.0
 * @namespace
 *
 * @param {component} component any Component
 * @param {object} attributes to be applied to the component
 *
 * @return {htmlElement} The new element
 */
let ax = function ( component, attributes ) {

  let target

  if ( attributes ) {
    if ( ! ( component instanceof Array ) ) { component = [ component ] }
    component = { $nodes: component, ...attributes }
  }

  // document.addEventListener("DOMContentLoaded", function(e) {

    let element = ax.factory( component )

    if ( component.id ) {
      document.querySelector( '#' + component.id ).
        replaceWith( element )
    } else {
      document.body.appendChild( element )
    }

  // });

}

/**
 * Extension namespace.
 * Extensions are installed here.
 *
 * @since 0.0.0
 * @namespace ax.extension
 *
 */
ax.extension = {}

/**
 * Log an error message.
 *
 * @since 0.0.0
 * @namespace ax.error
 *
 * @param {string} message
 *
 */
ax.error = ( ...args ) => {
  console.error.bind( console )( ...args )
}

/**
 * Tag Generator namespace.
 * The Tag Generator creates arbitrary HTML elements.
 * It is instantiated as `ax.a`.
 *
 * @since 0.0.0
 * @namespace ax.tag
 *
 */
ax.tag = {}

/**
 * Throw an error.
 *
 * @since 0.0.0
 * @namespace ax.error
 *
 * @param {string} message
 *
 */
ax.throw = function( ...args ) {
  throw new Error( args )
}

/**
 * Log a message.
 *
 * @since 0.0.0
 * @namespace ax.log
 *
 * @param {string} message
 *
 */
ax.log = ( ...args ) => {
  console.log.bind( console )( ...args )
  return null
}

/**
 * Component Factory.
 * The Component Factory turns Components into View Objects.
 *
 * @since 0.0.0
 * @namespace ax.factory
 *
 * @param {component} component
 *
 * @return {component} Being either an Element, Node or View Object.
 */
ax.factory = function( component ) {

  let is = ax.is
  let factory = ax.factory

  if ( is.null( component ) ) return null
  // if ( is.string( component ) ) return factory.text( component )
  if ( is.node( component ) ) return component
  if ( is.nodelist( component ) ) return factory.nodelist( component )
  if ( is.array( component ) ) return factory.array( component )
  if ( is.promise( component ) ) return factory.promise( component )
  if ( is.object( component ) ) return factory.object( component )
  if ( is.class( component ) )return factory.class( component )
  if ( is.tag( component ) )return factory.tag( component )
  if ( is.function( component ) ) return factory.function( component )
  if ( is.undefined( component ) ) factory.undefined()
  return factory.text( component )

}

/**
 * Type Is Checkers namespace.
 * Type Is Checkers check data types.
 *
 * @since 0.0.0
 * @namespace ax.is
 *
 */
ax.is = {}

/**
 * Log a warning.
 *
 * @since 0.0.0
 * @namespace ax.warn
 *
 * @param {string} message
 *
 */
ax.warn = ( ...args ) => {
  console.warn.bind( console )( ...args )
}

/**
 * Type Is Not Something.
 * Determines whether variable is not a type.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.not = new Proxy(
  {},
  {
    get: ( target, property, receiver ) => {

      if ( ax.is.function( ax.is[ property ] ) ) {
        return ( value ) => !ax.is[ property ]( value )
      } else {
        ax.error( `ax.is does not support .${ property }()` )
      }

    }
  }
)

/**
 * Type Is False Checker.
 * Determines whether variable is false.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.false = function ( variable ) {
  return variable === false
}

/**
 * Type Is Undefined Checker.
 * Determines whether variable is undefined.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.undefined = function ( variable ) {
  return variable === void 0
}

/**
 * Type Is Object Checker.
 * Determines whether variable is an object.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.object = function ( variable ) {
  return typeof variable === "object"
}

/**
 * Type Is Promise Checker.
 * Determines whether variable is a Promise.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.promise = function ( variable ) {
  return variable instanceof Promise
}

/**
 * Type Is Null Checker.
 * Determines whether variable is null.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.null = function ( variable ) {
  return variable === null
}

/**
 * Type Is Tag Checker.
 * Determines whether variable is a Tag Generator Proxy function.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.tag = function ( variable ) {
  return '' + ax.a.tagProxyFunction === '' + variable
}

/**
 * Type Is Number Checker.
 * Determines whether variable is number.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.number = function ( variable ) {
  return typeof variable === "number"
}

/**
 * Type Is NodeList Checker.
 * Determines whether variable is an HTML node list.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.nodelist = function ( variable ) {
  return variable instanceof NodeList
}

/**
 * Type Is Boolean Checker.
 * Determines whether variable is boolean.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.boolean = function ( variable ) {
  return typeof variable === "boolean"
}

/**
 * Type Is Array Checker.
 * Determines whether variable is an array.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.array = function ( variable ) {
  return variable instanceof Array
}

/**
 * Type Is Function Checker.
 * Determines whether variable is a function.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.function = function ( variable ) {
  return typeof variable === "function"
}

/**
 * Type Is Class Checker.
 * Determines whether variable is a class.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.class = function ( variable ) {
  return this.function( variable ) && ( '' + variable ).slice(0,5) === 'class'
}

/**
 * Type Is Node Checker.
 * Determines whether variable is an HTML node.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.node = function ( variable ) {
  return variable instanceof Node
}

/**
 * Type Is String Checker.
 * Determines whether variable is a string.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.string = function ( variable ) {
  return typeof variable === "string"
}

/**
 * Type Is True Checker.
 * Determines whether variable is true.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.true = function ( variable ) {
  return variable === true
}

ax.x = ax.extension

ax.factory.undefined = function () {

  ax.throw( "Component is undefined." )

}

ax.factory.text = function ( component ) {

  return document.createTextNode( ' ' + component + ' ' )

}

ax.factory.object = function ( object ) {

  return this.element( {
    $tag: "pre",
    $text: JSON.stringify( object, null, 2  )
  } )

}

ax.factory.promise = function ( component ) {

  // let output = function( args ) {
  //   if ( args.length === 1 ) {
  //     args = args[0]
  //   }
  //   return ax.factory( args )
  //   // if ( ax.is.string( args ) ) {
  //   //   return args
  //   // } else {
  //   //   return JSON.stringify( args, null, 2  )
  //   // }
  // }

  return this.element( {
    $init: (el) => {
      component.then(
        function( ...args ) { el.$nodes = ax.factory( args ) }
      ).catch(
        function( ...args ) { el.$nodes = ax.factory( args ) }
      )
    }
  } )

}

ax.factory.tag = function ( component ) {

  // A tag is an uncalled tag builder method.
  // e.g: a.br or a.hr

  return this.element( component() )

}

ax.factory.nodelist = function ( component ) {

  return this.element( { $nodes: Array.from( component ) } )

}

ax.factory.element = function ( properties ) {

  properties = { $tag: 'span', ...properties }
  let element = document.createElement( properties.$tag )
  element.$properties = properties

  return this.element.properties.init(
    this.element.properties( element ).$render()
  )

}

ax.factory.array = function ( component ) {

  return this.element( { $tag: "div", $nodes: component } )

}

ax.factory.function = function ( component ) {

  const a = ax.a
  const x = ax.x

  return this( component( a,x ) )

}

ax.factory.class = function ( component ) {

  const a = ax.a
  const x = ax.x

  return this.element( new component( a,x ) )

}

/**
 * Tag Generator proxy namespace.
 *
 * @since 0.0.0
 * @namespace ax.tag.proxy
 *
 */
ax.tag.proxy = {}

ax.tag.collection = {}

ax.factory.element.properties = function ( element ) {

  return  this.properties.render(
          this.properties.events(
          this.properties.accessors(
          this.properties.tools(
          this.properties.define( element ) ) ) ) )

}

// ax.factory.element.process = function ( element ) {
//
//   ax.factory.pipeline.forEach( function( pipelineFunction ) {
//     element.$properties = pipelineFunction( element.$properties )
//   } )
//
//   return  this.process.properties( element )
//
// }

ax.factory.element.
append = function ( element, component ) {

  let children = ax.factory( component )
  if ( ax.is.array( children ) ) {
    children.forEach( function ( child ) {
      element.appendChild( child )
    } )
  } else {
    element.appendChild( children )
  }

}

ax.tag.collection.proxy = () => new Proxy(
  ax.tag.collection.function,
  ax.tag.collection.shim
)

/**
 * Tag Generator proxy shim.
 * Creates arbitrary View Objects.
 * Intercepts get methods and returns a function that,
 * when called, returns a View Object with
 * the $tag property set to the method name for the get.
 *
 * @since 0.0.0
 * @namespace ax.tag.proxy
 *
 */
 ax.tag.proxy.shim = {
  get: ( target, property ) => {

//     if ( property === '$' ) {
// debugger
//       return ax.tag.collection.proxy()
//
//     } else

    if ( property === '$$' ) {

      return ax.tag.collection.proxy()

    } else {

      return function ( component=null, attributes={} ) {
        component = ax.tag.proxy.shim.component( component )
        attributes = ax.tag.proxy.shim.attributes( property, attributes )
        return ax.factory.element( { ...component, ...attributes } )
      }

    }
  }
}

/**
 * Tag Generator proxy function.
 * Accepts an HTML fragment and returns a Node or NodeList.
 *
 * @since 0.0.0
 * @namespace ax.tag.proxy
 *
 */
ax.tag.proxy.function = function( component ) {

  if ( ax.is.string( component) ) {
    let jig = document.createElement('div')
    jig.innerHTML = component
    return jig.childNodes
  } if ( ax.is.object( component) ) {
    return ax.factory.element( component )
  } else {
    ax.error( "Component must be String or Object." )
  }

}

ax.factory.element.properties.accessors = function ( element ) {

  return  this.accessors.nodes(
          this.accessors.html(
          this.accessors.text(
          this.accessors.on(
          this.accessors.state( element ) ) ) ) )

}

ax.factory.element.properties.render = function ( element ) {

  let render = this.render

  element.$render = function () {

    if ( element.$properties.hasOwnProperty( '$text' ) ) {
      return render.text( element )
    } else if ( element.$properties.hasOwnProperty( '$html' ) ) {
      return render.html( element )
    } else if ( element.$properties.hasOwnProperty( '$nodes' ) ) {
      return render.nodes( element )
    } else {
      return element
    }

  }

  return element

}

ax.factory.element.properties.traverse = function( element, selector ) {

  if ( !element ) {
    return null
  } else if ( /^\s*\^/.test( selector ) ) {
    selector = selector.replace( /^\s*\^\s*/, '' )
    if ( selector ) {
      return element.closest( selector )
    } else {
      return element.parentElement
    }
  } else if ( /^\s*$/.test( selector ) ) {
    return element
  } else {
    return element.querySelector( selector )
  }

}

ax.factory.element.properties.init = function ( element ) {

  if ( element.$properties.hasOwnProperty( '$init' ) ) {
    element.appendChild( ax.factory.element( {
      $tag: "script",
      type: "text/javascript",
      $html:  "(function(){" +
                "let script=document.currentScript;" +
                "let element=script.parentElement;" +
                "script.remove();" +
                "element.$init( element, element.$state );" +
              "})()"
    } ) )
  }

  return element

}

ax.factory.element.properties.tools = function ( element ) {

  element.$ = this.tools.$
  element.$$ = this.tools.$$

  return element

}

ax.factory.element.properties.events = function ( element ) {

  return  this.events.$on(
          this.events.$off( element ) )

}

ax.factory.element.properties.query = function( collection, pending=[] ) {

  return new Proxy(
    function () {},
    this.query.proxy.shim( collection, pending )
  )

}

ax.factory.element.properties.define = function ( element ) {

  for ( let property in element.$properties ) {
    if ( element.$properties.hasOwnProperty( property ) ) {
      if ( /[a-zA-Z]/.test( property[0] ) ) {

        let value = element.$properties[ property ]

        if ( value || value === "" ) {

          let isObject = ax.is.object( value )

          if ( isObject && property === "data" ) {
            this.define.data( element, value )
          } else if ( isObject && property === "style" ) {
            this.define.style( element, value )
          } else {
            this.define.attribute( element, property, value )
          }

        }

      } else {

        if (
          property != '$text' &&
          property != '$nodes' &&
          property != '$html' &&
          property != '$state' &&
          property != '$on'
        ) {
          element[ property ] = element.$properties[ property ]
        }

      }
    }
  }

  return element

}

ax.tag.collection.shim = {
 get: ( target, property ) => {

   return function( ...components ) {
     return components.map( function( component ) {
       return ax.a[ property ]( component )
     } )
   }

 }
}

ax.tag.collection.function = () => {}

ax.tag.proxy.shim.component = function ( component ) {

  let is = ax.is

  if ( is.node( component ) ) return { $nodes: [ component ] }
  if ( is.nodelist( component ) ) return { $nodes: [ Array.from( component ) ] }
  if ( is.array( component ) ) return { $nodes: component }
  if ( is.object( component ) ) return component
  if ( is.function( component ) ) return { $nodes: [ component ] }
  if ( is.undefined( component ) ) ax.factory.undefined()
  return { $text: component }

}

ax.tag.proxy.shim.attributes = function ( property, attributes ) {

  // if the property starts with a word, use the word as tag
  // if the property has a '#' word, use as id
  // if the property has '.' words, use as class
  // e.g. div#myTagId.btn.btn-primary

  let tag = ( property.match(/^([\w|-]+)/) || [] )[1]
  let id = ( property.match(/#([\w|-]+)/) || [] )[1]
  let klass = ( property.match(/\.([\.|\w|-]+)/) || [] )[1]

  if ( tag ) attributes.$tag = tag
  if ( id ) attributes.id = id
  if ( klass ) attributes.class = klass.replace( /\./g, ' ')

  return attributes

}

ax.a = new Proxy( ax.tag.proxy.function, ax.tag.proxy.shim )

/**
 * Writes an object's text content to its element
 *
 * @since 1.0.0
 *
 * @param {element} element An element with stale content.
 *
 * @return {element} The element with up-to-date content.
 */

ax.factory.element.properties.render.text = function ( element ) {

  // Get content from the element.
  let text = element.$text

  // Resolve content function, if there is one.
  if ( ax.is.function( text ) ) {
    text = text.call( element, element, element.$state )
  }

  // Clear exisitng content
  while (element.childNodes.length ) {
    element.removeChild(element.lastChild);
  }

  // Add new content
  element.appendChild( document.createTextNode( text ) )

  return element

}

ax.factory.element.properties.render.html = function ( element ) {

  let html = element.$html

  if ( ax.is.function( html ) ) {
    html = html.call( element, element, element.$state )
  }

  element.innerHTML = html

  return element

}

/**
* Writes an object's nodes content to its element
*
* @since 1.0.0
*
* @param {element} element An element with stale content.
*
* @return {element} The element with up-to-date content.
*/

ax.factory.element.properties.render.
nodes = function ( element ) {

  // Get content from the element.
  let nodes = element.$nodes

  if ( ax.is.function( nodes ) ) {
    // if ( ax.is.tag( nodes ) ) { } else { }
    // nodes = nodes.bind( element )
    nodes = nodes.call( element, element, element.$state )
  }

  // Clear existing content
  while ( element.firstChild ) {
    element.firstChild.remove()
  }

  // Add content
  if ( ax.is.array( nodes ) ) {
    nodes.forEach( function( node ) {
      node = ax.factory( node )
      if ( node != null ) element.appendChild( node )
    } )
  } else {
    let node = ax.factory( nodes )
    if ( node != null ) element.appendChild( node )
  }

  return element

}

ax.factory.element.properties.query.proxy = {}

ax.factory.element.properties.accessors.text = function ( element ) {

  let accessors = this

  Object.defineProperty( element, "$text", {
    get : function () {
      // return accessors.text.query( element )
      return element.$properties.$text
    },
    set : function( text ) {
      accessors.text.set( element, text )
    }
  } )

  return element

}

ax.factory.element.properties.accessors.html = function ( element ) {

  let accessors = this

  Object.defineProperty( element, "$html", {
    get : function () {
      return element.$properties.$html
    },
    set : function( html ) {
      accessors.html.set( element, html )
    }
  } )

  return element

}

ax.factory.element.properties.accessors.state = function ( element ) {

  let accessors = this
// debugger
//   element.$$state = undefined
  // element.watch( '$$state', () => { debugger } )

  Object.defineProperty( element, "$state", {
    get : function () {
      // return accessors.state.query( element )
      return element.$properties.$state
    },
    set : function( state ) {
      accessors.state.set( element, state )
    }
  } )

  return element

}

ax.factory.element.properties.accessors.on = function ( element ) {

  let accessors = this

  Object.defineProperty( element, "$on", {
    get : function () {
      // return accessors.on.query( element )
      return element.$properties.$on
    },
    set : function( on ) {
      accessors.nodes.set( element, on )
    }
  } )

  return element

}

ax.factory.element.properties.accessors.nodes = function ( element ) {

  let accessors = this

  Object.defineProperty( element, "$nodes", {
    get : function () {
      // return accessors.nodes.query( element )
      return element.$properties.$nodes
    },
    set : function( nodes ) {
      accessors.nodes.set( element, nodes )
    }
  } )

  return element

}

ax.factory.element.properties.events.$on = function ( element ) {

  if ( element.$properties.hasOwnProperty( '$on' ) ) {
    for ( let event in element.$properties.$on ) {
      element.addEventListener(
        event.split(':')[0],
        function(e) {
          element.$properties.$on[ event ] &&
          element.$properties.$on[ event ].
            call( this, e, element, element.$state )
        }
      )
    }
  }

  return element

}

ax.factory.element.properties.events.$off = function ( element ) {

  element.$off = function ( event ) {
    element.removeEventListener(
      event.split(':')[0],
      element.$properties.$on[ event ]
    )
  }

  return element

}

ax.factory.element.properties.tools.$$ = function( selector ) {

    return ax.factory.element.properties.query(
      Array.from( this.querySelectorAll( selector ) )
    )

}

ax.factory.element.properties.tools.$ = function( ...selectors ) {
  let result = this
  selectors.forEach( function( selector ) {
    if ( ax.is.array( selector ) ) {
      result = result.$( ...selector )
    } else if ( /^\^\S*$/.test( selector ) ) {
      result = ax.factory.element.properties.traverse( result, selector )
    } else if ( /,\s*/.test( selector ) ) {
      let selectors = selector.split( /,\s*/ )
      let selected
      for ( let i in selectors ) {
        selected = ax.factory.element.properties.traverse( result, selectors[i] )
        if ( selected ) break
      }
      result = selected
    } else if ( /\^/.test( selector ) ) {
      selector = selector.split(/(\^\S*)/g)
      result = result.$( ...selector )
    } else {
      result = ax.factory.element.properties.traverse( result, selector )
    }
  } )
  return result
}

ax.factory.element.properties.define.
style = function ( element, object ) {

  let result = ""

  Object.keys( object ).forEach( function( key ) {
    let kebab = this.kebab( key )
    result += ( kebab + ": " + object[key] + "; ")
  }.bind( this ) )

  this.attribute( element, "style", result )

}

ax.factory.element.properties.define.
attribute = function ( element, property, value ) {

  let attribute = document.createAttribute( property )
  attribute.value = value
  element.setAttributeNode( attribute )

}

ax.factory.element.properties.define.kebab = function ( name ) {

  // Convert name from camelCase to kebab-case
  return ( name[0].match(/[A-Z]/) ? "-" : "" ) + name.
    replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()

}

ax.factory.element.properties.define.data = function ( element, object ) {

  this.data.attribute( element, [ 'data' ], object )

}

ax.factory.element.properties.query.proxy.shim = function( collection, pending ) {

  return {
    get: ax.factory.element.properties.query.proxy.shim.get( collection, pending ),
    set: ax.factory.element.properties.query.proxy.shim.set( collection, pending ),
    apply: ax.factory.element.properties.query.proxy.shim.apply( collection, pending ),
  }

}

ax.factory.element.properties.accessors.state.
set = function ( element, state ) {

  if ( element.$properties.$state === state ) return

  element.$properties.$state = state

  if ( element.$properties.$update ) {
    element.$properties.$update.
      call( element, element, state ) &&
    element.$render()
  } else {
    element.$render()
  }

  return element

}

// ax.factory.element.properties.accessors.state.
// query = function ( element ) {
//
//
//
// //   let state = this
// //
// //   return function() {
// // debugger
// //     if ( arguments.length === 1 ) {
// //       return state.set( element, arguments[0] )
// //     } else if ( arguments.length ) {
// //       return state.set( element, arguments )
// //     } else {
// //       return element.$properties.$state
// //     }
// //   }
// }

ax.factory.element.properties.accessors.text.
set = function ( element, text ) {

  delete element.$properties.$html
  delete element.$properties.$nodes
  element.$properties.$text = text
  element.$render()

  return element

}

// ax.factory.element.properties.accessors.text.
// query = function ( element ) {
//
//   let text = this
//
//   return function() {
//
//     if ( arguments.length === 1 ) {
//       return text.set( element, arguments[0] )
//     } else if ( arguments.length ) {
//       return text.set( element, arguments.join() )
//     } else {
//       return element.$properties.$text
//     }
//   }
// }

ax.factory.element.properties.accessors.on.
set = function ( element, on ) {

  for ( let event in on ) {
    element.$off( event )
    element.$properties.$on[ event ] = on[ event ]
    element.addEventListener(
      event.split(':')[0],
      element.$properties.$on[ event ]
    )
  }

  return element

}

// ax.factory.element.properties.accessors.on.
// query = function ( element ) {
//
//   let on = this
//
//   return function() {
//
//     if ( arguments.length === 1 ) {
//       return on.set( element, arguments[0] )
//     } else if ( arguments.length ) {
//       return on.set( element, arguments.join() )
//     } else {
//       return element.$properties.$on
//     }
//   }
// }

ax.factory.element.properties.accessors.nodes.
set = function ( element, nodes ) {

  delete element.$properties.$text
  delete element.$properties.$html
  element.$properties.$nodes = nodes
  element.$render()

  return element

}

// ax.factory.element.properties.accessors.nodes.
// query = function ( element ) {
//
//   let nodes = this
//
//   return function() {
//
//     if ( arguments.length === 1 ) {
//       return nodes.set( element, arguments[0] )
//     } else if ( arguments.length ) {
//       return nodes.set( element, arguments )
//     } else {
//       return element.$properties.$nodes
//     }
//   }
// }

ax.factory.element.properties.accessors.html.
set = function ( element, html ) {

  delete element.$properties.$text
  delete element.$properties.$nodes
  element.$properties.$html = html
  element.$render()

  return element

}

// ax.factory.element.properties.accessors.html.
// query = function ( element ) {
//
//   let html = this
//
//   return function() {
//
//     if ( arguments.length === 1 ) {
//       return html.set( element, arguments[0] )
//     } else if ( arguments.length ) {
//       return html.set( element, arguments.join() )
//     } else {
//       return element.$properties.$html
//     }
//
//   }
//
// }

ax.factory.element.properties.define.data.
attribute = function ( element, keys, value ) {

  let context = ax.factory.element.properties.define

  if ( ax.is.string( value ) ) {
    let kebab = keys.join('-')
    context.attribute( element, kebab, value )
  } else {
    Object.keys( value ).forEach( function( key ) {
      let kebab = context.kebab( key )
      this.attribute( element, keys.concat( key ), value[ key ] )
    }.bind( this ) )
  }

}

ax.factory.element.properties.query.proxy.shim.get = function( collection, pending ) {

  return function( target, property, receiver ) {

    if ( /^\d+$/.test( property ) ) return collection[ property ]
    if ( /^\$\$$/.test( property ) ) return collection
    if ( /^toArray$/.test( property ) ) return () => collection
    if ( /^toString$/.test( property ) ) return () => collection.toString

    collection.forEach( function( node, i ) {
      let result = node[ property ]
      if ( ax.is.undefined( result ) ) {
        // debugger
        ax.error( `Ax query for ${ property } is undefined for:`, node )
      } else if ( ax.is.function( result ) ) {
        pending[i] = result
      } else {
        collection[i] = result
      }
    } )

    return ax.factory.element.properties.query( collection, pending )

  }

}

ax.factory.element.properties.query.proxy.shim.set =
function( collection, pending ) {

  return function( target, property, value, receiver ) {

    collection.forEach( function( node ) {
      node[ property ] = value
    } )

    return true

  }

}

ax.factory.element.properties.query.proxy.shim.apply = function( collection, pending ) {

  return function( target, receiver, args ) {
    // if ( pending.length ) {
      collection.forEach( function( node, i ) {
        collection[i] = pending[i].call( node, ...args )
      } )
      return ax.factory.element.properties.query( collection )
    // }
    // else {
    // }
    // return collection

  }

}



'use strict'
ax.extension.appkit = {}

// ax.extension.appkit.loading = function( options={} ) {
//
//   let a = ax.a
//   let x = ax.x
//
//   let text = options.text ? " " + options.text : " Loading"
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

  let functions = options.functions || false

  let tag = ax.is.object( variable ) ? "pre" : "span"

  return ax.a[ tag ]( ax.x.appkit.lib.inspect( variable, { functions: functions } ) )

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

  return ax.a["appkit-report"]( component, options.reportTag )

}

ax.extension.appkit.lib = {}

ax.extension.appkit.form = function( formFn, options={} ) {

  let a = ax.a
  let x = ax.x

  let params = options.params || {}
  let dataParam = options.data_param
  let data = options.data || params[dataParam] || {}
  let proxy = options.proxy

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
    $on: {
      'submit: disable form controls': (e,el) => {
        debugger
        el.$$('appkit-form-control').$disable()
      },
      ...( options.formTag || {} ).$on
    },
    ...options.formTag
  }

  return a['appkit-form'](
    a.form( component, formTagOptions ),
    options.appkitFormTag
  )


}

ax.extension.appkit.cycle = function( collection, period, options={} ) {

  let a = ax.a
  let x = ax.x

  period = period || 500

  let max = collection.length - 1

  let component = {
    $state: 0,
    $nodes: (el,i) => collection[i],
    $init: (el) => {
      let cycle = function() {
        setTimeout( function() {
          if ( el.$state === max ) {
            el.$state = 0
          } else {
            el.$state++
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

  object = JSON.parse( x.appkit.lib.inspect(
    object, { functions: functions }
  ) )

  return a["appkit-list"](
    x.appkit.list.element( object ),
    options.listTag
  )

}

ax.extension.appkit.router =
( component, options={} ) =>
( a,x ) => {

  let config = {
    scope: options.scope || '',
    default: options.default,
  }

  let routerTag = {

    id: options.id,

    $init: (el) => {
      window.addEventListener( 'popstate', function( event ) {
        el.$pop()
      } )
    },

    $nodes: (el) => {

      if ( ax.is.function( component ) ) {

        let controller = x.appkit.router.controller ( {
          router: [ el ],
          ...config,
        } )( el.$location() )

        component = component( controller )

      }

      return component

    },

    $config: config,

    $open: function( path, query, anchor ) {

      if ( path[0] === '/' ) {
        this.$locate( path, query, anchor )
      } else if ( path[0] === '!' ) {
        path = path.slice(1)
        if ( path[0] === '/' ) {
          this.$load( path, query, anchor )
        } else {
          path = config.scope + `/${ path }`
          this.$load( path, query, anchor )
        }
      } else {
        path = config.scope + ( path ? `/${ path }` : '' )
        this.$locate( path, query, anchor )
      }

    },

    $locate: function( path, query, anchor ) {
      query = x.appkit.lib.query.from.object( query )
      path = ( path || '/' ) + ( query ? "?" + query : '' ) + ( anchor ? "#" + anchor : '' )
      history.pushState( { urlPath: path },"", path )
      let event = new PopStateEvent( 'popstate', { urlPath: path } )
      dispatchEvent( event )
    },

    $location: function() {
      let location = window.location

      return {
        path: location.pathname,
        query: x.appkit.lib.query.to.object(
          location.search.slice(1)
        ),
        anchor: location.hash.slice(1)
      }

    },

    $pop: function() {

      let location = this.$location()
      this.$load(
        location.path, location.query, location.anchor
      )

    },

    $load: function( path, query, anchor ) {

      let routes = this.$$("appkit-router-routes").$$

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

  let defaultSuccess = () => ax.error( 'Ax appkit http error.', result )
  let defaultError = () => ax.log( 'Ax appkit http response.', result )

  let handleResult = function( result, el, response ) {
    let callback
    let statusCallbacks = options.status || {}
    let statusCallback = statusCallbacks[ response.status ]
    if ( status >= 200 && status < 300 ) {
      x.appkit.lib.event( el, 'axfAppkitHttpSuccess')
      callback = statusCallback || options.success || defaultSuccess
    } else {
      x.appkit.lib.event( el, 'axfAppkitHttpError')
      callback = statusCallback || options.error || defaultError
    }
    callback( result, el, response )
    x.appkit.lib.event( el, 'axfAppkitHttpComplete')
  }

  return a['appkit-http']( {
    $init: (el) => {
      fetch( url, {
        method: options.method,
        body: options.body,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      } )
      .then( response => {

        let contentType = response.headers.get("content-type").split(';')[0]

        switch( contentType ) {

          case "application/json":
            response.json().then( result => {
              handleResult( result, el, response )
            } )
            break

          case "text/plain":
          case "text/html":
            response.text().then( result => {
              handleResult( result, el, response )
            } )
            break

          default:
            ax.throw( `Unhandled content-type '${ contentType }'.` )

        }

      } ).catch( error => {

        ax.error( 'Ax appkit http error.', error.message )

      } )

    }
  }, options.httpTag )

}

ax.extension.appkit.document = {};

ax.extension.appkit.button = function( component, onclick, options = {} ) {

  let buttonTag = {

    id: options.id,
    class: options.class,
    type: options.type || "button",
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

ax.extension.appkit.document.stylesheet = {}

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

ax.extension.appkit.transition.crossfade = function( component=null, options={} ) {

  let a = ax.a
  let x = ax.x

  let time = ( options.time || 500 ) / 2

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

ax.extension.appkit.transition.fadein = function( component=null, options={} ) {

  let a = ax.a
  let x = ax.x

  let time = ( options.time || 500 ) / 2

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

  if ( ax.is.array( object ) ) {
    return a.ol( object.map(
      ( element ) => a.li( x.appkit.list.element( element ) )
    ) )
  } else if ( ax.is.null( object ) ) {
    return a["appkit-list-type-null"]( "null" )
  } else if ( ax.is.function( object ) ) {
    return a["appkit-list-type-null"]( `𝑓 ${ object }` )
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
    return a["appkit-list-type-number"]( object )
  } else {
    return a["appkit-list-type-text"]( object )
  }

}

ax.extension.appkit.lib.url = {}

ax.extension.appkit.lib.field = {}

ax.extension.appkit.lib.text = {}

ax.extension.appkit.lib.uuid = {}

ax.extension.appkit.lib.inspect = function( variable, options={} ) {

  let result
  let functions = options.functions === false ? false : true

  if ( ax.is.object( variable ) ) {
    result = ax.x.appkit.lib.object.inspect( variable, { functions: functions } )
  } else {
    result = variable
  }

  return result

}

ax.extension.appkit.lib.object = {}

ax.extension.appkit.lib.style = function( styles, scope ) {

  if ( ax.is.array( styles ) ) {
    styles = styles.map( ( styles ) => this.style( styles ) ).join( "\n" )
  } else if ( ax.is.object( styles ) ) {
    styles = this.style.rules( styles, scope ? [ scope ] : [] )
  }

  return  styles

}

ax.extension.appkit.lib.event = function( element, type, options={} ) {
// debugger
  return element.dispatchEvent(
    new CustomEvent( type, {
      detail: options.detail || {},
      bubbles: options.bubbles == false ? false : true,
      cancelable: options.cancelable == false ? false : true
    } )
  )

}

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

ax.extension.appkit.router.controller.
open = (config) => function( locator, query={}, anchor=null ) {

  let match
  let target

  if ( match = locator.match( /^(>+)(.*)/) ) {

    let forward = match[1].length
    locator = match[2]
    target = config.router[ forward ]

  } else if ( match = locator.match( /^(<+)(.*)/) ) {

    let backward = match[1].length
    locator = match[2]
    target = config.router[ config.router.length - backward - 1 ]

  } else if ( locator[0] === '/' ) {

    target = config.router[0]

  } else if ( locator[0] === '%' ) {

    locator = this.path + locator.slice(1)
    target = config.router[0]

  } else {

    locator = this.scope + locator
    target = config.router[0]

  }

  target.$open( locator, query, anchor )

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
    init = function( el ) {
      let locatedView = view( el, startLocation )

      el.$scope = locatedView.scope
      el.$('appkit-transition').$to( locatedView.component )
    }
    component = [ transition ]
  } else {
    init = () => {}
    component = ( el ) => {
      let locatedView = view( el, startLocation )

      el.$scope = locatedView.scope
      return locatedView.component
    }

  }

  let routesTag = {
    id: options.id,
    $config: config,
    $init: init,
    $nodes: component,

    $open: function( path, query, anchor ) {

      if ( path[0] === '/' ) {
        config.router[0].$open( path, query, anchor )
      } else if ( path[0] === '!' ) {
        path = path.slice(1)
        if ( path[0] === '/' ) {
          config.router[0].$load( path, query, anchor )
        } else {
          path = this.$scope + `/${ path }`
          this.$load( path, query, anchor )
        }
      } else {
        path = this.$scope + ( path ? '/' + path : '' )
        config.router[0].$open( path, query, anchor )
      }

    },

    $load: function( path, query, anchor ) {

      let toLocation = {
        path: path,
        query: query,
        anchor: anchor
      }

      let locatedView = view( this, toLocation )

      if ( !options.rerender && this.$scope === locatedView.scope ) {

        let location = toLocation
        let routes = this.$$("appkit-router-routes").$$

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
          this.$nodes = () => locatedView.component
        }

        if ( anchor ) {
          let anchored = document.getElementById( anchor )
          if ( anchored ) anchored.scrollIntoView()
        }

      }

    },

    ...options.routesTag

  }

  return (a,x) => a["appkit-router-routes"](
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
      ax.error( `The appkit form factory does not have property '${ property }'.` )
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
element = function(f) {

  return new Proxy(
    ax.extension.appkit.form.factory.element.proxy.object,
    ax.extension.appkit.form.factory.element.proxy.shim
  )

}

ax.extension.appkit.form.lib.collection = {}

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
      ax.error( `The appkit report factory does not have property '${ property }'` )
    }

  }
}

ax.extension.appkit.document.stylesheet.proxy = {}

ax.extension.appkit.lib.field.name = {}

ax.extension.appkit.lib.field.previous = function( field ) {

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

ax.extension.appkit.lib.field.collection = {}

ax.extension.appkit.lib.field.next = function( field ) {

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

ax.extension.appkit.lib.style.rules = function( object, selectors ) {

  let style = this

  var result = ""
  if ( ax.is.object( object ) ) {
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
  let functions = options.functions
  let seen = new WeakSet()

  return JSON.stringify( object, function (key, value) {

    if ( ax.is.object( value ) && ax.is.not.null( value ) ) {

      if ( seen.has(value) ) {
        try {
         return JSON.parse( JSON.stringify( value, indent ) )
        }
        catch (err) {
          return `⚠ ${ err.message }`
        }
      } else {
        seen.add(value)
        return value
      }

    } else if ( functions && ax.is.function( value ) ) {

      return '𝑓 ' + value

    } else {

      return value

    }

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

  let scope = config.scope || ""
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

    component = component( controller )

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
    let initialContent = transition[1]
    let options = transition[2]
    return ax.x.appkit.transition[ name ](
      initialContent,
      options )
  } else {
    return transition
  }

}

ax.extension.appkit.router.controller.routes.
regexp = ( route ) => {

  let routeRegexp = route.
    replace( /\*$/, "&&catchall&&" ).
    replace( /\*/g, "&&wildcard&&" ).
    replace( /\/\?/, "&&slash&&" )

  let captures = routeRegexp.match(/(:\w+|&&wildcard&&|&&catchall&&|&&slash&&)/g) || []
  let paramKeys = []

  captures.forEach( function( capture ) {
    let paramKey
    let pattern
    if ( capture === "&&wildcard&&" ) {
      paramKey = "*"
      pattern = "([^\\/|^\\.]*)"
    } else if ( capture === "&&catchall&&" ) {
      paramKey = "**"
      pattern = "(.*)"
    } else if ( capture === "&&slash&&" ) {
      paramKey = "?"
      pattern = "(\\/?)"
    } else {
      paramKey = capture.slice(1)
      pattern = "([^\\/|^\\.]*)"
    }
    paramKeys.push( paramKey )
    routeRegexp = routeRegexp.replace( capture, pattern )
  } )

  routeRegexp = "^" + routeRegexp + "$"

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
    options.wrapperTag
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
      a.label( options.placeholder, {
        $on: {
          'click: click input': (e,el) => {
            el.previousSibling.click()
          },
          ...( options.labelTag || {} ).$on
        },
        ...options.labelTag
      } )
    ],
    options.wrapperTag
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

    options.wrapperTag

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
    options.wrapperTag
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
    options.wrapperTag
  )

}

ax.extension.appkit.form.factory.
checkboxes = (f) => ( options ) => {

  let a = ax.a
  let x = ax.x

  options.name = x.appkit.form.lib.collection.name( options.name )

  let collection = x.appkit.form.lib.collection.
    transform( options.collection )

  let component = collection.map( function( member, i ) {

    let checked = options.value.some( function( value ) { return value == member.value } )

    return f.element.check( {
      value: member.value,
      name: options.name,
      placeholder: member.label,
      checked: checked,
      ...member.checkTag,
    } )
  } )

  let controlTagOptions = {

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
      ...( options.controlTag || {} ).$on
    },

    ...options.controlTag
  }

  return a['appkit-form-control'](
    component,
    controlTagOptions
  )

}

ax.extension.appkit.form.factory.
textarea = (f) => ( options ) => {

  let a = ax.a
  let x = ax.x

  if ( options.multiple ) {
    options.name = x.appkit.form.lib.collection.name( options.name )
  }

  let component = f.element.textarea( options )

  let controlTagOptions = {

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

    ...options.controlTag
  }

  return a['appkit-form-control'](
    component,
    controlTagOptions
  )

}

ax.extension.appkit.form.factory.
input = (f) => ( options ) => {

  let a = ax.a
  let x = ax.x

  // Make sure file+multiple has square brackets [] after name
  if ( options.type == 'file' && options.multiple ) {
    options.name = x.appkit.form.lib.collection.name( options.name )
  }

  let component = f.element.input( options )

  if ( options.confirm ) {

    let confirmationInputOptions = {
      ...options,
      id: null,
      name: null,
      title: options.title ? `${ options.title } confirmation` : null,
      ...options.confirmationInput
    }

    component = a['appkit-form-input-confirm'](
      [
        component,
        f.element.input( confirmationInputOptions )
      ],
      {
        $on: {
          'input: check confirmation match': function(e,el) {
            let inputs = el.$$('input')
            if ( inputs[0].value == inputs[1].value ) {
              inputs[1].setCustomValidity( "" )
            } else {
              inputs[1].setCustomValidity( "Confirmation must match." )
            }
          },
          ...( options.confirmTag | {} ).$on
        },
        ...options.confirmTag
      },
    )

  }

  let controlTagOptions = {

    $init: function () { this.$valid() },

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

    ...options.controlTag
  }

  return a['appkit-form-control'](
    component,
    controlTagOptions
  )

}

ax.extension.appkit.form.factory.
checkbox = (f) => ( options ) => {

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

  let controlTagOptions = {

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
      ...( options.controlTag || {} ).$on
    },

    ...options.controlTag
  }

  return a['appkit-form-control'](
    component,
    controlTagOptions
  )

}

ax.extension.appkit.form.factory.
submit = (f) => function(
  options={}
) {

  let a = ax.a
  let x = ax.x

  options.label = options.label || 'Submit'
  options.diabledWith = options.disableWith || 'Submitting...'

  let component = a['appkit-form-submit'](
    f.element.button( {
      ...options,
      $nodes: () => options.label,
      type: "submit",
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
      this.$('button').$nodes = () => options.disableWith
    },
    $enable: function() {
      this.$('button').removeAttribute('disabled')
      this.$('button').$nodes = () => options.label
    },
    ...options.controlTag
  }

  return a['appkit-form-control'](
    component,
    controlTagOptions
  )

};

ax.extension.appkit.form.factory.
radios = (f) => ( options ) => {

  let a = ax.a
  let x = ax.x

  let collection = x.appkit.form.lib.collection.
    transform( options.collection )

  let component = collection.map( function( member, i ) {

    let checked = options.value == member.value

    return f.element.check( {
      type: 'radio',
      name: options.name,
      value: member.value,
      placeholder: member.label,
      checked: checked,
      ...member.checkTag,
    } )
  } )

  let controlTagOptions = {

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
      ...( options.controlTag || {} ).$on
    },

    ...options.controlTag
  }

  return a['appkit-form-control'](
    component,
    controlTagOptions
  )

}

ax.extension.appkit.form.factory.
select = (f) => ( options ) => {

  let a = ax.a
  let x = ax.x

  if ( options.multiple ) {

    options.name = x.appkit.form.lib.collection.name( options.name )

    // if ( options.value && ax.is.not.array( options.value ) ) {
    //   options.value = [ options.value ]
    // }

  }

  options.collection = x.appkit.form.lib.collection.
    transform( options.collection )

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
        type: "hidden",
        name: options.name,
        value: optionValue
      } ) ) )
    } else {
      hidden = a.input( {
        type: "hidden",
        name: options.name,
        value: options.value
      } )
    }
    component = [ component, hidden ]
  }

  let controlTagOptions = {

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
      ...( options.controlTag || {} ).$on
    },

    ...options.controlTag
  }

  return a['appkit-form-control'](
    component,
    controlTagOptions
  )

}

ax.extension.appkit.form.lib.collection.
name = function(name) {

  if ( name && name.slice(-2) != '[]' ) {
    name = name + '[]'
  }

  return name

}

ax.extension.appkit.form.lib.collection.
transform = function( collection ) {

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

  let component = a["appkit-report-field-group"]( [
    field.caption( options ),
    field.help( options.help ),
    field.control(r)( options ),
    field.hint( options.hint ),
  ], options.groupTag )

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
//   if ( name && name.slice(-2) != "[]" ) {
//     name = name + "[]";
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

ax.extension.appkit.lib.field.name.
build = function( scope, key ) {
  let keys = this.dismantle( scope )
  keys.push( key )
  debugger
  return this.assemble( ...keys )
}

ax.extension.appkit.lib.field.name.
dismantle = function(name) {

  if ( name == '' ) return []

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

ax.extension.appkit.lib.style.rules.rule = function( object, selectors ) {

  var result = ""
  Object.keys( object ).forEach( function(property) {
    if ( !ax.is.object( object[property] ) ) {
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
//         if ( el.type === "checkbox" || el.type === "radio" ) {
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
      var k = options.prefix ? options.prefix + "[" + property + "]" : property,
        v = object[property];
      queryString.push((v !== null && ax.is.object( v )) ?
        this.objectToQueryString(v, k) :
        encodeURIComponent(k) + "=" + encodeURIComponent(v));
    };
  };
  return queryString.join("&");

};

ax.extension.appkit.lib.query.to.
object = function( queryString ) {

  var result = {}

  if ( queryString ) {
    queryString.split("&").map( function( pair ) {
      pair = pair.split("=")
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
      if ( options.complete ) options.complete()
    }
  }

  step()

}

ax.extension.appkit.form.factory.element.select.
options = function( options ) {

  let a = ax.a
  let x = ax.x

  return options.collection.map( function ( member ) {

    let selected = options.value.some( function( value ) { return value == member.value } )

    return a.option( member.label, {
      value: member.value,
      selected: selected,
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
control = (r) => function( options ) {

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

 if ( options.collection_param ) {
   collection = f.params[ options.collection_param ]
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

ax.extension.appkit.document.css = new Proxy(
  ax.extension.appkit.document.stylesheet.proxy.function,
  ax.extension.appkit.document.stylesheet.proxy.shim
)

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
        ax.error( `Field \`options.dependent\` needs a \`key\`, \`name\`, \`selector\` or \`traverse\`.` )
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
      ax.error( `Report field failed to find <appkit-report-field> for its dependency using ${ JSON.stringify( options ) }.` )
    }
  } else {
    ax.error( `Report field failed to select its dependency using ${ JSON.stringify( options ) }.` )
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

  return a["appkit-report-field-label-wrapper"]( component, options.wrapperTag )

}

ax.extension.appkit.report.factory.field.caption.
helpbutton = function( options ) {

  let a = ax.a
  let x = ax.x

  return a['appkit-report-field-helpbutton']( {
    $state: false,
    $nodes: function() {
      return a["appkit-report-field-helpbutton-text"](
        { $text: this.$state ? " ❓ ✖ " : " ❓ " }
      )
    },
    $on: { 'click: toggle help': function() {
      this.$state = !this.$state
      this.$('^appkit-report-field', 'appkit-report-field-help').$toggle()
    } },
    ...options.helpbuttonTag
  } )

}
