app.views.new = ( parent, path ) => (controller) => (a,x) => [

  a.h5( 'New view' ),

  app.view.designer( controller, `/~/${ path }/views`, {} )

]
