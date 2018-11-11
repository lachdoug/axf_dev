App.prototype.css = function() {

  var a = this.a;
  var x = this.x;

  ax.document.css(
    {
      body: {
        // background: "#48d",
        marginBottom: "100px",
        overflowY: "scroll"
      },
      '.page': {
        fontSize: "18px",
        boxShadow: "0px 0px 10px #666",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
        maxWidth: "1600px",
        backgroundColor: "#FFF",
        padding: "20px",
      },
      nav: {
        color: "#48D",
        borderBottom: "1px solid #bbb",
        '.brand': {
          button: {
            fontSize: "inherit",
            // { buttonAttributes: { style: "padding: 2px 5px; font-size: inherit;" } }
           },
          axtext: {
            // margin: "5px",
            fontWeight: "bold",
            fontSize: "56px",
            lineHeight: "0.5",
            // textAlign: "center",
            // display: "inline-block",
            // width: "74px",
          },
          subtext: {
            // display: "inline-block",
          }
        },
        ".brand:hover button": {
          // border: "1px solid #fff",
          img: { filter: "grayscale(100%)" }
        },
        button: {
          // border: "1px solid #fff",
        },
        // indicator: {
        //   borderBottom: "3px solid #bbb",
        //   display: "block"
        // }
      },
      // views: {
      //   display: "block",
      //   margin: "20px"
      // },
      '.footer': {
        borderTop: "1px solid #eee",
        fontSize: "16px",
        paddingTop: "20px",
        marginTop: "20px"
      },
      // "codemirror .CodeMirror": {
      //   minHeight: "0px",
      // //   // border: "none",
      // //   borderRadius: "4px",
      // //   padding: "0px",
      // //   fontFamily: "monospace",
      // },
      // "codemirror .CodeMirror-scroll": {
      // //   height: "auto",
      // //   overflowY: "hidden",
      // //   overflowX: "auto",
      //   minHeight: "0px",
      // },
      // "codemirror.fullscreen .CodeMirror-scroll": {
      //   height: "inherit",
      // },
      // coderunner: {
        // "codemirror .CodeMirror": {
        //   minHeight: "0px",
        // },
        // "codemirror .CodeMirror-scroll": {
        //   minHeight: "0px",
        // },
        // output: {
        //   display: "none",
        //   border: "1px solid #bbb",
        //   borderRadius: "4px",
        //   marginBottom: "1rem",
        //   overflow: "hidden",
        //   iframe: {
        //     height: "0px",
        //     width: "100%",
        //     border: "none",
        //   },
        //   "codemirror .CodeMirror": {
        //     border: "none",
        //   },
        // },
        // outputbuttons: {
        //   button: {
        //     minWidth: "60px",
        //   },
        //   "button.active": {
        //     boxShadow: "inset 0px 1px 5px rgba(0, 0, 0, 0.25)",
        //   }
        // },
        // "field codemirror editor": {
        //   height: "inherit",
        //   // maxHeight: "500px",
        //   // overflow: "hidden"
        // },
      // },

      appbtn: {
        button: {
          color: "#48d",
          background: "none",
          border: "1px solid transparent",
          fontSize: "1.2em",
          padding: "10px 16px",
          cursor: "pointer",
        },
        "button:hover": {
          color: "#666"
        },
        "button:active": {
          boxShadow: "inset 0px 1px 5px rgba(0, 0, 0, 0.25)",
        },
      },


      // field: {
      //   button: {
      //     fontSize: "inherit"
      //   },
      //   "button:active" : {
      //     boxShadow: "none",
      //   }
      // },
      hr: {
        border: "none",
        borderTop: "1px solid #bbb"
      },

      '.detail-box': {
        color: "#383d41",
        backgroundColor: "#e2e3e5",
        borderColor: "#d6d8db",
        display: "block",
        padding: ".75rem 1.25rem",
        marginBottom: "1rem",
        border: "1px solid transparent",
        borderTopColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "transparent",
        borderLeftColor: "transparent",
        borderRadius: ".25rem"
      },


    },

  )
};


// ax( (a,x) =>
//   x.form( (f) => [
//   ], { attributes: {  } } )
// );
//



//
//
// ax( (a,x) => x.css(`
// page {
//   font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
//   color: #333;
//
// }
//
// button {
//   cursor: pointer;
// }
//
// field wrapper {
//   display: block;
//   margin-bottom: 20px;
// }
//
// field label {
//   font-weight: 600;
// }
//
// field help helpbutton {
//   float: right;
//   padding: 0px 10px;
//   cursor: pointer;
// }
//
// field help helptext {
//   font-size: 0.8em;
//   color: #666;
//   padding: 0px 10px 10px; 10px;
//   display: block;
//   clear: both;
// }
//
// field input, field select, field textarea {
//   box-sizing: border-box;
//   padding: 5px;
//   // font-size: 24px;
//   width: 100%;
//   margin: 0px;
// }
//
//
//
// field radiobuttons radiobutton, field checkboxes checkbox {
//   display: block;
//   margin-top: 5px;
// }
//
// field radiobuttons radiobutton label, field checkboxes checkbox label {
//   font-weight: normal;
//   vertical-align: top;
// }
//
// field input[type="color"] {
//   height: 49px;
//   width: 49px;
// }
//
// field input[type="checkbox"], field input[type="radio"] {
//   width: inherit;
//   margin-right: 5px;
// }
//
// field hint {
//   color: #333;
//   font-size: 0.8em;
//   font-style: italic;
// }
//
// field textarea {
//   resize: vertical;
// }
//
// field multiselect selecteditems {
//   display: block;
//   margin-top: -1px;
//   border: 1px solid #999;
//   border-top: none;
//   border-bottom-left-radius: 4px;
//   border-bottom-right-radius: 4px;
//   overflow: hidden;
//   background-color: white;
// }
//
// field multiselect selecteditems selecteditem {
//   padding: 5px;
//   display: block;
// }
//
// field multiselect selecteditems selecteditem noneselectedmessage {
//   font-style: italic;
//   color: #666;
// }
//
//
//
// field multiselect selecteditems selecteditem:hover {
//   background-color: #eee;
// }
//
// field multiselect selecteditems selecteditem itemremovebutton {
//   float: right;
// }
//
// field multiselect selecteditems selecteditem itemremovebutton button {
//   color: #999;
//   padding: 0px 5px;
//   border: none;
//   background: transparent;
// }
//
// field multiselect selecteditems selecteditem itemremovebutton button:hover {
//   color: #666;
// }
//
// field codemirror {
//   border-radius: 4px;
//   // overflow: hidden;
//   display: block;
//   border: 1px solid #bbb;
// }
//
// field codemirror editor {
//   height: 200px;
//   display: block;
//   font-size: 16px;
// }
//
// field codemirror toolbar {
//   background-color: #f6f6f6;
//   border-bottom: 1px solid #ddd;
//   display: block;
//   overflow: hidden;
//   cursor: pointer;
// }
//
// field codemirror toolbar button {
//   float: right;
//   border: none;
//   margin: 2px;
//   background: none;
//   padding: 5px 10px;
//   color: #999;
// }
//
// field codemirror toolbar:hover button {
//   color: #666;
// }
//
// field codemirror toolbar mode {
//   display: inline-block;
//   margin: 2px;
//   padding: 5px 10px;
//   color: #999;
//   font-size: 0.8em;
// }
//
// /* This fixed conflicts when SimpleMDE and CodeMirror css
//    files are loaded on the same page. (SimpleMDE uses CodeMirror.) */
// field codemirror editor .CodeMirror {
//   min-height: 0px;
//   border: none;
//   border-radius: 0px;
//   padding: 0px;
//   font-family: monospace;
// }
//
// field simplemde {
//   border: 1px solid #bbb;
// }
//
// field simplemde .CodeMirror {
//   border: 1px solid #bbb;
//   border-top: 1px solid #ddd;
//   border-bottom: 1px solid #ddd;
//
//   border-bottom-left-radius: 0px;
//   border-bottom-right-radius: 0px;
//   min-height: 0px;
//   height: 200px;
// }
//
// field simplemde .editor-toolbar {
//   background-color: #f6f6f6;
//   opacity: 1;
//   border-top: 1px solid #bbb;
//   border-left: 1px solid #bbb;
//   border-right: 1px solid #bbb;
// }
//
// field simplemde .editor-toolbar a {
//   color: #999 !important;
//   border: none;
//   margin-right: 1px;
// }
//
// field simplemde .editor-toolbar:hover {
//   opacity: 1;
// }
//
// field simplemde .editor-toolbar a:hover {
//   background: inherit;
//   color: #666 !important;
// }
//
// field simplemde .editor-statusbar {
//   background-color: #f6f6f6;
//   color: #999;
//   border: 1px solid #bbb;
//   border-bottom-left-radius: 4px;
//   border-bottom-right-radius: 4px;
//   border-top: none;
//   padding: 3px 6px;
// }
// ` ),
//   { style: "display: none;" }
// );
