___
ax() - The Ax Function

====

 is a javaScript library for creating dynamic web content.

Ax is invoked by calling its nominal function:
~~~javascript
ax( component, attributes )
~~~

`component` can be:
 * **object** - renders as an html element.
 * **function** - returns a component.
 * **class** - `new` returns a component.
 * **element**, **node** - used as is.
 * **array** - collection of components.
 * **string**, **anything else** - rendered as text.

`attributes` are optional. Attributes are applied to the rendered element.


object components
-----------------

An _object component_ is parsed by ax() to
create an HTML element, which is inserted in the DOM.

The element is furnished with attributes, state and methods,
which are derived from the properties of the object.

Object properties ( all are optional ):
 * `$tag` {string} _nodename_ for the element.
 * `$state` {(object|literal)} data used for rendering content
 * `$text` {(string|function)} plain text content for the element.
 * `$html` {(string|function)} html content for the element.
 * `$nodes` {(array|function)} collection of components for the element.
 * `$init` {function} called once the element is rendered
 * `$update` {function} called when $state changes
 * `$on` {object} event handlers for the element
 * Any other property {user defined} define whatever else you like,
   although `$render` and `$off` should not be used.

The object properties are copied to its corresponding element.
This is so that you can define property `class: 'btn'` on an
object and its element will also have a `class` of `'btn'`.

A new element is given a `$render` method property.
When called, the element is populated with its content.
This happens when the element is created and again after
the $update method is called.

`$text`, `$html` and `$nodes` are the content properties,
which describe the content ( i.e. children ) to be rendered
on the element.
You can't define more than one of these,
although you can change from one type to another dynamically

Content properties may be functions that return content.
The functions are called when new content is needed.

The `$update` function is called when the `$state` property changes.
Use `$update` to manage data bindings and trigger state-dependent
behaviour. If `$update` is not specified, the content will
be refreshed by reapplying the relevant object content property.
If `$update` is specified, the content will be automatically
refreshed only if `$update()` returns `true`.

The object properties `$text`, `$html`, `$nodes` and `$state` are
not applied directly to the element. Instead, the element has
these properties defined with custom accessors ( i.e. get/set )
that do the job of triggering the element $render method.
This is so that you can write statements like either:
~~~javascript
this.$state = { name: 'Fred', age: 30 }
this.$text = "New text"
~~~
and the element will render the new content.

Elements also have custom accessors for `$on`, which allows
you to write `this.$on( { click: alert("foo") } )` to set an
event listener.


ax() is global and has properties:
 * 'factory' - makes HTML elements
 * 'tags' - interprets ax() tags like a.h1("Hi")
 * 'extension' - for adding features to ax()
 * 'a' - exposes `tags`
 * 'x' - exposes `extension`
