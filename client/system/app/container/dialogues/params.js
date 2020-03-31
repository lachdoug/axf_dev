app.container.dialogues.params = ( type, controller, container, blueprint, params, dialogue, index=0 ) => {

  // let dialogues = container.dialogues ||
  //                 app.container.dialogues.uadmin.dialogues || {}
  //
  // let dialogue = dialogues[name]

  let path = `/~/~/containers/${
    container.type === 'service' ? 'service' : 'engine'
  }/${ container.name }`

  let dialogueParams = dialogue.parameters || []
  let length = dialogueParams.length

  if ( index === length ) {
    return app.container.dialogues.components( type, controller, container, params, dialogue )
  } else {
    let dialogueParam =  dialogueParams[index]

    if ( dialogueParam.method === 'action' ) {

      let actionName = dialogueParam.action

      return app.http(
        `${ path }/action/${ actionName }`,
        ( result, el ) => {
          params = { ...params, ...result }
          el.$nodes = app.container.dialogues.params( type, controller, container, blueprint, params, dialogue, index + 1 )
        },
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify( { api_vars: params } ),
          placeholder: app.hourglass( `Loading dialogue step ${ index + 1 } of ${ length }` ),
        }
      )

    } else if ( dialogueParam.method === 'resolve' ) {

      let resolve = dialogueParam.resolve
// debugger
// containers/service/#{@name}/template

      return app.http(
        `${ path }/template`,
        ( result, el ) => {
          // let params = { ...params, ...result }
          el.$nodes = result
        },
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify( { api_vars: { template_string: resolve } } ),
          placeholder: app.hourglass( `Loading dialogue step ${ index + 1 } of ${ length }` ),
        }
      )


    }

  }

  //
  //
  //
  //  (a,x) => [
  //   dialogue,
  // ]

}

let invokeAction = ( type, controller, actionName, params ) => {

  const containerName = controller.params.name

  let path = `/~/~/containers/${
    type === 'service' ? 'service' : 'engine'
  }/${ containerName }`

}




//
// let newParams = dialogue.params
//
// let index = newParams.length
// let depth = 0
//
//
//
// .filter( param => param.action ).map( param => params.action )
//
// let component
// if ( dialogue ) {
// component = app.http(
//   ,
//   ( results, el ) => {
//
//
//
//
//   }
// ),
//
//
//
// app.dialogue.builder( dialogue.components, params )
