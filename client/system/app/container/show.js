app.container.show = ( type, controller, container ) => [
  app.container.show.state( container ),
  app.container.show.instructions( controller, container ),
  app.container.show.websites( container ),
  app.container.show.metrics( container ),
  app.container.show.dialogues( type, controller, container ),
]
