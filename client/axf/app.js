let people = {
  0: {
    about: 'I am **Lachlan**.',
    js: 'let a = 1;',
    pets: [ 'cat', 'dog' ],
    car: 'Holden',
    color: 'red',
    sports: [ 'golf', 'cricket' ],
  },
  1: {
    about: 'I am **Lachlan**.',
    js: 'let a = 1;',
    pets: [ 'cat', 'dog' ],
    car: 'Holden',
    color: 'red',
    sports: [ 'golf', 'cricket' ],
  }
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
  x.list( people[controller.params.person_id] ),
]

app.people.form = ( controller, object ) => (a,x) => app.form( {
  object: object,
  form: f => [
    f.field( {
      key: 'about',
      as: 'markdown',
    } ),
    f.field( {
      key: 'js',
      as: 'code',
      code: {
        mode: 'javascript',
      },
    } ),
    f.field( {
      key: 'pets',
      as: 'multiselect',
      selections: {
        'cat': 'Cat',
        'dog': 'Dog',
        'fish': 'Fish',
        'bird': 'Bird',
      },
    } ),
    f.field( {
      key: 'car',
      as: 'select',
      selections: [ 'Ford', 'Holden' ],
    } ),
    f.field( {
      key: 'car',
      as: 'select',
      selections: [ 'Ford', 'Holden' ],
    } ),
    f.field( {
      key: 'color',
      as: 'radios',
      placeholder: 'None',
      selections: {
        'red': 'Red',
        'blue': 'Blue',
      }
    } ),
    f.field( {
      key: 'sports',
      as: 'checks',
      selections: {
        'golf': 'Golf',
        'rugby': 'Rugby',
        'cricket': 'Cricket',
      }
    } ),
    f.cancel( { onclick: () => controller.open( '..' )  } ),
    a['div.float-right']( f.submit() ),
  ]
} )

app.people.edit = controller => (a,x) => [
  a.h5( `Edit person ${ controller.params.person_id }`),
  app.people.form( controller, people[controller.params.person_id] )
]
