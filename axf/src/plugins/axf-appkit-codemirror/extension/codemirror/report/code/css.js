ax.extension.appkit.document.css["appkit-report-codemirror-code"](
  {
    display: "block",
    border: "1px solid #b3b3b3",
    'appkit-report-codemirror-code-toolbar': {
      display: "block",
      overflow: "auto",
      backgroundColor: "white",
      borderBottom: "1px solid #e6e6e6",
      button: {
        fontSize: "1.2em",
        border: "none",
        backgroundColor: "transparent",
        cursor: "pointer"
      },
      select: {
        padding: "2px",
        border: "none",
        backgroundColor: "transparent",
      }
    },
    'appkit-report-codemirror-code-mode': {
      'select': {
        padding: "4px",
      },
      'label': {
        margin: "2px 5px",
      }
    },
    'appkit-report-codemirror-code-toolbar-right': {
      float: "right",
    },
    '&.fullscreen': {
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      border: "none",
      borderRadius: "0px",
      zIndex: "999",
    },
    'appkit-report-codemirror-code-editor': {
      'div.CodeMirror': {
        border: "unset",
      }
    },



  }
)
