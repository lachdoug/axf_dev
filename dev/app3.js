let app3 = (a,x) => a( {
  $state: 1,
  // $update: () => { debugger },
  $text: (el,state) => `Number ${ state }`,
  $on: { click: (e,el) => el.$state++ }
} )
