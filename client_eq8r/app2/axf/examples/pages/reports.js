app2.axf.examples.pages.reports = (c) => (a,x) => [
  a.p( "" ),
  app2.coderunner(
`

ax( (a,x) => a['div.rolodex']( [
  x.appkit.document.css( {
    'appkit-report-field': { display: 'block' },
    'appkit-report-field-label': { color: 'grey' }
  } ),
  {
    $state: 0,
    $nodes: function( el, id ) { return [
      x.appkit.button( '<', function() { el.$state-- } ),
      x.appkit.button( '>', function() { el.$state++ } ),
      a['div.person']( {
        $nodes: x.appkit.fetch( \`/test/people/\${id}\`, {
          success: function( data ) {
            this.$nodes = x.appkit.report( (r) => [
              a.h1( "Person " + id ),
              r.fields(
                "first_name",
                "last_name",
                "accepted",
                {
                  dependent: "accepted",
                  key: "joined",
                  type: "date",
                  stringify: "toLocaleDateString"
                },
                { key: "home", as: "link" },
                { key: "markdown", as: "markdown" },
                { key: "code", as: "code", code: { mode: "javascript" } },
              ),
              x.appkit.put( data ),

            ], { data: data } )
          }
        } )
      } )

    ] },

  }

] ) )

`
  )

]

/*

ax( (a,x) => x.appkit.report( (r) => [


  a['div.rolodex']( {
    $state: 0,
    $nodes: function( el, id ) { return [
      x.appkit.button( '<', function() { el.$state-- } ),
      x.appkit.button( '>', function() { el.$state++ } ),
      a['div.person']( {
        $nodes: x.appkit.fetch( \`/test/people/\${id}\`, {
          success: function( data ) {
            this.$nodes = x.appkit.report( (r) => [
              a.h1( "Person " + id ),
            ] )
            // this.$nodes = x.appkit.report( (r) => [
            //   a.h1( "Person " + id ),
            //   r.fields(
            //     "first_name",
            //     "last_name",
            //     "accepted",
            //     {
            //       dependent: "accepted",
            //       key: "joined",
            //       type: "date",
            //       stringify: "toLocaleDateString"
            //     },
            //     { name: "home", as: "link" }
            //   ),
            //   a.legend( "Profile" ),
            //   r.one( "profile", (rr) => [
            //     rr.fields( "age", { key: "email_addresses", as: "list", type: "ol" } )
            //   ] ),
            //   a.legend( "Roles" ),
            //   r.many( "roles", (rr) => [
            //     // x.appkit.put( rr.$data ),
            //     rr.items( ( rri, i ) => [
            //       a.strong( "Role " + i ),
            //       rri.fields( "title", {
            //         dependent: { name: "roles[][title]" },
            //         key: "appointed",
            //         type: "date",
            //         stringify: "toLocaleDateString"
            //       } ),
            //     ] ),
            //   ] ),
            //
            //   a.legend( "Media" ),
            //   r.fields(
            //     { key: "icon", as: "media" },
            //     { key: "avatar", as: "media" },
            //     { key: "video", as: "media", type: "video" },
            //     { key: "audio", as: "media", type: "audio" },
            //   ),
            //   x.appkit.put( data ),
            //   a.h5(id),
            //   a.label( "First name:" ), '',
            //   r.text( { key: "first_name", value: data.first_name } ),
            //   a.br,
            //   a.label( "Age:" ), '',
            //   r.text( { key: "age", value: data.age, type: "number" } ),
            //   a.br,
            //   a.label( "Joined:" ), '',
            //   r.text( {
            //     key: "joined",
            //     value: data.joined,
            //     type: "date",
            //     stringify: {
            //       method: "toLocaleDateString",
            //       // arguments: [
            //       //   { year: 'numeric',
            //       //     month : 'numeric',
            //       //     day : '2-digit' }
            //       // ],
            //     }
            //   } ),
            //   r.object( { value: data } ),
            //
            //   r.check( { value: "on", label: "Accepted?" } ),
            //
            //   r.list( { value: [ "apple", "banana", "lemon" ] } ),
            //   r.list( { value: [ "apple", "banana", "lemon" ], type: "ol" } ),
            //   r.list( { value: [ "apple", "banana", "lemon" ], type: "div", item: ( item ) => a.p( a.a( item, { href: item } ) ) } ),
            //
            //   r.checkboxes( { value: [ "apple", "banana", "lemon" ], collection: [ "pear", "apple", "kiwi", "banana", "lemon", "orange" ] } ),
            //   r.radios( { value: "apple", collection: [ "pear", "apple", "kiwi", "banana", "lemon", "orange" ] } ),
            //
            // ], { data: data } )
            }
          } )
        } ),
      ] },
    } ),

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

*/
