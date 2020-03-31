app.container.show.dialogues = ( type, controller, container ) => {

  if( container.status.state === 'running' ) {

    let path = `/~/~/containers/${
      container.type === 'service' ? 'service' : 'engine'
    }/${ container.name }/${
      container.type === 'service' ? 'service_definition' : 'blueprint'
    }`

    return app.http(
      path,
      ( blueprint, el ) => {

        let dialogues = blueprint.dialogues || ( container.name === 'uadmin' ? uadminBlueprint.software.dialogues : [] ) || []
        let main = dialogues.find( dialogue => dialogue.name === 'main' )

        el.$nodes = (a,x) => [
          a.hr,
          a.div( app.dialogue.builder( main.components ), {
            $on: {
              'app-container-dialogue-navigation': (e,el) => {
                let dialogueName = e.detail.dialogue
                let params = e.detail.params || {}
                let dialogue = dialogues.find( dialogue => dialogue.name === dialogueName )
                if( dialogue ) {
                  el.$nodes = [
                    app.collapse( {
                      label: app.icon( 'fas fa-info' ),
                      body: [
                        'params', params,
                        'dialogue', dialogue,
                      ]
                    } ),
                    a.hr,
                    app.container.dialogues.params( type, controller, container, blueprint, params, dialogue )
                  ]
                } else {
                  el.$nodes = [
                    a['.error']( app.icon(
                      'fas fa-exclamation-triangle',
                      dialogueName ?
                      `Dialogue '${ dialogueName }' is not defined.`:
                      `Dialogue is not defined.`
                    ) ),
                    a.p(
                      app.button( {
                        label: app.icon( 'fa fa-check', 'OK' ),
                        onclick: () => el.$nodes = app.dialogue.builder( main.components ),
                      } ),
                    ),
                  ]
                }
              },
            },
          } )
        ]

      }

    )

  } else {

    return null

  }

}
