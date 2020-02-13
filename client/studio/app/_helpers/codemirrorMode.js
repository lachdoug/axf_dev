app.codemirrorMode = function ( language ) {

  let map = {
    sh: 'shell',
  }

  return map[language] || language

}
