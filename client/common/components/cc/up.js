cc.up = ( controller, title='Return', path='..' ) => cc.button( {
  // id: 'up',
  label: cc.icon( 'fa fa-arrow-up' ),
  onclick: (e,el) => {
    controller.open( path )
  },
  title: title,
} )
