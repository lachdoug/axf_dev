let people = {
  0: {
    name: {
      first: 'Fred',
      last: 'Smith'
    },
    about: 'I am **Fred**.\n\nOK.',
    js: 'let a = 1;',
    pets: [ 'cat', 'dog', 'fish', 'bird' ],
    car: 'Holden',
    color: 'red',
    sports: [ 'golf', 'cricket' ],
    json: '{ "name": "Fred", "age": 40 }',
    active: true,
    date: 22222222,
    email: 'lachdoug@gmail.com',
    url: 'https://google.com',
    tel: '+61295608667',
    jobs: [
      { title: 'CEO', company: 'ABC Systems' },
      { title: 'CFO', company: 'XYZ Ltd' },
      { title: 'Manager', company: "HTTP 'r us" },
      { title: 'Head of Stuff', company: 'Actionica' },
    ]
  },
  1: {},
}

let app = (a,x) => a['div.container']( [

  x.router( {
    routes: {
      '/': app.home,
      '/people*': app.people,
      '/interface': app.interface
    },
    lazy: true,
    transition: 'crossfade',
    default: controller => [ 'You are lost.', controller ],
  } ),

  app.modal(),

] )

app.home = controller => (a,x) => [

  a.h1( 'Hello world!' ),
  x.button( {
    label: 'People',
    onclick: () => controller.open( 'people' )
  } ),
  a.hr,
]

app.people = controller => (a,x) => [
  a.h3( 'People' ),
  controller.routes( {
    '': app.people.index,
    '/new': app.people.new,
    '/:person_id': app.people.show,
    '/:person_id/edit': app.people.edit,
  } ),
]

app.people.index = controller => (a,x) => [
  a.h5( 'Index people' ),
  Object.keys( people ).map( id => [
    a.div( x.button( {
      label: `Person ${ id }`,
      onclick: () => controller.open( id )
    } ) )
  ] ),
]

app.people.show = controller => (a,x) => [
  a['div.float-right']( [
    x.button ( {
      label: 'Edit',
      onclick: () => controller.open( 'edit' )
    } ),
    x.button ( {
      label: 'Close',
      onclick: () => controller.open( '..' )
    } ),
  ] ),
  a.h5( `Show person ${ controller.params.person_id }`),
  // x.output( people[controller.params.person_id] ),
  app.report( {
    object: people[controller.params.person_id],
    report: r => [
      r.field( {
        key: 'name',
        as: 'one',
        report: rr => [
          rr.field( {
            key: 'first',
          } ),
          rr.field( {
            key: 'last',
          } ),
        ]
      } ),
      r.field( {
        key: 'jobs',
        as: 'table',
        report: rr => [
          rr.field( {
            key: 'title',
          } ),
          rr.field( {
            key: 'company',
            dependent: {
              key: 'title',
              value: 'CFO',
            }
          } ),
        ]
      } ),
      r.field( {
        key: 'name',
        layout: 'vertical',
        placeholder: 'mmmm',
        as: 'output',
      } ),
      r.field( {
        key: 'date',
        layout: 'vertical',
        placeholder: 'mmmm',
        as: 'datetime',
        datetime: {
          only: 'date',
        }
      } ),
      r.field( {
        key: 'date',
        layout: 'vertical',
        placeholder: 'mmmm',
        as: 'number',
      } ),
      r.field( {
        key: 'tel',
        layout: 'vertical',
        placeholder: 'mmmm',
        as: 'tel',
      } ),
      r.field( {
        key: 'url',
        layout: 'vertical',
        placeholder: 'mmmm',
        as: 'url',
      } ),
      r.field( {
        key: 'email',
        layout: 'vertical',
        placeholder: 'mmmm',
        as: 'email',
      } ),
      r.field( {
        key: 'dunno',
        layout: 'vertical',
        placeholder: 'mmmm',
        dependent: {
          key: 'name',
          layout: 'vertical',
          value: 'Fred',
        }
      } ),
      r.field( {
        key: 'password',
        layout: 'vertical',
        as: 'password',
      } ),

      r.field( {
        key: 'country',
        layout: 'vertical',
        as: 'country',
        placeholder: 'mmmm',
      } ),
      r.field( {
        key: 'timezone',
        layout: 'vertical',
        as: 'timezone',
        placeholder: 'mmmm',
      } ),
      r.field( {
        key: 'language',
        layout: 'vertical',
        as: 'language',
        placeholder: 'mmmm',
      } ),

      r.field( {
        key: 'about',
        layout: 'vertical',
        as: 'text',
        placeholder: 'mmmm',
      } ),
      r.field( {
        key: 'about',
        layout: 'vertical',
        as: 'preformatted',
        placeholder: 'mmmm',
      } ),
      r.field( {
        key: 'about',
        layout: 'vertical',
        as: 'markdown',
        placeholder: 'mmmm',
      } ),
      r.field( {
        key: 'js',
        layout: 'vertical',
        as: 'code',
        placeholder: 'mmmm',
        code: {
          mode: 'javascript',
        },
      } ),
      r.field( {
        key: 'active',
        layout: 'vertical',
        as: 'checkbox',
        placeholder: 'mmmm',
        checkbox: {
          label: 'Check for yes',
        },
      } ),
      r.field( {
        key: 'active',
        layout: 'vertical',
        as: 'boolean',
        placeholder: 'mmmm',
      } ),
      r.field( {
        key: 'pets',
        layout: 'vertical',
        as: 'checkboxes',
        placeholder: 'mmmm',
        selections: {
          'cat': 'Cat',
          'dog': 'Dog',
          'fish': 'Fish',
          'bird': 'Bird',
        },
      } ),
      r.field( {
        key: 'pets',
        layout: 'vertical',
        as: 'output',
        placeholder: 'mmmm',
      } ),
      r.field( {
        key: 'car',
        layout: 'vertical',
        as: 'select',
        placeholder: 'mmmm',
        selections: [ 'Ford', 'Holden' ],
      } ),
      r.field( {
        key: 'color',
        layout: 'vertical',
        as: 'color',
        placeholder: 'mmmm',
      } ),
      r.field( {
        key: 'color',
        layout: 'vertical',
        as: 'radios',
        placeholder: 'mmmm',
        selections: {
          'red': 'Red',
          'blue': 'Blue',
        }
      } ),
      r.field( {
        key: 'sports',
        layout: 'vertical',
        as: 'select',
        placeholder: 'mmmm',
        selections: {
          'golf': 'Golf',
          'rugby': 'Rugby',
          'cricket': 'Cricket',
        }
      } ),
      r.field( {
        key: 'json',
        layout: 'vertical',
        as: 'json',
        placeholder: 'mmmm',
        json: {
          parse: true
        }
      } ),
      r.field( {
        key: 'json',
        layout: 'vertical',
        as: 'output',
        placeholder: 'mmmm',
        output: {
          parse: true
        }
      } ),

    ]
  } ),
]

app.people.edit = controller => (a,x) => [
  a.h5( `Edit person ${ controller.params.person_id }`),
  app.form( {
    object: people[controller.params.person_id],
    form: f => [
      app.people.fields(f),
      f.cancel( { onclick: () => controller.open( '..' )  } ),
      a['div.float-right']( f.submit() ),
    ]
  } )
]

app.people.fields = f => [

  f.field( {
    key: 'jobs',
    as: 'table',
    static: true,
    form: ff => [
      ff.field( {
        key: 'title',
      } ),
      ff.field( {
        key: 'company',
        dependent: {
          key: 'title',
          value: 'CFO',
        }
      } ),
    ]
  } ),

  f.field( {
    key: 'name',
    layout: 'vertical',
    as: 'one',
    form: ff => [
      ff.field( {
        key: 'first',
      } ),
      ff.field( {
        key: 'last',
      } ),
    ],
  } ),
  f.field( {
    key: 'password',
    layout: 'vertical',
    as: 'password',
    placeholder: 'mmmm',
  } ),
  f.field( {
    key: 'about',
    layout: 'vertical',
    as: 'markdown',
    placeholder: 'mmmm',
  } ),
  f.field( {
    key: 'js',
    layout: 'vertical',
    as: 'code',
    placeholder: 'mmmm',
    code: {
      mode: 'javascript',
    },
  } ),
  f.field( {
    key: 'active',
    layout: 'vertical',
    as: 'checkbox',
    placeholder: 'mmmm',
    checkbox: {
      label: 'Check for yes',
    },
  } ),
  f.field( {
    key: 'pets',
    layout: 'vertical',
    as: 'checkboxes',
    placeholder: 'mmmm',
    selections: {
      'cat': 'Cat',
      'dog': 'Dog',
      'fish': 'Fish',
      'bird': 'Bird',
    },
  } ),
  f.field( {
    key: 'car',
    layout: 'vertical',
    as: 'select',
    placeholder: 'mmmm',
    selections: [ 'Ford', 'Holden' ],
    dependent: {
      key: 'pets',
      layout: 'vertical',
      pattern: '^(cat|dog)$'
    }
  } ),
  f.field( {
    key: 'color',
    layout: 'vertical',
    as: 'radios',
    selections: {
      '': 'None',
      'red': 'Red',
      'blue': 'Blue',
    }
  } ),
  f.field( {
    key: 'color',
    layout: 'vertical',
    as: 'input/color',
  } ),
  f.field( {
    key: 'sports',
    layout: 'vertical',
    as: 'checkboxes',
    placeholder: 'mmmm',
    selections: {
      'golf': 'Golf',
      'rugby': 'Rugby',
      'cricket': 'Cricket',
    }
  } ),
  f.field( {
    key: 'json',
    layout: 'vertical',
    as: 'json',
    placeholder: 'mmmm',
  } ),
]
