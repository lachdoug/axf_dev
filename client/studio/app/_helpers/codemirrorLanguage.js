app.codemirrorLanguage = function ( mode ) {

  let map = {
    shell: 'sh',
  }

  return map[mode] || mode

}
