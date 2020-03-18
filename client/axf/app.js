let people = {
  0: {
    name: 'Fred',
    about: 'I am **Fred**.\n\nOK.',
    js: 'let a = 1;',
    pets: [ 'cat', 'dog', 'fish', 'bird', 'animal1', 'animal2', 'animal3', 'animal4', 'animal5', 'animal6', 'animal7', 'animal8' ],
    car: 'Holden',
    color: 'red',
    sports: [ 'golf', 'cricket' ],
    json: '{ "name": "Fred", "age": 40 }',
    active: true,
    date: 22222222,
    email: 'lachdoug@gmail.com',
    url: 'https://google.com',
    tel: '+61295608667',
  },
  1: {
    name: 'Jack',
    about: 'I am **Jack**.',
    js: 'let a = 1;',
    pets: [ 'cat', 'dog' ],
    car: 'Holden',
    color: 'red',
    sports: [ 'golf', 'cricket' ],
    active: false,
  },
  2: {},
}

let app = (a,x) => a['div.container']( [

  a.h1( 'Hello world!' ),

  x.router( {
    routes: {
      '/': app.home,
      '/people*': app.people,
    },
    lazy: true,
    transition: 'crossfade',
    default: controller => [ 'You are lost.', controller ],
  } ),

] )

app.home = controller => (a,x) => [
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
        placeholder: 'mmmm',
      } ),
      r.field( {
        key: 'name',
        placeholder: 'mmmm',
        as: 'output',
      } ),
      r.field( {
        key: 'date',
        placeholder: 'mmmm',
        as: 'datetime',
        datetime: {
          only: 'date',
        }
      } ),
      r.field( {
        key: 'date',
        placeholder: 'mmmm',
        as: 'number',
      } ),
      r.field( {
        key: 'tel',
        placeholder: 'mmmm',
        as: 'tel',
      } ),
      r.field( {
        key: 'url',
        placeholder: 'mmmm',
        as: 'url',
      } ),
      r.field( {
        key: 'email',
        placeholder: 'mmmm',
        as: 'email',
      } ),
      r.field( {
        key: 'dunno',
        placeholder: 'mmmm',
        dependent: {
          key: 'name',
          value: 'Fred',
        }
      } ),
      r.field( {
        key: 'name',
        as: 'password',
        placeholder: 'mmmm',
      } ),

      r.field( {
        key: 'country',
        as: 'country',
        placeholder: 'mmmm',
      } ),
      r.field( {
        key: 'timezone',
        as: 'timezone',
        placeholder: 'mmmm',
      } ),
      r.field( {
        key: 'language',
        as: 'language',
        placeholder: 'mmmm',
      } ),

      r.field( {
        key: 'about',
        as: 'text',
        placeholder: 'mmmm',
      } ),
      r.field( {
        key: 'about',
        as: 'preformatted',
        placeholder: 'mmmm',
      } ),
      r.field( {
        key: 'about',
        as: 'markdown',
        placeholder: 'mmmm',
      } ),
      r.field( {
        key: 'js',
        as: 'code',
        placeholder: 'mmmm',
        code: {
          mode: 'javascript',
        },
      } ),
      r.field( {
        key: 'active',
        as: 'checkbox',
        placeholder: 'mmmm',
        checkbox: {
          label: 'Check for yes',
        },
      } ),
      r.field( {
        key: 'active',
        as: 'boolean',
        placeholder: 'mmmm',
      } ),
      r.field( {
        key: 'pets',
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
        as: 'output',
        placeholder: 'mmmm',
      } ),
      r.field( {
        key: 'car',
        as: 'select',
        placeholder: 'mmmm',
        selections: [ 'Ford', 'Holden' ],
      } ),
      r.field( {
        key: 'color',
        as: 'color',
        placeholder: 'mmmm',
      } ),
      r.field( {
        key: 'color',
        as: 'radios',
        placeholder: 'mmmm',
        selections: {
          'red': 'Red',
          'blue': 'Blue',
        }
      } ),
      r.field( {
        key: 'sports',
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
        as: 'json',
        placeholder: 'mmmm',
        json: {
          parse: true
        }
      } ),
      r.field( {
        key: 'json',
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
    key: 'name',
    layout: 'vertical',
    placeholder: 'mmmm',
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
