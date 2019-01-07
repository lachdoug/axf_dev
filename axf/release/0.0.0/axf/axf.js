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

  let element = ax.factory( component )

  if ( component.id ) {
    document.querySelector( '#' + component.id ).
      replaceWith( element )
  } else {
    document.body.appendChild( element )
  }

  return element

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
 * Type namespace.
 * For determing data types of variables.
 *
 * @since 0.0.0
 * @namespace ax.type
 *
 */
ax.type = {}

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
 *
 * @since 0.0.0
 * @namespace ax.throw
 *
 * @param {string} message
 *
 */
ax.throw = function( message ) {
  throw new Error( message )
}

/**
 * Component Factory.
 * The Component Factory parses Components to Object Components.
 *
 * @since 0.0.0
 * @namespace ax.factory
 *
 * @param {component} component
 *
 * @return {component} Normalised component, being either an Element, Node or ax object.
 */
ax.factory = function( component ) {

  let is = ax.type.is

  if ( is.node( component ) ) return component
  if ( is.array( component ) ) return ax.factory.array( component )
  if ( is.object( component ) ) return ax.factory.object( component )
  if ( is.function( component ) ) return ax.factory.function( component )
  return ax.factory.text( component )

}

ax.x = ax.extension

/**
 * Type Is Checkers namespace.
 * Type Is Checkers check data types.
 *
 * @since 0.0.0
 * @namespace ax.type.is
 *
 */
ax.type.is = {}

ax.factory.text = function ( component ) {

  if ( component === undefined ) {
    component = ''
  } else {
    component = component + ' '
  }

  return document.createTextNode( component )

}

ax.factory.object = function ( component ) {

  return this.object.element( component )

}

ax.factory.pipeline = []

ax.factory.array = function ( component ) {

// console.log(component)
  return this( { $tag: "div", $nodes: component } )

}

ax.factory.function = function ( component ) {

  const a = ax.a
  const x = ax.x

  // The factory checks functions for an $object property.
  // If it finds one, the factory will use its value
  // as the component. This is so that the tag builder
  // can return uncalled functions and the factory can
  // do something sensible with them. Otherwise such components
  // would be called with (a,x) arguments, which would be wrong.
  // For example, the component a['div'] will render an empty <div>.

  if ( ( '' + component ).slice(0,5) === 'class' ) {
    component = new component( a,x )
  } else if ( ax.a.tagProxyFunction + '' === component + '' ) {
    component = component()
  } else {
    component = component( a,x )
  }

  return this( component )

}

/**
 * Tag Generator proxy namespace.
 *
 * @since 0.0.0
 * @namespace ax.tag.proxy
 *
 */
ax.tag.proxy = {}

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
ax.type.is.undefined = function ( variable ) {
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
ax.type.is.object = function ( variable ) {
  return typeof variable === "object"
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
ax.type.is.array = function ( variable ) {
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
ax.type.is.function = function ( variable ) {
  return typeof variable === "function"
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
ax.type.is.node = function ( variable ) {
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
ax.type.is.string = function ( variable ) {
  return typeof variable === "string"
}

ax.factory.pipeline.push( function( object ) {

  return object

} )

ax.factory.object.base = { $tag: 'span' }

ax.factory.object.traverse = function( element, selector ) {

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

ax.factory.object.query = function( collection, pending=[] ) {

  return new Proxy(
    function () {},
    ax.factory.object.query.proxy.shim( collection, pending )
  )

}

ax.factory.object.element = function ( object ) {

  object = { ...this.base, ...object }
  let element = document.createElement( object.$tag )
  element.$object = object

  ax.factory.pipeline.forEach( function( pipelineFunction ) {
    element.$object = pipelineFunction( element.$object )
  } )

  return this.element.properties.$init(
    this.element.properties( element ).$render()
  )

}

ax.tag.proxy.shim = {
  get: ( target, property ) => function ( component, attributes={} ) {

    component = ax.tag.proxy.shim.component( component )
    attributes = ax.tag.proxy.shim.attributes( property, attributes )

    return ax.factory.object( { ...component, ...attributes } )

  }
}

ax.tag.proxy.function = function( html ) {

    let jig = document.createElement('div')
    jig.innerHTML = html
    return jig.firstChild

}

ax.factory.object.element.properties = function ( element ) {

  return  this.properties.$render(
          this.properties.events(
          this.properties.accessors(
          this.properties.define( element ) ) ) )

}

ax.factory.object.element.process = function ( element ) {

  ax.factory.pipeline.forEach( function( pipelineFunction ) {
    element.$object = pipelineFunction( element.$object )
  } )

  return  this.process.properties( element )

}

ax.factory.object.query.proxy = {}

ax.factory.object.base.$$ = function( selector ) {

    return ax.factory.object.query(
      Array.from( this.querySelectorAll( selector ) )
    )

}

ax.factory.object.base.$ = function( ...selectors ) {
  let result = this
  selectors.forEach( function( selector ) {
    if ( ax.type.is.array( selector ) ) {
      result = result.$( ...selector )
    } else if ( /^\^\S*$/.test( selector ) ) {
      result = ax.factory.object.traverse( result, selector )
    } else if ( /\^/.test( selector ) ) {
      selector = selector.split(/(\^\S*)/g)
      result = result.$( ...selector )
    } else {
      result = ax.factory.object.traverse( result, selector )
    }
  } )
  return result
}

ax.tag.proxy.shim.component = function ( component ) {

  let is = ax.type.is

  if ( is.node( component ) ) return { $nodes: [ component ] }
  if ( is.array( component ) ) return { $nodes: component }
  if ( is.object( component ) ) return component
  if ( is.function( component ) ) return { $nodes: [ component ] }
  if ( is.undefined( component ) ) return {}
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

ax.factory.object.element.properties.accessors = function ( element ) {

  return  this.accessors.$nodes(
          this.accessors.$html(
          this.accessors.$text(
          this.accessors.$on(
          this.accessors.$state( element ) ) ) ) )

}

ax.factory.object.element.properties.$init = function ( element ) {

  if ( element.$object.hasOwnProperty( '$init' ) ) {
    element.appendChild( ax.factory( {
      $tag: "script",
      type: "text/javascript",
      $html:  "(function(){" +
                "let script=document.currentScript;" +
                "let element=script.parentElement;" +
                "script.remove();" +
                "element.$init();" +
              "})()"
    } ) )
  }

  return element

}

ax.factory.object.element.properties.events = function ( element ) {

  return  this.events.$on(
          this.events.$off( element ) )

}

ax.factory.object.element.properties.define = function ( element ) {

  for ( let property in element.$object ) {
    if ( element.$object.hasOwnProperty( property ) ) {
      if ( /[a-zA-Z]/.test( property[0] ) ) {

        let value = element.$object[ property ]

        if ( value || value === "" ) {

          if ( ax.type.is.object( value ) ) {
            value = this.define.attribute( value )
          }

          let attribute = document.createAttribute( property )
          attribute.value = value
          element.setAttributeNode( attribute )


        }

      } else {

        if (
          property != '$text' &&
          property != '$nodes' &&
          property != '$html' &&
          property != '$state' &&
          property != '$on'
        ) {
          element[ property ] = element.$object[ property ]
        }

      }
    }
  }

  return element

}

ax.factory.object.element.properties.$render = function ( element ) {

  let render = this.$render

  element.$render = function (q) {

    if ( element.$object.hasOwnProperty( '$text' ) ) {
      return render.text( element )
    } else if ( element.$object.hasOwnProperty( '$html' ) ) {
      return render.html( element )
    } else if ( element.$object.hasOwnProperty( '$nodes' ) ) {
      return render.nodes( element )
    } else {
      return element
    }

  }

  return element

}

ax.factory.object.query.proxy.shim = function( collection, pending ) {

  return {
    get: ax.factory.object.query.proxy.shim.get( collection, pending ),
    set: ax.factory.object.query.proxy.shim.set( collection, pending ),
    apply: ax.factory.object.query.proxy.shim.apply( collection, pending ),
  }

}

/**
 * Writes an object's text content to its element
 *
 * @since 1.0.0
 *
 * @param {element} element An element with stale content.
 *
 * @return {element} The element with up-to-date content.
 */

ax.factory.object.element.properties.$render.text = function ( element ) {

  // Get content from the object.
  let text = element.$text

  // Resolve content function, if there is one.
  if ( ax.type.is.function( text ) ) {
    let args = [ element ]
    if ( element.$state ) { args.push( element.$state ) }
    text = text.call( element, element.$state, element )
  }

  // Clear exisitng content
  while (element.childNodes.length ) {
    element.removeChild(element.lastChild);
  }

  // Add new content
  element.appendChild( document.createTextNode( text ) )

  return element

}

ax.factory.object.element.properties.$render.html = function ( element ) {

  let html = element.$html
  if ( ax.type.is.function( html ) ) {
    html = html.call( element, element.$state, element )
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

ax.factory.object.element.properties.$render.
nodes = function ( element ) {

  // Get content from the object.
  let nodes = element.$nodes

  if ( ax.type.is.function( nodes ) ) {
    nodes = nodes.call( element, element.$state, element )
  }

  while ( element.firstChild ) {
    element.firstChild.remove()
  }

  if ( ax.type.is.array( nodes ) ) {
    nodes.map( function( component ) {
      element.appendChild( ax.factory( component ) )
    } )
  } else {
    element.appendChild( ax.factory( nodes ) )
  }

  return element

}

ax.factory.object.element.properties.accessors.$on = function ( element ) {

  Object.defineProperty( element, "$on", {
    get : function () {
      return element.$object.$on
    },
    set : function( events ) {
      for ( let event in events ) {
        element.$off( event )
        element.$object.$on[ event ] = events[ event ]
        element.addEventListener( event.split(':')[0], element.$object.$on[ event ] )
      }
    }
  } )

  return element

}

ax.factory.object.element.properties.accessors.$nodes = function ( element ) {

  Object.defineProperty( element, "$nodes", {
    get : function () {
      return element.$object.$nodes || []
    },
    set : function( nodes ) {
      delete element.$object.$text
      delete element.$object.$html
      element.$object.$nodes = nodes
      element.$render()
    }
  } )

  return element

}

ax.factory.object.element.properties.accessors.$state = function ( element ) {

  Object.defineProperty( element, "$state", {
    get : function () {
      return element.$object.$state
    },
    set : function( state ) {
      element.$object.$state = state
      if ( element.$object.$update ) {
        element.$object.$update.
          bind( element ).call( element.$object.$state ) &&
        element.$render()
      } else {
        element.$render()
      }
    }
  } )

  return element

}

ax.factory.object.element.properties.accessors.$html = function ( element ) {

  Object.defineProperty( element, "$html", {
    get : function () {
      return element.$object.$html
    },
    set : function( html ) {
      delete element.$object.$text
      delete element.$object.$nodes
      element.$object.$html = html
      element.$render()
    }
  } )

  return element

}

ax.factory.object.element.properties.accessors.$text = function ( element ) {

  Object.defineProperty( element, "$text", {
    get : function () {
      return element.$object.$text
    },
    set : function( text ) {
      delete element.$object.$html
      delete element.$object.$nodes
      element.$object.$text = text
      element.$render()
    }
  } )

  return element

}

ax.factory.object.element.properties.events.$on = function ( element ) {

  if ( element.$object.hasOwnProperty( '$on' ) ) {
    for ( let event in element.$object.$on ) {
      element.addEventListener( event.split(':')[0], element.$object.$on[ event ] )
    }
  }

  return element

}

ax.factory.object.element.properties.events.$off = function ( element ) {

  element.$off = function ( event ) {
    element.removeEventListener( event.split(':')[0], element.$object.$on[ event ] )
  }

  return element

}

ax.factory.object.element.properties.define.attribute = function ( object ) {
  var result = ""

  Object.keys( object ).forEach( function(property) {
    if ( !ax.type.is.object( object[property] ) ) {
      // Convert property from camelCase to kebab-case
      let kebab =  ( property[0].match(/[A-Z]/) ? "-" : "" ) + property.
        replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
      result += ( kebab + ": " + object[property] + "; ")
    }
  } )

  return result
}

ax.factory.object.query.proxy.shim.get = function( collection, pending ) {

  return function( target, property, receiver ) {

    if ( /^\d+$/.test( property ) ) return collection[ property ]
    collection.forEach( function( node, i ) {
      let result = node[ property ]
      if ( ax.type.is.function( result ) ) {
        pending[i] = result
      } else {
        collection[i] = result
      }
    } )

    return ax.factory.object.query( collection, pending )

  }

}

ax.factory.object.query.proxy.shim.set =
function( collection, pending ) {

  return function( target, property, value, receiver ) {

    collection.forEach( function( node ) {
      node[ property ] = value
    } )

  }

}

ax.factory.object.query.proxy.shim.apply = function( collection, pending ) {

  return function( target, receiver, args ) {
    if ( pending.length ) {
      collection.forEach( function( node, i ) {
        collection[i] = pending[i].call( node, ...args )
      } )
      return ax.factory.object.query( collection )
    } else {
      return collection
    }

  }

}
