Ax Function Development Application
-----------------------------------

Deploy
------

Sinatra modular style, with `config.ru`.

Doesn't need any services.

Static assets served from `/public`

Release
-------

`rake release:build["version"]` to create files for a release. Output goes to `/axFunction/release`.

TODO
----

- Confirm email - or confirm anything?
- Router/controller open/to/location - needs thought/tidy
- Dependent false or null for no wrap?



x.appkit.controller(
  {
    '': link to 'people'
    '/people*': () => x.appkit.controller( {
        '': index people
        '/#id': show person
        '/#id/edit': edit person
      },
      { scope: '/people' }
    )
  },
  { scope: "/app" }
)

window.location set to "/app/people/1?theme=snow#address"
ax loads
when each controller inits
  if controller has parent
    do nothing, let the parent locate
  else
    if controller is bound to window
      location = current window.href
                  "/app/people/1?theme=snow#address"
    if location == scope, then go to home
      location = scope + home
      location = { path, params, search } from location
    this.$to( location )
              { path: "/app/people/1", query: { theme: snow }, search: "#address" }

$to( location )
  { path: "/app/people/1", query: { theme: snow }, search: "#address" }
  path = path - scope
  { path: "/people/1", query: { theme: snow }, search: "#address" }
  this.$nodes = this.$view( location )
  each bound controller .$to( location )

click on edit button in show person
  open('edit') > this.$("^appkit-controller").$open( 'edit' )

this.$open( path, options={} )
  if controller has parent
    parent.$open( path, options )
  else


        # options.search for named anchor
  is relative path, so
    location = window.location.pathname + path
               "/app/people/1" + '/' + 'edit'
  else would have been absolute path, say '/people/1/edit', and so
    location = scope + path
               '/app' + '/people/1/edit'

  if controller bound to window
    history.pushstate = location
      ( which cause onpopstate and thus .$locate() )
  else if bound to parent controller
    parent.$open( location )
  else
    this.$to







$to( location )
  location = location - scope
  this.controller locate page

$open( location )
  if location absolute
    if parent_controller
      parent_controller $open( location )
    if bind:false
      error
    if bind:selector
      selected $open( location )
    if bind:window
      window.location = location
  else location relative
  location = scope + location


  if parent_controller
    parent_controller $open( location )
  if bind:false
    error
  if bind:selector
    selected $open( location )
  if bind:window
    window.location = location

$init
  if bind:window
    onpopstate this.$locate()

$locate
  location = window.location - scope
  this.$to location



controller
bind: selector for controller to bind to, window, or false - default window
scope: array of directories [ "v0", "app" ] or string "v0/app"
home: defaults to '/'
.$init =>
  bind -
    or to window (if bind:window),
    or to selected (if bind:string)
    or no bind (if bind:false)
  call $open( home )
.$to( location ) /chapters/1?lang=EN&theme=snow#summary =>
  path = /v0/app/chapters/1?lang=EN&theme=snow#summary
  set window location = path
  calls .$open( path )
.$open( )
