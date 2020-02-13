ax.css( {
  '|appkit-form-codemirror': {
    display: 'block',
    border: '1px solid #b3b3b3',
    '|appkit-form-codemirror-toolbar': {
      display: 'block',
      overflow: 'auto',
      backgroundColor: 'white',
      borderBottom: '1px solid #e6e6e6',
      button: {
        fontSize: '1.2em',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer'
      },
      select: {
        padding: '2px',
        border: 'none',
        backgroundColor: 'transparent',
      }
    },
    '|appkit-form-codemirror-mode, |appkit-form-codemirror-keymap': {
      // display: 'inline-block',
      // border: '1px solid #e6e6e6',
      'select': {
        padding: '4px',
      },
      'label': {
        margin: '2px 10px',
      }
    },
    '|appkit-form-codemirror-toolbar-right': {
      float: 'right',
    },
    '&.fullscreen': {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      border: 'none',
      borderRadius: '0px',
      zIndex: 999,
    },
    '|appkit-form-codemirror-editor': {
      'div.CodeMirror': {
        minHeight: '2em',
        border: 'unset',
        borderRadius: 'unset',
        padding: 'unset',
        fontFamily: 'monospace',
        zIndex: 1,
        'div.CodeMirror-scroll': {
          minHeight: 'unset',
        }
      }
    },
  }
} )
