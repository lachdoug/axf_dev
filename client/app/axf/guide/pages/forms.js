app.axf.guide.pages.forms = (c) => (a,x) => [
  a.p( "" ),
  app.coderunner(
`
ax( (a,x) => x.appkit.form( (f) => [

  f.field( { as: "richedit", dependent: null, placeholder: "Enter text here...", required: true, key: "mdwn1", value: "Stuff" } ),
  f.field( { as: "code", dependent: true, placeholder: "Enter code here...", key: "script1", required: false, code: { mode: "javascript" } } ),
  f.field( { as: "code", dependent: true, placeholder: "Enter code here...", key: "script2", required: true, code: { mode: { value: "javascript" } } } ),
  f.field( { as: "markdown", dependent: true, placeholder: "Enter md here...", required: true, key: "markdn1" } ),
  f.field( { as: "richedit", dependent: true, placeholder: "Enter text here...", required: true, key: "mdwn2" } ),
  f.fields(
    { key: "first_name", required: true },
    { key: "last_name", dependent: true }
  ),
  a.h1( 'Membership' ),
  f.one( "membership", (ff) => [
    ff.fields(
      { key: "joined", type: "date" },
      { key: "renewed", type: "date" }
    )
  ] ),
  a.h1( "Roles" ),
  f.many( "roles_attributes", (ff) => [
    ff.add( null, { insert: "prepend" } ),
    a.hr,
    ff.items( ( ffi, i ) => [
      a.h3( \`Item \${ i == 0 ? '0' : i || ''} - \${ ffi.$data.role || 'new' }\` ),
      a['.float-right']( ffi.remove() ),
      ffi.fields( "role", { key: "appointed", type: "date" } ),
      a.hr
    ], {
      new: function() { return {
        appointed: x.appkit.lib.date.now.value()
      }
    } } )
  ], { key: "roles" } ),
  f.field( "name" ),
  f.field( "age", { type: "number" } ),
  f.field( "tnc", { dependent: true, hint: "a hint", help: "This is help", as: "check", label: "Terms and conditions", check: { label: "Accept?" } } ),
  f.field( "detail", { as: "textarea", dependent: "tnc" } ),
  f.field( {
    as: "checkboxes",
    key: "snow",
    checkboxes: { check: { reverse: true } },
    collection: [ "ski", "board", "cross country" ],
    value: [ "board", "ski" ],
    required: true,
  } ),
  f.field( {
    as: "radios",
    key: "temp",
    check: { reverse: true },
    collection: [ "hot", "cold" ],
    value: "hot",
    required: true,
    dependent: { key: "snow" },
  } ),
  f.selectinput( {
    key: "fizzbuzz",
    check: { reverse: true },
    collection: [ "fizz", "buzz" ],
    value: "buzz",
    placeholder: "Select one or another",
    required: true,
  } ),
  f.select( {
    key: "foobar",
    check: { reverse: true },
    collection: [
      "foo",
      {
        label: { $html: "&mdash;&mdash;&mdash;&mdash;&mdash;" },
        disabled: true
      },
      { value: "bar", label: "Bar" }
    ],
    value: "bar",
  } ),
  f.field( { as: "language", dependent: null, key: "lang", placeholder: '' } ),
  f.field( { as: "country", dependent: true, key: "ctry", placeholder: "" } ),
  f.field( { as: "timezone", dependent: true, key: "tzone" } ),
  f.field( { as: "richedit", dependent: true, placeholder: "Enter text here...", required: true, key: "mdwn", value: "Fred", value: "Stuff" } ),
  f.field( { as: "markdown", dependent: true, placeholder: "Enter md here...", required: true, key: "markdn", required: true, value: "Stuff" } ),
  f.field( { as: "input", key: "first_name", value: "Fred" } ),
  f.field( { as: "input", key: "pword", value: "aaaaa", type: "password" } ),
  f.field( { as: "password", key: "pass", value: "we2ds34" } ),
  f.field( { as: "multiselect", key: "things", value: 1, collection: [ 1,2,3 ] } ),
  f.field( { as: "code", dependent: true, placeholder: "Enter code here...", key: "script", required: true, mode: { value: "javascript" } } ),
  f.field( { as: "code", dependent: true, key: "script2", mode: "shell", modes: false } ),
  f.field( { as: "check", key: "agree", value: "on", reverse: true, label: x.appkit.icon("fa fa-check") } ),
  f.field( { as: "textarea", key: "detail", placeholder: "wow" } ),
  f.submit(),
  x.appkit.button("Serialize", function() {
    let form = this.$('^form')
    if ( form.$valid() ) {
      console.log( form.$serialize() )
    } else {
      let inputs = form.$$('input,select,textarea')()
      let report = inputs.map(function( input ){
        return { name: input.name, validity: input.validity }
      } )
      console.log( "Form is not valid." )
      console.log( report )
    }
  } )
], {
  focus: true,
  data: {
    first_name: "Lachlan",
    last_name: "Douglas",
    age: 46,
    detail: "Wow!",
    membership: {
      joined: "2017-11-13",
      renewed: "2018-11-13"
    },
    roles: [
      { role: "Greenkeeper" ,appointed: '2017-12-12' },
      { role: "Barman" ,appointed: '2017-12-13' },
    ]
  },
  scope: 'member'
}
) )


`
  )

]
