app.views.new = ( parent, path ) => controller => (a,x) => [

  a.h5( 'New view' ),

  app.dialogue.designer(
    controller,
    `/~/${ path }/views`,
    {},
    view => controller.open( `../${ view.name }` )
  )

]
