app.system.applications.installation = (controller) =>  {

  const name = controller.params.name

  return (a,x) => a['app-system-application']( [

    a.h3( name ),
    a.h5( 'Installation report' ),

    app.http(
      `/~/~/containers/engine/${ name }/build_report`,
      ( response, el ) => {
        response.json().then( result => el.$nodes = a.pre( result ) )
      },
      {
        // placeholder: "Loading",
      }
    ),

  ] )

}
