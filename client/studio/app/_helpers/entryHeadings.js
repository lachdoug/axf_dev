// app.entryHeadings = (path) => (a,x) => app.http(
//   `/~/${ path }`,
//   ( response, el ) => {
//     response.json().then( entry => el.$nodes = [
//       a.h3( entry.name ),
//       a.h5( [ entry.branch, a.small( entry.remote ) ] ),
//     ] )
//   },
//   {
//     placeholder: a.p(
//       app.icon( 'fa fa-spinner fa-spin', 'Loading entry' )
//     )
//   }
// )
