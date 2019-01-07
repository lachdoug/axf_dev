ax.extension.appkit.document.css(
  {
    body: {
      margin: "5px",
      fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;",
    },
    'app-coderunner': {
      iframe: {
        width: "100%",
        height: "1000px",
        border: "1px solid #ccc",
      }
    },
    'app-navbar': {
      display: "block",
      marginBottom: "5px",
      // backgroundColor: "#eee",
      ".btn": {
        borderRadius: "0px",
        border: "1px solid transparent",
        "&.active": {
          borderBottom: "1px solid #48D",
        }
      },
      // '.label': { verticalAlign: "middle" }
    },
    ".navigator": {
      select: {
        textAlign: "center",
        borderRadius: "0px",
        border: "1px solid #007bff",
        borderLeft: "none",
        borderRight: "none",
        backgroundColor: "transparent",
      },
    }
  }
  // {
  //   ".CodeMirror": {
  //     borderColor: "#b3b3b3",
  //     borderTop: "1px solid #ccc",
  //     borderBottomLeftRadius: 0,
  //     borderBottomRightRadius: 0,
  //     minHeight: "unset",
  //   },
  //   ".CodeMirror-scroll": {
  //     minHeight: "unset",
  //   },
  //   ".editor-toolbar": {
  //     border: "1px solid #b3b3b3",
  //     borderBottom: "none",
  //     borderTopLeftRadius: 0,
  //     borderTopRightRadius: 0,
  //     opacity: 1,
  //   },
  // }
)
