app.settings = controller => (a,x) => [

  a.h3( 'App settings' ),

  app.form( {
    object: {
      theme: window.localStorage.cssTheme,
      editor_keymap: window.localStorage.editorKeymap,
    },
    form: f => [
      f.field( {
        key: 'theme',
        as: 'select',
        placeholder: 'Default',
        selections: {
          'app-theme-mark': 'Mark',
          'app-theme-lachlan': 'Lachlan',
        },
      } ),
      f.field( {
        key: 'editor_keymap',
        as: 'select',
        placeholder: 'None',
        selections: {
          vim: 'Vim',
          emacs: 'Emacs',
          sublime: 'Sublime',
        },
      } ),
      f.btns( controller ),
    ],
    action: submition => {
      window.localStorage.cssTheme = submition.data.theme
      window.localStorage.editorKeymap = submition.data.editor_keymap
      location.assign( '/' )
    }
  } ),


  // app.http(
  //   '/~/settings',
  //   ( settings, el ) => el.$nodes = [
  //
  //     a.h3( 'Settings' ),
  //
  //     a['div.clearfix']( a['div.btn-group.float-right']( [
  //       app.up( controller, 'Return to home' ),
  //     ] ) ),
  //
  //     a['div.input-group']( [
  //       a['div.input-group-prepend'](
  //         a['div.input-group-text']( 'SSH public key' )
  //       ),
  //       a.input( null, {
  //         name: 'public_key',
  //         value: settings.public_key,
  //         class: 'form-control',
  //       } ),
  //       a['div.input-group-append'](
  //         app.button( {
  //           label: app.icon( 'fa fa-copy' ),
  //           class: 'btn btn-primary',
  //           title: 'Copy to clipboard',
  //           onclick: (e,el) => {
  //             let keyText = el.$('^.input-group [name="public_key"]')
  //             keyText.focus(),
  //             keyText.select(),
  //             document.execCommand('copy')
  //           },
  //         } )
  //       ),
  //     ] ),
  //
  //   ]
  // )
]
